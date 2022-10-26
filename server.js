const { response, application } = require('express');
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require('express-session');
const MongoStore = require("connect-mongo");
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");
const profileRoutes = require("./routes/profiles");
const insuranceRoutes = require("./routes/insurance");
// const calendarequire(rRoutes = "./routes/calendar");
// const noteRoutes = require("./routes/notes");
// const invoiceRoutes = require("./routes/invoices")

require("dotenv").config({ path: "./config/.env"});

require("./config/passport")(passport);

connectDB();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(logger("dev"));

app.use(methodOverride("_method"));

app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({ mongoUrl: "mongodb://expressTut:expressTut@ac-vru9dxm-shard-00-00.cuqcdi9.mongodb.net:27017,ac-vru9dxm-shard-00-01.cuqcdi9.mongodb.net:27017,ac-vru9dxm-shard-00-02.cuqcdi9.mongodb.net:27017/coalesce?ssl=true&replicaSet=atlas-dnxphj-shard-0&authSource=admin&retryWrites=true&w=majority" //had to hardcode this to make it work
        }),
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use("/", mainRoutes);
app.use("/profiles", profileRoutes);
app.use("/insurance", insuranceRoutes);
// app.use("/calendar", calendarRoutes);
// app.use("/notes", noteRoutes);
// app.use("/invoices", invoiceRoutes);
// app.use("/practitioners", practitionerRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Ready, set, go! Listening on ${process.env.PORT}` );
});
