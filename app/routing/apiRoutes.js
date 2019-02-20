var friendsData = require("../data/friends");;

module.exports = function(app) {
 
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
    var newUser = req.body;
    var userResponses = newUser.scores;

    var nameMatch = "";
    var imgMatch = "";
    var totalDiff = 100;

    for (var i = 0; i < friendsData.length; i++) {
        var netDiff = 0; 

        for (var j = 0; j <userResponses.length; j++) {
            netDiff += Math.abs(friendsData[i].scores[j])
        }
    }






})
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    }
    else {
      waitListData.push(req.body);
      res.json(false);
    }
  });

};