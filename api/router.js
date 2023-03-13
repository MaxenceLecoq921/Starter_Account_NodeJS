import express from "express"
import routertest from "./test/router.js"

const router = express.Router()

router.use('/test',routertest)

export default router