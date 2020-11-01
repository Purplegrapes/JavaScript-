import 'whatwg-fetch';
import {
  prop, propEq,
} from 'lodash/fp';
import logger from '../utils/logger';

const fetch = self.fetch.bind(self);

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  throw response;
};

const deserialize = response => {
  if (!response.headers) {
    if (propEq('message', 'Failed to fetch')(response)) {
      return Promise.resolve({
        errors: [{
          field: 'default',
          message: 'socketOfflineTitle',
        }],
      });
    }
    return Promise.resolve({
      errors: [{
        field: 'default',
        message: response.toString(),
      }],
    });
  }
  const header = response.headers.get('Content-Type') || '';
  if (header.indexOf('application/json') > -1) {
    return response.json();
  }
  if (header.indexOf('application/octet-stream') > -1) {
    return response.arrayBuffer();
  }
  if (header.indexOf('application/pdf') > -1) {
    return response.blob();
  }
  return response.text();
};

export default () => next => action => {
  const { payload } = action;

  if (payload) {
    const {
      url,
      ...options
    } = payload;
    
      const body = prop('body')(options);
      const startRequest = new Date().getTime();
      let presetPromise = Promise.resolve(body);
      return presetPromise.then((res) => {
        fetch(url, {
          ...options,
          body: res,
        })
      }).then(checkStatus)
        .then(response => {
          // success
          return deserialize(response).then((data) => {
            if (new Date().getTime() - startRequest > 20 * 1000) {
            // zip 的接口数据可能会很多，写log会导致程序crash
              logger.error(response.url, prop('zip')(options) ? {} : options, 'Api Timeout', '接口请求超过20s');
            }
            return next({
              ...action,
              payload: data,
            });
          });
        })
    }
  return next(action);
};
