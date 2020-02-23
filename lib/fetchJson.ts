import { IncomingMessage } from 'http';
import fetch from 'isomorphic-unfetch';

const fetchJson = (url: string, request?: IncomingMessage, parameters?: Object): Promise<any> => {
  const protocol = request ? `${request.headers['x-forwarded-proto']}:` : window.location.protocol;
  const host = request ? request.headers.host : window.location.host;

  return fetch(`${protocol}//${host}/api/${url}`, parameters).then((response) => response.json());
};

export default fetchJson;
