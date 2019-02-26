var request = require('request');
var rootURL = 'http://api.petfinder.com/';

module.exports = {
    petDetails,
    // search
}

function petDetails(req, res) {
    let options = {
        url: `http://api.petfinder.com/pet.getRandom?key=e4653e6431252bb0a55d474d2689f72b&animal=dog&output=basic&location=90034&format=json`,
    }
    request(options, function(err, response, body) {
        var petData = JSON.parse(body);
        console.log(petData);
        // options.url = userData.repos_url;
        // request(options, function(err, response, body) {
        //     userData.repos = JSON.parse(body);
        //     res.render('index', {
        //         title: 'GitHub Users',
        //         userData: userData
        //     });
        // });
    });
}

// function search(req, res) {
//     console.log(req.body.usernamePart)
//     var usernamePart = req.body.usernamePart; //partial username inputted
//     let options = {
//         url: `${rootURL}search/users?q=${usernamePart}`,
//         headers: {
//             'User-Agent': 'bmrivers',
//             'Authorization': 'token '+ process.env.GITHUB_TOKEN
//         }
//     }
//     console.log(options.url);
//     request(options, usernamePart, function(err, response, body) {
//         if (err) {
//             res.render('back');
//         }
//         var users = JSON.parse(body)
//         console.log(users.items);
//         res.render('search-results', {
//             title: 'GitHub Users',
//             users,
//             userData: null,
//             usernamePart
//         });
//     });
// }
