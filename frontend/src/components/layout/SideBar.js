import React from 'react';
import { Col } from 'react-bootstrap';
import { Text } from '../../containers/Language';


function SideBar() {

    return (
        <div>
            <Col className="col-12 col-md-2 mt-2">
                <Col className=""> <a href="/under3Years" className="btn btn-secondary btn-lg active" id="sidebarButton" role="button" aria-pressed="true" width="50">  <Text tid="Student1To2" />   </a></Col>
                <Col><a href="/age3to6Years" className="btn btn-secondary btn-lg active" id="sidebarButton" role="button" aria-pressed="true"> <Text tid="Student3To6" /> </a></Col>
                <Col><a href="/age6to15Years" className="btn btn-primary btn-lg active" id="sidebarButton" role="button" aria-pressed="true"> <Text tid="Student7To15" />  </a></Col>
                <Col><a href="/age15to21Years" className="btn btn-primary btn-lg active" id="sidebarButton" role="button" aria-pressed="true"> <Text tid="Student16To21" /> </a></Col>
                <Col> <a href="/InternationalSt" className="btn btn-primary btn-lg active" id="sidebarButton" role="button" aria-pressed="true"> <Text tid="UniversityStudent" /> </a></Col>
            </Col>
        </div>
    );
}

export default SideBar;