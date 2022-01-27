import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { mockStories } from 'src/app/mock-data/modified-stories';

import { StoryGeneratorService } from 'src/app/services/story-generator.service';

import { StoriesComponent } from './stories.component';

describe('StoriesComponent', () => {
  let component: StoriesComponent;
  let fixture: ComponentFixture<StoriesComponent>;
  let mockStoryGeneratorService: StoryGeneratorService;

  beforeEach(async () => {
    mockStoryGeneratorService = jasmine.createSpyObj<StoryGeneratorService>(
      'StoryGeneratorService',
      { generateRandomStories: of(mockStories) },
    );

    await TestBed.configureTestingModule({
      declarations: [StoriesComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: StoryGeneratorService, useValue: mockStoryGeneratorService }],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should call generateRandomStories', () => {
    expect(mockStoryGeneratorService.generateRandomStories).toHaveBeenCalled();
  });

  it('should return an observable of stories$', () => {
    expect(component.stories$).not.toBeNull();
  });

  it('should call generateRandomStories and return stories$', () => {
    expect(mockStoryGeneratorService.generateRandomStories()).toEqual(component.stories$);
  });
});
