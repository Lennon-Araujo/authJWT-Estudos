import express from "express";
import users from './userRoute.js'
import auth from './authRoute.js'

const routes = (app) => {
  app.route('/').get((req, res) => {
    return res.status(200).json({ message: "Bien venido!" })
  })

  app.use(
    express.json(),
    auth,
    users
  )
}

export default routes;