import {
  identity,
} from 'lodash/fp';

const getLogger = () => ({
  error: identity,
  warn: identity,
  info: identity,
  debug: identity,
  verbose: identity,
  silly: identity,
});

export default getLogger();
