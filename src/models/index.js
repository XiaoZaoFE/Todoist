/**
 * Author   : Syan
 * Date     : 2018/4/2
 */
import { init } from '@rematch/core';
import todos from './todos';

const store = init({
  models: { todos },
  redux: {
    // middlewares: [createLogger()],
  },
});

export default store;
