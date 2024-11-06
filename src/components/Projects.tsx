import ludoimg from "@/assets/ludo/ludo.png";
import mirkuzImg from "@/assets/mirkuz/mirkuz.png";
import jupImg from "@/assets/mypache/jup.png";
import yehuluImg from "@/assets/yehulu/home.png";
import { BiLinkExternal } from "react-icons/bi";

import { BsGithub } from "react-icons/bs";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function Projects() {
  return (
    <section className="container grid md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Yehulusaccos</CardTitle>
          <CardDescription>
            <p>Financial Cooperative CMS Website</p>
            <p>Web lead at Upsurge.et</p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <img
            src={yehuluImg}
            className="rounded-md h-[220px] object-contain bg-muted"
            alt=""
          />
        </CardContent>
        <CardFooter>
          <div className="flex flex-col gap-3">
            <p className="text-foreground/70 text-sm">
              Managed development and deployment of a Next.js CMS website for
              our 1st paying client.
            </p>

            <div className="flex justify-end flex-wrap">
              <a
                href="https://yehulusaccos.com/en/home"
                target="_blank"
                className="flex items-center gap-1 border text-sm px-2 rounded"
              >
                <BiLinkExternal /> Visit
              </a>
            </div>
          </div>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Mypache Spark</CardTitle>
          <CardDescription>
            <p>Managed Apache Spark Platform Reconstruction</p>
            <p>Personal Project</p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <img
            src={jupImg}
            className="rounded-md h-[220px] object-contain bg-muted"
            alt=""
          />
        </CardContent>
        <CardFooter>
          <div className="flex flex-col gap-3">
            <p className="text-foreground/70 text-sm">
              Simplified replica of Databricks + Apache Spark only using UI and
              Rest API libraries.
            </p>
            <div className="flex justify-end flex-wrap">
              <a
                href="https://github.com/yonatan-h/mypache"
                target="_blank"
                className="flex items-center gap-1 border text-sm px-2 rounded"
              >
                <BsGithub /> GitHub
              </a>
            </div>
          </div>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Mirkusve</CardTitle>
          <CardDescription>
            <p>Leetcode submission Chrome Extension</p>
            <p>Competitive Programmer at A2SV</p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <img
            src={mirkuzImg}
            className="rounded-md h-[220px] object-contain bg-muted"
            alt=""
          />
        </CardContent>
        <CardFooter>
          <div className="flex flex-col gap-3">
            <p className="text-foreground/70 text-sm">
              Automated 500+ leetcode answer file submissions until official
              replacement was deployed by A2SV.
            </p>
            <div className="flex justify-end flex-wrap">
              <a
                href="https://github.com/yonatan-h/mirkusve2"
                target="_blank"
                className="flex items-center gap-1 border text-sm px-2 rounded"
              >
                <BsGithub /> GitHub
              </a>
            </div>
          </div>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Ludoking</CardTitle>
          <CardDescription>
            <p>Ludoking live multiplayer game with distributed backend</p>
            <p>School Group Project</p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <img
            src={ludoimg}
            className="rounded-md h-[220px] object-contain bg-muted"
            alt=""
          />
        </CardContent>
        <CardFooter>
          <div className="flex flex-col gap-3">
            <p className="text-foreground/70 text-sm">
              Implemented game session restoration on server failure and load
              balancing among servers using Golang.
            </p>
            <div className="flex justify-end flex-wrap">
              <a
                href="https://github.com/hayk2377/distributed-ludo"
                target="_blank"
                className="flex items-center gap-1 border text-sm px-2 rounded"
              >
                <BsGithub /> GitHub
              </a>
            </div>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
}
