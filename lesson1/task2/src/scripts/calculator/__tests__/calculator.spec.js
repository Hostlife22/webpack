import { mult, sum } from '../calculator';

it('Should get the sum ', () => {
  const result = sum(12, 15);

  expect(result).toEqual(27);
});

it('Should get the mult ', () => {
  const result = mult(12, 12);

  expect(result).toEqual(144);
});
