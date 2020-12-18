import React from 'react';
import styled from 'styled-components';
const PageUl = styled.ul`
  float: left;
  list-style: none;
  text-align: center;
  border-radius: 3px;
  color: white;
  padding: 1px;
  border-top: 3px solid #186ead;
  border-bottom: 3px solid #186ead;
  background-color: rgba(0, 0, 0, 0.4);
`;
const PageLi = styled.li`
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  padding: 5px;
  border-radius: 5px;
  width: 25px;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #263a6c;
  }
  &:focus::after {
    color: white;
    background-color: #263a6c;
  }
`;

const PageSpan = styled.span`
  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: white;
    background-color: #263a6c;
  }
`;

const Pagenation = ({ totalpage, page, pageHandler }) => {
  const pageNumbers = [];
  //5번 반복문

  if (page === 1) {
    //받은페이지 값이 1일때 페이지네이션 그대로 그림
    for (let i = 0; i < 5; i++) {
      pageNumbers.push(page + i);
    }
  } else if (page === 2) {
    //받은페이지 값이 2일때 1일때와 동일하게 페이지를 보여주두록함
    for (let i = 0; i < 5; i++) {
      pageNumbers.push(page + i - 1);
    }
  } else if (page < 1) {
    //음수일때
    alert('해당 페이지가 없습니다');
    return;
  } else {
    //그외의 경우 해당 페이지보다 +-2페이지를 보여주도록함
    for (let i = 0; i < 5; i++) {
      pageNumbers.push(page + i - 2);
    }
  }

  return (
    <>
      <PageUl className="pagination">
        {pageNumbers.map((number) => {
          return (
            <PageLi
              className="page-item"
              onClick={() => pageHandler({ number })}
            >
              <PageSpan>{number}</PageSpan>
            </PageLi>
          );
        })}
      </PageUl>
    </>
  );
};

export default Pagenation;
