const mongoose = require("mongoose");

const dbConnect = () => {

	// Connect to your MongoDB database
    const dbURI = 'mongodb+srv://admin:axusDfXXWOAg7wW4@cluster0.jvixxfw.mongodb.net/MarketCar';
    mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
	mongoose.set("strictQuery",false);

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