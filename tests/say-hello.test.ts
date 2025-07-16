import { sayHello } from "../src/say-hello"

describe('sayHello', function () {
  it('should return hello bang', function() {
    expect(sayHello('bang')).toBe("Hello bang")
  })
})