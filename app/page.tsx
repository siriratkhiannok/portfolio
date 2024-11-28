import anime from "../public/img/anime.svg";
import ball1 from "../public/img/ball1.svg";
import ball2 from "../public/img/ball2.svg";

export default function Home() {
  return (
    <div
      className="bg-black w-auto box-border"
      style={{ width: "100dvw", height: "100dvh" }}
    >
      <div className="absolute w-full">

      <div className="text-white font-semibold flex justify-end mr-28 h-36  bg-transparent">
        <p className="ml-6  mr-6  pt-10 pl-3 pr-3 pb-7 h-24 border border-red-500 bg-gradient-to-b from-slate-800 to-black rounded-b-full" >Home</p>
        <p className="ml-6  mr-6  pt-10 pl-3 pr-3 pb-7 h-24 border border-red-500 bg-gradient-to-b from-slate-800 to-black rounded-b-full" >My Skills</p>
        <p className="ml-6  mr-6  pt-10 pl-3 pr-3 pb-7 h-28 border border-red-500 bg-gradient-to-b from-slate-800 to-black rounded-b-full" >My Projects</p>
        <p className="ml-10 mr-6  pt-10 pl-3 pr-3 pb-7 h-28 border border-red-500 bg-gradient-to-b from-slate-800 to-black rounded-b-full" > My Education</p>
      </div>
      </div>
      <img width={360} src={ball1.src} className="absolute" alt="" />
      <img
        width={400}
        src={ball2.src}
        className="absolute bottom-0 right-0"
        alt=""
      />
      <img
        className="absolute bottom-0 left-20"
        style={{ height: "90%" }}
        src={anime.src}
        alt=""
      />
      <div className="relative pl-20 pr-20 box-border"></div>
    </div>
  );
}
