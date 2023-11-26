import NodeCache from 'node-cache';

const localCache = new NodeCache({
  checkperiod: 0,
  errorOnMissing: true,
  stdTTL: 0,
  useClones: true,
});

export {localCache};

