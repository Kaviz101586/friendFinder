let friends = require('../data/friends');

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {
        let newUser = req.body;
        let newUserScores = newUser.scores;
        let differenceArr = [];

        for (i=0; i<friends.length; i++) {
            let difference = 0;
            let currentFriend = friends[i];

            for (j=0; j<newUserScores.length; j++) {
                let trueDiff = newUserScores[j] - currentFriend.scores[j];
                trueDiff = Math.abs(trueDiff);
                difference += trueDiff;
            }
            differenceArr.push(difference);
        }

       let match = differenceArr.indexOf(Math.min(...differenceArr));

       matchedUsers = friends[match];
       res.send(matchedUsers);
    });
}