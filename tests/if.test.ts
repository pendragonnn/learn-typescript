describe('if statement', function() {
  it('should support in typescript', function() {

    const examValue: number = 90

    if(examValue > 80) {
      console.info("Good")
    } else if(examValue > 60) {
      console.info("Not Bad") 
    } else {
      console.info("Try Again")
    }
    
  })

  it('should support ternary operator', function() {

    const value: number = 80
    const say: string = value >= 75 ? "Congratulations" : "Try Again"
    console.info(say)

  })

  it('should support switch statement', function() {

    function sayHello(name: string): string {
      switch(name) {
        case "Wahyu":
          return "Hi Wahyu"
        case "Heru":
          return "Hi Heru"
        default:
          return "Hello"
      }
    }

    console.info(sayHello("Wahyu"))
    console.info(sayHello("Heru"))
    console.info(sayHello("Joko"))

  })
})