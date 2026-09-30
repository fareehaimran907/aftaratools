import assert from 'node:assert';
import { test, describe } from 'node:test';
import { calculateAgeInfo } from './age.js';

describe('calculateAgeInfo', () => {
  test('calculates correct age for simple dates', () => {
    const dob = '1990-01-01';
    const target = new Date('2020-01-01');
    const result = calculateAgeInfo(dob, target);
    assert.strictEqual(result.years, 30);
    assert.strictEqual(result.months, 0);
    assert.strictEqual(result.days, 0);
  });

  test('calculates correct age for leap year babies', () => {
    const dob = '2000-02-29';
    const target = new Date('2001-03-01');
    const result = calculateAgeInfo(dob, target);
    assert.strictEqual(result.years, 1);
    assert.strictEqual(result.months, 0); // 2001 is not a leap year, so Feb 28th is the end of month.
    // Mar 1st minus Feb 29th (which maps to Mar 1st essentially)
  });

  test('throws error for future date of birth', () => {
    const dob = '2050-01-01';
    const target = new Date('2020-01-01');
    assert.throws(() => calculateAgeInfo(dob, target), new Error("Date of birth cannot be in the future"));
  });

  test('next birthday logic', () => {
    const dob = '1990-12-31';
    const target = new Date('2020-12-30');
    const result = calculateAgeInfo(dob, target);
    assert.strictEqual(result.nextBirthdayDays, 1);
  });
});
