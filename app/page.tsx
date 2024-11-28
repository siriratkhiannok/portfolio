import anime from "../public/img/anime.svg";
import ball1 from "../public/img/ball1.svg";
import ball2 from "../public/img/ball2.svg";
import ball3 from "../public/img/ball3.svg";

export default function Home() {
  return (
    <div
      className="bg-black w-auto box-border "
      style={{ width: "100dvw", height: "100dvh" }}
    >
      <title>Portfolio</title>
      <div className="absolute w-full z-10">
        <div className=" text-white font-semibold flex justify-end mr-96 h-36 bg-transparent">
          <p className="chouce_Default">Home</p>
          <p className="choice1 ">My Skills</p>
          <p className="choice2">My Projects</p>
        </div>
      </div>
      <img width={360} src={ball1.src} className="absolute" alt="" />
      <img width={300} src={ball3.src} className="absolute top-0 right-0 " alt="" />
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
