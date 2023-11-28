'use strict';

import moment from 'moment';

function onError(error:any) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  switch (error.code) {
    case 'EACCES':
      console.error(`(SERVER STARTUP) Requires elevated privileges to run server!`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`(SERVER STARTUP) Port 6001 is already in use!`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};



function isAccessTokenExpired (expiresAtMs:any) {
  if (!expiresAtMs) {
    return true;
  }

  const currentTime = moment().valueOf();
  const isExpired = currentTime >= expiresAtMs;

  if (isExpired) {
    console.warn('Access token was found to be expired.');
  }
  return isExpired;
};

function getAccessTokenExpirationFromSeconds(numOfSeconds:any) {

  return moment().add(numOfSeconds, 'seconds').valueOf();
}

export {isAccessTokenExpired, getAccessTokenExpirationFromSeconds}
