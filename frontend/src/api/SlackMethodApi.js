import SlackApi from "./SlackApi";

class SlackMethodApi {

    createSlackMessage(message) {
        console.log('inside slack API create');
        return SlackApi.post('/contact', message);
    }

}

export default new SlackMethodApi();