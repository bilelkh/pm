const express = require("express");
const providerSetMock = require("./providerSetMock.json");
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get("/api/provider", async function(req, res) {
    const result = {
        success: true,
        errorSet: [],
        data: providerSetMock,
        nbProviderTotal: 15,
        nbProviderFiltered: 15,
    };

    res.send(result);
});


app.listen(3000, () => console.log('Gator app listening on port 3000!'));
