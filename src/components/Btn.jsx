import React from 'react';
import * as S from '../styled/ShareStyle';

const Btn = ({ text, onClick }) => {
  return <S.MyBtn onClick={onClick}>{text}</S.MyBtn>;
};

export default Btn;
