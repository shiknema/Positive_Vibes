import React, { Component } from "react";
import SideBar from "../layout/SideBar.js";
import coronaVirus from "./Images/corona-virus.png"
import coronaSymptoms from "./Images/coronaSymptoms.jpg"
import coronaSpreading from "./Images/coronaSpreading3.jpg"
import coronaTreatment from "./Images/coronaTreatment.jpg"
import coronaRiskGroup from "./Images/coronaRiskGroup.jpg"
import washHand from "./Images/washHand.jpeg"
import { Text } from '../../containers/Language';

class HomePage extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center">Covid -Information</h2>
                    </div>
                </div>
                <div className="row">
                    <SideBar />

                    <div className="col-md-9">
                        <div className="row mt-30">
                            <div className="col-md-4 col-sm-6">
                                <div className="box3">
                                    <img src={coronaVirus} alt="virus" />
                                    <div className="box-content">
                                        <h3 className="title"><Text tid="WhatIsCovid" /></h3>
                                        <p className="description">
                                            <b><Text tid="WhatIsCovidAnswer" />
                                            </b> </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="box3">
                                    <img src={coronaSymptoms} alt="crorna" />
                                    <div className="box-content">
                                        <h3 className="title">Symptoms</h3>
                                        <p className="description">
                                            <b>  Symptoms can include fever, cough and shortness of breath. In more severe cases, infection can cause pneumonia or breathing difficulties. More rarely, the disease can be fatal.
                                                These symptoms are similar to the flu (influenza) or the common cold, which are a lot more common than COVID-19. This is why testing is required to confirm if someone has COVID-19.
                                            </b></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="box3">
                                    <img src={coronaSpreading} alt="crornaSperad" />
                                    <div className="box-content">
                                        <h3 className="title">How does COVID-19 spread?</h3>
                                        <p className="description">
                                            <b> The virus is transmitted through direct contact with respiratory droplets of an infected person (generated through coughing and sneezing).
                                                Individuals can also be infected from and touching surfaces contaminated with the virus and touching their face (e.g., eyes, nose, mouth).
                                                The COVID-19 virus may survive on surfaces for several hours, but simple disinfectants can kill it.
                                            </b> </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-30">
                            <div className="col-md-4 col-sm-6">
                                <div className="box3">
                                    <img src={coronaRiskGroup} alt="crornaRisk" />
                                    <div className="box-content">
                                        <h3 className="title">Who is most at risk?</h3>
                                        <p className="description">
                                            <b> We are learning more about how COVID-19 affects people every day.  Older people, and people with chronic medical conditions,
                                                such as diabetes and heart disease, appear to be more at risk of developing severe symptoms.
                                                As this is a new virus, we are still learning about how it affects children.
                                                We know it is possible for people of any age to be infected with the virus,
                                                but so far there are relatively few cases of COVID-19 reported among children.
                                            </b> </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="box3">
                                    <img src={coronaTreatment} alt="crornaTreatment" />
                                    <div className="box-content">
                                        <h3 className="title">What is the treatment for COVID-19?</h3>
                                        <p className="description">
                                            <b>There is no currently available vaccine for COVID-19.
                                                However, many of the symptoms can be treated and getting early care from a healthcare provider can make the disease less dangerous.
                                                There are several clinical trials that are being conducted to evaluate potential therapeutics for COVID-19.
                                            </b> </p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="box3">
                                    <img src={washHand} alt="handwash" />
                                    <div className="box-content">
                                        <h3 className="title">Precatuionary Measures?</h3>
                                        <ul className="description">
                                            <li><b>Clean your hands often using soap and water, or an alcohol-based hand rub.</b></li>
                                            <li><b>Social-distancing. </b></li>
                                            <li><b>Don’t touch your eyes, nose or mouth. </b></li>
                                            <li><b>Cover your nose and mouth when you cough or sneeze.</b> </li>
                                            <li><b>Stay home if you feel unwell.</b> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </>





        );
    }
}

export default HomePage;