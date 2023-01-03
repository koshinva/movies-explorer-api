module.exports = {
  origin: [
    'http://localhost:3005',
    'https://movies.koshinva.nomoredomains.club',
    'http://movies.koshinva.nomoredomains.club',
  ],
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type', 'origin', 'Authorization'],
  credentials: true,
};
