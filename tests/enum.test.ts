import { Customer, CustomerType } from "../src/enum"

describe('Enum', function() {
  it('should support in typescript', function() {

    const customer: Customer = {
      id: 1, 
      name: "Wahyu",
      type: CustomerType.GOLD
    }

    console.info(customer)

  })
})