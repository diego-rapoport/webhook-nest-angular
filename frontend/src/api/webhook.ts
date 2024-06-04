import { Router } from "express";

const webhookRouter = Router()

webhookRouter.get('/ping', (_,res) => {
  res.send('pong')
})

export default webhookRouter
