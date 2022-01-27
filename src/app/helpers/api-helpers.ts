import { catchError, forkJoin, map, Observable, of, zip } from 'rxjs';
import { ModifiedStory } from '../interfaces/modified-story';
import { Story } from '../interfaces/story';
import { User } from '../interfaces/user';

export const fetchBulkEntities = (idArr: any[], service: any, endpoint: string) => {
  let forkJoinArr: Observable<any>[] = [];
  for (let i = 0, x = null; i < idArr.length; i++) {
    x = service.getOne(idArr[i], endpoint);
    forkJoinArr.push(x);
  }
  return forkJoin(forkJoinArr).pipe(
    catchError((err) => {
      console.warn(err.message);
      return of([]);
    }),
    map((item) => item),
  );
};

export const getModifiedStories = (
  imageArr: string[],
  stories: Story[],
  users: Observable<User>[],
) =>
  zip(of(stories), users).pipe(
    map((data: [Story[], Observable<User>]) => {
      const userArr = data[1] as unknown as User[];
      const modifiedStory: ModifiedStory[] = data[0].map((el, idx) => {
        // randomize indices in array
        let arrLength = imageArr.length;
        let randomIdx = Math.floor(Math.random() * arrLength);
        const obj: ModifiedStory = {
          ...el,
          authorDetails: userArr[idx],
          featuredImage: imageArr[randomIdx],
        };
        imageArr.splice(randomIdx, 1);
        arrLength--;
        return obj;
      });
      return modifiedStory;
    }),
  );
