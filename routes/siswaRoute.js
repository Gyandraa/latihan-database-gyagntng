const express = require('express');
const router = express.Router();

const koneksi = require('../config/database');

router.get('/siswa', (req, res) => {
    const querySql = "select * from siswa";

    // jalankan query
    koneksi.query(querySql, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Gagal menampilkan data!', error: err });
        }

        // jika request berhasil
        res.status(201).json({ success: true, message: rows });
    });
    
})

router.post('/siswa', (req, res) => {
    let nis = req.body.nis;
    let nama = req.body.nama
    const querySql = "insert into siswa (nis, nama) values ('"+nis+"','"+nama+"')";

    // jalankan query
    koneksi.query(querySql, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Gagal insert data!', error: err });
        }

        // jika request berhasil
        res.status(201).json({ success: true, message: 'Berhasil insert data!' });
    });
    
  })

  router.put('/siswa', (req, res) => {
    let nis = req.body.nis
    let nama = req.body.nama
    const querySql = "update siswa set nama = '"+nama+"' where nis = '"+nis+"'";

    // jalankan query
    koneksi.query(querySql, (err, rows, field) => {
        console.log(field)
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Gagal update data!', error: err });
        }

        // jika request berhasil
        res.status(201).json({ success: true, message: 'Berhasil update data' });
    });
    
})

router.delete('/siswa/:nis', (req, res) => {
    let nis = req.body.nis
    const querySql = "delete from siswa where nis  = '"+nis+"'";

    // jalankan query
    koneksi.query(querySql, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Gagal menampilkan data!', error: err });
        }

        // jika request berhasil
        res.status(201).json({ success: true, message: rows });
    });
    
})

  module.exports = router;