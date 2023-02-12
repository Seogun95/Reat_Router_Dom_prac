import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

//styled components
import * as S from '../styled/ShareStyle';
import Btn from '../components/Btn';

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log('location -->', location);

  const onAnchorBtnHandler = () => navigate('/works');

  return (
    <>
      <S.DivFlex>
        <S.MyH1> Home 페이지 입니다.</S.MyH1>
        <Btn onClick={onAnchorBtnHandler} text="Works 페이지로 이동" />
      </S.DivFlex>
    </>
  );
};

export default Home;
