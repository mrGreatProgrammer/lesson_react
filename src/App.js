import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import List from './components/List/List';
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
//   createRoutesFromElements
// } from "react-router-dom";
// import {useSelector} from 'react-redux';
import Header from "./components/Header/Header";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WhatIsReact from "./components/WhatIsReact/WhatIsReact";
import SeeUseMemo from "./components/WhatIsReact/SeeUseMemo";
import SeeUseImparativeHandle from "./components/WhatIsReact/SeeUseImparativeHandle";
import SeeUseCallback from "./components/WhatIsReact/SeeUseCallback";
import SearchComments from "./components/Searchers/SearchComments/SearchComments";
// import { routes } from "./pages/Routes/Routes";

// import Posts from "./components/Posts/Posts";
// import Comments from "./pages/Comments/Comments";
// import NotFound from "./pages/NotFound/NotFound";
const Posts = React.lazy(() => import("./components/Posts/Posts"));
const Comments = React.lazy(() => import("./pages/Comments/Comments"));
const NotFound = React.lazy(() => import("./pages/NotFound/NotFound"));

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
      <Router>
        <Header />
        <div className="center">
          <Routes>
            <Route
              path="/"
              element={
                <React.Suspense fallback={<h1>LLLLoooodddiiinngg ...</h1>}>
                  <Posts />
                </React.Suspense>
              }
            />
            <Route
              path={`/posts:id/comments`}
              element={
                <React.Suspense fallback={<h1>LLLLoooodddiiinngg ...</h1>}>
                  <Comments />
                </React.Suspense>
              }
            />
            <Route
              path={`/whatsreact/`}
              element={<WhatIsReact />}
              // children={

              //   <Route path={`/whatsreact/useMemo`} element={<h1 >hello</h1>} />

              // }
            />

            <Route path={`/whatsreact/useMemo`} element={<h1>hello</h1>} />
            <Route path={`/search_comments`} element={<SearchComments />} />
            <Route
              path={`*`}
              element={
                <React.Suspense fallback={<h1>LLLLoooodddiiinngg ...</h1>}>
                  <NotFound />
                </React.Suspense>
              }
            />
          </Routes>
        </div>
      </Router>
      {/* <Header /> */}
      {/* <RouterProvider router={routes} /> */}
    </div>
  );
}

export default App;
