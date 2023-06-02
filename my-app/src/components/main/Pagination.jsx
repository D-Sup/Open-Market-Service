import React from 'react';
import styled from 'styled-components';

export default function Pagination({ postCount, setPage, page }) {
  const numPages = Math.ceil(postCount / 15);
  return (
    <>
      <Nav>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          {'<'}
        </button>
        {Array(numPages)
          .fill()
          .map((_, index) => (
            <button
              key={index + 1}
              onClick={() => setPage(index + 1)}
              aria-current={page === index + 1 ? 'page' : null}
            >
              {index + 1}
            </button>
          ))}
        <button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          {'>'}
        </button>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin: 60px;

  button {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    transition: .2s;
    &:hover {
      background: #21bf48;
      transform: translateY(-2px);
    }

    &[disabled] {
      background: black;
      cursor: revert;
      transform: revert;
    }

    &[aria-current] {
      background: gold;
      font-weight: bold;
      font-size: 1em;
      cursor: revert;
      transform: revert;
    }
  }
`;
