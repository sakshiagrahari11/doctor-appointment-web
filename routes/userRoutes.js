const express = require('express');
const { loginController, registerController, authController, applyDoctorController, getAllNotificationController, bookAppointmentController, bookingAvailabilityController, userAppointmentsController } = require('../controllers/userCtrl');
const authMiddleware = require('../middlewares/authMiddleware');
const { getAllDoctorsController } = require('../controllers/adminCtrl');

//router onject
const router = express.Router()

//routes
//LOGIN || POST
router.post("/LoginPage", loginController);

//REGISTER || POST
router.post("/Register", registerController);

//Auth || POST
router.post('/getUserData', authMiddleware, authController);

//Apply Doctor || POST
router.post('/apply-doctor', authMiddleware, applyDoctorController);

//Notifiaction  Doctor || POST
router.post("/get-all-notification", authMiddleware, getAllNotificationController);

//Get All Doctor
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

//BOOK APPOINTMENT
router.post("/book-appointment", authMiddleware, bookAppointmentController); 

//Booking Avliability
router.post("/booking-availbility", authMiddleware, bookingAvailabilityController);

//Appointments List
router.get("/user-appointments", authMiddleware, userAppointmentsController);

module.exports = router;