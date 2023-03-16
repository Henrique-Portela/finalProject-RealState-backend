import {Router} from "express"
import Agent from "../models/RealEstateAgent.model.js"
import isAuthenticatedMiddleware from "../middlewares/isAuthenticatedMiddleware.js"
import fileUpload from '../config/cloudinary.config.js'


const agentsRouter = Router()

agentsRouter.post('/agent', isAuthenticatedMiddleware, async (req, res) => {
    const payload = req.body
    const userId = req.user.id
    try {
      const newAgent = await Agent.create({...payload, userId})

    
      return res.status(201).json(newAgent)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Error not create house"})
    }
})

agentsRouter.get('/viewagent', async(req, res) => {
    try {
    const agents = await Agent.find({})
    return res.status(200).json(agents)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Server error"})
    }
})

agentsRouter.get('/viewagent/useragents',isAuthenticatedMiddleware, async (req, res) => {
    
    const userId = req.user.id
    try {
    const agent = await Agent.find({ userId : userId})
    if(!agent) {
        return res.status(404).json({message: 'Agent not found!'})
    }
        return res.status(200).json(agent)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Server error"})
    }
})
agentsRouter.get('/viewagent/useragents/:id',isAuthenticatedMiddleware, async (req, res) => {
    const payload = req.body
    const { id } = req.params
    const userId = req.user.id
    try {
    const agent = await Agent.findOne({_id: id, userId : userId}, payload)
    if(!agent) {
        return res.status(404).json({message: 'Agent not found!'})
    }
        return res.status(200).json(agent)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Server error"})
    }
})

agentsRouter.put('/updateagent/:id', isAuthenticatedMiddleware, async(req, res) =>{
    const payload = req.body
    const { id } = req.params
    const userId = req.user.id
    try {
      const updateAgent = await Agent.findOneAndUpdate({_id: id, userId : userId}, payload, {new:true})
      if(!updateAgent) {
        return res.status(404).json({message: 'Agent Not Found'})
      }
      return res.status(200).json({message: 'Agente Updated', updateAgent})
    } catch {
        console.log(error)
        return res.status(500).json({message:"'Internal Server Error"})
    }
})

agentsRouter.delete('/deleteagent/:id', isAuthenticatedMiddleware, async (req, res) => {
    const { id } = req.params
    const userId = req.user.id
    try {
        const agentDeleted = await Agent.findOneAndDelete({_id: id, userId : userId})
                
        if (!agentDeleted) {
            res.status(404).json({message: "Agent not Deleted"})
        }
        return res.status(200).json({message:"Agent was deleted"})      
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'Internal Server Error'})
    }
})

agentsRouter.post('/agents/uploadImages', isAuthenticatedMiddleware, fileUpload.single('agentPicture'), (req, res)=> {
    res.status(201).json({url: req.file.path})

   
})
    

export default agentsRouter