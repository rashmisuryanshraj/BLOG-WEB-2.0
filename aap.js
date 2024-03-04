    import express, { Router }  from "express";
    import path from "path";
    import route from "./router/routes.js";
    // import UserSchema from "./models/UserSchema.js";
    // import Usermodule from "./models/UserSchema.js";
    import UserModule from "./models/UserSchema.js";
    import connectDB from "./db/connectDB.js";
    import sendemail from "./controllers/mailcontroller.js";
    
    const app = express();
    const port = process.env.PORT||3000
    // database url....
    const DATABASEURL = process.env.DATABASEURL||'mongodb://127.0.0.1:27017'

    // database connection confrigration...
    connectDB(DATABASEURL) 
    // body parser configration...


    // static file configration...
    app.use(express.static(path.join(process.cwd(),'public')))

    
    // aap.use(express.urlencoded({extended:false}))
    app.use(express.urlencoded({ extended: false }));
    
    // ejs file configration...
    app.set('view engine','ejs');
    app.set('views','./views');



    // routes file configration...

    app.use('/', route);
 
    app.get('mail',sendemail)

    app.post("/contact", async(req,res)=>{
        try {
           const UserData = new UserModule(req,res);
            await UserData.save();
            res.status(201).render('index')

        } catch (error) {
            res.status(500).send(error);
            
        }

    })

    app.listen(port,()=>{
        console.log(`server is running on http://localhost:${port}`)
    });

