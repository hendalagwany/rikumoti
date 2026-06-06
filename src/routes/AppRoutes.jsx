import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home.jsx";
import Members from "../pages/Members.jsx";
import MemberDetails from "../pages/MemberDetails.jsx";
import Anime from "../pages/Anime.jsx";
import Music from "../pages/Music.jsx";
import VoiceActing from "../pages/VoiceActing.jsx";
import News from "../pages/News.jsx";
import Merch from "../pages/Merch.jsx";
import Gallery from "../pages/Gallery.jsx";
import FanClub from "../pages/FanClub.jsx";
import VoiceActingDetails from "../pages/VoiceActingDetails.jsx";
import NewsDetails from "../pages/NewsDetails.jsx";
import AnimeDetails from "../pages/AnimeDetails.jsx";
import MerchDetails from "../pages/MerchDetails.jsx";


function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/members" element={<Members />} />
            <Route path="/member/:id" element={<MemberDetails />} />
            <Route path="/voiceacting" element={<VoiceActing />} />
            <Route path="/music" element={<Music />} />
            <Route path="/anime" element={<Anime />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/merch" element={<Merch />} />
            <Route path="/fanclub" element={<FanClub />} />
            <Route path="/news" element={<News />} />
            <Route path="/voiceacting/:id" element={<VoiceActingDetails />} />
            <Route path="/news/:id" element={<NewsDetails />} />
            <Route path="/anime/:id" element={<AnimeDetails />} />
            <Route path="/merch/:id" element={<MerchDetails />} />

        </Routes>
    );
}

export default AppRoutes;