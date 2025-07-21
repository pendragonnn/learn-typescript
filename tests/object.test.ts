describe('Object', function() { 
  it('should support in typescript', function() {

    const person: {id: string, name: string, hobbies?: string[]} = {
      id: "1",
      name: "wahyu"
    }

    console.info(person)

    person.id = "w002"
    person.name = "Hadjar"

    // Property 'gender' does not exist on type '{ id: string; name: string; }'.
    // person.gender = "Male"

    console.info(person.name)

  })

  it('should support function interface', function() {
    
    interface AddFunction {
      (value1: number, value2: number): number
    }

    const add: AddFunction = (value1: number, value2: number) : number => {
      return value1 + value2
    }

    expect(add(3,3)).toBe(6)

  })
})