import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import Profile from "./components/User/Profile";
import Content from "./components/Hero/Content";
import LoginPage from "./components/Auth/LoginPage";
import RegisterPage from "./components/Auth/RegisterPage";
import ImageUpload from "./components/ImageUpload";
import EditProfile from "./components/User/EditProfile";
import UserProvider from "./components/User/UserContext";
import EditPost from "./components/Posts/EditPost";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route
          path="user"
          element={
            <UserProvider>
              <Profile />
            </UserProvider>
          }
        />
        <Route
          path="edit-profile"
          element={
            <UserProvider>
              <EditProfile />
            </UserProvider>
          }
        />
        <Route path="" element={<Content />} />
        <Route path="edit-post/:id" element={<EditPost />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="image" element={<ImageUpload />} />
      <Route path="register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
