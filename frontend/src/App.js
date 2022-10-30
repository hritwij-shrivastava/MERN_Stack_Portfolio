import React, {lazy, Suspense} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux"
import store from "./Redux/store";

import AssetState from './Context/Home/AssetState';

import jwt_decode from "jwt-decode";
import setAuthToken from "./Redux/utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./Redux/actions/authActions";

import ScrollToTop from "./Components/Config/ScrollToTop";
import Navbar from './Components/Config/Navbar';
import ControlledCarousel from './Components/Config/ControlledCarousel'
import Footer from './Components/Config/Footer'

// import Home from './Components/Home';
// import About from './Components/About';
// import Services from './Components/Services'
// import Portfolio from './Components/Portfolio'
// import Blog from './Components/Blog'
// import Contact from './Components/Contact'

const Home = lazy(() => import(/* webpackChunkName: 'home' */'./Components/Home'))

const About = lazy(() => import(/* webpackChunkName: 'about' */'./Components/About'))

const Services = lazy(() => import(/* webpackChunkName: 'services' */'./Components/Services'))

const Portfolio = lazy(() => import(/* webpackChunkName: 'portfolio' */'./Components/Portfolio'))

const Blog = lazy(() => import(/* webpackChunkName: 'blog' */'./Components/Blog'))

const Contact = lazy(() => import(/* webpackChunkName: 'contact' */'./Components/Contact'))

const Loan = lazy(() => import(/* webpackChunkName: 'loan' */'./Components/Extra/Loan'))

const BlogRedirect = lazy(() => import(/* webpackChunkName: 'blogpage' */'./Components/BlogRedirect'))

const Login = lazy(() => import(/* webpackChunkName: 'login' */'./Admin/Login'))
const Mainpage = lazy(() => import(/* webpackChunkName: 'mainpage' */'./Admin/Mainpage'))
const EditBlog = lazy(() => import(/* webpackChunkName: 'editblog' */'./Admin/Edit/EditBlog'))
const PreviewBlog = lazy(() => import(/* webpackChunkName: 'previewblog' */'./Admin/Edit/PreviewBlog'))

// Check for token to keep user logged in
if (localStorage.jwtToken) {

  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);

  // Decode token and get user info and exp
  const decoded = jwt_decode(token);

  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds

  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
  }
}


function App() {

  return (
    <>
      <Provider store={store}>
        <AssetState>
          <BrowserRouter>
            <ScrollToTop />
            <Suspense fallback={<div>Loading........</div>}>
              <Routes>
                <Route path="/"             element={<> <Navbar/>     <Home/>                                       </>} />
                <Route path="/about/*"      element={<> <Navbar/>     <ControlledCarousel/> <About/>     <Footer/>  </>} />
                <Route path="/services/*"   element={<> <Navbar/>     <ControlledCarousel/> <Services/>  <Footer/>  </>} />
                <Route path="/portfolio/*"  element={<> <Navbar/>     <ControlledCarousel/> <Portfolio/> <Footer/>  </>} />
                <Route path="/blog/*"       element={<> <Navbar/>     <ControlledCarousel/> <Blog/>      <Footer/>  </>} />
                <Route path="/contact/*"    element={<> <Navbar/>     <ControlledCarousel/> <Contact/>   <Footer/>  </>} />
                <Route path="/loan/*"       element={<> <Navbar/>     <ControlledCarousel/> <Loan/>      <Footer/>  </>} />
            
                <Route path="/read/:id/*"   element={<> <Navbar/>     <BlogRedirect/>                    <Footer/>  </>} />
                <Route path="/login/*"      element={<> <Navbar/>     <Login/>                           <Footer/>  </>} />
                <Route path="/main/*"       element={<>               <Mainpage/>                                   </>} />
                <Route path="/edit/*"       element={<> <Navbar/>     <EditBlog/>                         <Footer/> </>} />
                <Route path="/preview/:id/*"element={<> <Navbar/>     <PreviewBlog/>                      <Footer/> </>} />
                <Route path="*"             element={<> <Navbar/>     <Home/>                                       </>} />
              </Routes>
            </Suspense>
            
          </BrowserRouter>
        </AssetState>
      </Provider>
    </>
  );
}

export default App;
