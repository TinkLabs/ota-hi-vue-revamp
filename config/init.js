import express from 'express';
import path from 'path';
import i18n from 'i18n';
import {send} from './code'
import {locals, useragentParser} from './middlewares'

export default (app) => {
  app.use(express.static(path.join(__dirname, '../public')));
  app.use(i18n.init);
  app.use(locals);
  app.use(useragentParser);
  app.use(send);
}