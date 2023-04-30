# [Your Project Name]

[Your Project Name] is a web application built with [React](https://reactjs.org/), [Chakra UI](https://chakra-ui.com/), and [Vite](https://vitejs.dev/). The app allows users to browse and interact with articles and comments.

## Features

- Browse articles by topics
- View individual articles with their comments
- Post a new comment for an article
- Login functionality

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) v12 or newer
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://classic.yarnpkg.com/en/docs/install)

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/your-repo-name.git
```

2. Change directory to the project folder

```bash
cd your-repo-name
```

3. Install the dependencies

```bash
npm install
```

or

```bash
yarn
```

4. Start the development server

```bash
npm run dev
```

or

```bash
yarn dev
```

5. Open your browser and visit `http://localhost:3000`

## Deployment

To create a production build, run:

```bash
npm run build
```

or

```bash
yarn build
```

This will generate a `dist` folder with the production-ready build. Follow the deployment instructions of your hosting provider to deploy the application.

## Demo

A live Demo will be available soon

## API

Here is the link to the github repo for the back end to NC News

https://github.com/jdwd40/nc-news-backend

This application consumes the API endpoints mentioned below:

- `GET /api/topics`: Fetches all the topics.
- `GET /api/articles`: Fetches all the articles.
- `GET /api/articles/:article_id`: Fetches an article with the given ID.
- `PATCH /api/articles/:article_id`: Updates the votes for an article with the given ID.
- `GET /api/articles/:article_id/comments`: Fetches all comments for an article with the given ID.
- `POST /api/articles/:article_id/comments`: Posts a new comment for an article with the given ID.
- `PATCH /api/comments/:comment_id`: Updates the votes for a comment with the given ID.

Make sure to replace the API URL in the `apiClient.js` file with the correct URL of your backend API.

## Support

If you encounter any issues or need help, feel free to open an issue in the GitHub repository or contact the maintainer.

## Acknowledgements

- [React](https://reactjs.org/)
- [Chakra UI](https://chakra-ui.com/)
- [Vite](https://vitejs.dev/)
- [axios](https://axios-http.com/)

## Author

- Your Name - [yourusername](https://github.com/yourusername)