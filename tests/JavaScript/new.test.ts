import {describe, expect, test} from '@jest/globals';
import newObj from '@JavaScript/new'

describe('sum module', () => {
  test('create new instance', () => {
    const Fn = function Constructor(value) {
      this.value = value
    }
    Fn.prototype.getValue = function () {
      return this.value
    }
    const value = "i'm value"
    const ins = newObj(Fn, value)
    expect(ins).toEqual({value});
    expect(Object.getPrototypeOf(ins)).toBe(Fn.prototype);
    expect(ins.getValue()).toBe(ins.value);
  });
});

