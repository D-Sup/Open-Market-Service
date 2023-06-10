export async function PostShoppingCart(PostData) {
    const response = await fetch('https://openmarket.weniv.co.kr/cart/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `JWT ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(PostData),
    });
    const json = await response.json();
    return json
}
