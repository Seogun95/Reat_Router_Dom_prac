import React from 'react';
import * as S from '../styled/ShareStyle';
import Btn from '../components/Btn';
import { useNavigate, Link } from 'react-router-dom';
import { data } from '../shared/data';

const Works = () => {
  const navigate = useNavigate();
  const onAnchorBtnHandler = () => navigate('/');

  return (
    <>
      <S.DivFlex>
        <S.MyH1> Works 페이지 입니다.</S.MyH1>

        {data.map((item) => {
          return (
            <div key={item.id}>
              <p>
                <Link to={`/works/${item.id}`}>{item.todo}</Link>
              </p>
            </div>
          );
        })}

        <Btn onClick={onAnchorBtnHandler} text={'home으로 이동'} />
      </S.DivFlex>
    </>
  );
};

export default Works;
