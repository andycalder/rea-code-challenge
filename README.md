# rea-code-challenge

This is a React app that renders real estate listings from JSON data. It allows listings to be added to and removed from a saved list.

## Instructions

This app requires Node and a web browser. To install and use the app, run:
```
cd rea-code-challenge
npm install
npm start
```
Then open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

- Hover over a property in the "Results" list and click "Add property" to add it to the "Saved Properties" list.
- Hover over a property in the "Saved properties" list and click "Remove property" to remove it from the list.

## Tests

To run tests, run:
```
npm test
```

## Architecture

The app is written with [React](https://github.com/facebook/react/) and [styled-components](https://github.com/styled-components/styled-components). Tests are written with [React Testing Library](https://github.com/testing-library/react-testing-library) (RTL). The tests follow the RTL principle of testing the user experience instead of the implementation details. The build and test pipelines are provided by [Create React App](https://github.com/facebook/create-react-app).
