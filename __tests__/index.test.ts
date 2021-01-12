/// <reference types="jest" />
import UUID from '../src/index';

test('generate default length string', () => {
  const str = UUID();
  console.log(str);
  expect(str.length).toBe(22);
});

test('generate custom length string', () => {
  expect(UUID(40).length).toBe(40);
});