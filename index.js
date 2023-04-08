require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./dbConnect");

const carRoutes = require("./routes/cars");
// const Car = require("./models/car");
const app = express();

dbConnect();

app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({extended:false}))

app.use("/api", carRoutes);

// app.get('/test',async (req,res)=> {
//     res.send('hello word');
// });

// app.post('/car', async (req,res) => {
//     try {
//         const car = await Car.create(req.body);
//         res.status(200).json(car);
//     } catch (error) {
//         res.status(500).json({message:error.message});
//     }
// })

// app.put('/cars/:id', async (req,res) => {
//     try {
//         const {id} = req.params;
//         const cars = await Car.findByIdAndUpdate(id,req.body);
//         if(!cars){
//             return res.status(404).json({message:`cannot find any car with ID ${id}`})
//         }
//         const updatedCar = await Car.findById(id);
//         res.status(200).json(updatedCar);
//     } catch (error) {
//         res.status(500).json({message:error.message});
//     }
// })

// app.get('/cars',async (req,res)=> {
//     try {
//         const cars = await Car.find({});
//         res.status(200).json(cars);
//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }
// })

// app.get('/cars/:id',async (req,res)=> {
//     try {
//         const {id} = req.params;
//         const cars = await Car.findById(id);
//         res.status(200).json(cars);
//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }
// })

// app.delete('/cars/:id',async (req,res)=> {
//     try {
//         const {id} = req.params;
//         const cars = await Car.findByIdAndDelete(id);
//         if(!cars){
//             return res.status(404).json({message:`cannot find any car with ID ${id}`})
//         }
//         res.status(200).json(cars);
//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }
// })

if(process.env.NODE_ENV=='production'){
    const path = require('path')

    app.get('/',(req,res)=>{
        app.use(express.static(path.resolve(__dirname,'frontend','build')))
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
    })
}

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));