import { Navigate, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Profile from "./components/User/Profile";
import Content from "./components/Hero/Content";
import LoginPage from "./components/Auth/LoginPage";
import RegisterPage from "./components/Auth/RegisterPage";
import EditProfile from "./components/User/EditProfile";
import EditPost from "./components/Posts/EditPost";
import { useContext } from "react";
import { UserContext } from "./components/User/UserContext";

function App() {
  const { userInfor } = useContext(UserContext);
  console.log("🚀 ~ App ~ userInfor:", userInfor);

  return (
    // <Routes>
    //   <Route
    //     path="/"
    //     element={
    //       <UserProvider>
    //         <Main />
    //       </UserProvider>
    //     }
    //   >
    //     <Route path="user" element={<Profile />} />
    //     <Route path="edit-profile" element={<EditProfile />} />
    //     <Route path="" element={<Content />} />
    //     <Route path="edit-post/:id" element={<EditPost />} />
    //   </Route>
    //   <Route path="login" element={<LoginPage />} />
    //   <Route path="image" element={<ImageUpload />} />
    //   <Route path="register" element={<RegisterPage />} />
    // </Routes>
    <Routes>
      {userInfor ? (
        <>
          <Route path="/" element={<Main />}>
            <Route path="user" element={<Profile />} />
            <Route path="edit-profile" element={<EditProfile />} />
            <Route path="home" element={<Content />} />
            <Route path="edit-post/:id" element={<EditPost />} />
            <Route path="*" element={<Navigate to="home" replace />} />
          </Route>
        </>
      ) : (
        <>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </>
      )}
    </Routes>
  );
}

export default App;
