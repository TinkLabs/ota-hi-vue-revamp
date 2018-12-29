import useragent from 'useragent';
import i18n from 'i18n';

export function locals(req, res, next) {
  i18n.setLocale(res.locals, res.locals.language);
  next();
}

export function useragentParser (req, res, next) {
  let agentStr = req.headers['user-agent'];
  if (process.env.mobileAgent) {
    agentStr = process.env.mobileAgent;
  }
  res.locals.useragent = useragent.lookup(agentStr);
  res.locals.isMobile = useragent.lookup(agentStr).device.family !== 'Other';
  next();
};