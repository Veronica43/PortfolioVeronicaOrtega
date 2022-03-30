import Funny from "../assets/funnyGifs.png";
import Jump from "../assets/jump.jpeg";
import Fem from "../assets/Femhack.png";
import Mobile from "../assets/Mobile.jpeg";

import Weather from "../assets/weatherapp.png";
import MultiStep from "../assets/Multistep.png";
import Admin from "../assets/admin.png";
import Portfolio from "../assets/portfolio.png";

export const projects = [
  {
    title: "GifExpert App",
    description:
      " This application have search functionality so that users can either retrieve trending gifs or search for specific keywords .",
    image: Funny,
    stack: "Built with React.js, JavaScript, HTML, CSS,API",

    url: "https://veronica43.github.io/react-gifexpert-App/",
    code: "https://github.com/Veronica43/react-gifexpert-App.git",
    id: 0,
  },

  {
    title: "Weather App",
    description:
      "This application show the weather from any city of the world,using the api from openwheathermap",
    stack: "Built with React.js, JavaScript, HTML, CSS,API",
    image: Weather,

    url: " https://weather-app-orpin-chi.vercel.app/",
    code: "https://github.com/Veronica43/WeatherApp",
    id: 3,
  },
  {
    title: "Multi Step-Form",
    description:
      "Single Page Application built for the Mobile World Congress 2022 - 4YFN Hackathon, which ranked 9/79 for the Front End challenge.The application is a profile creator with form validation entirely built from scratch; it collects user data and generates a profile page with the same information. It contains also an avatar generator (consuming data from RoboHash API).",

    stack: "Built with React.js, JavaScript, HTML, CSS",

    image: MultiStep,

    url: "https://hackaton-form.vercel.app/",
    code: "https://github.com/Veronica43/Hackaton-Form",
    id: 2,
  },
  {
    title: "Admin Dashboard",
    description:
      "This  a Admin Dashboard,  the field on which this challenge is focused is operations. Route optimization and flight planning to ensure carrying the maximum number of passengers and not wasting operational expenses.This project was built as a team for the Mobile World Congress Hackaton",
    stack: "Built with Next.js, JavaScript, HTML, Styled Components",
    image: Admin,

    url: "https://hackaton-form.vercel.app/",
    code: "https://github.com/Veronica43/Hackaton-Form",
    id: 4,
  },
  {
    title: "Portfolio",
    description: "",
    stack: "Built with React.js, JavaScript, HTML, CSS,EmailJS,Swipper",
    image: Portfolio,

    url: "https://portfolio-veronica-ortega.vercel.app",
    code: "https://github.com/Veronica43/PortfolioVeronicaOrtega",
    id: 5,
  },
];

export const hackatons = [
  {
    img: Jump,
    name: "Jump2 Digital",
    review:
      " This was my first Hackaton,it was a great experience,where I meet  and work with amazing people",
  },
  {
    img: Fem,
    name: "Jump2 Digital",
    review:
      " This was amazing! where woman around the world join this amazing event in a metaverse scenario",
  },
  {
    img: Mobile,
    name: "Jump2 Digital",
    review:
      " Here I was finalist to participate in the final on the Mobile World Congress in Barcelona,where my team and I get the second place!",
  },
];
