# databank

The web application is developed in Mean Stack and the Data Analysis, Cleaning and Exploration is done through Python NumPy, Pandas, Anaconda packages and the transformed featured dataset is trained through Azure Machine Learning Studio and deployed the models as Web Services. The web services are requested through HTTP POST from our Node.js server to predict the outcome of the customer decision with respect to the bank new marketing campaign


Setting Up Project on Local Machine:
1) Clone Project on Local Machine
2) Install Node
3) Install NPM packages
4) Run npm install which runs and installs all dependencies present in the package.json file
5) Or Edit the package.json and have the below content as below
{
  "name": "unicorns",
  "version": "1.0.0",
  "description": "This is a data mining project on banking data set",
  "main": "server.js",
  "scripts": {
    
  },
  "author": "Team Unicorns 239",
  "license": "ISC",
  "dependencies": {
    "bcrypt-nodejs": "0.0.3",
    "body-parser": "^1.15.0",
    "express": "^4.13.4",
    "mongoose": "^4.4.14",
    "morgan": "^1.7.0",
    "python-shell": "^0.4.0"
  }
}
6) Edit the Port variable in server.js to run on specific port on your local.
7) Make sure all the CSS and Javascript are correctly reference in app.js, index.html, and other pages.
8) Install Python 3+ , Install NumPy, Pandas and Anaconda Packages in Python.
9) Start the server by typing node server.js which starts your server
10) Open the host:{port} , here host is your hostname and port is the port on which your nodejs server is running.
11) Open Browser and view the web application and try predicting customer outcomes experimenting with different values
12) Web Application is deployed in Heroku and is available at http://uniqbank.heroku.com

