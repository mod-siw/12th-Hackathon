import GlobalStyles from "./style/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import OnboardingPage from "./components/OnboardingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MainPage from "./pages/MainPage";
import CreatePage from "./pages/CreatePage";
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
          <Route path={"/create"} element={<CreatePage />}></Route>
          <Route path={"/detail/:id"} element={<DetailPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
