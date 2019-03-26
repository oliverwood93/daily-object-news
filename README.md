# Daily-Object-News

This project is a social news aggregation and discussion website/web-application that takes inspiration from sites like Facebook and Reddit.

## Using the Web-App

The link below will direct you to deployed version of the web-app, hosted on Netlify:

```
https://daily-object-news.netlify.com

```

On the web app as a non-logged in user you may view news articles, comments. You may also create an account from the sign-up page, doing so will grant you access to post like and comment on existing articles as well as posting your own.

If you wish to view the site through different predefined user accounts, then please use the account selection dropdown which can be accessed either by the log-in/sign-up page or via clicking on the avatar image in the top right hand corner of the screen. A dropdown box was used instead of an AUTH system just so that it would be easier for a user to test out and use the web app.

## Getting Started

Follow these instructions in order to get a copy of the project up and running on your local machine for development and testing purposes.

## Installing

1. First of all fork this project to your own repo.

2. Clone the repo remotely by executing this command:


```
git clone <Insert Github Repo Link>
```

3. Change directory to the local repo file.

4. Running the following command will install the dependencies:

```
npm install
```

5. The dependencies are required for development purposes, for convenience they are also listed below:

```
@reach/router: ^1.2.1,
axios: ^0.18.0,
jw-paginate: ^1.0.2,
moment: ^2.24.0,
react: ^16.8.3,
react-bootstrap: ^1.0.0-beta.5,
react-burger-menu: ^2.6.5,
react-dom: ^16.8.3,
react-image: ^2.0.0,
react-responsive: ^6.1.1,
react-scripts: 2.1.5,
react-transition-group: ^2.6.0
```


## Deployment with Netlify 

If you would like to deploy your own version of this web-app / project then follow these steps:

1. Make sure you have forked this project and you have your own repo for it.

2. Create a Netlify Account.

3. Navigate to your projects directory and from the CLI run:

```
npm run build
```

4. Install Netlify's CLI tool and run deploy:

```
npm install netlify-cli -g

netlify deploy
```

5. Next follow the CLI prompts to complete the deployment of your web app.

## Built With
* [Node.js](https://nodejs.org/en/docs/) - Used As The JavaScript Runtime Engine
* [Netlify](https://www.netlify.com/docs/) - Used For Live Application Deployment/Hosting
* [Reactjs](https://reactjs.org/docs/getting-started.html) - JavaScript library for building the user interface
* [React Bootstrap](https://react-bootstrap.github.io/) - Implementing Certain Stylistic Components

## Authors
* **[Oliver Wood](https://github.com/oliverwood93)** - *Author* 

## Links

* https://daily-object-news.netlify.com - Live Deployed Version of Web-App
* https://github.com/oliverwood93/BE2-NC-Knews - Github page for back-end side of project


