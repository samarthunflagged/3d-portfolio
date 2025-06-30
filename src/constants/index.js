// import dsa from 'src/assets/dsa.png'
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    usePopcorn,
    coffeeproject,
    worldwise,
    codeforces,
    codechef

} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "DSA Enthusiast",
        icon: mobile,
    },
    {
        title: "Machine Learning Enthusiast",
        icon: backend,
    },

];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "🌟 Solved ~180 problems | 1503 Rating | Regular contest participant. I use LeetCode to sharpen my DSA daily.",
        name: "LeetCode",
        profile_link: "https://leetcode.com/u/samarth3282/",

        image: "https://assets.leetcode.com/static_assets/public/icons/favicon-96x96.png",
    },
    {
        testimonial:
            "⚔️ Rated 'newbie' | Max Rating: 891 | Active in Division 2/3 contests. I enjoy tackling algorithmic challenges here.",
        name: "Codeforces",
        profile_link: "https://codeforces.com/profile/Mercy_dynamo",

        image: codeforces,
    },
    {
        testimonial:
            "🍳 1★ Coder | Rating: 1154 | Regularly Participated in weekly contests | Focused on time-efficient problem solving.",
        name: "CodeChef",
        profile_link: "https://www.codechef.com/users/samarth3282",

        image: codechef,
    },
];

const projects = [
    {
        name: "Vue Jobs",
        description:
            "A platform that allows to Create, Read, Update, Delete job listings and manage them. With json-server, the changes remain temporary.",
        tags: [
            {
                name: "vue.js",
                color: "green-text-gradient",
            },
            {
                name: "json-server",
                color: "orange-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/samarth3282/vue-jobs",
        live_demo_link: "https://vuejobsforu.vercel.app/"
    },
    {
        name: "UsePopcorn",
        description:
            "Web application that helps users to keep track of their favorite movies and shows. Uses local storage for fast experience and external APIs for data fetching.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "omdb api",
                color: "green-text-gradient", // or "orange-text-gradient" if you want to distinguish API use
            },
            {
                name: "localStorage",
                color: "yellow-text-gradient", // signifies browser-level storage
            },
        ],
        image: usePopcorn,
        source_code_link: "https://github.com/samarthunflagged/usePopcorn",
        live_demo_link: "https://use-popcorn-web.vercel.app/",
    },
    {
        name: "Coffee Project",
        description:
            "A CSS-intensive website I built during my early days of learning web development. Despite its simplicity, it still holds a special place for me as a proud milestone in my journey.",
        tags: [
            {
                name: "html",
                color: "orange-text-gradient", // Represents HTML well (standard orange tone)
            },
            {
                name: "css",
                color: "blue-text-gradient", // Blue is commonly associated with CSS
            },
            {
                name: "javascript",
                color: "yellow-text-gradient", // Matches JS brand (yellow/amber)
            },
            {
                name: "aos",
                color: "purple-text-gradient", // Represents animation/motion well
            },
        ],


        image: coffeeproject,
        source_code_link: "https://github.com/samarthunflagged/coffee-project",
        live_demo_link: "https://coffee-for-u.vercel.app/",
    },
    {
        name: "WorldWise (under dev)",
        description:
            "A travel journal web app built with React and Leaflet that lets you log your journeys and view them on an interactive world map. This was my first real-world project created entirely without a backend.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient", // React is typically represented with blue (React logo color)
            },
            {
                name: "leaflet",
                color: "green-text-gradient", // Leaflet uses green in its branding and is map/Nature related
            },
            {
                name: "css",
                color: "pink-text-gradient", // Often styled as light blue or pink in themed UIs
            },
        ],


        image: worldwise,
        source_code_link: "https://github.com/samarthunflagged/worldwise",
        live_demo_link: "",
    },
];

export { services, technologies, experiences, testimonials, projects };