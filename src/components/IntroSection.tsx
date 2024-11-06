import { IconType } from "react-icons";
import { BsBookFill, BsDot, BsGithub, BsLinkedin } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { SiCodeforces, SiLeetcode } from "react-icons/si";
import profileImg from "../assets/profile.jpg";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const links: { to: string; Icon: IconType; title: string }[] = [
  { to: "https://github.com/yonatan-h/", title: "GitHub", Icon: BsGithub },
  {
    to: "https://www.linkedin.com/in/yonatan-haile-demisse/",
    title: "LinkedIn",
    Icon: BsLinkedin,
  },
  {
    to: "https://leetcode.com/yonatan-h/",
    title: "LeetCode",
    Icon: SiLeetcode,
  },
  {
    to: "https://codeforces.com/profile/yonatan-h",
    title: "Codeforces",
    Icon: SiCodeforces,
  },
];

export default function IntroSection() {
  const email = "yonatanhaile.y@gmail.com";
  return (
    <section className="container flex flex-col gap-12">
      <div className="flex gap-3 flex-wrap ">
        <Popover>
          <PopoverTrigger
            onClick={() => {
              navigator.clipboard.writeText(email);
            }}
          >
            <span className="flex items-center gap-2 border px-1 rounded ">
              <MdEmail className="text-lg" />

              {email}
            </span>
          </PopoverTrigger>
          <PopoverContent>Copied!</PopoverContent>
        </Popover>

        {links.map(({ Icon, to, title }) => (
          <a
            className="flex items-center gap-2 border px-1 rounded "
            key={title}
            href={to}
            target="_blank"
            rel="noreferrer"
          >
            {<Icon />} {title}
          </a>
        ))}
      </div>
      <div className="flex flex-col gap-12 md:flex-row justify-between">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-6xl">Yonatan Haile</h1>
            <p className="text-2xl pl-4">Software Engineer</p>
          </div>
          <div className="flex-1"></div>
          <div>
            <p className="flex gap-3 items-center">
              <ImLocation />
              Addis Ababa, Ethiopia
            </p>
            <p className="flex gap-3 items-center ">
              <BsBookFill /> Addis Ababa University, 5th year Software
              Engineering
            </p>

            <hr className="my-3" />
            <p className="flex items-center ">
              <BsDot className="mr-3" />
              Led production of 24,000 lines of code as startup web lead
            </p>

            <p className="flex items-center ">
              <BsDot className="mr-3" />
              Completed 600+ competitive programming questions in A2SV
            </p>
          </div>
        </div>
        <div>
          <img src={profileImg} className="rounded-md sm:max-w-[350px] " />
        </div>
      </div>
    </section>
  );
}
