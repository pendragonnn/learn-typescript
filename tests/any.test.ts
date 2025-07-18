describe('Any', function() {
  it('should support in typescript', function() {
    
    const person: any = {
      id: 1, 
      name: "Wahyu Kurniawan",
      age: 22
    }

    person.age = 31
    person.address = "Indonesia"
    // tidak ada pengecekan
    person.name = 9901

    console.info(person)
  })
})