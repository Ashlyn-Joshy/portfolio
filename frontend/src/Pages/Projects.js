import React from "react";
import { SocialIcon } from "react-social-icons";

const Projects = () => {
  return (
    <div className="py-10 px-2 md:p-10 dark:bg-black dark:text-white">
      <h1 className="text-center font-bold uppercase text-2xl">
        My Recent works
      </h1>
      <h3 className="text-center font-semibold">
        Here are a few projects I've worked on recently
      </h3>
      <div className="grid gap-5 m-5 md:grid-cols-3">
        <div className="outline p-5 m-3">
          <h4 className="font-semibold">Blog App</h4>
          <p>
            It serves as a hub for exchanging ideas, knowledge, and personal
            stories in a dynamic online environment.
          </p>
          <div className="m-2 flex justify-around">
            <SocialIcon
              bgColor="black"
              network="github"
              url="https://github.com/Ashlyn-Joshy/BlogApp"
            />
          </div>
        </div>
        <div className="outline p-5 m-3">
          <h4 className="font-semibold">Aconews</h4>
          <p>
            News application that send users with the most recent news from a
            variety of categories, including general, trending, business, and
            sports.
          </p>
          <div className="m-2 flex justify-around">
            <SocialIcon
              bgColor="black"
              network="rss"
              url="https://aconews-788ad.web.app/"
            />

            <SocialIcon
              bgColor="black"
              network="github"
              url="https://github.com/Ashlyn-Joshy/Aconews"
            />
          </div>
        </div>
        <div className="outline p-5 m-3">
          <h4 className="font-semibold">Fitness Planner</h4>
          <p>
            FitnessPlanner is a comprehensive web application designed to help
            users manage their fitness routines efficiently.
          </p>
          <div className="m-2 flex justify-around">
            <SocialIcon
              bgColor="black"
              network="github"
              url="https://github.com/Ashlyn-Joshy/FitnessPlanner"
            />
          </div>
        </div>
        <div className="outline p-5 m-3">
          <h4 className="font-semibold">Quick Bite</h4>
          <p>This react app is built using the live Swiggy API's</p>
          <div className="m-2 flex justify-around">
            <SocialIcon
              bgColor="black"
              network="rss"
              url="https://quickbites1.netlify.app/"
            />

            <SocialIcon
              bgColor="black"
              network="github"
              url="https://github.com/Ashlyn-Joshy/Quick-Bite"
            />
          </div>
        </div>
        <div className="outline p-5 m-3">
          <h4 className="font-semibold">Book Directory</h4>
          <p>
            Discover, review, and add book entries on our platform for book
            enthusiasts. Admins have full control.
          </p>
          <div className="m-2 flex justify-around">
            <SocialIcon
              bgColor="black"
              network="rss"
              url="https://bookdirectory-lng2.onrender.com/"
            />

            <SocialIcon
              bgColor="black"
              network="github"
              url="https://github.com/Ashlyn-Joshy/BookDirectory"
            />
          </div>
        </div>
        <div className="outline p-5 m-3">
          <h4 className="font-semibold">Yelp Camp</h4>
          <p>
            It is a web application that allows campers to discover and review
            campgrounds, fostering community exploration and sharing
            experiences.
          </p>
          <div className="m-2 flex justify-around">
            <SocialIcon
              bgColor="black"
              network="rss"
              url="https://yelpcamp-ftd4.onrender.com/"
            />

            <SocialIcon
              bgColor="black"
              network="github"
              url="https://github.com/Ashlyn-Joshy/YelpCamp"
            />
          </div>
        </div>
        <div className="outline p-5 m-3">
          <h4 className="font-semibold">Weather-App</h4>
          <p>
            User-friendly weather app, delivering accurate and real-time
            forecasts through Weather API.
          </p>
          <div className="m-2 flex justify-around">
            <SocialIcon
              bgColor="black"
              network="rss"
              url="https://ashlyn-joshy.github.io/Weather-App/"
            />

            <SocialIcon
              bgColor="black"
              network="github"
              url="https://github.com/Ashlyn-Joshy/Weather-App"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
