import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import Profile from "./components/User/Profile";
import Content from "./components/Hero/Content";
import LoginPage from "./components/Auth/LoginPage";
import RegisterPage from "./components/Auth/RegisterPage";
import ImageUpload from "./components/ImageUpload";
import EditProfile from "./components/User/EditProfile";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} >
        <Route path="user" element={<Profile />} />
        <Route path="editprofile" element={<EditProfile />} />
        <Route path="" element={<Content />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="image" element={<ImageUpload />} />
      <Route path="register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
