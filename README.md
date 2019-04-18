# news-scrape

# <a name="deployed"> Deployed Site </a>
Use the link to see the deployed site: https://github.com/kchoi123/news-scrape

---

## Welcome to news-scape!

<img src="./images/1new.png" width= "350px">

---

# Table of Contents

- [Introduction](#introduction)
- [Setup](#setup)
- [Routes](#routes)
- [Technologies Used](#technology)
- [Deployed Site](#deployed)
- [Meet the Authors](#authors)
- [About Inspector Otter](#otter)

---

# <a name="introduction"> Introduction </a>
Jam-is-on is an app that efficiently allow musicians and bands to connect. 
* Are you a musician looking for a band?
* Do you have musical talent but having trouble find band members?
* Are you a band leader having trouble finding a drummer, vocalist, or guitar player? 

If you answered YES to any of the questions above, HAVE NO FEAR! Jam-is-on application is here to help YOU! 

<hr>

# <a name="setup"> Setup </a>

1. First, clone or download this repository. Then naviagate to its root directory in Terminal, and enter the following command:

```
$ npm i
```

### mySQL

2. Using your preferred mySQL IDE (e.g. mySQL Workbench) and the provided schema.sql file, setup a database on your machine.

### Power On!

3. After installing the dependencies and setting up a local database, return to the app's root directory in terminal and enter:

```
$ node server.js
```

---

# <a name="routes"> Routes </a>

URL | HTTP | Details:
--- | --------- | --------
/ | GET | Render landing page.
/signin | GET | Renders sign in page and sends user data to mySQL database.
/signup | POST | Posts new user to database.
/logout | GET | Logs specific user out and routes them to root page.
/musician | GET | Render dashboard page. Get all code snippets specific to logged in user (musician).

---

# <a name="technology"> Technologies Used </a>

* JavaScript
* jQuery
* Node.js
* Express
* Express-handlebars
* Express-session
* Passport  *(Authentication)*
* mySQL *(Database)*
* Mongodb *(Database Query)*

---

# <a name="authors">Meet the Authors!</a>

|     Author           |  Summary|    Fun Fact         | Hobbies    |
|----------------------|---------|---------------------|------------|
|<b>Kevin Choi :rice_ball: <img src="https://avatars2.githubusercontent.com/u/41413295?s=460&v=4" width="150px">  https://github.com/kchoi123         |Kevin Choi comes from a background in IT Infrastructure specializing in hybrid system deployment using co-locations, AWS, Azure, Rackspace, and SoftLayer. His goal is to develop tools that will help collaborate hardware and software incompatibilities, both technologically and departmentally.| Kevin has played on the US Junior National Badminton Team.   | Netflix and sitting on the couch with his dog Polo :dog:|

