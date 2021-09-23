import React, { Component } from "react";
import PostsPage from "../posts/PostsPage";
import SideBar from '../layout/SideBar.js';
import Lund from './Images/LundUniversity.jpg';
import KTH from "./Images/KTHLOGO.jpg";
import Linköping from "./Images/Linköping.png";
import Karolinska from "./Images/KarolinskaInstitute.png";
import BTH from "./Images/BTH.png";
import Dalarna from "./Images/DalarnaUniversity.png";
import Jönköping from "./Images/Jönköping.png";
import Uppsala from "./Images/Uppsalauniversity.png";
import Goteborg from "./Images/GoteborgsUniversity.png";
import { Container, Row, Col} from 'react-bootstrap';

class InternationalSt extends Component {
    
    render() {

        return (
            <div>
                <div className="row">
                    <div className="col-sm-3">
                        <SideBar />
                    </div>
                    <div className="col-sm-9" id="Covid_Info" >
                        <div class="bigger" id="image5">
                            <div class="smaller"><h3>University Students</h3></div>
                    </div>
                       <div className="Child_text">

                            <p><button className="primary1" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                               How Is COVID-19 Affecting Studying In Sweden? 
                                </button>
                                <div className="collapse" id="collapseExample">
                                    <div className="child-card card-body">
                                    <p>
                                    We know that Covid-19 is on many people’s minds right now. It’s certainly on ours at the moment. We’re in the middle of a major development across the continent, so we’re monitoring the situation very closely.</p>
                                    </div>
                                </div>
                            </p>                      

                           <p><button className="primary1" type="button" data-toggle="collapse" data-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
                               Keep up to date with what’s happening in Sweden
                               </button>
                               <div className="collapse" id="collapseExample1">
                                    <div className="child-card card-body">
                                        <p>As you know, there’s currently a temporary ban on all non-essential travel to Sweden due to Covid-19. This temporary ban was put in place on 19 March, and is set to last until 15 June (updated 14/5). And several Swedish missions abroad may be limited in their capacity to assist in the processing of residence permit applications within normal timeframes. This may change as the situation evolves, and as soon as we have more answers, we’ll update this information.</p>
                                    </div>
                                </div>
                            </p>

                           <p><button className="primary1" type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                               Currently studying at a Swedish university?
                               </button>
                               <div className="collapse" id="collapseExample2">
                                    <div className="child-card card-body">
                                        <p>Business as usual? Well, not quite. Teaching will continue, though from now on it will be online.
                             On 17 March, the Swedish government and the Public Health Agency of Sweden recommended that all Swedish universities change over to distance learning from 18 March.
                             Unsure what this means for you? Don’t worry. You’ll receive more info from your university.</p>
                                    </div>
                                </div>
                            </p>


                           <p><button className="primary1" type="button" data-toggle="collapse" data-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
                               Applied to study in Sweden this autumn?
                               </button>
                               <div className="collapse" id="collapseExample3">
                                    <div className="child-card card-body">
                                        <p>You may be wondering whether Covid-19 will affect your application. And here’s some good news. It won’t. You can expect to receive your admissions results on 3 April (master’s) or 20 April (bachelor’s).</p>
                                    </div>
                                </div>
                            </p>

                             <p><button className="primary1" type="button" data-toggle="collapse" data-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample">
                                 Admitted to study in Sweden this autumn?
                                 </button>
                                 <div className="collapse" id="collapseExample4">
                                    <div className="child-card card-body">
                                         <p>Congratulations! Even in this uncertain time, this is something to celebrate. But we know that you have a whole load of questions for us. Like: Will my university be open this autumn? Will I even be able to move to Sweden? We don’t have all the answers right now. But we’ll make sure you’re updated with the latest information</p>
                                    </div>
                                </div>
                                </p>
                        
                        <Container  >
                        <Row >
                            < Col >
                                 <img src={KTH}  className ="img_height" alt="" /><br></br>
                                 <a className="a" target="blank" href='https://intra.kth.se/en/campus/sakerhet/kris/corona/information-till-studenter-med-anledning-av-coronaviruset-1.965905'>KTH-University</a>
                             </Col > 
                            < Col  >
                                 <img src={Linköping}  className =" img_height" alt="Linköping" /><br></br>
                                 <a className="a" target="blank" href="https://insidan.liu.se/HR-Personal/coronavirus?l=sv">Linköping-University</a>
                            </Col > 
                             < Col >
                                 <img src={Karolinska}  className =" img_height" alt="karolinska"/><br></br>
                                 <a className="a" target="blank" href="https://news.ki.se/information-about-the-coronavirus-for-staff-and-students">Karolinska-University</a>
                             </Col >      
                        </Row> 
                        <Row >
                            < Col >
                                 <img src={Lund}  className ="img_height" alt="lund"/><br></br>
                                 <a className="a" target="blank" href="https://www.lu.se/studera/coronavirusetcovid-19-information-for-studenter#">Lund-University</a>
                             </Col > 
                            < Col  >
                                 <img src={BTH}  className =" img_height" alt="bth"/><br></br>
                                 <a className="a" target="blank" href="https://www.bth.se/eng/emergency/corona/information-for-students/">BTH-University</a>
                            </Col > 
                             < Col  >
                                 <img src={Dalarna}  className =" img_height"  alt="dalarna"/><br></br>
                                 <a className="a" target="blank" href="https://www.du.se/en/information-about-the-coronavirus-for-staff-and-students/">Dalarna-University</a>
                             </Col >      
                        </Row> 

                        <Row >
                            < Col >
                                 <img src={Uppsala}  className =" img_height" alt="uppsala"/><br></br>
                                 <a className="a" target="blank" href="https://www.uu.se/en/students/recommendations-on-coronavirus/">Uppsala-University</a>
                             </Col > 
                            < Col  >
                                 <img src={Goteborg}  className ="img_height" alt="goteborg" /><br></br>
                                 <a className="a" target="blank" href="https://studentportal.gu.se/english/coronavirus;jsessionid=lfnyo9i1p2ejvo7zhty8zlaf?skipSSOCheck=true&referer=https%3A%2F%2Futbildning.gu.se%2Feducation%2Fincoming-student%2Fcovid19">University of Gothenburg</a>
                            </Col > 
                             < Col  >
                                 <img src={Jönköping}  className ="img_height" alt="jönköping" /><br></br>
                                 <a className="a" target="blank" href='https://ju.se/om-oss/jonkoping-university/informationsmaterial/uppdaterad-information-med-anledning-av-coronaviruset.html'>Jönköping-University</a>      
                             </Col >      
                        </Row> 
                    </Container>
     
                    </div>
                    <h3 className="disscusionForum">Discussion Forum</h3>
                <PostsPage category='InternationalSt' />
                </div>
                </div>
            </div>
        );
    }
}


export default InternationalSt;