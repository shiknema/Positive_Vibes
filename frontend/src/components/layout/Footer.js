import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Text } from '../../containers/Language';

function Footer() {
    return (
        <div>
            <Container id="margin">

                    <Row>
                        <Col>
                        <span className= "fa fa-phone-square fa-lg text-white"></span><span className= "text-white">  <Text tid="covidInfo" /> <br/>1177</span>
                        </Col>
                        <Col>
                        <span className= "fa fa-phone-square fa-lg text-white"></span><span  className= "text-white"> <Text tid="emergencyNumber" /><br/>112</span>
                        </Col>
                        <Col>
                        <span className= "fa fa-phone-square fa-lg text-white"></span><span className= "text-white"> <Text tid="medicalAdviceNumber" /> <br/>11414</span>
                        </Col>
               </Row>
       
        </Container>
        </div>
    );
}

export default Footer;
