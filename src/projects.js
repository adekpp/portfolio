import PhishingOutlinedIcon from "@mui/icons-material/PhishingOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import RamenDiningIcon from "@mui/icons-material/RamenDining";

export const projects = [
  {
    id: 5,
    title: "Hours tracker",
    content:
      "Hours Tracker is a robust and easy-to-use platform for tracking work hours. It offers users the ability to monitor their working hours and also the convenience of generating a PDF with a monthly hours summary.",
    icon: <ScheduleOutlinedIcon fontSize="large" />,
    links: {
      github: "https://github.com/adekpp/hours-tracker",
      demo: "https://hours-tracker-adekpp.vercel.app",
    },
  },
  {
    id: 4,
    title: "Shopping list",
    content:
      "Nextjs app, google auth not working in embedded browsers (like messenger etc...). Mobile target (max-width 500px).",
    bg: "from-blue-700 to-blue-400",
    icon: <FormatListBulletedIcon fontSize="large" />,
    links: {
      github: "https://github.com/adekpp/shopping-list",
      demo: "https://shopping-list-beta-murex.vercel.app",
    },
  },
  {
    id: 3,
    title: "Food recipes",
    content:
      "Browse, add, like food recipes. Facebook/Google auth. Vue + supabase",
    bg: "from-red-700 to-red-400",
    icon: <RamenDiningIcon fontSize="large" />,
    links: {
      github: "https://github.com/adekpp/recipes",
      demo: "https://delicious-recipes777.netlify.app",
    },
  },
  {
    id: 1,
    title: "Gdzie na ryby?",
    content:
      "App that allows you to add/search for fishing spots in Poland. It uses Google Maps API to display the map and firebase to list of fishing spots. ",
    bg: "from-sky-700 to-sky-400",
    icon: <PhishingOutlinedIcon fontSize="large" />,
    links: {
      github: "https://github.com/adekpp/fishing-spots",
      demo: "https://gdzienaryby.netlify.app",
    },
  },
];
