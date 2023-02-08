# STAR WARS API
### Introduction
RESTful API for managing a NOSQL(MongoDB) database concerning the **Star Wars** universe
### API Features
* User can view the complete list of database.
* User can add new data to the database.
### Installation Guide
* Clone this repository [here](https://github.com/ZeroWk-EM/StarWarsAPI.git).
* Run npm install to install all dependencies.
### Usage
* Go to index.js and edit *stringConnection* with your database connection link.
* Run npm start to start Express Server and DB Connection.
* Connect to the API using Postman at the [localhost link](http://localhost:3000).
**N.B** Default port is 3000
### API Endpoints
#### GET
| Endpoints | Action |
| --- | --- |
| /character | Description the method |
| /character/:id | Description the method |
#### POST
| Endpoints | Action |
| --- | --- |
| /character | Description the method |
| /character/:id | Description the method |
#### PUT
| Endpoints | Action |
| --- | --- |
| /character | Description the method |
| /character/:id | Description the method |
#### DELETE
| Endpoints | Action |
| --- | --- |
| /character | Description the method |
| /character/:id | Description the method |

### Technologies Used
* [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
* [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
* [MongoDB](https://www.mongodb.com/) This is a free open source NOSQL document database with scalability and flexibility. Data are stored in flexible JSON-like documents.
* [Mongoose ODM](https://mongoosejs.com/) This makes it easy to write MongoDB validation by providing a straight-forward, schema-based solution to model to application data.
### License
This project is available for use under the MIT License.