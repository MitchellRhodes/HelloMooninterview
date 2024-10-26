import {createPgPool} from './createPgPool';

(async () => {
  const pool = createPgPool();


  console.log('Done');
})();
