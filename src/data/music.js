import song1 from "../assets/sounds/song1.mp3";
import song1Cover from "../assets/images/songs/song1.png";

import song2 from "../assets/sounds/song2.m4a";
import song2Cover from "../assets/images/songs/song2.png";

import song3 from "../assets/sounds/song3.m4a";
import song3Cover from "../assets/images/songs/song3.png";

import song4 from "../assets/sounds/song4.m4a";
import song4Cover from "../assets/images/songs/song4.png";

import song6 from "../assets/sounds/song6.m4a";
import song6Cover from "../assets/images/songs/Msong.png";

import song5 from "../assets/sounds/song5.m4a";
import song5Cover from "../assets/images/songs/Rasong.png";

import song8 from "../assets/sounds/song8.m4a";
import song8Cover from "../assets/images/songs/Rsong.png";

import song9 from "../assets/sounds/song9.m4a";
import song9Cover from "../assets/images/songs/Tsong.png";

export const groupSongs = [
  {
    id: 1,
    title: "Blooming Days",
    audio: song1,
    cover: song1Cover
  },

  {
    id: 2,
    title: "Don't Stop Believing",
    audio: song2,
    cover: song2Cover
  },

  {
    id: 3,
    title: "Silent Notes",
    audio: song3,
    cover: song3Cover
  },

  {
    id: 4,
    title: "Break The Limit",
    audio: song4,
    cover: song4Cover
  }
];

export const memberSongs = {
  myuki: [
    {
      id: 1,
      title: "Golden Piano",
      audio: song6,
      cover: song6Cover
    }
  ],

  ranmoki: [
    {
      id: 1,
      title: "Drum Beat",
      audio: song5,
      cover: song5Cover
    }
  ],

  riku: [
    {
      id: 1,
      title: "Quiet Melody",
      audio: song8,
      cover: song8Cover
    }
  ],

  toti: [
    {
      id: 1,
      title: "Home Bass",
      audio: song9,
      cover: song9Cover
    }
  ]
};