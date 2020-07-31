# Description

Timed project assingment. Using React and Node Middleware pattern with Express.

## React Documentation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features

- Pagination, free text filtering of `location` and sorting by `in_frame` and `Out_frame`
- A simple debounce was created to avoid too many requests while searching for a `location`
- Flexible API Handler can be used to connect to more APIs

# Start

## Installation & run

Install dependencies, `npm run install` in `root` and in `/frontend`. The node server uses dummy data, so no database installation is required. To run the whole app, `npm run start`. Run node server with `npm run start:server:dev` (dev) or `npm run start:server` and the frontend with `npm run start:react`.

## Configuration

CORS can be disabled and enabled in the `.env` file, along with the allowed addresses and the local server PORT. By default, the node server runs on `http://localhost:5000/` and the react app on `http://localhost:3000/`.
