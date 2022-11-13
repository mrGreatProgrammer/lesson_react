import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import List from './components/List/List';
import Posts from "./components/Posts/Posts";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
//   createRoutesFromElements
// } from "react-router-dom";
// import {useSelector} from 'react-redux';
import Comments from "./pages/Comments/Comments";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./components/Header/Header";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WhatIsReact from "./components/WhatIsReact/WhatIsReact";
import SeeUseMemo from "./components/WhatIsReact/SeeUseMemo";
import SeeUseImparativeHandle from "./components/WhatIsReact/SeeUseImparativeHandle";
import SeeUseCallback from "./components/WhatIsReact/SeeUseCallback";
// import { routes } from "./pages/Routes/Routes";

// export const routes = createBrowserRouter([
//   {
//     path: "/",
//     element: 
//     <Posts />
//     ,
//     errorElement: <NotFound />,
//   },
// ]);

function App() {
  // const {currentPostId} = useSelector(state=>state.app);

  return (
    <div className="App">
      <Router >
        <Header />
        <div className="center" >
        <Routes>
        <Route path="/" element={<Posts />}  />
        <Route path={`/posts:id/comments`} element={<Comments />} /> 
        <Route path={`/whatsreact/`} element={<WhatIsReact />} children={
          
          <Route path={`/whatsreact/useMemo`} element={<h1 >hello</h1>} />
          
        } />
        <Route path={`*`} element={<NotFound />}  />
        </Routes>
        </div>
      </Router>
      {/* <Header /> */}
      {/* <RouterProvider router={routes} /> */}
    </div>
  );
}

export default App;
