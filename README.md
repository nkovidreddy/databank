# databank

The web application is developed in Mean Stack and the Data Analysis, Cleaning and Exploration is done through Python NumPy, Pandas, Anaconda packages and the transformed featured dataset is trained through Azure Machine Learning Studio and deployed the models as Web Services. The web services are requested through HTTP POST from our Node.js server to predict the outcome of the customer decision with respect to the bank new marketing campaign
</br>

Setting Up Project on Local Machine:</br>
1) Clone Project on Local Machine</br>
2) Install Node</br>
3) Install NPM packages</br>
4) Run npm install which runs and installs all dependencies present in the package.json file</br>
5) Or Edit the package.json and have the below content as below</br>
{</br>
  "name": "unicorns",</br>
  "version": "1.0.0",</br>
  "description": "This is a data mining project on banking data set",</br>
  "main": "server.js",</br>
  "scripts": {</br>
    </br>
  },</br>
  "author": "Team Unicorns 239",</br>
  "license": "ISC",</br>
  "dependencies": {</br>
    "bcrypt-nodejs": "0.0.3",</br>
    "body-parser": "^1.15.0",</br>
    "express": "^4.13.4",</br>
    "mongoose": "^4.4.14",</br>
    "morgan": "^1.7.0",</br>
    "python-shell": "^0.4.0"</br>
  }</br>
}</br>
6) Edit the Port variable in server.js to run on specific port on your local.</br>
7) Make sure all the CSS and Javascript are correctly reference in app.js, index.html, and other pages.</br>
8) Install Python 3+ , Install NumPy, Pandas and Anaconda Packages in Python.</br>
9) Start the server by typing node server.js which starts your server</br>
10) Open the host:{port} , here host is your hostname and port is the port on which your nodejs server is running.</br>
11) Open Browser and view the web application and try predicting customer outcomes experimenting with different values</br>
12) Web Application is deployed in Heroku and is available at http://uniqbank.heroku.com
</br>
