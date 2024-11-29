import ballRightTop from "../../public/img/ballRightTop.svg";
import ballLeftTop from "../../public/img/ballleftTop.svg";
import ballLeftBottom from "../../public/img/ballleftBottom.svg";
import animeMySkills from "../../public/img/animeMySkills.svg";
import jsImg from "../../public/img/js.svg";
import githubImg from "../../public/img/github.svg";
import vsCodeImg from "../../public/img/vscode.svg";
import figmaImg from "../../public/img/figma.svg";
import photoshopImg from "../../public/img/photoshop.svg";
import Image from "next/image";

import Link from "next/link";

const MySkills = () => {
  return (
    <div className="bg-black h-dvh relative">
      <title>My Skills</title>
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
        <p className="textBg left-10 absolute">
          PROFILE PROFI
          <br />
          PROFILE PROFILE PROFILE PRO
          <br />
          PROFILE PROFILE PROFILE PRO
          <br />
          PROFILE PROFILE PROFILE PRO
          <br />
          PROFILE PROFILE PROFILE PRO
          <br />
          PROFILE PROFILE PROFILE PRO
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
              <Image src={jsImg.src} width={25} height={100} alt="" />
              Java Script
            </p>
            <p className="tools pt-1 pb-1 flex items-center gap-2 pl-3 pr-3">
              <Image src={figmaImg.src} width={20} height={100} alt="" />
              Figma
            </p>
          </div>
          <p className="tools pt-1 pb-1 flex items-center gap-2 pl-3 pr-3 mt-8">
            <Image src={photoshopImg.src} height={100} width={20} alt="" />
            Photoshop
          </p>
        </div>
      </div>

      <div className="absolute  box2  z-20">
        <p className="text-center text-xl relative mt-5 mb-9">Tools</p>
        <div className="flex items-center justify-center flex-col">
          <div className="w-3/4 flex justify-between">
            <p className="tools pt-1 pb-1 flex items-center gap-2 pl-3 pr-3">
              <Image src={figmaImg.src} width={20} height={100} alt="" />
              Figma
            </p>
            <p className="tools pt-1 pb-1 flex items-center gap-2 pl-3 pr-3">
              <Image src={vsCodeImg.src} height={100} width={20} alt="" />
              vs code
            </p>
          </div>
          <p className="tools pt-1 pb-1 flex items-center gap-2 pl-3 pr-3 mt-8">
            <Image src={githubImg.src} height={100} width={20} alt="" />
            Github
          </p>
        </div>
      </div>

      <Image
        width={400}
        src={ballRightTop.src}
        className="absolute top-0 right-0 z-10 "
        alt=""
        height={100}
      />
      <p className="textTitle absolute  top-5 left-28 z-10">My Skills</p>
      <Image
        src={ballLeftTop.src}
        className="absolute "
        height={100}
        width={480}
        alt=""
      />
      <Image
        src={ballLeftBottom.src}
        className="absolute  bottom-0 left-0"
        width={500}
        height={100}
        alt=""
      />
      <Image
        src={animeMySkills.src}
        width={0}
        className="animeMySkills absolute  bottom-0 right-0 hover:scale-105 hover:bottom-4 hover:right-3   transition-all duration-300"
        style={{ height: "80%" }}
        alt=""
        height={100}
      />
    </div>
  );
};

export default MySkills;
