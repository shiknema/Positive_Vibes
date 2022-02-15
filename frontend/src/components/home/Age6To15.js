import React, { Component } from "react";
import PostsPage from "../posts/PostsPage";
import SideBar from '../layout/SideBar.js';
import Card from 'react-bootstrap/Card';
import Educational from "./Images/Edu_15.jpg";
import Fun from "./Images/Fun_15.jpg";
import Fitness from "./Images/Fit_15.jpg";
import CardColumns from 'react-bootstrap/CardGroup';

class Age6To15 extends Component {
    render() {
        return (
           
            <div>
            <div className="row">
                <div className="col-sm-3">
                    <SideBar />
                </div>
                <div className="col-sm-9" id="Covid_Info" >
                    <div class="bigger" id="image3">
                        <div class="smaller"><h3>Age 6 to 15 Years</h3></div>
                    </div>
                       <div className="Child_text">
                        <p><button className="primary1" type="button" data-toggle="collapse" data-target="#collapse6" aria-expanded="false" aria-controls="collapseExample">
                            Talking about COVID-19</button>
                            <div className="collapse" id="collapse6">
                                <div className="child-card card-body">
                                    <p>Be willing to talk. They will already have heard something. Silence and secrets do not protect our children. Honesty and openness do. Think about how much they will understand. You know them best.
                                        Be open and listenAllow your child to talk freely. Ask them open questions and find out how much they already know.
                                        Be honest Always answer their questions truthfully. Think about how old your child is and how much they can understand.
                                        Be supportive Your child may be scared or confused. Give them space to share how they are feeling and let them know you are there for them.
                                        It is OK not to know the answers.It is fine to say “We don’t know, but we are working on it; or we don’t know, but we think.” Use this as an opportunity to learn something new with your child!
                                        Heroes not bullies.Explain that COVID-19 has nothing to do with the way someone looks, where they are from, or what language they speak. Tell your child that we can be compassionate to people who are sick and those who are caring for them. Look for stories of people who are working to stop the outbreak and are caring for sick people.</p>
                                </div>
                            </div>
                        </p>
                       
                       <p><button className="primary1" type="button" data-toggle="collapse" data-target="#collapse7" aria-expanded="false" aria-controls="collapseExample">
                           One-on-one time during COVID-19
                           </button>
                           <div className="collapse" id="collapse7">
                                <div className="child-card card-body">
                                    <p>Can’t go to work? Schools closed? Worried about money? It is normal to feel stressed and overwhelmed.
                                    School shutdown is also a chance to make better relationships with our children and teenagers. One-on-One time is free and fun. It makes children feel loved and secure, and shows them that they are important.
                                    Set aside time to spend with each child.It can be for just 20 minutes, or longer – it’s up to us. It can be at the same time each day  so children or teenagers can look forward to it.
                                    Ask your child what they would like to do.Choosing builds their self confidence. If they want to do something that isn’t OK with physical distancing, then this is a chance to talk with them about this.Listen to them, look at them. Give them your full attention. Have fun!</p>
                                </div>
                            </div>
                        </p>

                       <p><button className="primary1" type="button" data-toggle="collapse" data-target="#collapse8" aria-expanded="false" aria-controls="collapseExample">
                           Keeping it positive during the coronavirus outbreak
                           </button>
                           <div className="collapse" id="collapse8">
                                <div className="child-card card-body">
                                    <p>It’s hard to feel positive when our kids or teenagers are driving us crazy. We often end up saying “Stop doing that!“. But children are much more likely to do what we ask if we give them positive instructions and lots of praise for what they do right.
                                        Say the behaviour you want to see .Use positive words when telling your child what to do; like “Please put your clothes away” (instead of “Don’t make a mess”).
                                        It’s all in the delivery.Shouting at your child will just make you and them more stressed and angrier. Get your child’s attention by using their name. Speak in a calm voice.
                                        Praise your child when they are behaving well.Try praising your child or teenager for something they have done well. They may not show it, but you’ll see them doing that good thing again. It will also reassure them that you notice and care.
                                        Get real.Can your child actually do what you are asking them? It is very hard for a child to keep quiet inside for a whole day but maybe they can keep quiet for 15 minutes while you are on a call.
                                        Help your teen stay connected.Teens especially need to be able to communicate with their friends. Help your teen connect through social media and other safe distancing ways. This is something you can do together, too!</p>
                              </div>
                            </div>
                        </p>

                        <p><button className="primary1" type="button" data-toggle="collapse" data-target="#collapse9" aria-expanded="false" aria-controls="collapseExample">
                            Family harmony at home</button>
                            <div className="collapse" id="collapse9">
                                <div className="child-card card-body">
                                    <p>When we model peaceful and loving relationships, our children feel more secure and loved. Positive language, active listening and empathy help maintain a peaceful and happy family environment during these stressful times.</p>
                                </div>
                            </div>
                        </p>

                        <p><button className="primary1" type="button" data-toggle="collapse" data-target="#collapse10" aria-expanded="false" aria-controls="collapseExample">
                            Keep calm and manage stress from COVID-19
                            </button>
                            <div className="collapse" id="collapse10">
                                <div className="child-card card-body">
                                    <p>This is a stressful time. Take care of yourself, so you can support your children.You are not alone.
                                    Millions of people have the same fears as us. Find someone who you can talk to about how you are feeling. Listen to them. Avoid social media that makes you feel panicked.
                                    Take a break.We all need a break sometimes. When your children are asleep, do something fun or relaxing for yourself. Make a list of healthy activities that YOU like to do. You deserve it!</p>
                                    <p>Listen to your kids.</p>
                                    <p>Be open and listen to your children. Your children will look to you for support and reassurance. Listen to your children when they share how they are feeling. Accept how they feel and give them comfort.</p>
                                </div>
                            </div>
                        </p>
                        <p><b>Take a pause!!!.....</b></p>
                      </div>
                    <p></p>
                    <CardColumns>
                        <Card className="bg-light text-maroon">
                        <Card.Img className="image_gradient " src={Educational} alt="Card image" style={{opacity : 0.7}} />
                     <Card.ImgOverlay>
                           <Card.Title><u>Educational Activities</u></Card.Title>
                           <br/>
                                <Card.Text>
                                <a className="a" target="blank" href='https://www.brainpop.com/'>Brain Pop</a>
                                <p></p>
                                <a className="a" target="blank" href='https://www.ixl.com/'>Personalised Learning</a>
                                <p></p>
                                <a className="a" target="blank" href='https://www.tynker.com/'> Coding made Easy</a>
                             </Card.Text>
                            </Card.ImgOverlay>
                        </Card>

                        <Card className="bg-light text-maroon">
                            <Card.Img  className="image_gradient tranperency" src={Fun} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title><u>Creative Activities</u></Card.Title>
                                <br/>
                            <Card.Text>
                             <a  className ="a" target="blank" href="https://www.classicly.com/young-readers">Books is a  Treasure</a>
                             <p></p>
                             <a  className ="a" target="blank" href="https://stepbysteppainting.net/2018/06/28/painting-for-kids/"> Colourful time</a>
                             <p></p>
                             <a  className ="a" target="blank" href="https://www.thesprucecrafts.com/crafts-for-tweens-1254269">Crafty Craft</a>
                             </Card.Text>
                             </Card.ImgOverlay>
                             </Card>

                             <Card className="bg-light text-maroon">
                                <Card.Img  className="image_gradient tranperency" src={Fitness} alt="Card image"/>
                                 <Card.ImgOverlay>
                                    <Card.Title><u>Fitness</u></Card.Title>
                                    <br/>
                                <Card.Text>
                                 <a className ="a" target="blank" href="https://youtu.be/McD6_oOWs-M">Execrise is Vital</a>
                                 <p> </p>
                                 <a className ="a" target="blank" href="https://youtu.be/dhCM0C6GnrY">Workout with Kids</a>
                                 <p></p>
                                <a className ="a" target="blank" href="https://youtu.be/X655B4ISakg">Kids Yoga!</a>
                             </Card.Text>
                            </Card.ImgOverlay>
                             </Card>
                        </CardColumns>
                     
                <br></br>
                <h3 className="disscusionForum">Discussion Forum</h3>
            <PostsPage category='6to15' />
            <div></div>
            </div>
            </div>
        </div>
    );
}
}           
                        
                        
export default Age6To15;