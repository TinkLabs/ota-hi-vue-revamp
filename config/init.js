import express from 'express';
import path from 'path';

export default (app) => {
  console.log(path.join(__dirname, '../public'));
  app.use(express.static(path.join(__dirname, '../public')))
}