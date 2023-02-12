import React from 'react';
import * as S from '../styled/ShareStyle';
import Btn from '../components/Btn';
import { useNavigate } from 'react-router-dom';

const Works = () => {
  const navigate = useNavigate();
  const onAnchorBtnHandler = () => navigate('/');

  return (
    <>
      <S.DivFlex>
        <S.MyH1> Works 페이지 입니다.</S.MyH1>
        <Btn onClick={onAnchorBtnHandler} text="home으로 이동" />
      </S.DivFlex>
    </>
  );
};

export default Works;
