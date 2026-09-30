import assert from 'node:assert';
import { test, describe } from 'node:test';
import { calculatePercentage, calculateWhatPercentage, calculatePercentageChange } from './percentage.js';

describe('Percentage Calculations', () => {
  describe('calculatePercentage', () => {
    test('calculates 10% of 100', () => {
      assert.strictEqual(calculatePercentage(10, 100), 10);
    });
    
    test('calculates 50% of 50', () => {
      assert.strictEqual(calculatePercentage(50, 50), 25);
    });

    test('calculates negative percentage', () => {
      assert.strictEqual(calculatePercentage(-10, 100), -10);
    });

    test('throws error for total 0', () => {
      assert.throws(() => calculatePercentage(10, 0), new Error("Cannot calculate percentage of zero"));
    });
  });

  describe('calculateWhatPercentage', () => {
    test('calculates what percentage 10 is of 100', () => {
      assert.strictEqual(calculateWhatPercentage(10, 100), 10);
    });

    test('throws error for total 0', () => {
      assert.throws(() => calculateWhatPercentage(10, 0), new Error("Cannot calculate percentage of zero"));
    });
  });

  describe('calculatePercentageChange', () => {
    test('calculates increase from 50 to 100', () => {
      assert.strictEqual(calculatePercentageChange(50, 100), 100);
    });

    test('calculates decrease from 100 to 50', () => {
      assert.strictEqual(calculatePercentageChange(100, 50), -50);
    });
    
    test('calculates change from negative numbers', () => {
      assert.strictEqual(calculatePercentageChange(-50, -25), 50);
    });
  });
});
