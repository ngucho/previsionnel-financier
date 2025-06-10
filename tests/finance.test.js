import { computeProfit } from '../src/js/modules/finance.js';

test('computeProfit returns revenue minus cost', () => {
  expect(computeProfit(1000, 400)).toBe(600);
});
