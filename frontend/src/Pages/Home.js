import React from "react";
import { SocialIcon } from "react-social-icons";

const Home = () => {
  const workingGirl = "/images/working.jpg";
  return (
    <div className="py-10 px-2 md:p-10 flex justify-around dark:bg-black dark:text-white">
      <div className="md:w-1/2 text-center md:py-24">
        <h1 className="font-bold text-2xl">Hii There 👋🏻</h1>
        <h1 className="font-bold text-2xl">I'm Ashlyn Joshy</h1>
        <p className="font-semibold my-3">
          A computer science graduate with a passion for web development. I’m
          self-learning the MERN Stack, constantly exploring new ways to build
          dynamic and interactive applications.
        </p>
        <h3 className="font-bold text-xl">Find me on</h3>
        <h4 className="font-semibold">Feel free to connect with me</h4>
        <ul className="flex justify-around py-3">
          <li>
            <SocialIcon
              bgColor="black"
              network="linkedin"
              url="https://www.linkedin.com/in/ashlyn-joshy-2a2296199/"
            />
          </li>
          <li>
            <SocialIcon
              bgColor="black"
              network="github"
              url="https://github.com/Ashlyn-Joshy"
            />
          </li>
          <li>
            <SocialIcon
              bgColor="black"
              network="instagram"
              url="https://www.instagram.com/there_se02/"
            />
          </li>
          <li>
            <SocialIcon
              bgColor="black"
              network="x"
              url="https://x.com/AshlynJoshy"
            />
          </li>
          <li>
            <SocialIcon
              bgColor="black"
              network="rss"
              url="https://ashlynjoshy.hashnode.dev/"
            />
          </li>
          <li>
            <SocialIcon
              bgColor="black"
              network="codepen"
              url="https://codepen.io/Ashlyn-Joshy"
            />
          </li>
        </ul>
      </div>
      <div className="hidden md:block">
        <img
          src={workingGirl}
          alt="working-girl"
          className="h-80 w-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
