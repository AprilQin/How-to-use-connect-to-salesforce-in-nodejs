/**
 * This is starter code shows how to send queries to salesforce server with nodejs
 * Queries are SOQL queries.
 *
 * */

var jsforce = require("jsforce");
const express = require("express");
const app = express();

/**
 * Global variables
 * */

var data = "loading data from salesforce";

/**
 * Main
 * */

GetSalesforceData();

app.listen(3005, () => {
  console.log("Server listening on port 3005!");
});

app.get("/salesforcedata", (req, res) => {
  res.json({
    data: data
  });
});

/**
 * functions
 * */
async function GetSalesforceData() {
  var conn = new jsforce.Connection();
  await conn.login(
    "PUT USERNAME HERE PLZ",
    "PUT BOTH PASSWORD AND TOKEN HERE PLZ",
    async function(err, res) {
      if (err) {
        return console.error(err);
      }
      await conn.query(
        "select Name \
        from account \
        where Support_Status__c = 'Support Customer - Current M&S'\
        and Brands_Owned__c includes ('COMPANY NAME')",
        async function(err, result) {
          if (err) {
            return console.error(err);
          }
          console.log("total : " + result.totalSize);
          console.log("fetched : " + result.records.length);
          data = await storeOEMcustomers(result.records);
        }
      );
    }
  );
}

function storeOEMcustomers(records) {
  var oemTemp = {};
  for (customer of records) {
    oemTemp[customer.Name] = {
      incidents: [],
      activeContacts: [],
      products: []
    };
  }
  return oemTemp;
}
