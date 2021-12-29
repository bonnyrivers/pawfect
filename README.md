# Pawfect Pet App
Bonny Rivers <br>
General Assembly <br>WDI Santa Monica  <br>
February 2019

---

### Intro and Description
The goal of this project was to deploy an app that performs complete CRUD data operations using Node.js, Express, and MongoDB. 

Pawfect is an app that helps user search for dogs that are up for adoption. The idea came from dating apps such as Tinder and Bumble where a user can swipe

### Technologies Used
JavaScript, HTML, CSS, Express, Node.js, MongoDB, Mongoose, Postman, MongoDB Atlas, Google Fonts, Google Plus API, Petfinder.org API, OAuth Authentication 2.0, Visual Studio Code, GitHub, icons8.com, FreeSound.org, Chrome Dev Tools

#### Getting Started

[Pawfect Heroku App](https://pawfect-pet.herokuapp.com)

[Pawfect Trello Board](https://trello.com/b/OGwj6Ol2/pawfect)


### Code Snippet
```javascript

function show(req, res) {
    let user = req.user;
    let petfinderId = req.params.id;
    let options = {
        url: `${rootURL}pet.get?key=e4653e6431252bb0a55d474d2689f72b&id=${petfinderId}&format=json`
    }
    request(options, function(err, response, body) {
        let petfinderData = JSON.parse(body);
        let dogData = petfinderData.petfinder.pet;
        let doggyName = petfinderData.petfinder.pet.name.$t;
        res.render(`show`, {
            title: doggyName,
            petfinderId,
            user,
            dogData
        });
    });
}
```

An example of calling the Petfinder API

### Unsolved Issues
My shelters page was added at the end and not loaded into my shelters model. I would like to implement a relationship between users, shelters, and dogs.

On the user profile page, a user cannot currently update their description on their profile. 

### Next Steps
* A search feature to search for dogs or shelters
* Making the code more efficient, i.e. calling the API less.
* Stronger visual design

### References
https://www.w3schools.com/howto/howto_js_sidenav.asp

icons8.com
