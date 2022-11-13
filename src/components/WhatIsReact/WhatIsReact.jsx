import React, { useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../navs/NavBar/NavBar";
import SeeUseCallback from "./SeeUseCallback";
import SeeUseImparativeHandle from "./SeeUseImparativeHandle";
import SeeUseMemo from "./SeeUseMemo";

let links = [
  { id: 1, linkTxt: "useCallback", linkHref: "/whatsreact/useCallback" },
  { id: 2, linkTxt: "useMemo", linkHref: "/whatsreact/useMemo" },
  { id: 3, linkTxt: "useImparativeHandle", linkHref: "/whatsreact/useImparativeHandle" },
  // { id: 4, linkTxt: "usecalback", linkHref: "/usecallback" },
];

const WhatIsReact = () => {
  return (
    <div className="flex flex-col items-center w-28 h-36">
      <h5>WhatIsReact ?</h5>
      <NavBar links={links} />
      <div>
        {/* <Router> */}
          {/* <Routes>
            <Route
              path={`/whatsreact/useCallback`}
              element={<SeeUseCallback />}
            />
            <Route path={`/whatsreact/useMemo`} element={<SeeUseMemo />} />
            <Route
              path={`/whatsreact/useImparativeHandle`}
              element={<SeeUseImparativeHandle />}
            />
          </Routes> */}
        {/* </Router> */}
      </div>
    </div>
  );
};

export default WhatIsReact;
