import GlobalStyles from "./style/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import OnboardingPage from "./components/OnboardingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MainPage from "./pages/MainPage";
import CreatePage1 from "./pages/CreatePage1";
import CreatePage2 from "./pages/CreatePage2";
import CreatePage3 from "./pages/CreatePage3";
import CreatePage4 from "./pages/CreatePage4";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<OnboardingPage />}></Route>
          <Route path={"/login"} element={<LoginPage />}></Route>
          <Route path={"/signup"} element={<SignupPage />}></Route>
          <Route path={"/main"} element={<MainPage />}></Route>
          <Route path={"/create1"} element={<CreatePage1 />}></Route>
          <Route path={"/create2"} element={<CreatePage2 />}></Route>
          <Route path={"/create3"} element={<CreatePage3 />}></Route>
          <Route path={"/create4"} element={<CreatePage4 />}></Route>
          <Route path={"/detail/:id"} element={<DetailPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
