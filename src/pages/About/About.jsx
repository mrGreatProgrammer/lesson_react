import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import NavBar from "../../components/navs/NavBar/NavBar";

const links = [
  { id: 1, linkTxt: "Contacts", linkHref: "contacts" },
  { id: 2, linkTxt: "Team", linkHref: "team" },
];

const About = () => {
  return (
    <div>
      About
      <NavBar links={links} />
      <Routes>
        <Route path="contacts" element={<h3 className="text-base font-bold" >Contacts</h3>} />
        <Route path="team" element={<h3 className="text-base font-bold" >Our team</h3>} />
      </Routes>
      {/* <Outlet /> */}
    </div>
  );
};

export default About;
