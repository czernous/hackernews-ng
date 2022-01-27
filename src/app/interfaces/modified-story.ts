import { Story } from './story';
import { User } from './user';

export interface ModifiedStory extends Story {
  authorDetails: User;
  featuredImage: string;
}
