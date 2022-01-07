import { createLogger } from '../logger.js';

it('should return stored logs', () => {
  const logger = createLogger('user login');

  expect(logger.getLogs()).toEqual([]);
});

it('should save log  message', () => {
  const logger = createLogger('user login');
  logger.log('login sucess');

  expect(logger.getLogs()).toEqual(['log - user login - login sucess']);
});

it('should save errors', () => {
  const logger = createLogger('user login');
  logger.error('login failed');

  expect(logger.getLogs()).toEqual(['error - user login - login failed']);
});
