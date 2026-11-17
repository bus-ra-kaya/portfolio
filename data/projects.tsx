import { ProjectItem } from "@/types/project";

export const projects: ProjectItem[] = [
  {
    id: "1",
    title: "Weatherby",
    description:
      "A minimal app for tracking current weather, humidity, and wind speed.",
    image: "/weatherby.png",
    imageAlt: "Dashboard with forecast details",
    details: [
      "Search any city or select a location via interactive map.",
      "Live location time updates for selected location.",
      "Dynamic weather data pulled from OpenWeather.",
    ],
    status: "07/2025",
    tech: ["HTML/CSS", "Javascript", "React"],
    githubUrl: "https://github.com/bus-ra-kaya/Weatherby",
    liveUrl: "",
  },
  {
    id: "2",
    title: "Timetable Maker",
    description:
      "A web app that creates timetables for schools with custom teachers and classes.",
    image: "/school-timetable-maker.png",
    imageAlt: "A form with class and teacher information",
    details: [
      "Create a schedule program for years from 1 to 12.",
      "Save previously created programs and view them.",
      "Download a pdf version of the program.",
    ],
    status: "04/2026",
    tech: ["HTML/CSS", "Typescript", "React", "Express.js", "Prisma"],
    githubUrl: "https://github.com/bus-ra-kaya/school-timetable-maker",
    liveUrl: "https://school-timetable-maker.vercel.app/",
  },
]