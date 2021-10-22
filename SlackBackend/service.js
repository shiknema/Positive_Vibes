// === HTTP service ===
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
app.use(cors());
var server = require('http').createServer(app);
app.use(bodyParser.json());
const SLACK_WEBHOOK_URL = ("https://hooks.slack.com/services/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")
//const urlencodedParser = bodyParser.urlencoded({ extended: false });
const { IncomingWebhook } = require('@slack/webhook');
const url = SLACK_WEBHOOK_URL;
const webhook = new IncomingWebhook(url);

// maps contents of /static folder to the site's root
app.use(express.static(__dirname + '/static')); 
app.set('view engine', 'jade');

app.get('/contact', function (req, res) {
  res.sendFile(__dirname + '/static/contact.html')
})
app.post('/contact',
    (req, res) => {
      console.log('request reached here');
      console.log(req.body);
        const ev = {
            name: req.body.name,
            email: req.body.emailAddress,
            message: req.body.message,
        };
        const data = JSON.stringify(ev);
        console.log(data);
        const message = {
          text: 'Alert Bot! New Message.',
          mrkdwn: true,
          attachments: [
            {
              color: '#00FF00',
              title: 'Someone left a message for you',
              fields: [{
                title: data
              }]
            }
          ]
        };
        webhook.send(message);
        res.redirect("/");
      }
      
)

// start listening 
server.listen(5000, function () {
  console.log('service is listening on http://localhost:5000');
});