import { strictEquals } from './utils.js';

const result = {};
result['1, 1'] = strictEquals(1, 1);
result['NaN, NaN'] = strictEquals(NaN, NaN);
result['0, -0'] = strictEquals(0, -0);
result['-0, 0'] = strictEquals(-0, 0);
result[`1 '1'`] = strictEquals(1, '1');
result['true, false'] = strictEquals(true, false);
result['false, false'] = strictEquals(false, false);
result['Water, oil'] = strictEquals('Water', 'oil');
console.table(result);
