import styled from 'styled-components';

export const DivFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const MyH1 = styled(DivFlex.withComponent('h1'))`
  font-size: 3rem;
  color: tomato;
`;

export const MyBtn = styled.button`
  background-color: transparent;
  border-radius: 1rem;
  border: 0;
  color: #000;
  padding: 0.5rem 1rem;
  text-align: center;
  transition: 0.3s ease;
  box-shadow: rgb(60 64 67 / 30%) 0 1px 3px 0, rgb(60 64 67 / 15%) 0 4px 8px 3px;
  &:hover {
    background: tomato;
    color: white;
    box-shadow: none;
    outline: 0;
  }
`;
