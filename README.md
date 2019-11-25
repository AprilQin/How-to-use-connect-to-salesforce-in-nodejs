# use-salesforce-in-nodejs

This is an example code to connect salesforce database server and send soql queries by using nodejs. 

During the database connection, we need to use the concatenation of user passwords and tokens for authentication. The token can be retrieved from logging into salesforce account. Clicking in settings, there is an option to request a token being sent to your email. Salesforce uses SOQL queries which can be tested with database client applications such as Squirrel. As Squirrel is a JDBC database client application and we can use it to connect Salesforce.


