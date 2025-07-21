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
})