import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends ApiService<User> {
  endpoint = `${environment.api}`;
}
