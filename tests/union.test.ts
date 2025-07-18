describe('Union Type', function() {
  it('should support in typescript', function() {

    let sample: number | string | boolean = "fajar"
    console.info(sample)

    sample = 100
    console.info(sample)

    sample = true 
    console.info(sample)

    // Type 'never[]' is not assignable to type 'string | number | boolean'.
    // sample = []

  })

  it('should support typeof operator', function() {

    function process(value: number | string | boolean) {
      if(typeof value === "string") {
        return value.toUpperCase
      } else if (typeof value === "number") {
        return value + 2
      } else {
        return !value
      }
    }

    expect(process(4)).toBe(6)
    expect(process("Hadjar")).toBe("HADJAR")
    expect(process(true)).toBe(false)
  })
})