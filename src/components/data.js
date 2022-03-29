import Funny from "../assets/funnyGifs.png";
import Jump from "../assets/jump.jpeg";
import Fem from "../assets/Femhack.png";
import Mobile from "../assets/Mobile.jpeg";
import MovieApp from "../assets/movieapp.png";
import Weather from "../assets/weatherapp.png";
import MultiStep from "../assets/Multistep.png";
import Admin from "../assets/admin.png";

export const projects = [
  {
    title: "GifExpert App",
    description:
      " How to handle and validate React form inputs using different ways. Handling forms in React using useState, useRef and FormData.",
    image: Funny,

    url: "https://veronica43.github.io/react-gifexpert-App/",
    code: "https://github.com/Veronica43/react-gifexpert-App.git",
    id: 0,
  },
  {
    title: "Movie App",
    description:
      "Using GIPHY api and React js and search functionality so that users can either retrieve trending gifs or search for specific keywords .",
    image: MovieApp,

    url: " https://react-appmovie.vercel.app/",
    code: "https://github.com/Veronica43/React.appmovie",
    id: 1,
  },
  {
    title: "Weather App",
    description:
      "To do App using ReactJs,where the user will be able to add, remove, edit, and mark complete/cross out the todo items.  .",
    image: Weather,

    url: " https://weather-app-orpin-chi.vercel.app/",
    code: "https://github.com/Veronica43/WeatherApp",
    id: 3,
  },
  {
    title: "Multi Step-Form",
    description:
      "Personal portfolio minimalistic, using ReactJs,React-Router-Dom,where you can see my projects and a little about me,also a functional contact form",
    image: MultiStep,

    url: "https://hackaton-form.vercel.app/",
    code: "https://github.com/Veronica43/Hackaton-Form",
    id: 2,
  },
  {
    title: "Admin Dashboard",
    description:
      "Personal portfolio minimalistic, using ReactJs,React-Router-Dom,where you can see my projects and a little about me,also a functional contact form",
    image: Admin,

    url: "https://hackaton-form.vercel.app/",
    code: "https://github.com/Veronica43/Hackaton-Form",
    id: 4,
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
