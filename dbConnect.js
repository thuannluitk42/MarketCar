require("dotenv").config();
const mongoose = require("mongoose");

const dbConnect = () => {

	// Connect to your MongoDB database
    const connectionParams = { useNewUrlParser: true };
    mongoose.connect(process.env.MONGODB_URI, connectionParams);
	mongoose.set("strictQuery",false);
	// mongoose.connect("mongodb+srv://admin:axusDfXXWOAg7wW4@cluster0.jvixxfw.mongodb.net/MarketCar", connectionParams);
	// mongoose.set("strictQuery",false);
	// mongoose.connect("mongodb+srv://admin:axusDfXXWOAg7wW4@cluster0.jvixxfw.mongodb.net/MarketCar");

    mongoose.connection.on("connected", () => {
		console.log("Connected to database sucessfully");
	});

	mongoose.connection.on("error", (err) => {
		console.log("Error while connecting to database :" + err);
	});

	mongoose.connection.on("disconnected", () => {
		console.log("Mongodb connection disconnected");
	});
};

module.exports = dbConnect;