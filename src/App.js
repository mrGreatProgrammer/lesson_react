import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
// import List from './components/List/List';
import Posts from './components/Posts/Posts';
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
//   createRoutesFromElements
// } from "react-router-dom";
// import {useSelector} from 'react-redux';
import Comments from './pages/Comments/Comments';
import Logo from "./components/ui/Logo/Logo";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  // const {currentPostId} = useSelector(state=>state.app);

  return (
    <div className="App">
      {/* <Link to="/"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* </Link> */}
        <Router >

        {/* <Posts /> */}

          <Logo />
        <div className="center" >
          <Routes>
        <Route path="/" element={<Posts />} />
        <Route path={`/posts:id/comments`} element={<Comments />} /> 
        <Route path={`*`} element={<NotFound />}  /> 
          </Routes>
          {/* <List /> */}
        </div>
        </Router>
    </div>
  );
}

export default App;
