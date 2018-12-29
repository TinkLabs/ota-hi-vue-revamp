const CODE = {
  "0000":"",
  "1001":"",
  "9999":"system Error"
};
export function send(req, res, next) {
  res.sendCode = (code, data = null) => {
    if(typeof CODE[code] === 'string'){
      let message = CODE[code];
      let statusCode;
      switch(code[0]){
        case "0":
          statusCode = 200;
          break;
        case "1":
          statusCode = 400;
          break;
        case "9":
          statusCode = 500;
          break;
      }
      res.status(statusCode).send({code, message, data});
    } else {
      res.status(404).send({message:"unknown return code"});
    }
  };
  next();
}