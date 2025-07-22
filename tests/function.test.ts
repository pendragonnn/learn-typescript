describe('Function', function() {
  it('should support in typescript', function() {

    function sayHello(name: string): string {
      return `Hello ${name}`
    }

    expect(sayHello("Wahyu")).toBe("Hello Wahyu")

    function printHello(name: string): void {
      console.info(`Hello ${name}`)
    }

    printHello("Wahyu")

  })

  it('should support default value', function() {
    function sayHello(name: string = "Guest"): string {
      return `Hello ${name}`
    }

    expect(sayHello()).toBe("Hello Guest")
    expect(sayHello("Fajar")).toBe("Hello Fajar")
  })

  it('should support rest parameter', function() {
    function sum(...values: number[]): number {
      let total = 0
      for(const value of values) {
        total += value
      }
      return total
    }

    expect(sum(1, 2, 3, 4, 5)).toBe(15)
  })

  it('should support optional parameter', function() {
    function sayHello(firstName: string, lastName? : string): string {
      if(lastName) {
        return `Hello ${firstName} ${lastName}`
      } else {
        return `Hello ${firstName}`
      }
    }

    expect(sayHello("Fajar")).toBe("Hello Fajar")
    expect(sayHello("Haji", "Boim")).toBe("Hello Haji Boim")
  })

  it('should support function overloading', function() {

    function callMe(value: number): number
    function callMe(value: string): string
    function callMe(value: any): any {
      if(typeof value === "string") {
        return value.toUpperCase
      } else if (typeof value === "number") {
        return value * 10
      }
    }

    expect(callMe(10)).toBe(100)
    expect(callMe("Wahyu")).toBe("Wahyu")
    
  })

})