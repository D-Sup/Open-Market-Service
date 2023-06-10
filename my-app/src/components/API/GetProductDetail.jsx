export async function GetProductDetail(product_id) {
      const response = await fetch(`https://openmarket.weniv.co.kr/products/${product_id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      const json = await response.json()
      return json
}

