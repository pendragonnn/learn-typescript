describe('Array', function() {
  it('should same with javascript', function() {

    const names: string[] = ["wahyu", "fajar", "dimas"]
    const value: number[] = [1, 2, 3]
    const ages: Array<number> = [21, 23, 24]

    console.info(names)
    console.info(value)
    console.info(ages)
  })

  it('should support readonly array', function() {

    const hobbies: ReadonlyArray<string> = ["Membaca", "Menulis"]
    console.info(hobbies)
    console.info(hobbies[0])

    // Index signature in type 'readonly string[]' only permits reading.
    // hobbies[0] = "Berenang"

  })

  it('should support tupple', function() {

    const person: readonly [string, string, number] = ["fajar", "ahmad", 20]
    console.info(person) 
    console.info(person[0])

    // Cannot assign to '0' because it is a read-only property.
    // person[0] = "hadjar"

  })
})