import React, { Component } from "react";
import PostsPage from "../posts/PostsPage";
import SideBar from '../layout/SideBar.js';
import Card from 'react-bootstrap/Card';
import Educational from "./Images/Edu_21.jpg";
import Fun from "./Images/Fun_21.jpg";
import Fitness from "./Images/Fit_21.jpg";
import CardColumns from 'react-bootstrap/CardGroup';

class Age15To21 extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-3">
                        <SideBar />
                    </div>
                    <div className="col-sm-9" id="Covid_Info" >
                        <div class="bigger" id="image4">
                            <div class="smaller"><h3>Age 15 to 21 Years</h3></div>
                        </div>
                        <div className="Child_text">
                            <p>All normally developing teenagers strive for independence, yearn to be with their peers and look ahead to the future. Given this, how do we care for young people whose wings have been clipped, who aren’t supposed to hang out with their friends and whose plans have been upended by coronavirus? Here are some strategies that might help to address these unforeseen parenting challenges, especially at a time when many adults are struggling to hold it all together and may not have easy access to their usual reserves.</p>

                            <p><button className="primary1" type="button" data-toggle="collapse" data-target="#collapse15" aria-expanded="false" aria-controls="collapseExample">
                                Make Space for Disappointment and Sadness
                            </button>
                                <div className="collapse" id="collapse15">
                                    <div className="child-card card-body">
                                        <p>Teenagers everywhere are facing stunning losses. Once-in-a-lifetime events and rites of passage such as graduations, proms and springtime on college campuses have been canceled. Performances, conferences and competitions for which teenagers have been preparing for months, if not years, have disappeared overnight.
                                            While schools and teachers scramble heroically to get coursework online, gone are the clubs, teams, hallway flirtations and other interactions that leaven most students’ days. The nourishment of school may be continuing in some form, but kids could rightly feel that it’s long on vegetables and short on dessert.
                                            Though we can’t replace what’s been lost, adults should not underestimate the power of offering outright empathy to disheartened adolescents. In addition to experiencing anxiety about Covid-19, teenagers also have every right to be sad, angry and intensely frustrated about what has become of their year. Adults should not hesitate to say, “I hate that you have lost so much so fast and I am sorry it has happened. You’ll get through this, but that doesn’t make it any less miserable right now.”
                                            When it comes to navigating painful feelings, the only way out is through, and offering our teenagers the compassion they deserve paves their way toward feeling better.</p>
                                    </div>
                                </div>
                            </p>

                            <p><button className="primary1" type="button" data-toggle="collapse" data-target="#collapse16" aria-expanded="false" aria-controls="collapseExample">
                                Make Space for Relief and Joy
                            </button>
                                <div className="collapse" id="collapse16">
                                    <div className="child-card card-body">
                                        <p>The same teenagers who feel deeply upset about missing school and their peers in one moment may express delight and deliverance in the next. As much as they are grieving their losses, they may also be relieved at getting out of some commitments they never wanted to keep, or being spared ongoing daily interaction with classmates, teachers or coaches they dislike.
                                            Let’s not begrudge adolescents their welcome feelings. They did not ask for or cause the current situation and should not be made to feel bad about enjoying some aspects of it. We might say, “It’s OK to feel relief now too,” while reassuring teenagers that embracing the upsides of the disruption does not minimize what they’ve lost or their worries about the impact of the virus.
                                        </p>
                                    </div>
                                </div>
                            </p>

                            <p><button className="primary1" type="button" data-toggle="collapse" data-target="#collapse17" aria-expanded="false" aria-controls="collapseExample">
                                Expect Friction Regarding Their Social Lives
                            </button>
                                <div className="collapse" id="collapse17">
                                    <div className="child-card card-body">
                                        <p>If you’re a parent who is sticking to the social distancing guidelines, your teenager is probably already frustrated with you, as some parents are still allowing their kids to hang out as usual.
                                            To address this we might say, “I know that other parents are still having kids over, but we can’t support that choice because it doesn’t fit with what experts are recommending.” From there, we can let our teenagers know that when turning down invites they are free to blame us, and that if local safety guidelines allow, we’re open to their suggestions about how they might get together with friends outdoors, six feet apart.
                                            When adolescents can’t see their peers in person, it seems only fair to loosen the rules on how much time they spend connecting online. But all bets aren’t off. Now, as always, rules are still in order to keep digital technology from undermining essential elements of healthy development. Sleep, productive learning, physical activity and face-to-face interactions (even if only with family members for now) should not be crowded out by life online.</p>
                                    </div>
                                </div>
                            </p>

                            <p><button className="primary1" type="button" data-toggle="collapse" data-target="#collapse18" aria-expanded="false" aria-controls="collapseExample">
                                Allow Privacy and Time Alone
                            </button>
                                <div className="collapse" id="collapse18">
                                    <div className="child-card card-body">
                                        <p>Of course, few adolescents will want to spend all of their new at-home time with their parents or guardians. Teenagers who are formally quarantined, under shelter-in-place orders, or simply practicing social distancing will need and deserve privacy and time alone.
                                            Make it clear that you welcome your teenagers’ company, but don’t take it personally if they want you nearby but quiet (like a potted plant), or if they want to spend time holed up in their rooms or in some other private space in your home.
                                            While you are free to request or require your teenager’s presence, think about approaching your teenager with an extra measure of consideration when making requests. For example, saying, “We’re going to need you to supervise your sister for a couple of hours, but we know that you have plans too. How should we do this?” might be a good place to start.</p>
                                    </div>
                                </div>
                            </p>

                            <p><b>Treat Teenagers as Problem-Solving Partners</b></p>
                            <p></p>
                            <p></p>
                        </div>
                        <CardColumns>
                            <Card className="bg-light text-black">
                                <Card.Img className="image_gradient" src={Educational} alt="Card image"  style={{opacity : 0.7}}/>
                                <Card.ImgOverlay>
                                    <Card.Title><u>Educational Activities</u></Card.Title>
                                    <br/>
                                    <Card.Text >
                                        <a className="a" target="blank" href='https://www.udemy.com/'>Online-courses</a>
                                        <p></p>
                                        <a className="a" target="blank" href='https://www.discoveryeducation.com/'>Lets discover Learning</a>
                                        <p></p>
                                        <a className="a" target="blank" href='https://www.coursera.org/'>Distance Learning</a>
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                            <Card className="bg-light text-black">
                                <Card.Img className="image_gradient" src={Fun} alt="Card image" style={{opacity : 0.7}} />
                                <Card.ImgOverlay>
                                    <Card.Title><u> Creative Activities</u></Card.Title>
                                    <br/>
                                    <Card.Text >
                                        <a className="a" target="blank" href="https://www.springboard.com/coursera/listening-to-world-music/">Music World</a>
                                        <p></p>
                                        <a className="a" target="blank" href="https://www.agame.com/">Online Games</a>
                                        <p></p>
                                        <a className="a" target="blank" href="https://www.goodhousekeeping.com/life/g31818776/quarantine-birthday-party-ideas/">Quarantine Bithday Party Ideas</a>
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                            <br></br>
                            <Card className="bg-light text-blank">
                                <Card.Img className="image_gradient" src={Fitness} alt="Card image" style={{opacity : 0.7}}/>
                                <Card.ImgOverlay>
                                    <Card.Title><u>Fitness</u></Card.Title>
                                    <br/>
                                    <Card.Text>
                                        <a className="a" target="blank" href="https://youtu.be/gC_L9qAHVJ8">Lets get fit</a>
                                        <p> </p>
                                        <a className="a" target="blank" href="https://youtu.be/D80LZz2WkZs">Dance fitness</a>
                                        <p></p>
                                        <a className="a" target="blank" href="https://academy.yogaed.com/p/yoga-ed-for-free-online-yoga-mindfulness-classes-for-all-ages">Yoga-Inner strength</a>
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </CardColumns>
                        <br></br>
                        <h3 className="disscusionForum">Discussion Forum</h3>
                        <PostsPage category='15to21' />
                    </div>
                </div>
            </div>



        );
    }
}

export default Age15To21;