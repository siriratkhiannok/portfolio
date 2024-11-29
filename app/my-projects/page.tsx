import Link from "next/link";

const MyProjects = () => {
  return (
    <div className="bg-black h-dvh relative">
      <div className="absolute w-full z-10">
        <div className=" text-white font-semibold flex justify-end mr-96 h-36 bg-transparent">
          <Link href={"/"}>
            <p className="choice1">Test Reverse</p>
          </Link>
          <Link href={'/my-skills'}>
          
          <p className="choice1">My Skills</p>
          </Link>
            <p className="chouce_Default">My Projects</p>
        </div>
      </div>

      <div>
        <p className="textBg left-16 absolute">
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
    </div>
  );
};

export default MyProjects;
