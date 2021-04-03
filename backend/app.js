/** @format */

const express = require("express");
const providerSetMock = require("./providerSetMock.json");
const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/api/provider", async function (req, res) {
  const { pageIndex, pageSize, name, email, address, phoneNumber } = req.query;
  let providers = providerSetMock ; 

  console.log(pageIndex, pageSize, name, email, address, phoneNumber)
  if (name !=='null'){
   providers = providers.filter(o=>o.name.includes(name))
  }

  if (email !=='null'){
   providers = providers.filter(o=>o.email.includes(email))
  }


  if (address !=='null'){
   providers = providers.filter(o=>o.address.includes(address))
  }


  if (phoneNumber !=='null'){
   providers = providers.filter(o=>o.phoneNumber.includes(phoneNumber))
  }

  const totalItems = providers.length
  if(pageIndex && pageSize){
    if(providers){
      providers =  providers.slice((pageIndex - 1) * pageSize, pageIndex * pageSize);
    }
  }
  console.log("providers",providers)

    const result = {
      data: providers,
       totalItems,pageIndex, pageSize, name, email, address, phoneNumber 
    };

  res.send(result);
});

app.listen(3000, () => console.log("Gator app listening on port 3000!"));
