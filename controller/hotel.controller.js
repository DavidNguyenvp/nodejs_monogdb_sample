import Hotel from "../models/Hotel.js"



//CREATE
export const createHotel = async(req, res, next) => {
    const newHotel = new Hotel(req.body)
    try {
        const saveHotel = await newHotel.save();
        res.status(200).json(saveHotel)
    } catch (error) {
        res.status(500).json(error)
    }
}

//UPDATE
export const updateHotel = async (req, res, next) => {
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}) 
        res.status(200).json(updateHotel)
    } catch (err) {
        next()
    }
}


//DELETE 
export const deleteHotel = async (req, res, next) => {
    try {
        const updateHotel = await Hotel.findByIdAndDelete(req.params.id) 
        res.status(200).json("Hotel has been deleted")
    } catch (err) {
        next()
    }
}


//GET
export const getHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (err) {
        next()
    }
}

//GETALLL
export const getHotels = async (req, res, next) => {
    try {
        const hotels = await Hotel.find() 
        res.status(200).json(hotels)
    } catch (err) {
        next()
    }
}


