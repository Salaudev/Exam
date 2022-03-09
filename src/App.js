import { Container } from "@mui/material";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategoryPage from "./pages/categoryPage";
import MainPage from "./pages/mainPage";
import store from "./redux/store";
import MainThemeProvider from "./ThemeProvider";

function App() {
  return (
    <MainThemeProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/category/:category" element={<CategoryPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </MainThemeProvider>
  );
}

export default App;
