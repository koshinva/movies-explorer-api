module.exports = {
  origin: [
    'http://localhost:3005',
    'https://movies.koshinva.nomoredomains.club',
    'http://movies.koshinva.nomoredomains.club',
    'https://movies-explorer-frontend-five.vercel.app',
    'https://movies-explorer-frontend-koshinva.vercel.app',
    'https://movies-explorer-frontend-git-main-koshinva.vercel.app',
  ],
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type', 'origin', 'Authorization'],
  credentials: true,
};
