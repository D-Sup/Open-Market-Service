import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import Pagination from './Pagination';
import { GetProductsPage } from '../API/GetProductsPage';
import useScrollBottom from '../../hook/useScrollBottom';
import styled from 'styled-components';
import { AppContext } from './AppContext';

export default function Posts({ loading, setLoading }) {
  const { posts, setPosts } = useContext(AppContext);
  const [postCount, setPostCount] = useState(1);
  const [limit, setLimit] = useState(1);
  const [page, setPage] = useState(1);
  const isBottom = useScrollBottom();

  const navigate = useNavigate();

  function GoToProduct(product_id, item) {
    navigate(`/products/${product_id}`, {
      state: {
        item: item,
      },
    });
  }

  useEffect(() => {
    if (isBottom && limit === 1) {
      setPage(prevValue => prevValue + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBottom]);

  useEffect(() => {
    GetProductsPage({ setPosts, setLoading, setPostCount, page, limit })
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              <li key={item.product_id} onClick={() => GoToProduct(item.product_id, item)}>
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
      transition: 0.2s;
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
