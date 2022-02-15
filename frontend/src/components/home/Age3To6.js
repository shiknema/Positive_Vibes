import React, { Component } from "react";
import PostsPage from "../posts/PostsPage";
import SideBar from '../layout/SideBar.js';
import Card from 'react-bootstrap/Card';
import Educational from "./Images/Edu_6.jpg";
import Fun from "./Images/Fun_6.jpg";
import Fitness from "./Images/Fit_6.jpg";
import CardColumns from 'react-bootstrap/CardGroup';

class Age3To6 extends Component {
    render() {
        return (
<>
            <div className="row">
                    <div className="col-sm-3">
                        <SideBar />
                    </div>
                    <div className="col-sm-9" id="Covid_Info" >
                    <div id="Covid_Info" >
                        <div class="bigger" id="image2">
                            <div class="smaller"><h3>Age 3 to 6 Years</h3></div>
                        </div>
                           <div className="Child_text">

                              <p>Many are currently worried about the corona virus's progress. The intense media reporting and major changes in everyday life also arouse thoughts and feelings in children.
                                 - Pictures of empty grocery stores, people with face masks, canceled activities and worried adults who cannot go to work. The effects of corona now affect, in one way or another, all children, says Marie Angsell, an expert sociologist at BRIS (Children's Rights in Society).
                                 How an individual child responds to events like this depends on various things such as age, past experience and how the child is feeling in general. But there are some important things to keep in mind when you, as an adult, talk to your child about the corona virus. Here is Marie Angsell's tips and advice.</p>
                                 
                                <p><button className="primary1" type="button" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapseExample">
                                     Listen to your child and ask questions
                                     </button>
                                     <div className="collapse" id="collapse4">
                                        <div className="child-card card-body">
                                            <p>Children down to the preschool age know that there is something called coronavirus. For that reason, they may not be worried, but in some children it raises many thoughts. As an adult, it is important to be attentive and find out what the child feels and if it needs help to deal with his or her concerns and fears. With younger children you often look at them if they are worried about something and then you can try to sneak a little about what it is about. When it comes to slightly older children, you can ask more concrete questions: "When you hear about corona, what do you think?" "Is it something you wonder about?" </p>
                                            <p>One should not assume that facts are frightening. Good facts make the child feel secure and he or she gets control of the situation. For example, you can tell about how the virus is infected and that the virus does not seem to be as dangerous for children as for the elderly. For slightly larger children, it can be explained that the reason why the corona virus becomes a big news is that it can affect society in different ways. Children find it difficult to value news and may feel that it is more dangerous than it really is. However, you do not have to go into details that can seem daunting.</p>
                                        </div>
                                    </div>
                                </p>

                              <p><button className="primary1" type="button" data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapseExample">
                                  Give the child hope</button>
                                  <div className="collapse" id="collapse5">
                                        <div className="child-card card-body">
                                            <p>It is important for the child to hear that adults take responsibility. Talk about the fact that many people work to solve the situation, that researchers are developing a vaccine, that the infected person gets care and that when schools and other social functions close, it is to stop the infection. You can also secure by keeping yourself updated and thus relieving the child. “I find out and keep track of this. You don't have to keep track of yourself. </p>
                                        </div>
                                    </div>
                                </p>


                                <p><button className="primary1" type="button" data-toggle="collapse" data-target="#collapse6" aria-expanded="false" aria-controls="collapseExample">
                                    Encourage questions  - but talk about something else too</button>
                                    <div className="collapse" id="collapse6">
                                        <div className="child-card card-body">
                                            <p>It is important that children are not left alone to speculate on things that may worry them. Encourage the child to ask and say it is okay to ask again. At the same time, the conversation about corona may need to be limited in order for the child not to think about what is worrying for a while.</p>
                                        </div>
                                    </div>
                                </p>
                          </div>
                        <p></p>
                        <CardColumns>
                            <Card className="bg-light text-maroon">
                                <Card.Img className="image_gradient" src={Educational} alt="Card image" style={{opacity: 0.7}}/>
                                <Card.ImgOverlay>
                                    <Card.Title><u> Educational Activities</u> </Card.Title>
                                    <br/>
                                    <Card.Text>
                                        <a className="a" target="blank" href='https://www.starfall.com/h/'>Learning made fun</a>
                                        <p></p>
                                        <a className="a" target="blank" href='https://allinonehomeschool.com/'> All in one Home School </a>
                                        <p></p>
                                        <a className="a" target="blank" href='https://classroommagazines.scholastic.com/support/learnathome.html'>Lets Learn from Home</a>
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                            <Card className="bg-light text-maroon">
                                <Card.Img className="image_gradient " src={Fun} alt="Card image" style={{opacity:0.7}}/>
                                <Card.ImgOverlay>
                                    <Card.Title><u>Creative Activities</u></Card.Title>
                                    <br/>
                                    <Card.Text>
                                        <a className="a" target="blank" href="https://www.mom365.com/preschool/development/10-fun-activities-to-do-with-your-preschooler">Unboxing Creativity</a>
                                        <p></p>
                                        <a className="a" target="blank" href="https://www.freechildrenstories.com/age-3-5">Story Time</a>
                                        <p></p>
                                        <a className="a" target="blank" href="https://www.thesprucecrafts.com/crafts-for-preschoolers-and-toddlers-1254268"> Crafts is fun</a>
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                            <br></br>
                            <Card className="bg-light text-maroon">
                                <Card.Img className="image_gradient" src={Fitness} alt="Card image"  style={{opacity: 0.7}}/>
                                <Card.ImgOverlay>
                                    <Card.Title><u>Fitness</u></Card.Title>
                                    <br/>
                                    <Card.Text >
                                        <a className="a" target="blank" href="https://youtu.be/iWowDC3x0hE">Cosmic Yoga for Kids</a>
                                        <p> </p>
                                        <a className="a" target="blank" href="https://youtu.be/0TgLtF3PMOc">Jack Hartman Music Channel</a>
                                        <p></p>
                                        <a className="a" target="blank" href="https://www.youtube.com/watch?v=u0_1QBQ8Syk&feature=youtu.be">The body Coach</a>
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </CardColumns>
                    </div>
                    <br></br>
                    <h3 className="disscusionForum">Discussion Forum</h3>
                <PostsPage category='3to6' />
                </div>
            </div>
  </>

        );
    }
}

export default Age3To6;