import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

// Import custom styles for our application
import './App.css';

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer.js";

// Import pages
import HomePage from './components/home/HomePage';
import OtherInformation from "./components/home/OtherInformation";
import Under3Years from "./components/home/Under3Years";
import Age3To6 from "./components/home/Age3To6";
import AllInfo from "./components/home/AllInfo";
import Age6To15 from "./components/home/Age6To15";
import Age15To21 from "./components/home/Age15To21";
import InternationalSt from "./components/home/InternationalSt";
import PostsPage from "./components/posts/PostsPage";
import AboutUs from "./components/home/AboutUs";
import { Responsive } from "./Responsive.js";
import ContactUs from "./components/contactUs/ContactUs"
import { LanguageProvider } from './containers/Language.js';


function App() {

    const router = (
        <Router>
            <LanguageProvider>
                <Responsive displayIn={["Laptop", "Mobile", "Tablet", "Desktop"]}>
                    <Navbar fixed="top" />


                    <div className="container mt-5 col-md-1" id="side_margin" >
                        <Switch>

                            <Route exact path="/">
                                <HomePage />
                            </Route>

                            <Route path="/otherInformation">
                                <OtherInformation />
                            </Route>


                            <Route path="/aboutUs">
                                <AboutUs />
                            </Route>

                            <Route path="/under3years">
                                <Under3Years />
                            </Route>

                            <Route path="/age3to6Years">
                                <Age3To6 />
                            </Route>

                            <Route path="/age6to15Years">
                                <Age6To15 />
                            </Route>

                            <Route path="/age15to21Years">
                                <Age15To21 />
                            </Route>

                            <Route path="/InternationalSt">
                                <InternationalSt />
                            </Route>
                            <Route path="/AllInfo">
                                <AllInfo />
                            </Route>
                            <Route path="/PostsPage">
                                <PostsPage />
                            </Route>
                            <Route path="/ContactUs">
                                <ContactUs />
                            </Route>
                        </Switch>
                    </div>
                    < Footer fixed="bottom" />
                </Responsive>
            </LanguageProvider>
        </Router>
    );

    return (router);
}

export default App;
