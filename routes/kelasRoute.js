const express = require('express')
const router = express.Router();

const kelasController = require('../controllers/kelasController');

router.get('/', kelasController.getKelas);

router.post('/', kelasController.addKelas)

router.put('/', kelasController.updateKelas)

router.delete('/:kode', kelasController.deleteKelas)

module.exports = router;
