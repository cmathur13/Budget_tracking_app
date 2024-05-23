Create db folder in WebWizards Directory mkdir db

Run the mongod command to run the mongo server on port 3000 mongod --port 3000 --dbpath ./db

Connect the same port on Mongo Compass

Run the mongo shell to perform actions on db mongosh --port 3000 --authenticationDatabase admin

In Mongo Shell load the data population script and create the db admin user for further node server connectivity load ('createDB/createBudget.js') load ('createDB/createAdminUser.js')

Verify that the data is populated on the compass

Compile the typescript files tsc

Run the node server node AppServer.js
