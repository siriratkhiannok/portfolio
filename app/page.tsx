import Link from "next/link";

import anime from "../public/img/anime.svg";
import ball1 from "../public/img/ball1.svg";
import ball2 from "../public/img/ball2.svg";
import ball3 from "../public/img/ball3.svg";
import mail from "../public/img/mail.svg";
import phone from "../public/img/phone.svg";
import github from "../public/img/github.svg";

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
          <Link href={"/my-skills"}>
            <p className="choice1 ">My Skills</p>
          </Link>
          <Link href={'/my-projects'}>
            <p className="choice2">My Projects</p>
          </Link>
        </div>
      </div>
      <img width={360} src={ball1.src} className="absolute" alt="" />
      <img
        width={300}
        src={ball3.src}
        className="absolute top-0 right-0 "
        alt=""
      />
      <img
        width={400}
        src={ball2.src}
        className="absolute bottom-0 right-0"
        alt=""
      />
      <img
        className="absolute bottom-0 left-28 hover:scale-105 hover:bottom-5  transition-all duration-300"
        style={{ height: "90%" }}
        src={anime.src}
        alt=""
      />
      <div
        className="h-1/3 ml-48 absolute boxContent"
        style={{ width: "37%", top: "30%", left: "40%" }}
      >
        <p className="TextHi">Hello Everyone!</p>
        <p className="nameText">I'm Sirirat Khiannok</p>
        <p className="description">
          software engineering student I love designing web applications with
          expertise in Figma, Visual Studio Code, Photoshop and have a strong
          passion for learning best practices in software development.
        </p>
        <div className="mt-7 w-full">
          <div className="flex w-full mb-7">
            <p className="contact w-52 me-16">
              <img src={mail.src} alt="" />
              66022916@up.ac.th
            </p>
            <p className="contact w-52">
              <img src={phone.src} width={"18px"} alt="" />
              097 - * * * * * * *
            </p>
          </div>
          <a href="https://github.com/siriratkhiannok">
            <p className="contact w-72 ">
              <img src={github.src} width={"25px"} alt="" />
              github.com/siriratkhiannok
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
