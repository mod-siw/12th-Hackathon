import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const TravelBox = ({ item }) => {
  const navigate = useNavigate();

  return (
    <Wrapper onClick={() => navigate(`/detail/${item.ID}`)}>
      <Title>{item.name}</Title>
      <Date>
        {item.date1} ~ {item.date2}
      </Date>
    </Wrapper>
  );
};

export default TravelBox;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid var(--main03);
  border-radius: 11px;

  gap: 8px;
  padding: 16px 10px;
  cursor: pointer;
`;

const Title = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.3px;
`;

const Date = styled.div`
  color: var(--grey4, #7b7b7b);
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;
`;
