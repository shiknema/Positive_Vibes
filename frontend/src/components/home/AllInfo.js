import React, { Component } from "react";
import { Text } from '../../containers/Language';


 class AllInfo extends Component {
  constructor(props) {
      super(props);

        this.state = { 
          jsonObject: null, 
        }
    }

    componentDidMount() {
        fetch('https://covid19.mathdro.id/api/countries/sweden')
          .then(response => response.json())
          .then( json => {this.setState({ jsonObject: json })})
    }

    render() {
        if(this.state.jsonObject!=null)  {
            return (
                <div >
                     <div className="row allInfo-padding">
                            <div className="col-sm-6 " id ="Covid_Info">
                                <h4 > <Text tid="CovidCasesInSweden" /></h4> 
                                <div className="card-body colour">
                                <ul> <b>
                                    <li><Text tid="ConfirmedCases" /> = {this.state.jsonObject.confirmed.value}</li>
                                    <li><Text tid="RecoveredCases" /> = {this.state.jsonObject.recovered.value}</li>
                                    <li><Text tid="TotalDeaths" /> = {this.state.jsonObject.deaths.value}</li>
                                    <li><Text tid="LastUpdate" />= {this.state.jsonObject.lastUpdate}</li> 
                                </b> </ul> 
                             </div>  
                           </div>  
                     
                       </div>  
                </div>  
            )
        }
        else {
            return(
                <></>
            )
        }
    }
}

export default AllInfo;
