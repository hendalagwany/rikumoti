import {
  FaMusic,
  FaCloud,
  FaCoffee,
  FaHome
} from "react-icons/fa";

import {
  GiPianoKeys,
  GiDrumKit,
  GiGuitar,
} from "react-icons/gi";

import myukiImg from "../assets/images/members/M-voiceacting.png";
import ranmokiImg from "../assets/images/members/Ra-voiceacting.png";
import rikuImg from "../assets/images/members/R-voiceacting.png";
import totiImg from "../assets/images/members/T-voiceacitng.png";

import myukiDeImg from "../assets/images/members/MCharacterDetails.png"
import ranmokiDeImg from "../assets/images/members/RaCharacterDetails.png"
import rikuDeImg from "../assets/images/members/RCharacterDetails.png"
import totiDeImg from "../assets/images/members/TCharacterDetails.png"


export const members = [
  {
    id: "myuki",
    name: "Myuki",
    image: myukiImg,
    detalisImg: myukiDeImg,
    age: 30,
    instrument: "Piano",
    instrumentIcon: GiPianoKeys,
    color: "#E7C84E",
    secondaryColor : "#7AB8FF",
    hobby: "Baking",
    pin: FaMusic,
    favoriteFood: "Pizza",
    favoriteDrink: "Coffee",
    favoriteColor: "Yellow",
    birthday: "June 2",
    quote: "Music can heal hearts.",
    bio: "The oldest member of the group and a talented pianist.",
    tagline: "The caring big sister"
  },

  {
    id: "ranmoki",
    name: "Ranmoki",
    image: ranmokiImg,
    detalisImg: ranmokiDeImg,
    age: 27,
    instrument: "Drums",
    instrumentIcon: GiDrumKit,
    color: "#63D9FF",
    secondaryColor : "#74E58B",
    hobby: "Gaming",
    pin: FaCloud,
    favoriteFood: "Chocolate Cake",
    favoriteColor: "Sky Blue",
    favoriteDrink: "Coffee",
    birthday: "November 20",
    bio: "The energetic drummer of the group. She is always full of excitement and brings life to every rehearsal and performance.",
    quote: "Every beat tells a story.",
    tagline: "The energy of the group"
  },

  {
    id: "riku",
    name: "Riku",
    image: rikuImg,
    detalisImg: rikuDeImg,
    age: 25,
    instrument: "Guitar",
    instrumentIcon: GiGuitar,
    color: "#7A263A",
    secondaryColor : "#D9D9D9",
    hobby: "Coffee and Cup Collecting",
    pin: FaCoffee,
    favoriteFood: "Pizza",
    favoriteDrink: "Coffee",
    favoriteColor: "Burgundy",
    birthday: "January 11",
    quote: "Even the softest melody can reach someone's heart.",
    bio: "A calm and dependable guitarist who enjoys quiet moments, coffee, and collecting beautiful cups. She supports everyone from behind the scenes.",
    tagline: "Calm and dependable"
  },

  {
    id: "toti",
    name: "Toti",
    image: totiImg,
    detalisImg: totiDeImg,
    age: 24,
    instrument: "Bass",
    instrumentIcon: GiGuitar,
    color: "#B86DFF",
    secondaryColor : "#FF8DD8",
    hobby: "Programming",
    pin: FaHome,
    favoriteFood: "Chocolate Cake",
    favoriteColor: "Lavender",
    favoriteDrink: "Coffee",
    birthday: "June 27",
    bio: "The bassist of the group with a passion for programming and problem solving. Her warm smile makes everyone feel at home.",
    quote: "Small steps create the greatest journeys.",
    tagline: "A smile that brings comfort"
  }
];