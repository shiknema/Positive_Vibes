import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Shikha from "./Images/shikha.png";
import Archana from "./Images/Archana.png";
import Veena from "./Images/Veena.png";
import Manasa from "./Images/Manasa.png";
import Vanitha from "./Images/Vanitha.png";


class AboutUs extends Component {
    render() {
        return (
            <div>
                 <div className="row">
                    <div id ="Covid_Info" >
                        <div class="bigger" id="about-image">
                    </div>
                       <div className="Child_text">
                     <p><i>As we hear Covid 19 first thing that comes to our minds is fear hence  we were interested to share our positive experiences because of Covid 19 ? People are struggling to lead normal life and motivating themselves to be normal. So we want to spread some positivity and give some motivations to all the students of different age groups by suggesting activities and by providing some important details for their schoolings. Keeping discussions forum in our website we believe we are bringing everyone together too. Say we save lot of travel time. That time we are able to spend with our dear ones and kids.We kept student group as target group since it can be one place for kids parents and adults anyone to get the information.</i></p>
                      <p><i>The discussion forum is an open place for anyone to discuss on any topic for that category or any doubts were other can give suggestions. So they can share their positivity to other and motivate them.</i></p> 
                       </div>
                       </div >
                    <Container className="aboutUs-Container">
                    <hr className="hrset" />
                        <Row> 
                            <Col md={{ span: 2, offset: 2 }}><img src={Archana} alt="avatar" class="avatar" /></Col>
                            <Col md={{ span: 6, offset: 0 }}>
                                <h4>Archana Gupta</h4>
                                <p><i>"You are braver than you believe and stronger than you seem,and smarter than you think"</i></p>
                            </Col>
                        </Row>
                        <hr className="hrset" />
                        <Row>
                            <Col md={{ span: 6, offset: 2 }}>
                                <h4>Manasa Bhagwat </h4>
                                <p><i>" Hang in there, as better times are ahead."</i></p>
                            </Col>
                            <Col md={{ span: 2, offset: 1 }}><img src={Manasa} alt="avatar" class="avatar" /></Col>
                        </Row>
                        <hr className="hrset" />
                        <Row>
                            <Col md={{ span: 2, offset: 2 }}><img src={Shikha} alt="avatar" class="avatar" /></Col>
                            <Col md={{ span: 6, offset: 0 }}>
                                <h4>Shikha Gupta</h4>
                            <p><i>"You are confined only by THE WALLS you build yourself."</i></p>
                            </Col>
                        </Row>
                        <hr className="hrset" />
                        <Row>
                            <Col md={{ span: 6, offset: 2 }}>
                                <h4>Vanitha Krishnan</h4>
                                <p><i>"You never know how strong you are  ... until being strong is the only choice you have."</i></p>
                            </Col>
                            <Col md={{ span: 2, offset: 1 }}><img src={Vanitha} alt="avatar" class="avatar" /></Col>
                        </Row>
                        <hr className="hrset" />
                        <Row>
                            <Col md={{ span: 2, offset: 2 }}><img src={Veena} alt="avatar" class="avatar" /></Col>
                            <Col md={{ span: 6, offset: 0 }}>
                                <h4>Veenarani</h4>
                                <p><i>"We are shaped by our thoughts, we become what we think."</i></p>
                            </Col>
                            <hr className="hrset" />
                        </Row>
                    </Container>
                </div>
   
            </div>
       
        );
    }
}

export default AboutUs;