const express = require('express');
const router = express.Router();

const koneksi = require('../config/database');




router.get('/', (req, res) => {
    const querySql = "select * from kelas";

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

router.post('/', (req, res) => {
    let kode = req.body.kode;
    let nama = req.body.nama
    const querySql = "insert into kelas (kode_kelas, nama_kelas) values ('"+kode+"','"+nama+"')";

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

  router.delete('/', (req, res) => {
    let kode = req.params.kode;
    const querySql = "delete from kelas where kode_kelas = '"+kode+"'";

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

router.put('/', (req, res) => {
    let kode = req.body.kode
    let nama = req.body.nama
    const querySql = "update kelas set nama_kelas = '"+nama+"' where kode_kelas = '"+kode+"'";

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

router.delete('/', (req, res) => {
    let kode = req.body.kode
    const querySql = "delete from kelas where kode_kelas  = '"+kode+"'";

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
