import PhishingOutlinedIcon from '@mui/icons-material/PhishingOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

export const projects = [
    {
        id: 1,
        title: "Gdzie na ryby?",
        content: "App that allows you to add/search for fishing spots in Poland. It uses Google Maps API to display the map and firebase to list of fishing spots. ",
        bg: "from-sky-700 to-sky-400",
        icon: <PhishingOutlinedIcon fontSize="large"/>,
        links: {
           github: "https://github.com/adekpp/fishing-spots",
            demo: "https://gdzienaryby.netlify.app" 
        }
            
    },
    {
        id: 2,
        title: "Shopping Cart",
        content: "Add and remove items to your cart. It is built with React and uses Redux toolkit to manage the state. ",
        bg: "from-orange-700 to-orange-200",
        icon: <ShoppingCartOutlinedIcon fontSize="large"/>,
        links: {
            github: "https://github.com/adekpp/redux-toolkit-cart",
            demo: "https://shopping-cart-adrian-pietryga.netlify.app"
        }
        
    },
    {
        id: 3,
        title: "Weather App",
        content: "Is a simple weather app that allows you to search for weather in any city in the world. It uses the OpenWeatherMap API to get the weather data.",
        bg: "from-red-700 to-red-400",
        icon: <WbSunnyOutlinedIcon fontSize="large"/>,
        links: {
            github: "https://github.com/adekpp/weather-now",
            demo: "https://weather-openapi.netlify.app"
        }
    },
    {
        id: 4,
        title: "Todo list MERN Stack",
        content: "Todo list app that allows you to add, edit, delete and mark tasks. It uses MongoDB, Express, React, Redux and Node.js to store the data.",
        bg: "from-blue-700 to-blue-400",
        icon: <FormatListBulletedIcon fontSize="large"/>,
        links: {
            github: "https://github.com/adekpp/todo-list-mern",
            demo: "https://todo-list-adrian.netlify.app"
        }
    }
    
    
]