export async function GetShoppingCart() {
  console.log('asd')
  const response = await fetch('https://openmarket.weniv.co.kr/cart/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('token')}`,
    },
  });
  const json = await response.json();
  return json
}




