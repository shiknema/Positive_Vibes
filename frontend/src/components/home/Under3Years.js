import React, { Component } from "react";
import PostsPage from "../posts/PostsPage";
import SideBar from '../layout/SideBar.js';
import Card from 'react-bootstrap/Card';
import Educational from "./Images/Edu_3.png";
import Fun from "./Images/Fun_3.jpg";
import Fitness from "./Images/Fit_3.jpg";
import CardColumns from 'react-bootstrap/CardGroup';

class Under3Years extends Component {
    render() {
        return (

            <div>
                <div className="row">
                <div className="col-sm-3">
                        <SideBar />
                    </div>
                    <div className="col-sm-9" id="Covid_Info" >
                        <div class="bigger" id="image1">
                            <div class="smaller"><h3>Under 3 Years</h3></div>
                        </div>
                        <div className="Child_text">
                        <p><button className="primary1" type="button" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapseExample">
                            Self-Care is not Selfish or Indulgent
                            </button>
                            <div className="collapse" id="collapse1">
                                <div className="child-card card-body">
                                    <p>-It’s how we keep ourselves well to ensure we are physically, emotionally, and mentally capable of being there for our young children.
                                Parenting a young child is already stressful at times. That’s why it’s important to remember to take care of yourself, too. When you feel calmer, it’s easier to be there for your children and meet their needs.
                                Most everyone has heard the flight attendant tell them to put their own oxygen mask on before helping others. The same goes for parenting—your health and well-being is important so that you can nurture your child. Self-care is not selfish or indulgent—it’s how we keep ourselves well to ensure we are physically, emotionally, and mentally capable of being there for our young children.
                                The realities of COVID-19 make self-care even more important. The unknowns of what’s coming next can worry even the calmest of parents. If faced with long periods of uncertainty, other stressors may emerge—concern for family members, worries about lost income, keeping the fridge full of groceries, balancing job roles with child care, and more. But young children need their parents to offer a calm, stable, and predictable “home base” for them. It’s a challenge, but as a parent, the best way to help your child be at their best is to take care of yourself.</p>
                                </div>
                            </div>
                        </p>

                        <p><button className="primary1" type="button" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapseExample">
                            How to Read Children's Minds
                            </button>
                            <div className="collapse" id="collapse2">
                                <div className="child-card card-body">
                                    <p>When young children experience a change in their routines, they may be confused or upset. But most children under three lack the words they need to share their feelings. They may “tell” you through their behavior: by being fussy, by withdrawing, by going back to earlier behaviors like
                                        wanting their pacifier or waking frequently at night. It’s easy to become frustrated, since as adults, we’re already managing so much. But when you encounter a challenging behavior, pause to think about what your child might be telling you.
                                        How could you respond in a way that meets their needs best? For example, if your child misses seeing their grandparent who provided child care before COVID-19, you can arrange for a video chat or by explaining the separation. Check out this resource for questions your toddler might have and age-appropriate ways to respond.</p>
                                </div>
                            </div>
                        </p>
                        </div>
                        <CardColumns>
                            <Card className="bg-light text-black">
                                <Card.Img className="image_gradient tranperency" src={Educational} alt="Card image" style={{opacity: 0.7}}/>
                                <Card.ImgOverlay>
                                    <Card.Title ><u>Educational Activities</u></Card.Title>
                                    <br/>
                                    <Card.Text >
                                        <a className="a" target="blank" href='https://www.abcya.com/grades/prek'>Lets Learn with Fun</a>
                                        <p></p>
                                        <a className="a" target="blank" href='https://www.learning4kids.net/category/1-2years/'>Learning for 1 to 2 years old</a>
                                        <p></p>
                                        <a className="a" target="blank" href='https://home.oxfordowl.co.uk/kids-activities/learning-activities-for-toddlers/'>Fun Learning Ideas for 0-3 Years</a>
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                            <Card className="bg-light text-black">
                                <Card.Img className="image_gradient tranperency " src={Fun} alt="Card image" style={{opacity: 0.7}} />
                                <Card.ImgOverlay>
                                    <Card.Title>T<u>o become more Creative Activities</u></Card.Title>
                                    <br/>
                                    <Card.Text >
                                        <a className="a" target="blank" href="https://www.funbrain.com/pre-k-and-k-playground">Online Playground </a>
                                        <p></p>
                                        <a className="a" target="blank" href="https://handsonaswegrow.com/indoor-activities-toddlers/">    Indoor Activities </a>
                                         <p></p>
                                        <a className="a" target="blank" href="https://www.whattoexpect.com/toddler/playtime-tips/crafts-for-toddlers/"> Crafts for Toddlers </a>
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                            <br></br>
                            <Card className="bg-light text-blank">
                                <Card.Img className="image_gradient tranperency" src={Fitness} alt="Card image" style={{opacity: 0.7}}/>
                                <Card.ImgOverlay>
                                    <Card.Title><u>Fitness</u></Card.Title>
                                    <br/>
                                    <Card.Text>
                                    <a className="a" target="blank" href="https://activeforlife.com/49-fun-physical-activities-to-do-with-kids-aged-2-to-4/">Physical Activities at home</a>
                                    <p></p>
                                    <a className="a" target="blank" href="https://www.verywellfamily.com/toddler-activities-4013770">Indoor Physical Activities</a>
                                    <p></p>
                                    <a className="a" target="blank" href="https://handsonaswegrow.com/physical-activities-toddlers/">Collection of Physical Activities Toddlers</a>                  
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </CardColumns>
                    <h3 className="disscusionForum">Discussion Forum</h3>
                <PostsPage category='ageunder3' />
                </div>
                </div>
            </div>



        );
    }
}

export default Under3Years;