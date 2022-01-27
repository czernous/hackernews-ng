# HackernewsNg

This app fetches data from Hacker News API and displays 10 random stories.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Implementation details

https://hacker-news.firebaseio.com/v0/topstories.json -> returns a list of story IDs

https://hacker-news.firebaseio.com/v0/item/:id.json -> returns a story with specified ID

https://hacker-news.firebaseio.com/v0/user/:id.json -> returns a user with specified ID

1. Get an array of IDs from topstories endpoint

2. Get 10 random story IDs and execute one API call per story (ID)

3. Wait for response and make a call to author ID endpoint

4. Get author's karma and add to a new object(modified Story)

5. Get random image and add to Story object

6. Generate Story cards and display them on the main page
