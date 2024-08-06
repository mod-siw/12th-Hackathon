import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import TravelBox from "../components/TravelBox";

import { ReactComponent as Airplane } from "../icons/airplane.svg";
import { ReactComponent as Plus } from "../icons/white-plus.svg";

const MainPage = () => {
  const navigate = useNavigate();
  const [isView, setIsView] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("data")) || [];
    setData(storedData);
    setIsView(storedData.length === 0);
  }, []);

  return (
    <Wrapper>
      <Title>나의 지난 여행</Title>
      {isView ? (
        <Box>
          <Airplane onClick={() => navigate("/create1")} />
          <Ment>
            아직 생성된 여행이 없어요.
            <br />
            아이콘을 눌러 첫 여행을 생성해주세요!
          </Ment>
        </Box>
      ) : (
        <Container>
          {data.map((item) => (
            <TravelBox key={item.ID} item={item} />
          ))}
          <PlusBtn onClick={() => navigate("/create1")}>
            <Plus />
          </PlusBtn>
        </Container>
      )}
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div`
  padding: 80px 0 0;
  p {
    color: var(--main02);
  }
`;

const Box = styled.div`
  margin-top: 187px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24.5px;
`;

const Ment = styled.div`
  color: var(--grey6, #3f3f3f);
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;
`;

const Title = styled.div`
  margin-bottom: 20px;

  color: #000;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.01875rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 10px;
`;

const PlusBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  flex-shrink: 0;

  border-radius: 11px;
  background-color: var(--grey1);
  cursor: pointer;
`;
