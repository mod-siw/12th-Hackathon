import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Back } from "../icons/back.svg";

const CreatePage4 = () => {
  const navigate = useNavigate();

  const nextFunc = () => {
    navigate("/detail/2");
  };

  return (
    <Wrapper>
      <TopBar>
        <Back onClick={() => navigate(-1)} />
      </TopBar>
      <Container>
        <div>
          <Title>여행의 예산을 지어주세요.</Title>
          <InputBox>
            <Input placeholder="나홀로 떠나는 여행" />
          </InputBox>
        </div>
        <NextBtn onClick={nextFunc}>다음</NextBtn>
      </Container>
    </Wrapper>
  );
};

export default CreatePage4;

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

const InputBox = styled.div``;

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
  background: var(--grey1, #ececec);

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
