const router = require("express").Router();
const Car = require("../models/car");
const cars = require("../config/cars.json");

router.get("/cars", async (req, res) => {
	try {
		const page = parseInt(req.query.page) - 1 || 0;
		const limit = parseInt(req.query.limit) || 5;
		const search = req.query.search || "";
		let sort = req.query.sort;
		// let genre = req.query.genre || "All";

		// const genreOptions = [
		// 	"Last Updated",
		// 	"Branch Name",
		// 	"Number Of Models"
		// ];

		// genre === "All"
		// 	? (genre = [...genreOptions])
		// 	: (genre = req.query.genre.split(","));
		req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

		let sortBy = {};
		if (sort[1]) {
			sortBy[sort[0]] = sort[1];
		} else {
			sortBy[sort[0]] = "asc";
		}

// $regex: Provides regular expression
// capabilities for pattern matching strings
// in queries.
// $where: Use to pass either a string
// containing a javascript expression.
// $in: It used to find the document
// where the value of field equals any
// value in the specified array.
// $sort: Sorts all input documents and
// returns them to the pipeline in sorted.
// order.
// $skip: It takes positive integer that
// specifies the maximum number of
// documents to skip.
// $limit: Limits the number of
// documents passed to the next stage in
// the pipeline.
		const cars = await Car.find({ branch_make: { $regex: search, $options: "i" } })
			.where("branch_make")
			// .in([...genre])
			.sort(sortBy)
			.skip(page * limit)
			.limit(limit);

		const total = await Car.countDocuments({
			branch_make: { $regex: search, $options: "i" },
		});

		const response = {
			error: false,
			total,
			page: page + 1,
			limit,
			cars,
		};

		res.status(200).json(response);
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: true, message: "Internal Server Error" });
	}
});

// const insertCar = async () => {
//     try {
//         const docs = await Car.insertMany(cars);
//         return Promise.resolve(docs);
//     } catch (err) {
//         return Promise.reject(err)
//     }
// };

// insertCar()
//     .then((docs) => console.log(docs))
//     .catch((err) => console.log(err))



module.exports = router;