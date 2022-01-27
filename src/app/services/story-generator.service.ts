import { Injectable } from '@angular/core';
import { catchError, Observable, of, retry, switchMap, tap } from 'rxjs';
import { fetchBulkEntities, getModifiedStories } from '../helpers/api-helpers';
import { getRandomItems } from '../helpers/data-helpers';
import { ModifiedStory } from '../interfaces/modified-story';
import { Story } from '../interfaces/story';
import { User } from '../interfaces/user';
import { StoriesService } from './stories.service';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class StoryGeneratorService {
  private storyIds: number[] = [];

  private featureImages = [
    'assets/img/image-1.jpg',
    'assets/img/image-2.jpg',
    'assets/img/image-3.jpg',
    'assets/img/image-4.jpg',
    'assets/img/image-5.jpg',
    'assets/img/image-6.jpg',
    'assets/img/image-7.jpg',
    'assets/img/image-8.jpg',
    'assets/img/image-9.jpg',
    'assets/img/image-10.jpg',
  ];

  constructor(private storiesService: StoriesService, private usersService: UsersService) {}

  generateRandomStories(): Observable<ModifiedStory[]> {
    return this.storiesService
      .getAll('topstories')
      .pipe(
        switchMap((items) => {
          this.storyIds = items as unknown as number[];
          // get 10 random Ids
          this.storyIds = getRandomItems(this.storyIds, 10);
          // get posts by Ids
          return fetchBulkEntities(this.storyIds, this.storiesService, 'item');
        }),
        retry(3),
        catchError((err) => {
          console.warn(err.message);
          return of([]);
        }),
        switchMap((stories: Story[]) => {
          const authors: string[] = [];
          stories.forEach((s: Story) => authors.push(s.by));
          const users$ = fetchBulkEntities(
            authors,
            this.usersService,
            'user',
          ) as unknown as Observable<User>[];

          // bulk fetch authors
          return getModifiedStories(this.featureImages, stories, users$);
        }),
        retry(3),
        catchError((err) => {
          console.warn(err.message);
          return of([]);
        }),
      )
      .pipe(tap((result) => result.sort((a, b) => a.score - b.score)));
  }
}
