import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Story } from '../interfaces/story';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class StoriesService extends ApiService<Story> {
  endpoint = `${environment.api}`;
}
