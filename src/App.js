import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from "./Theme"
import { useSelector } from "react-redux";
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import Video from './Pages/Video';
import Search from './Pages/Search';


const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.soft};
`;
const Wrapper = styled.div`
  padding: 20px;
`;

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Container>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home type="random" />} />
                  <Route path="trends" element={<Home type="trend" />} />
                  <Route path="subscriptions" element={<Home type="sub" />} />
                  <Route path="search" element={<Search />} />
                  <Route
                    path="signin"
                    element={currentUser ? <Home /> : <SignIn />}
                  />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>

        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
