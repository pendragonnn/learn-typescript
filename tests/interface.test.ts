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
})