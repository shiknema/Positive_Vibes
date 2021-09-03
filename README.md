# Positive_Vibes
### Educational Open Application
#### As we hear Covid 19 first thing that comes to our minds is fear hence we were interested to share our positive experiences because of Covid 19 ? People are struggling to lead normal life and motivating themselves to be normal. So we want to spread some positivity and give some motivations to all the students of different age groups by suggesting activities and by providing some important details for their schoolings. Keeping discusions forum in our website we believe we are bringing everyone together too. Say we save lot of travel time. That time we are able to spend with our dear ones and kids.We kept student group as target group since it can be one place for kids parents and adults anyone to get the information.

#### The discussion forum is an open place for anyone to discuss on any topic for that category or any doubts were other can give suggestions. So they can share their positivity to other and motivate them.

### Setup
Our development environment for a full-stack web application will consist of three main parts:

Database (Postgres).
Backend server (Spring).
Frontend development server (React).
We will need to set up and start these three components in the order above for everything to work.

### Prerequisites
Install docker and docker-compose.
Install Nodejs.
Install a proper IDE/Text editor fo Java and Javascript. IntelliJ community edition is recommended for Java development but doesn't work very well with JavaScript. It's therefore recommended to use VS Code or any other JavaScript-friendly IDE when working with frontend code.
Starting the database
To start the database open the terminal and cd your way in to the project root folder. You can just simply run docker-compose up to start the database. Closing the terminal will kill the database. So you need to restart the database every time you need to use it.

### Starting the backend server
Open the root folder in IntelliJ and import all the gradle dependencies (this has to be done only once of course).

Make sure that the database is running (see steps above) otherwise the backend won't have access to it. Then run the main class at src/main/java/se/kth/sda6/skeleton/SkeletonApplication.java to start the web server.

### Starting the frontend development server
To install the project dependencies for the frontend, open the terminal and make sure that the current directory is frontend. You can then run npm install to install all the dependencies needed for the project (This has to be done only once).

To start the frontend server run npm start from the frontend directory. Make sure that database and backend server are also running so that the frontend can interact with the backend. When working on the frontend, open the frontend folder in your favorite Javascript IDE.

### Inviting collaborators
The following should be done by one person in each group.

Now that you have a repo, you can start inviting your group members as collaborators so that they can work with you on your repo. Go to Settings -> Members and then add your group members via their usernames.

### FAQ
How can I connect to running database from terminal
Sometimes you might want to inspect the tables, run raw queries, seed the database, check that a certain backend action has been performed correctly. To do that you can simply run the following command

docker run -it --network host postgres:11-alpine psql -h localhost -U skeleton_user -p 5433 -W skeleton

Use the password specified in docker-compose.yaml.
