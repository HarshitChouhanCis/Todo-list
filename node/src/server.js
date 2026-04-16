  import express from "express"
  import cors from "cors"
  import cookieParser from "cookie-parser" // apane server se user se browser ke cookies ko accept kr aayeconst app = express()

  const app = express()
  app.use(cors({
      origin:"*",
      credentials: true
  }))
  app.use(express.json())
  app.use(cookieParser());

  app.get("/health", (req, res) => {
    console.log("egheriiweiwegifwgi");
    res.status(200).json({
    success: true,
    message: "Server is running 🚀",
    uptime: process.uptime(),
    timestamp: new Date()
  });
});

  import userRouter from './routes/user.routes.js'
  
  // app.use("/api/v1/users", userRouter)

  export{app}