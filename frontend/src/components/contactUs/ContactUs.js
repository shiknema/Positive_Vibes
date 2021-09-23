import React from "react";
import SlackMethodApi from "../../api/SlackMethodApi";
import { Text } from '../../containers/Language';
import './contact.css';

class ContactUs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            emailAddress: '',
            message: ''
        };
        this.handleSubmit.bind(this);
    }

    async createSlackMessage(postData) {
        console.log("inside create slack message");
        try {
            await SlackMethodApi.createSlackMessage(postData);
        }
        catch (e) {
            console.error(e);
        }
    }

    handleSubmit = () => {
        console.log("inside handel submit");
        this.createSlackMessage({ name: this.state.name, emailAddress: this.state.emailAddress, message: this.state.message });

        this.setState({ name: '' });
        this.setState({ emailAddress: '' });
        this.setState({ message: '' });
    };

    render() {
        return (
            <div>
                <h4>If you want to contact us, please fill the form.</h4>
                <form className="was-validated">
                    <div className="card-body col-sm-10 mt-3">
                        <div className="form-group row ">
                            <label for="name" class="col-sm-2 col-form-label"><Text tid="name" /></label>

                            <textarea className="form-control is-valid col-sm-8"
                                placeholder="Type your name here"
                                value={this.state.name}
                                onChange={e => this.setState({ name: e.target.value })} id="name" required />
                            <div className="invalid-feedback">
                                Please enter a correct name.
                            </div>
                        </div>

                
                        <div className="form-group row">
                            <label for="email" class="col-sm-2 col-form-label"><Text tid="EmailAddress" /></label>
                            <textarea className="form-control is-invalid col-sm-8"
                                placeholder="name@example.com"
                                value={this.state.emailAddress}
                                onChange={e => this.setState({ emailAddress: e.target.value })} id="EmailAddress" required />
                            <div class="invalid-feedback">
                                Please enter a valid email-Id.
                            </div>
                        </div>

                        <div className="form-group row">
                            <label for="message" class="col-sm-2 col-form-label"> <Text tid="Message" /></label>

                            <textarea rows="10"
                                className="form-control is-invalid col-sm-8"
                                placeholder="Type your message here"
                                value={this.state.message}
                                onChange={e => this.setState({ message: e.target.value })} id="message" required />
                            <div className="invalid-feedback">
                                Please enter a message in the textarea.
                            </div>
                        </div>

                        <div className="form-group row">
                            <div className="offset-sm-2">
                                <button
                                    className="btn btn-outline-success"
                                    onClick={this.handleSubmit} >
                                    <Text tid="Submit" />
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }


}

export default ContactUs;