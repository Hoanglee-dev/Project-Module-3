import { Navigate, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Profile from "./components/User/Profile";
import Content from "./components/Hero/Content";
import LoginPage from "./components/Auth/LoginPage";
import RegisterPage from "./components/Auth/RegisterPage";
import ImageUpload from "./components/ImageUpload";
function App() {
  return (
    <div className="flex flex-col h-screen">
      <Routes>
        <Route path="/" element={<Main />} >
          <Route path="user" element={<Profile />} />
          <Route path="" element={<Content />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="image" element={<ImageUpload />} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
