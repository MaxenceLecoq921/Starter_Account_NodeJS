import express from "express"
import routertest from "./test/router.js"
import routerusers from "./users/router.js"

const router = express.Router()

router.use('/test',routertest)
router.use('/users',routerusers)

export default router