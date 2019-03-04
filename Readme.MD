# Metrics App

Welcome to Metrics Dashboard Project.


**Application Setup Guide is as follows:**

`Minimum Setup Requirements :`

Java 8 , MySQL Server and Client , Node , Yarn or NPM package manager

**Step 1:- Backend API Execution** 

You can run backend api by changing directory to api

`cd api`

then if you have maven install you can do:

`mvn clean spring-boot:run`

alternatively you can use maven wrapper as well:

`./mvnw clean spring-boot:run`

**Step 2:- Read API Documentation**

Backend API documentation is supported by Swagger. Make sure application is Running on 8080 port.

Access following URL to see API documentation:
 http://localhost:8080/swagger-ui.html
 
 **Step 3:- Excute React UI**
 
 Change to dev-project folder inside react folder.
 
` cd react/dev-project` 

Make sure **package.json** is available in root.

lastly execute:

`npm start`

or

`yarn start `

then access **http://localhost:3000** to see UI.
 


