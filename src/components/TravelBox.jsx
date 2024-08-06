import styled from "styled-components";

const TravelBox = () => {
  const name = localStorage.getItem("name");
  const date1 = localStorage.getItem("date1");
  const date2 = localStorage.getItem("date2");

  return (
    <Wrapper>
      <Title>{name}</Title>
      <Date>
        {date1} ~ {date2}
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
