const express = require('express')
const app = express()
const port = 3000
const koneksi = require('./database')
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}))

app.get('/kelas', (req, res) => {
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

app.get('/siswa', (req, res) => {
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

app.post('/kelas', (req, res) => {
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

  app.post('/siswa', (req, res) => {
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

  app.delete('/kelas/:kode', (req, res) => {
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


app.put('/siswa', (req, res) => {
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

app.put('/kelas', (req, res) => {
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

app.delete('/siswa/:nis', (req, res) => {
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

app.delete('/kelas/:kode', (req, res) => {
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


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})