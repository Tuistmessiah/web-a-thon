# Description

Timed project assingment. Using React and Node Middleware pattern with Express.

## React Documentation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features

- Pagination, free text filtering of `location` and sorting by `in_frame` and `out_frame`
- Data is re-fetched everytime the user needs to change page, filter by location or sort data
- A simple debounce was created in the frontend to avoid too many requests while searching for a `location`
- Flexible API Handler can be used to connect to more APIs
- Used Material UI for the components (wrapped as "Concept" components)
- React Hooks/Functional Components

### Frontend Structure

The container TableData handles the calls and connects to the components that render data and contain the event listeners.

# Start

## Installation & run

Install dependencies, `npm install` in `root` and in `/frontend`. The node server uses dummy data, so no database installation is required.

From the `root`, run the whole app, `npm run start` (The dev dependency `npm-run-all` is needed for this operation). Run node server with `npm run start:server:dev` (dev) or `npm run start:server` and the frontend with `npm run start:react`. By default, the node server runs on `http://localhost:5000/` and the react app on `http://localhost:3000/`.

## Configuration

CORS can be disabled and enabled in the `.env` file, along with the allowed addresses and the local server PORT. A local `.env.local` can be used to override configurations.
