export async function GetProductsPage({ setPosts, setLoading, setPostCount, page, limit }) {
  try {
    const response = await fetch(`https://openmarket.weniv.co.kr/products/?page=${page}`);
    if (!response.ok) {
      throw new Error('네트워크에 이상이 있음');
    }
    const json = await response.json();
    setPostCount(json.count);

    limit === 1 ? setPosts(prevValue => [...prevValue, ...json.results]) : setPosts(json.results);
    setLoading(true);
  } catch (error) {
    console.error(error);
    setLoading(true);
  }
}