# Neoway News Project

## Overview

This is a Vue.js project utilizing **Tailwind CSS**, **Axios** for API requests, and follows the **Atomic Design** pattern for component organization. The project features multiple views, including a news listing, post details, and favorite posts, with a dynamic and responsive layout.

**Figma design** was used to create the UI. Pixel perfect was not followed, but it gave a good idea of ​​how to create each component and structure.
https://www.figma.com/design/Eager9yOAzDbmp2Wmj4pI1/Free-News-%26-Magazine-Figma-Template-%2F-All-pages-(Community)-(Copy)?node-id=17-11&t=3PAOE50XwIKaMvLW-1

## Features

- Dynamic news fetching from an external API.
- Display of categorized articles.
- Atomic design structure for UI components.
- Responsive design with Tailwind CSS.
- Skeleton loaders for smooth user experience during data fetching.
- Favorite articles management.
- Toasts to handle errors.
- Unit tests for some components.

## Project

The project is receiving information from articles through the API https://newsapi.org/.

You will need to create an account and get their API Key to test.

Both the website and the API Key must be registered in the `.env` file.

Unfortunately, I noticed during deployment that when accessing the site without being on localhost, there is a `CORS` problem. I set up a proxy to try to make it work, but without success. Only localhost is working correctly.

## Structure

The project follows the **Atomic Design** methodology, organizing components into **atoms**, **molecules**, **organisms**, and **templates**. Here's a breakdown of the folder structure:

```
/src
  /api           # Axios configuration for API requests
  /assets        # Static assets like images
  /components    # Vue components categorized by Atomic Design pattern
    /atoms       # Basic UI components
    /molecules   # Complex components combining multiple atoms
    /organisms   # UI sections composed of molecules
    /templates   # Page templates that structure the layout
  /helpers       # Utility functions
  /router        # Vue Router for navigating between views
  /store         # Vuex store for managing state
  /tests         # Jest for unit tests
  /views         # Page-level components
```

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js v12 or higher
- Vue CLI installed globally
- NPM or Yarn

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/welladam/neoway-news-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd neoway-news-app
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

## Environment Variables

Create a `.env` file in the root directory based on the `.env.example` file. Update the environment variables as needed, particularly the API key for fetching news.

```bash
cp .env.example .env
```

### Example `.env` file:

```bash
VUE_APP_API_BASE_URL="https://newsapi.org/v2"
VUE_APP_API_KEY="your_api_key_here"
VUE_APP_PROXY_URL="https://cors-anywhere.herokuapp.com/"
```

## Running the Project

To start the development server:

```bash
npm run serve
# or
yarn serve
```

This will start the project on `http://localhost:8080`.

## Building for Production

To build the project for production:

```bash
npm run build
# or
yarn build
```

The production build will be generated in the `/dist` folder.

## Running Tests

To run unit tests using Jest:

```bash
npm run test
# or
yarn test
```

## Technologies Used

- **Vue.js**: Frontend framework.
- **Tailwind CSS**: Utility-first CSS framework.
- **Axios**: HTTP client for API requests.
- **Vue Router**: For navigation between views.
- **Vuex**: State management library for Vue.
- **Jest**: Testing framework.

## Available Scripts

- `npm run serve`: Start the development server.
- `npm run build`: Create a production build.
- `npm run lint`: Run linter for code quality.
- `npm run test`: Run unit tests.
