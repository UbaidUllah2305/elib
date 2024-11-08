import { config as conf } from "dotenv";

conf();

const _config = {
  port: process.env.PORT,
  databaseUrl: process.env.MONGO_CONNECTTION_STRING,
  env: process.env.NODE_ENV,
};

export const config = Object.freeze(_config);
