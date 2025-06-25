import React from "react";
import Greetings from "./Components/Greetings";
import ProfileCard from "./Components/ProfileCard";
import EventsDemo from "./Components/EventsDemo";
import ToDoList from "./Components/ToDoList";
import UserProfile from "./Components/UserProfile";
import EffectDemo from "./Components/EffectDemo";
import Password from "./Components/Password";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Home from "./Components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Timer from "./Components/Timer";
import UncontrolledComponent from "./Components/UncontrolledComponent";
import FetchData from "./Components/FetchData";
import Parent from "./Components/Parent";
import UseMemo from "./Components/UseMemo";
import ConditionalRendering from "./Components/ConditionalRendering";
import CustomHook from "./Components/CustomHook";
import Data from "./Components/Data";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/contact",
//     element: <Contact />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
// ]);

function App() {
  // const message = ["Hi", "Hello", "Hey", "okay"];
  return (
    <div>
      {/* <h1>Hello..!</h1>
      <p>This is my first react app.</p>
      <Greetings /> */}
      {/* <ProfileCard name="Uma" age={23} bio="Time will Heal Everything" />
      <br />
      <ProfileCard name="Magesh" age={25} />
      <br />
      <ProfileCard name="Mageshwari" bio="Time will Heal Everything" /> */}
      {/* <EventsDemo /> */}
      {/* <ToDoList /> */}
      {/* <UserProfile /> */}
      {/* <EffectDemo /> */}
      {/* <Password /> */}
      {/* <RouterProvider router={router} /> */}
      {/* <Timer /> */}
      {/* <UncontrolledComponent /> */}
      {/* <FetchData /> */}
      {/* <Parent /> */}
      {/* <UseMemo /> */}
      {/* <ConditionalRendering
        letMeCheck={false}
        isLoggedIn={false}
        unreadMessages={message}
      /> */}
      {/* <CustomHook /> */}
      <Data />
    </div>
  );
}

export default App;
