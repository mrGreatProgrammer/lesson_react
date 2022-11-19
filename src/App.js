import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
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
import SearchUsers from "./components/Searchers/SearchUsers/SearchUsers";
// import Users from "./pages/Users/Users";
import Friends from "./components/Friends/Friends";
import About from "./pages/About/About";
import Todos from "./components/Todos/Todos";
// import RequireAuth from "./hoc/RequireAuth";
// import CreatePost from "./pages/CreatePost/CreatePost";
// import { routes } from "./pages/Routes/Routes";

// import Posts from "./components/Posts/Posts";
// import Comments from "./pages/Comments/Comments";
// import NotFound from "./pages/NotFound/NotFound";
// import CurrentUser from "./components/CurrentUser/CurrentUser";
const Posts = React.lazy(() => import("./components/Posts/Posts"));
const Comments = React.lazy(() => import("./pages/Comments/Comments"));
const NotFound = React.lazy(() => import("./pages/NotFound/NotFound"));
const Users =  React.lazy(()=>import("./pages/Users/Users"));
const CurrentUser = React.lazy(()=>import("./components/CurrentUser/CurrentUser"));
const CreatePost = React.lazy(import("./pages/CreatePost/CreatePost"));
const MyProfile =  React.lazy(()=>import('./pages/MyProfile/MyProfile'));

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
      {/* <Router> */}
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
            path="/post_create"
            element={
              <React.Suspense fallback={<h1>LLLLoooodddiiinngg ...</h1>}>
                {/* <RequireAuth > */}
                <CreatePost />
                {/* </RequireAuth> */}
              </React.Suspense>
            }
          />
          <Route
            path="/profile"
            element={
              <React.Suspense fallback={<h1>LLLLoooodddiiinngg ...</h1>}>
                {/* <RequireAuth > */}
                <MyProfile />
                {/* </RequireAuth> */}
              </React.Suspense>
            }
          />
          <Route
          path="about/*"
          element={<About />}
          >
            {/* <Route path="contacts" element={<h3 className="text-base font-bold" >Contacts</h3>} />
        <Route path="team" element={<h3 className="text-base font-bold" >Our team</h3>} /> */}
          </Route>
          <Route
          path="about-us"
          element={<Navigate to="/about" replace />}
          />
          <Route
            path="/users"
            element={
              <React.Suspense fallback={<h1>LLLLoooodddiiinngg ...</h1>}>
                <Users />
              </React.Suspense>
            }
          >
            <Route path={`/users/search`} element={<SearchUsers />} />
            <Route path={`/users/my_friends`} element={<Friends />} />
          </Route>
          <Route
            path="/users/:userId"
            element={
              <React.Suspense fallback={<h1>LLLLoooodddiiinngg ...</h1>}>
                <CurrentUser />
              </React.Suspense>
            }
          ></Route>
          <Route
            path={`/posts:id/comments`}
            element={
              <React.Suspense fallback={<h1>LLLLoooodddiiinngg ...</h1>}>
                <Comments />
              </React.Suspense>
            }
          />
          <Route
            path={`/whatsreact`}
            element={<WhatIsReact />}
            // children={
            //   <Route path={`/whatsreact/hello`} element={<h1 >hello</h1>} />
            // }
          >
            <Route path={`/whatsreact/hello`} element={<h1>hello</h1>} />
            <Route
              path={`/whatsreact/useCallback`}
              element={<SeeUseCallback />}
            />
            <Route path={`/whatsreact/useMemo`} element={<SeeUseMemo />} />
            <Route
              path={`/whatsreact/useImparativeHandle`}
              element={<SeeUseImparativeHandle />}
            />
          </Route>
          <Route path={`/search_comments`} element={<SearchComments />} />
          <Route path={`/todos`} element={<Todos />} />
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
      {/* </Router> */}
      {/* <Header /> */}
      {/* <RouterProvider router={routes} /> */}
    </div>
  );
}

export default App;
