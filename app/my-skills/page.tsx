import ballRightTop from "../../public/img/ballRightTop.svg";
import ballLeftTop from "../../public/img/ballleftTop.svg";
import ballLeftBottom from "../../public/img/ballleftBottom.svg";
import animeMySkills from "../../public/img/animeMySkills.svg";
import jsImg from "../../public/img/js.svg";
import githubImg from '../../public/img/github.svg'
import vsCodeImg from '../../public/img/vscode.svg'
import figmaImg from "../../public/img/figma.svg";
import photoshopImg from "../../public/img/photoshop.svg";

import Link from "next/link";

const MySkills = () => {
  return (
    <div className="bg-black h-dvh relative">
      <div className="absolute w-full z-10">
        <div className=" text-white font-semibold flex justify-end mr-96 h-36 bg-transparent">
          <Link href={"/"}>
            <p className="choice1">Home</p>
          </Link>
          <p className="chouce_Default     ">My Skills</p>
          <Link href={"/my-projects"}>
            <p className="choice2">My Projects</p>
          </Link>
        </div>
      </div>

      <div>
        <p className="textBg left-16 absolute">
          PROFILE FILE
          <br />
          PROFILE PROFILE PROFILE
          <br />
          PROFILE PROFILE PROFILE
          <br />
          PROFILE PROFILE PROFILE
          <br />
          PROFILE PROFILE PROFILE
          <br />
          PROFILE PROFILE PROFILE
          <br />
        </p>
      </div>
      <div className="absolute  box1  z-20">
        <p className="text-center text-xl relative mt-5 mb-9">
          Programming & UX/UI
        </p>
        <div className="flex items-center justify-center flex-col">
          <div className="w-3/4 flex justify-between">
            <p className="tools pt-1 pb-1 flex items-center gap-2 pl-3 pr-3">
              <img src={jsImg.src} width={25} alt="" />
              Java Script
            </p>
            <p className="tools pt-1 pb-1 flex items-center gap-2 pl-3 pr-3">
              <img src={figmaImg.src} width={20} alt="" />
              Figma
            </p>
          </div>
          <p className="tools pt-1 pb-1 flex items-center gap-2 pl-3 pr-3 mt-8">
            <img src={photoshopImg.src} width={20} alt="" />
            Photoshop
          </p>
        </div>
      </div>

      <div className="absolute  box2  z-20">
        <p className="text-center text-xl relative mt-5 mb-9">
          Tools 
        </p>
        <div className="flex items-center justify-center flex-col">
          <div className="w-3/4 flex justify-between">
            <p className="tools pt-1 pb-1 flex items-center gap-2 pl-3 pr-3">
              <img src={figmaImg.src} width={20} alt="" />
              Figma
            </p>
            <p className="tools pt-1 pb-1 flex items-center gap-2 pl-3 pr-3">
              <img src={vsCodeImg.src} width={20} alt="" />
              vs code
            </p>
          </div>
          <p className="tools pt-1 pb-1 flex items-center gap-2 pl-3 pr-3 mt-8">
            <img src={githubImg.src} width={20} alt="" />
            Github
          </p>
        </div>
      </div>

      <img
        width={400}
        src={ballRightTop.src}
        className="absolute top-0 right-0 z-10 "
        alt=""
      />
      <p className="textTitle absolute  top-5 left-28 z-10">My Skills</p>
      <img src={ballLeftTop.src} className="absolute " width={480} alt="" />
      <img
        src={ballLeftBottom.src}
        className="absolute  bottom-0 left-0"
        width={500}
        alt=""
      />
      <img
        src={animeMySkills.src}
        className="animeMySkills absolute  bottom-0 right-0 hover:scale-105 hover:bottom-4 hover:right-3   transition-all duration-300"
        style={{ height: "80%" }}
        alt=""
      />
    </div>
  );
};

export default MySkills;
