const express = require(`express`)
// const router = express.Router()
const register = require(`../controllers/register`)
const login = require(`../controllers/login`)
const bookappointment = require(`../controllers/bookappoint`)
const viewdoctor = require(`../controllers/viewdoctor`)
const router = require("./pages");
const { isAuthenticated } = require(`../middlewares/auth`)


router.post(`/signup`, register.register)
router.post(`/signin`, login.login)
router.post(`/bookappointment`, isAuthenticated, bookappointment.book)
router.get(`/patient/viewdoctor`, isAuthenticated, viewdoctor.doctor)
router.post(`/patient/viewdoctor`, isAuthenticated, viewdoctor.find)
router.get(`/viewpatient`, isAuthenticated, viewdoctor.viewpatient)
router.post(`/viewpatient`, isAuthenticated, viewdoctor.findpatient)
// router.get(`/doctor`, register.doctorregister)
router.post(`/doctorregister`, isAuthenticated, register.doctorregister)
// router.get(`/login`, login.logindoctor)
router.post(`/login`, login.logindoctor)
router.get(`/editpatient/:id`, isAuthenticated, viewdoctor.editpatient )
router.post(`/editpatient/:id`, isAuthenticated, viewdoctor.update )



module.exports = router