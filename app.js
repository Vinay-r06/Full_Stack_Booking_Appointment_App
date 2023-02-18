const express= require('express');              // express , nodemon installed in this
const app= express();         

const cors= require('cors');          // it will allows a server to indicate any origins (domain, scheme, or post) other than its own from which a browser should permit load resources
app.use(cors());
// app.use(
//     cors({
//     allowedHeaders: "*",
//     allowMethods: "*",
//     origin: "*",
// })
// );
// app.use(cors({
//     origin:"http://localhost:3000",
// })
// );

// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
// header ('Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization');



const bodyParser = require('body-parser');    // it gives 4 express middleware for parasing JSON, Text, URL-encoded, raw data sets over an HTTP request body... 
app.use(bodyParser.json({ extended: false}));


const bookRoutes = require('./routes/BookingRoutes');     // routing to bookRoutes..
app.use(bookRoutes);


const path = require('path');
app.use(express.static(path.join(__dirname, "public")));      // with this users should able to access "public" path...// it will take any request that tries to find some file..


const errorController = require('./controllers/error');       // error--> adding a  404 error page
app.use(errorController.get404);



//using sequelize database
const sequelize = require('./util/database');
sequelize.sync()
        .then((result)=>{
            app.listen(3000);
        })
        .catch((err)=>{
            console.log(err);
        });



























