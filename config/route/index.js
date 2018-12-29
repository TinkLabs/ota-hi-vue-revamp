import fs from  'fs';

export default (app) => {
  /**
   *  vue - ssr 入口
   */
  app.get(/^\/(?!(api)).*$/, async (req, res, next) => {
    await req.app.locals.readyPromise;
    let opt = {};
    opt.title = "app";
    opt.desc = "desc";
    opt.keyword = "keyword";
    opt.isMobile = res.locals.isMobile;
    await req.app.locals.render(req, res, opt);
  });
  /**
   * 循环遍历route目录下的JavaScript文件，并按文件名规则加入路由。
   * 如：
   *  user.js
   *  其声明的路由则会在 /api/user下。
   *  user.home.js
   *  其声明的路由则会在 /api/user/home下。
   */
  let routers = fs.readdirSync(__dirname);
  routers.forEach((file, index) => {
    if(file!=='index.js'){
      let fileName = file.split('.');
      let ext = fileName.splice(fileName.length-1, 1);
      if(ext[0] !== 'js') return;
      let path = fileName.join('/');
      app.use(`/api/${path}`, require(`${__dirname}/${file}`))
    }
  });
}