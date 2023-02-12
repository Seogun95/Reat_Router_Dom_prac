import React from 'react';
import * as S from '../styled/ShareStyle';
import { useParams, useNavigate } from 'react-router-dom';
import Btn from '../components/Btn';
import { data } from '../shared/data';

const Work = () => {
  const params = useParams();
  const navigate = useNavigate();

  console.log(params);

  const foundData = data.find((item) => {
    console.log('item.id ->', item.id); //얘는 Number
    console.log('params.id ->', params.id); //얘는 String
    return item.id === Number(params.id);
  });

  console.log('fondData --->', foundData);
  console.log('--------------------------------');
  return (
    <S.DivFlex>
      <S.MyH1>Works의 하위 페이지 입니다.</S.MyH1>
      <S.MyH1>{foundData.todo}</S.MyH1>
      <Btn onClick={() => navigate('/works')} text={'뒤로가기'} />
    </S.DivFlex>
  );
};

export default Work;
