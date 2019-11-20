# use-salesforce-in-nodejs

This is an example code to how to use nodejs to connect to salesforce database server and send soql queries. 

During database connection, we need use the concactnation of user password and token for authentication. The token can be retrieved from logging into salesforce account and click in settings, there is an option to request a token being sent to your email. Salesforce uses SOQL queries. SOQL queries can be tested with database client applications such as Squirrel as it is a JDBC database client application and we can use Squirrel to connect to Salesforce.


