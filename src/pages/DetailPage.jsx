import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import back from "../icons/back.svg";
import addBtn from "../icons/add-btn.svg";

const DetailPage = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const [value, setValue] = useState({});

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("data")) || [];
    const dataItem = storedData.find((item) => item.ID === Number(id));
    setValue(dataItem || {});
  }, [id]);

  return (
    <Wrapper>
      <Container1>
        <img src={back} onClick={() => navigate("/main")} />
        <div id="title">{value?.name}</div>
        <div id="date">
          {value?.date1} ~ {value?.date2}
        </div>
      </Container1>
      <Category>
        <div id="text1">일정</div>
        <div id="text2">가계부</div>
      </Category>
      <Content>
        <div id="plan1">
          <div id="line1" />
          <div>
            <div className="day">1일차</div>
            <div className="detail">06:30 김포국제공항</div>
            <div className="detail">10:00 제주국제공항</div>
            <div className="detail">10:30 무지개해안도로</div>
            <div className="detail">12:00 OO식당</div>
          </div>
        </div>
        <div id="plan2">
          <div id="line2" />
          <div>
            <div className="day">2일차</div>
            <div className="detail">입력된 일정이 없어요.</div>
          </div>
        </div>
      </Content>
      <AddBtn>
        <img src={addBtn} />
      </AddBtn>
    </Wrapper>
  );
};

export default DetailPage;

const Wrapper = styled.div``;
const Container1 = styled.div`
  padding-top: 49px;
  padding-left: 20px;
  height: 187px;
  background-color: var(--main04);
  box-shadow: 0px 4px 10px 0px rgba(183, 183, 183, 0.25);

  img {
    margin-bottom: 29px;
    cursor: pointer;
  }
  #title {
    margin-bottom: 10px;
    color: var(--black, #131313);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.3px;
  }
  #date {
    color: var(--grey4, #7b7b7b);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.3px;
  }
`;

const Category = styled.div`
  padding-top: 25px;
  padding-left: 21px;
  display: flex;
  gap: 16px;

  #text1 {
    color: var(--black, #131313);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.3px;
    cursor: pointer;
  }
  #text2 {
    color: var(--grey3, #9f9f9f);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.3px;
    cursor: pointer;
  }
`;

const Content = styled.div`
  margin-top: 30px;
  padding-left: 21px;

  #plan1 {
    margin-bottom: 30px;
    display: flex;
    gap: 15px;
  }
  #plan2 {
    display: flex;
    gap: 15px;
  }
  #line1 {
    width: 2px;
    height: 145px;
    background: #2496ff;
  }
  #line2 {
    width: 2px;
    height: 67px;
    background: #2496ff;
  }
  .day {
    margin-bottom: 15px;
    color: var(--black, #131313);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.3px;
  }
  .detail {
    margin-bottom: 10px;
    color: var(--grey3, #9f9f9f);
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.3px;
  }
`;

const AddBtn = styled.div`
  position: absolute;
  right: 30px;
  bottom: 82px;
  cursor: pointer;
`;
