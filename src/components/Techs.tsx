import dockerSvg from "@/assets/docker.svg";
import goImg from "@/assets/go.png";
import linuxImg from "@/assets/linux.png";
import mysqlImg from "@/assets/mysql.svg";
import pythonImg from "@/assets/python.svg";
import reactImg from "@/assets/react.svg";
import tailwindImg from "@/assets/tailwind.svg";
import typescriptImg from "@/assets/typescript.svg";

const techs: { name: string; logo: string }[] = [
  { name: "React", logo: reactImg },
  { name: "TypeScript", logo: typescriptImg },
  { name: "TailwindCSS", logo: tailwindImg },
  { name: "Python", logo: pythonImg },
  { name: "Docker", logo: dockerSvg },
  { name: "Linux", logo: linuxImg },
  { name: "Go", logo: goImg },
  { name: "MySql", logo: mysqlImg },
];

export default function Techs() {
  return (
    <section className="container">
      <ul className="flex flex-wrap gap-1 justify-between">
        {techs.map(({ name, logo }) => (
          <li className="border px-3 py-1 rounded-md flex items-center gap-3 ">
            <img src={logo} alt={name} className="w-6" />
            {name}
          </li>
        ))}
      </ul>
    </section>
  );
}
