import { Category, Product } from "../src/type-alias"

describe('Type Alias', function() {
  it('should support in typescript', function() {

    const category: Category = {
      id: "1",
      name: "Handphone"
    }

    const product: Product = {
      id: 1223, 
      name: "Samsung S25",
      price: 20000000, 
      category: category
    }

    // Property 'description' does not exist on type 'Product'.
    // product.description = "test"

    console.info(category)
    console.info(product)

  })
})