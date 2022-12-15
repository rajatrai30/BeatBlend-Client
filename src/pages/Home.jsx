/* eslint-disable no-nested-ternary */
import React from 'react';
import Discover from './Discover';
// import TopArtists from './TopArtists';

const date = new Date();

const hours = date.getHours();

let i = 0;
function change() {
  const doc = document.getElementById('background');
  const color = ['नमस्ते,', 'Hello,', 'Bonjour,', 'Hola,', 'Zdravstvuyte,', 'Nǐn hǎo,', 'Salve,', 'Konnichiwa,', 'Guten Tag,', 'Olá,', 'Anyoung haseyo,', 'Asalaam alaikum,', 'Goddag,'];
  doc.innerHTML = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 3000);
const Home = () => (
  <div className="flex flex-col">
    <div className="flex flex-row w-full items-center mt-4 mb-10">
      <h2 id="background" className="fonts-space-grotesk text-3xl text-cyan-400 pr-3"> </h2> {hours >= 12 ? hours >= 16 ? <h2 className="font-bold text-3xl text-white text-left sm:text-2xl md:text-3xl sm:font-italics">Good Evening👋😄</h2> : <h2 className="font-bold text-3xl text-white text-left">Good Afternoon👋😄</h2> : <h2 className="font-bold text-3xl text-white text-left">Good Morning👋😄</h2>}<br />
    </div>
    <h1 className="font-bold text-3xl text-[#ffffff] text-left">Welcome to <span className="text-3xl text-[#d854d8] font-serif">BeatBlend!</span></h1>
    <div className="block sm:hidden">
      <Discover />
    </div>
  </div>
);

export default Home;
