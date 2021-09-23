import React from "react";
import { Link } from "react-router-dom";
import logo from "./Logo.jpg";
import { Container, Row, Col } from 'react-bootstrap';
import LanguageSelector from '../../components/LanguageSelector.js';
import { Text } from '../../containers/Language';


function Navbar() {
    return (
        <div>
            <Container id="margin">
                <Row >
                    <Col>
                        <img src={logo} className="header-img" alt="img" />
                    </Col >
                    <Col className="header-name text-white" >
                        <h1><Text tid="websiteName"/> </h1>
                    </Col>
                    <Col id="headerLink">
                        <p className="sideHeader"> <Text tid="languageHeading" /> <LanguageSelector /></p>
                    </Col>
                </Row>
            </Container>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="dropdown show">
                    <button className="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <Text tid="sideWebsiteName"/>
                    </button>

                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" href="/under3Years"> <Text tid="Student1To2" /> </a>
                        <a className="dropdown-item" href="/age3to6Years"> <Text tid="Student3To6" /> </a>
                        <a className="dropdown-item" href="/age6to15Years"> <Text tid="Student7To15" /> </a>
                        <a className="dropdown-item" href="/age15to21Years"> <Text tid="Student16To21" /></a>
                        <a className="dropdown-item" href="/InternationalSt"> <Text tid="UniversityStudent" /> </a>
                    </div>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                <span className="fa fa-home fa-lg"></span>  <Text tid="home" />
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/otherInformation" className="nav-link">
                                <span className="fa fa-info-circle fas-lg"></span> <Text tid="OtherInformation" />
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/aboutUs" className="nav-link">
                                <span className="fa fa-address-card fas-lg"></span> <Text tid="AboutUs" />
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/ContactUs" className="nav-link">
                                <span className="fa fa-address-book fas-lg"></span> <Text tid="ContactUs" />
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/AllInfo" className="nav-link">
                                <span className="fa fa-bar-chart"></span> <Text tid="COVIDCases" />
                            </Link>
                        </li>
                    </ul>

                </div>
                <form className="form-inline" target="_blank" action="https://www.google.com/search" method="GET">
                    <input className="form-control mr-sm-2" type="search" name="q" placeholder="Google Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit"> <Text tid="Search" /> </button>
                </form>
            </nav>

        </div>

    );

}

export default Navbar;