import qs from 'qs';
import {
  some, mapValues, isNull, forEach as orginalForEach, isArray, prop, truncate, update,
} from 'lodash/fp';

const forEach = orginalForEach.convert({ cap: false });
const { File } = global;
const commonFetch = (method, url, data, options) => {
  let processedData = data;
  if (data && !isArray(processedData)) {
    processedData = mapValues(value => (isNull(value) ? 'null' : value))(data);
  }
  let finalData;
  const isZip = prop('zip')(options);
  let headers = {
    'content-type': 'application/json',
  };
  if (some(item => item instanceof File, processedData)) {
    finalData = new FormData();
    forEach((value, key) => {
      finalData.append(key, value);
    })(processedData);
    headers = {};
  } else if (processedData) {
    finalData = JSON.stringify(processedData);
  }
  if (isZip) {
    headers = {
      'content-type': 'text/plain',
      'Content-Encoding': 'gzip',
    };
    finalData = data;
  }
  // eslint-disable-next-line
  return {
    ...options,
    url,
    method,
    headers,
    body: finalData,
  };
};

export const read = (url, query, options, baseUrl) =>
  commonFetch(
    'GET',
    query ? `${url}?${qs.stringify(query, { arrayFormat: 'brackets' })}` : url,
    null,
    options,
    baseUrl,
  );

export const post = (url, data, options, baseUrl) =>
  commonFetch('POST', url, data, options, baseUrl);

export const put = (url, data, options) =>
  commonFetch('PUT', url, data, options);

export const patch = (url, data, options) =>
  commonFetch('PATCH', url, data, options);

const trimTaskName = update('task.name', truncate({ length: 100 }));

export const socket = (data, meta) => ({
  isSocket: true,
  data: trimTaskName(data),
  ...meta,
});

export const socketHttp = (data, meta) => ({
  socketHttp: true,
  data: trimTaskName(data),
  ...meta,
});

export const socketStep = (data, meta) => ({
  socketSetp: true,
  data: trimTaskName(data),
  ...meta,
});
