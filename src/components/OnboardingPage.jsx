import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Logo } from "../icons/logo.svg";

const OnboardingPage = () => {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true);
      const navigateTimer = setTimeout(() => {
        navigate("/main");
      }, 500);
      return () => clearTimeout(navigateTimer);
    }, 2000);

    return () => clearTimeout(fadeOutTimer);
  }, []);

  return (
    <Wrapper fadeOut={fadeOut}>
      <Intro>
        여행 기록,
        <br />
        필요한 것만 간편하게
      </Intro>
      <Logo />
    </Wrapper>
  );
};

export default OnboardingPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 10;
  background-color: var(--main03);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;

  padding-bottom: 56px;

  opacity: ${({ fadeOut }) => (fadeOut ? 0 : 1)};
  transition: opacity 0.5s;
`;

const Intro = styled.div`
  display: flex;
  justify-content: center;

  text-align: center;
  font-size: 1rem;
  color: var(--white);
`;
