import express, { Router }  from "express";
import { homeController } from "../controllers/homecontroller.js";
import { serviceController } from "../controllers/serviceController.js";
// import { loginConserviceController } from "../controllers/loginController.js";
import { signupController } from "../controllers/singnupControlller.js";
import { aboutuscontroller } from "../controllers/aboutuscontroller.js";
import { contactController } from "../controllers/contactController.js";
import { housecontroller } from "../controllers/housecontroller.js";
import mailcontroller from "../controllers/mailcontroller.js";



const route = express.Router();

route.get('/', homeController);
route.get('/sign-up',signupController);
// route.get('/login-up',loginController);
route.get('/service',serviceController)
route.get('/about-us',aboutuscontroller);
route.get('/contact-us',contactController);
route.get('/house',homeController);
route.get('/mail',mailcontroller)






export default route;