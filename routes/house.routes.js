import {Router} from "express"
import House from "../models/House.model.js"
import isAuthenticatedMiddleware from "../middlewares/isAuthenticatedMiddleware.js"
import fileUpload from '../config/cloudinary.config.js'

const housesRouter = Router()

housesRouter.post('/house', isAuthenticatedMiddleware, async(req,res) =>{
    const payload = req.body
    const userId = req.user.id;
    
    try{
      const newHouse = await House.create({...payload,userId})
      return res.status(201).json(newHouse)
    }catch(error){
        console.log(error)
        return res.status(500).json({message:"Error not create house"})
    }
})

housesRouter.get('/viewhouse', async(req, res)=> {
    try{
    const houses = await House.find({}).populate("userId")
    return res.status(200).json(houses)
    }catch(error){
        console.log(error)
        return res.status(500).json({message:"Server error"})
    }
})
housesRouter.get('/viewhouse/:id',isAuthenticatedMiddleware, async (req, res) => {
    const{ id } = req.params
    try {
    const house = await House.findById(id)
    if(!house) {
        return res.status(404).json({message: 'House not found!'})
    }
        return res.status(200).json(house)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Server error"})
    }
})
housesRouter.put('/updatehouse/:id', isAuthenticatedMiddleware, async(req,res) =>{
    const payload = req.body
    const{ id } = req.params
    try {
      const updateHouse = await House.findOneAndUpdate({_id: id}, payload, {new:true})
      if(!updateHouse) {
        return res.status(404).json({message: 'House Not Found'})
      }
      return res.status(200).json({message: 'House Updated', updateHouse})
    } catch {
        console.log(error)
        return res.status(500).json({message:"'Internal Server Error"})
    }
})

housesRouter.delete('/:delete/:id', isAuthenticatedMiddleware, async (req, res) => {
    const { id } = req.params
    try {
        await House.findOneAndDelete({_id: id})
        return res.status(200).json({message:"House Deleted"})      
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'Internal Server Error'})
    }
})

housesRouter.post('/uploadMultipleImages', isAuthenticatedMiddleware, fileUpload.array('housePicture', 5), (req, res)=> {
    res.status(201).json({url: req.file.path})
})
    

export default housesRouter

