import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import i18n from 'i18n';
import router from './config/route'
import init from './config/init'
import ssr from './config/ssr'

// Read .env file.
dotenv.config({
  path: path.join(process.cwd(), '/.env'),
});

const app = express();

i18n.configure({
  locales: ['en', 'zh', 'ja'],
  directory: path.join(__dirname, './locales'),
  defaultLocale: 'en',
  syncFiles: true,
  autoReload: true,
});

const port = 3000;
init(app);
ssr(app);
router(app);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));