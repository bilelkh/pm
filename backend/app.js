const express = require("express");
const providerSetMock = require("./providerSetMock.json");
const app = express();

app.get("/getProviderByResearchText", async function(req, res) {
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
