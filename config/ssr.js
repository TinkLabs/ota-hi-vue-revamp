import fs from  'fs';
import path from  'path';
import {createBundleRenderer} from 'vue-server-renderer';
const resolve = file => path.resolve(__dirname, file);
const templatePath = resolve('../src/index.template.html');
const createRenderer = (bundle, options) => {
  return createBundleRenderer(bundle, Object.assign(options, {
    // this is only needed when vue-server-renderer is npm-linked
    basedir: resolve('../public/dist'),
    // recommended for performance
    runInNewContext: false
  }))
};

let renderer;
export default (app) => {
  app.locals.readyPromise = require('../build/setup-dev-server')(
    app,
    templatePath,
    (bundle, options) => {
      renderer = createRenderer(bundle, options);
    }
  );

  app.locals.render = async (req, res, params = {}) => {
    try{
      const handleError = err => {
        if (err.url) {
          res.redirect(err.url)
        } else if(err.code === 404) {
          res.send('404 | Page Not Found');
        } else {
          res.send('500 | Internal Server Error');
          // Render Error Page or Redirect
          console.error(`error during render : ${req.url}`);
          console.error(err.stack);
        }
      };
      const context = Object.assign({
        url: req.path
      }, params);
      renderer.renderToString(context, (err, html) => {
        console.log(req.path, err, html ? html.substr(0 , 15) + "" : null);
        if (err) {
          console.error("renderToString Error",err);
          return handleError(err);
        }
        res.status(200).send(html);
      })
    }catch (e) {
      throw e;
    }
  };
}