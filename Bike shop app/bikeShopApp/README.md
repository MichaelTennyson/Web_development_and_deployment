-Install neccessary modules:
npm install express express-session mysql pug-cli bcrypt util.promisify



-Starting the application:
There is a mySQL script that you will have to run within mySQL, this will create and populate the tables neccesarry for the application to run.

Afterwards there is a js file named "pool" within the core folder where you will have to re-configure your connection to mySQL, replace the host, user and password field. You cannot skip this step otherwise you will get an error when try to run the command bellow.

Lastly, go to the directory of the bikeShopApp folder within cmd
Run the command: npm start app.js
This will start the application.



-Application feautures:
This application is based around an online bike shop store. It feautures many bikes that can be purchased. Each individual bike is populated within the database. The user can either register or login at the home page. Logging in with a non-existant password and username combination will result in a failed login attempt, it is also case sensitive. Once the user creates an account their account information is sent to the users table within the database along with their encryprted password. Once the user is logged in they are greeted with a welcome message along with their name. They remained logged in until they logout. 




