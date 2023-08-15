import booking from "../assets/hotel.png";
import food from "../assets/food.jpeg";
import chat from "../assets/chat.png";
import news from "../assets/news.png";
import sports from "../assets/sports.png";
import bookingSS1 from '../assets/projects/booking/Screenshot (1).png'
import bookingSS2 from '../assets/projects/booking/Screenshot (2).png';
import bookingSS3 from '../assets/projects/booking/Screenshot (3).png';
import bookingSS4 from '../assets/projects/booking/Screenshot (4).png';
import bookingSS5 from '../assets/projects/booking/Screenshot (5).png';
import bookingSS6 from '../assets/projects/booking/Screenshot (6).png';
import bookingSS7 from '../assets/projects/booking/Screenshot (7).png';
import bookingSS8 from '../assets/projects/booking/Screenshot (8).png';

import sportsSS1 from '../assets/projects/fitness/Screenshot (11).png';
import sportsSS2 from '../assets/projects/fitness/Screenshot (12).png';
import sportsSS3 from '../assets/projects/fitness/Screenshot (13).png';
import sportsSS4 from '../assets/projects/fitness/Screenshot (14).png';
import sportsSS5 from '../assets/projects/fitness/Screenshot (15).png';
import sportsSS6 from '../assets/projects/fitness/Screenshot (16).png';
import sportsSS7 from '../assets/projects/fitness/Screenshot (17).png';
import sportsSS8 from '../assets/projects/fitness/Screenshot (18).png';

import foodDeliverySS1 from '../assets/projects/foodDelivery/ss1.jpeg'
import foodDeliverySS2 from '../assets/projects/foodDelivery/ss2.png'
import foodDeliverySS3 from '../assets/projects/foodDelivery/ss3.jpeg'
import foodDeliverySS4 from '../assets/projects/foodDelivery/ss4.png'
import foodDeliverySS5 from '../assets/projects/foodDelivery/ss5.jpeg'
import foodDeliverySS6 from '../assets/projects/foodDelivery/ss6.png'
import foodDeliverySS7 from '../assets/projects/foodDelivery/ss7.jpeg'
import foodDeliverySS8 from '../assets/projects/foodDelivery/ss8.jpeg'

export const projects = [
  {
    id:"booking",
    date: "26/09/2022",
    title: "Hotel Booking ",
    description:
      "Full stack application with Admin User UI to manage users hotels. View hotels in a Area and book them.",
    url: "https://chardhamstays.com/",
    image:"projects/booking.jpg",
    imgSrc: booking,
    ss1:bookingSS1,
    ss2:bookingSS2,
    ss3: bookingSS5,
    ss4: bookingSS3,
    ss5: bookingSS6,
    ss6: bookingSS4,
    ss7: bookingSS7,
    ss8: bookingSS8,
    github: "https://github.com/Gyanihulk/Booking",
    technology:"MongoDb Express React",
    desc1:`The MERN Stack Hotel Booking Platform with Admin Panel is a web application designed to facilitate hotel bookings and management. It utilizes the MERN (MongoDB, Express.js, React.js, Node.js) stack, providing a robust and scalable solution for hotel administrators to manage users, hotels, and rooms.`,
    desc2:`User Registration and Authentication: Users can create accounts and authenticate themselves to access the platform. This ensures secure access to booking functionalities and personal information.
    |Hotel Listing and Search: The platform allows hotels to list their properties with details such as location, amenities, room types, pricing, and availability. Users can search and browse hotels based on their preferences and view detailed information about each listing.
    |Room Booking and Reservation Management: Users can select desired rooms from available options, specify the check-in and check-out dates, and complete the booking process. The platform manages the reservation details, including booking confirmation, room availability, and payment processing.
    |User Dashboard: Each user has a personalized dashboard where they can manage their bookings, view past reservations, and update their profile information.
    |Admin Panel: The admin panel is accessible to authorized administrators. It provides a centralized interface to manage users, hotels, and rooms. Admins can perform actions such as adding new hotels, updating hotel information, managing room availability, and resolving user inquiries or issues.
 | By leveraging the MERN stack, this hotel booking platform delivers a modern, responsive, and user-friendly interface for both users and administrators. It streamlines the hotel booking process, enhances user experience, and simplifies hotel management tasks through the dedicated admin panel.   `
  },
  {
    id:"fitness",
    date: "20/01/2023",
    title: "Fitness/Gym Platform",
    description:
      "A fitness Website build on react ,firebase and sanity to help gym members get fit ",
    url: "https://kalkiakhada.com//",
    image:"projects/sports.png",
    imgSrc: sports,
    ss1:sportsSS1,
    ss2:sportsSS8,
    ss3: sportsSS2,
    ss4: sportsSS3,
    ss5: sportsSS6,
    ss6: sportsSS4,
    ss7: sportsSS7,
    ss8: sportsSS5,
    technology:"Sanity Cms",
desc1:`A fitness website built on React, Firebase, and Sanity is designed to provide a comprehensive platform to help gym members achieve their fitness goals and lead a healthy lifestyle with Mobile responsive UI `,
    desc2:` User Registration and Authentication: Users can create accounts and authenticate themselves to access personalized features and content.
    | User Profiles: Each user can have their profile where they can manage their personal information, fitness goals, and track their progress.
    | Fitness Programs and Workouts: The website can offer a variety of fitness programs and workout routines tailored to different fitness levels and goals.
    | Exercise Library: A collection of exercise demonstrations and instructions can be provided to guide users in performing exercises correctly.
    | Progress Tracking: Users can track their fitness progress, such as weight loss, muscle gain, or other fitness metrics, through progress tracking features and charts.
    | Online Classes and Training Sessions: The website can offer live or recorded fitness classes and training sessions for users to follow along from home or on the go.
    | Booking and Scheduling: Users can book fitness classes, personal training sessions, or other services offered by the gym through the website.`
  },
  {
    id:"foodDelivery",
    date: "26/10/2022",
    title: "Food Booking",
    description: "Full stack React native App build on Sanity Using Context.",
    url: "https://drive.google.com/file/d/1PSwMiNL6jmT6khRL-NgaROT_jifItNGO/view?usp=sharing",
    image:"projects/food.jpeg",
    imgSrc: food,
    ss1:foodDeliverySS1,
    ss2:foodDeliverySS2,
    ss3:foodDeliverySS3,
    ss4:foodDeliverySS4,
    ss5:foodDeliverySS5,
    ss6:foodDeliverySS6,
    ss7:foodDeliverySS7,
    ss8:foodDeliverySS8,
    github: "https://github.com/Gyanihulk/FoodDeliveryApp",
    desc1:`An immersive React Native application built with a full-stack architecture, Tailwind CSS, and integrated with Sanity CMS, offering a seamless platform for discovering and booking dishes from various restaurants. The app provides a user-friendly interface and leverages the power of React Native for a mobile-responsive experience.`,
    desc2:` Restaurant Listings: The application showcases an extensive collection of restaurants categorized by different areas, allowing users to explore various dining options.
    | Dish Catalog: Users can browse through an extensive collection of dishes offered by each restaurant, complete with detailed descriptions, images, and pricing information.
    | Booking System: The app enables users to make reservations and book dishes directly from their preferred restaurants, providing a convenient way to plan their dining experiences.
    | Admin Dashboard: Administrators have access to an intuitive dashboard powered by Sanity CMS, allowing them to manage restaurants, create new listings, and update dish information effortlessly.
    | Restaurant Management: Admins can create and update restaurant profiles, add enticing images, and maintain accurate information about each establishment.
    | Dish Management: The CMS empowers admins to create, edit, and remove dishes, providing full control over the restaurant's menu offerings.`
  },
  {
    id:'news',
    date: "20/12/2022",
    title: "Real Time News ",
    description:
      "Real time News Website with Admin panel build on Next JS and Sanity CMS ",
    url: "http://bhagwasanatantimes.com/",
    image:"projects/news.png",
    imgSrc: news,
  },
  {
    date: "15/10/2022",
    title: "E-commerce",
    description: "Full stack E-commerce app build on Next and Sanity.",
    url: "https://leadinggallopers.com/",
    imgSrc:
      "https://cdn.pixabay.com/photo/2019/12/14/08/36/shopping-4694470_960_720.jpg",
      image:"https://cdn.pixabay.com/photo/2019/12/14/08/36/shopping-4694470_960_720.jpg",
  },
  {
    date: "17/10/2022",
    title: "Graph QL Chat App",
    description: "Messaging App Build on Appollo Graph-Ql and React",
    url: "https://github.com/Gyanihulk/Graphql-chat-a",
    image:"projects/chat.png",
    imgSrc: chat,
  },
];
