const express= require('express');

const router = express.Router();

const bookController = require('../controllers/bookControllers');

router.get('/', bookController.getBooking)

router.post('/add', bookController.addData);

router.get('/get-data', bookController.getData);

router.delete('/delete-data/:id', bookController.deleteData);

module.exports = router;