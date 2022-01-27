import { fakeAsync, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoryGeneratorService } from './story-generator.service';
import { StoriesService } from './stories.service';
import { UsersService } from './users.service';
import { of } from 'rxjs';
import { mockStories } from '../mock-data/modified-stories';

describe('StoryGeneratorService', () => {
  let service: StoryGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StoriesService, UsersService],
    });
    service = TestBed.inject(StoryGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call generateRandomStories and return an array of ModifiedStories', fakeAsync(() => {
    spyOn(service, 'generateRandomStories').and.returnValue(of(mockStories));

    service.generateRandomStories().subscribe((result) => {
      expect(result).toEqual(mockStories);
    });
  }));
});
