import styled from 'styled-components';

export const DivFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${(props) => props.direction};
`;

export const MyH1 = styled(DivFlex.withComponent('h1'))`
  font-size: 3rem;
  color: tomato;
`;
