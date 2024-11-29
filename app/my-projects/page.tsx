import Link from "next/link";
import ball3LT from "../../public/img/ball3LT.svg";
import ball3RT from "../../public/img/ball3RT.svg";
import ball3LB from "../../public/img/ball3LB.svg";
import ball3RB from "../../public/img/ball3RB.svg";
import linkIcon from "../../public/img/linkIcon.svg";
import animeMyProject from "../../public/img/animeMyProjects.svg";
import Image from "next/image";

const MyProjects = () => {
  return (
    <div className="bg-black h-dvh relative">
      <title>My Projects</title>
      <div className="absolute w-full z-10">
        <div className=" text-white font-semibold flex justify-end mr-96 h-36 bg-transparent">
          <Link href={"/"}>
            <p className="choice1">Home</p>
          </Link>
          <Link href={"/my-skills"}>
            <p className="choice1">My Skills</p>
          </Link>
          <p className="chouce_Default">My Projects</p>
        </div>
      </div>

      <p className="absolute top-5 left-80 z-10 title3">My Projects</p>
      <div className="absolute myProjectContent">
        <div className="flex justify-between items-center">
          <p className="title33">Phayao Place</p>
          <a
            className="cursor-pointer hover:scale-150 transition-all duration-300  "
            href="https://www.figma.com/proto/TWpmhwVZWRN486pssl9iKU/phayao-place?node-id=20-2&scaling=scale-down-width&content-scaling=fixed"
          >
            <Image src={linkIcon.src} height={100} width={25} alt="" />
          </a>
        </div>
        <p className="descriptionText pt-5 pb-5">
          Demo of hotel reservation system
        </p>
        <ul className="list-disc pl-4">
          <li className="descriptionText">
            The system selects rooms for how many people are needed.{" "}
          </li>
          <li className="descriptionText">
            The system selects the reservation date for how many days you want
            to reserve your stay and what day you want to check out.
          </li>
          <li className="descriptionText">
            The system transfers money via QR code.
          </li>
        </ul>
      </div>

      <div>
        <p className="textBg left-10 absolute">
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

      <Image
        height={100}
        src={ball3LT.src}
        className="absolute top-0 left-0"
        width={300}
        alt=""
      />
      <Image
        height={100}
        src={ball3LB.src}
        className="absolute bottom-0 left-0"
        width={420}
        alt=""
      />
      <Image
        height={100}
        width={350}
        src={ball3RT.src}
        className="absolute top-0 right-0 z-10"
        alt=""
      />
      <Image

        height={100}
        src={ball3RB.src}
        className="absolute bottom-0 right-0 "
        width={400}
        alt=""
      />
      <Image
        height={100}
        src={animeMyProject.src}
        className="absolute bottom-0 right-0 z-20 hover:scale-105 hover:bottom-4 hover:right-3   transition-all duration-300"
        width={400}
        alt=""
      />
    </div>
  );
};

export default MyProjects;
