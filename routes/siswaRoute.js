const express = require('express')
const router = express.Router();

const siswaController = require('../controllers/siswaController');


router.get('/', siswaController.getSiswa);
router.post('/', siswaController.addSiswa)
router.put('/', siswaController.updateSiswa)
router.delete('/:kode', siswaController.deleteSiswa)


module.exports = router;