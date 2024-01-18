import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";
import RegisterPage from "./RegisterPage/RegisterPage";
import HomePage from "./HomePage/HomePage";
import NewsPage from "./NewsPage/NewsPage";
import NoticesPage from "./NoticesPage/NoticesPage";
import OurFriendsPage from "./OurFriendsPage/OurFriendsPage";
import ProfilePage from "./ProfilePage/ProfilePage";
import AddPetPage from "./AddPetPage/AddPetPage";
import SharedLayout from "../components/SharedLayout/SharedLayout";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="home" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />

        <Route path="news" element={<NewsPage />} />
        <Route path="notices" element={<NoticesPage />} />
        <Route path="our-friends" element={<OurFriendsPage />} />

        <Route path="profile" element={<ProfilePage />} />
        <Route path="add-pet" element={<AddPetPage />} />
      </Route>
    </Routes>
  );
}
