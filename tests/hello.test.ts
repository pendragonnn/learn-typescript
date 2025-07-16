import {describe, expect } from '@jest/globals';

describe('Hello', function() {
  it("should say hello", function() {
    const name = "Hello Bang"
    expect(name).toBe("Hello Bang")
  })
})