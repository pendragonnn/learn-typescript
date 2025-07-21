import { Employee, Manager } from "../src/employee"
import { Seller } from "../src/seller"

describe('Interface', function() {
  it('should suport in typescript', function() {

    const seller: Seller = {
      id: 1,
      name: "Bayu Cell",
      nib: "123344",
      npwp: "3483984"
    }

    seller.name = "Wawan Cellular"

    // read only properties reassign error
    // Cannot assign to 'nib' because it is a read-only property
    // seller.nib = "334939"

    console.info(seller)

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

  it('should support indexable interface', function() {

    interface StringArray {
      [index: number]: string
    }

    const name: StringArray = ["wahyu", "fajar", "jonathan"]
    console.info(name)

  })

  it('should support indexable interface for non number index', function() {

    interface StringDictionary {
      [key: string]: string
    }

    const dictionary: StringDictionary = {
      "name": "Wahyu", 
      "address": "Bangladesh"
    }

    expect(dictionary["name"]).toBe("wahyu")
    expect(dictionary["address"]).toBe("Bangladesh")

  })

  it('should support extends interface', function() {

    const employee: Employee = {
      id: "002",
      name: "Fajar", 
      division: "Finance"
    }

    console.info(employee)

    const manager: Manager = {
      id: "M0992",
      name: "Rahmad", 
      division: "Finance",
      numberOfEmployees: 20
    }

  })

  it('should support function in interface', function() {
    interface Person {
      name: string
      sayHello(name: string): string
    }

    const person: Person = {
      name: "Hadjar",
      sayHello: function(name: string): string {
        return `Hello ${name}`
      }
    }

    console.info(person.sayHello("Fajar"))

    person.sayHello("Wahyu")
  })

  it('should support intersection types', function() {

    interface HasName {
      name: string
    }

    interface HasId {
      id: string
    }

    type Domain = HasId & HasName

    const domain: Domain = {
      id: "1", 
      name: "Wahyu"
    }

    console.info(domain.name)

  })
})