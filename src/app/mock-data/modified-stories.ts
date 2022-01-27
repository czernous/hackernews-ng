import { ModifiedStory } from '../interfaces/modified-story';

export const mockStories: ModifiedStory[] = [
  {
    authorDetails: {
      created: 111111,
      id: 'pseudolus',
      karma: 999,
      submitted: [1111, 111, 111],
    },
    featuredImage: '/111.jpg',
    by: 'pseudolus',
    descendants: 152,
    id: 30070425,
    kids: [30071475],
    score: 368,
    time: 1643107915,
    title: 'Nvidia prepares to abandon takeover of Arm',
    type: 'story',
    url: 'https://www.bloomberg.com/news/articles/2022-01-25/nvidia-is-said-to-quietly-prepare-to-abandon-takeover-of-arm',
  },
  {
    authorDetails: {
      created: 222,
      id: 'sdht0',
      karma: 999,
      submitted: [22, 222, 22],
    },
    featuredImage: '/111.jpg',
    by: 'sdht0',
    descendants: 1,
    id: 30070435,
    kids: [30071838],
    score: 20,
    time: 1643108022,
    title: 'Infinite Series Reveal the Unity of Mathematics',
    type: 'story',
    url: 'https://www.quantamagazine.org/how-infinite-series-reveal-the-unity-of-mathematics-20220124/',
  },
];
