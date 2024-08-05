import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Wrapper>
        <div>안녕하세요 어른사자팀 파이팅.</div>
        <p>색도 이렇게 지정해두어서 피그마대로 가져다 쓰면 됩니다~</p>
      </Wrapper>
    </>
  );
};

export default MainPage;

const Wrapper = styled.div`
  border: 1px solid var(--black);
  p {
    color: var(--main02);
  }
`;
