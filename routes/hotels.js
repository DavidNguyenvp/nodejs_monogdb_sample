import express from "express"
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controller/hotel.controller.js"
import Hotel from "../models/Hotel.js"

const router = express.Router()

//CREATE
router.post("/", createHotel)

//UPDATE
router.put("/:id", updateHotel)

//DELETE 
router.put("/:id", deleteHotel)

//GET
router.get("/:id", getHotel)

//GETALLL
router.get("/",getHotels)

export default router