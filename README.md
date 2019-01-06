# Brastlewark
Brastlewark is an application to help Gnomes through a simple UI and a comfortable UX.


## Getting Started


### Prerequisites

Brastlewark requires [Node.js](https://nodejs.org/) v6+ to run.


### Installing

Clone repository:
```sh
$  git clone https://github.com/alejeindrox/brastlewark.git brastlewark
$ cd brastlewark/
```
And install dependencies
```sh
$ npm install
```
Or using Yarn
```sh
$ yarn
```
And it's ready to work.


### Development Environment

Inside of the folder from project use:
```sh
$ npm start
```
Or using Yarn
```sh
$ yarn start
```
Open your browser and enter in https://localhost:3000/
You must use Redux extension in this environment.


### Production Environment

In the production enviroment use the command:
```sh
$ npm build
```
Or using Yarn
```sh
$ yarn build
```
And now it's already compiled for deployment.


## Pages

  - /
  - /favorites
  - /pendings
  - /recents
  - /profile/:gnomeId
  - /about
  - /*


### Pages Information

  - Home: Show all Gnomes with datatable in screen with sm resolution.
  - Favorites: Show Gnomes with status favorite.
  - Pendings: Show Gnomes with status pending.
  - Recents: Show Gnomes with status recent.
  - Profile: Show one Gnome Selected.
  - About: Show information about developer.
  - Error 404: Page not found.


## Resources

Brastlewark uses a number of open source projects to work properly:

* [React](https://reactjs.org) - A JavaScript library for building user interfaces.
* [Material UI](https://material-ui.com) - React Components that Implement Google's Material Design.
* [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js.
* [Redux](https://redux.js.org/) - Redux is a predictable state container for JavaScript apps.
* [react-lazyload](https://github.com/jasonslyvia/react-lazyload) - Lazy load your component, image or anything matters the performance.
* [react-transition-group](https://github.com/reactjs/react-transition-group
) - An easy way to perform animations when a React component enters or leaves the DOM.
* [react-table](https://react-table.js.org) - A lightweight, fast and extendable datagrid built for React.
*  [react-router](https://github.com/ReactTraining/react-router) - Declarative routing for React.

And of course Brastlewark itself is open source with a public repository on GitHub.


## Authors

* **Alejandro López** - *Initial work* - [alejeindrox](https://github.com/alejeindrox)


## License

This project is licensed under the MIT License.