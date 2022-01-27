import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModifiedStory } from 'src/app/interfaces/modified-story';
import { StoryGeneratorService } from 'src/app/services/story-generator.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent implements OnInit {
  stories$!: Observable<ModifiedStory[]>;

  constructor(private storyGeneratorService: StoryGeneratorService) {}

  ngOnInit(): void {
    this.stories$ = this.storyGeneratorService.generateRandomStories();
  }
}
