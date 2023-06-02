import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';
import useScrollBottom from '../../hook/useScrollBottom';
import styled from 'styled-components';
import LoadingGif from '../../assets/Loading.gif'

export default function Posts({ posts, setPosts, loading, setLoading }) {

  const [postCount, setPostCount] = useState(1);
  const [limit, setLimit] = useState(1);
  const [page, setPage] = useState(1);
  const isBottom = useScrollBottom();

  async function getProducts() {
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

  useEffect(() => {
    if (isBottom && limit === 1) {
      setPage(prevValue => prevValue + 1);
    }
  }, [isBottom]);

  useEffect(() => {
    getProducts();
  }, [page, limit]);

  return (
    <PostStyle>
      <nav>
        <ul
          type="number"
          value={limit}
          onClick={event => {
            setLimit(Number(event.target.value));
            // setLimit(({ target: { value } }) => Number(value));
            setPosts([]);
            setPage(1);
          }}
        >
          <button value="1" className={limit === 1 ? 'active' : ''}>
            ALL
          </button>
          <button value="2" className={limit === 2 ? 'active' : ''}>
            PAGE
          </button>
        </ul>
      </nav>
        <ul className="item-card">
          {loading &&
            posts.map(item => {
              return (
                <li key={item.product_id}>
                  <img src={item.image} alt="" />
                  <p>{item.store_name}</p>
                  <h2>{item.product_name}</h2>
                  <strong>{Intl.NumberFormat().format(item.price)}</strong> 원
                </li>
              );
            })}
        </ul>
      {limit === 2 && <Pagination postCount={postCount} setPage={setPage} page={page} />}
    </PostStyle>
  );
}

const PostStyle = styled.div`

  nav {
    text-align: center;
    margin-top: 30px;
  }

  nav ul {
    display: inline-block;
    button {
      border-radius: 10px;
      margin: 0 3px;
      padding: 10px 15px;
      transition: .2s;
    }
  }

  .item-card {
    display: flex;
    flex-wrap: wrap;
    gap: 70px;
    margin: auto;
    padding: 24px;
    width: min(1286px, calc(100% - 60px));
  }

  .item-card li {
    img {
      width: 380px;
      height: 380px;
      border: 1px solid #c4c4c4;
      border-radius: 10px;
    }
    p {
      margin-top: 16px;
      color: #767676;
      font-weight: 400;
      font-size: 16px;
    }
    h2 {
      margin: 10px 0;
      font-weight: 400;
      font-size: 18px;
    }
    strong {
      font-weight: 700;
      font-size: 24px;
    }
  }
  
  .active {
    background-color: gold;
  }
`;
