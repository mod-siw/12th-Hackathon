import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Back } from "../icons/back.svg";
import { ReactComponent as Arrow } from "../icons/arrow.svg";

const CreatePage2 = () => {
  const navigate = useNavigate();
  const [isFilled, setIsFilled] = useState(false);
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const onChange1 = (e) => {
    setValue1(e.target.value);
  };

  const onChange2 = (e) => {
    setValue2(e.target.value);

    if (e.target.value !== "") {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  };

  const nextFunc = (value1, value2) => {
    localStorage.setItem("date1", value1);
    localStorage.setItem("date2", value2);

    setValue1("");
    setValue2("");
    navigate("/create3");
  };

  return (
    <Wrapper>
      <TopBar>
        <Back onClick={() => navigate(-1)} />
      </TopBar>
      <Container>
        <div>
          <Title>여행의 날짜를 지어주세요.</Title>
          <InputBox>
            <Input
              autoFocus
              placeholder="2024.00.00."
              value={value1}
              onChange={onChange1}
            />
            <ArrowIcon />
            <Input
              placeholder="2024.00.00."
              value={value2}
              onChange={onChange2}
            />
          </InputBox>
        </div>
        <NextBtn isFilled={isFilled} onClick={() => nextFunc(value1, value2)}>
          다음
        </NextBtn>
      </Container>
    </Wrapper>
  );
};

export default CreatePage2;

const Wrapper = styled.div`
  height: 100vh;
`;

const TopBar = styled.div`
  margin: 50px 0 9px;
  cursor: pointer;
`;

const Container = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.div`
  margin: 20px 0;

  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.3px;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ArrowIcon = styled(Arrow)`
  width: 60px;
`;

const Input = styled.input`
  width: 100%;
  height: 54px;
  padding: 16px;

  border-radius: 8px;
  border: 1px solid var(--main03, #a2d0fa);

  color: var(--grey5, #b9b9b9);
  outline: none;

  /* asap/title2 */
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 137.5% */
  letter-spacing: -0.32px;

  ::placeholder {
    color: var(--grey2, #b9b9b9);
  }
`;

const NextBtn = styled.button`
  display: flex;
  width: 100%;
  height: 54px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  border: none;
  outline: none;
  border-radius: 8px;
  background: ${({ isFilled }) =>
    isFilled ? "var(--main01, #2496FF)" : " var(--grey1, #ececec)"};
  color: var(--white, #fff);
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 137.5% */
  letter-spacing: -0.32px;
  cursor: pointer;
`;
