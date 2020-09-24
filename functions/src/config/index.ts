export default {
  env: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT || '3000', 10),
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },
};
