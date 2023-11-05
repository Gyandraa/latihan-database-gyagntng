const koneksi = require('../config/database');

const getSiswa = (req, res, next) => {
    let nis = req.body.nis;
    let nama = req.body.nama;


    const queryCheckData = "select count(*) as jumlah from siswa where nis = '"+nis+"'";

     // jalankan query
     koneksi.query(queryCheckData, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Gagal panggil data!', error: err });
        }

        if(rows[0].jumlah >=1) {
        
            return res.status(500).json({ message: 'nis siswa sudah ada , ganti ler', error: err });
        }else{
            const querySql = "insert into siswa (nis, nama) values ('"+nis+"','"+nama+"')";

    // jalankan query
    koneksi.query(querySql, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Gagal menampilkan data!', error: err });
        }

        // jika request berhasil
        res.status(201).json({ success: true, message: 'Berhasil insert data!'});
    });
}
});
};
const addSiswa = (req, res, next) => {
    let nis = req.body.nis;
    let nama = req.body.nama;

    const queryCheckData = "select count(*) as jumlah from siswa where nis  = '"+nis+"'";

    // jalankan query
    koneksi.query(queryCheckData, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Gagal panggil data!', error: err });
        }

        if(rows[0].jumlah >=1) {
        
            return res.status(500).json({ message: 'nis siswa sudah ada , ganti ler', error: err });
        }else{
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
    }
    });
    
};

const updateSiswa = (req, res, next) => {
    let nis = req.body.nis
    let nama = req.body.nama

    const queryCheckData = "select count(*) as jumlah from siswa where nis = '"+nis+"'";

     // jalankan query
     koneksi.query(queryCheckData, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Gagal panggil data!', error: err });
        }

        if(rows[0].jumlah >=1) {
        
            return res.status(500).json({ message: 'nis siswa sudah ada , ganti ler', error: err });
        }else{
            const querySql = "update siswa set nama = '"+nama+"' where nis = '"+nis+"' ";

    // jalankan query
    koneksi.query(querySql, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Gagal Update!', error: err });
        }

        // jika request berhasil
        res.status(201).json({ success: true, message: 'Berhasil insert data!' });
    });
}
})     
};

const deleteSiswa = (req, res, next) => {
    let nis = req.body.nis

    const querySql = "delete from siswa where nis ='"+nis+"'" ;

    // jalankan query
    koneksi.query(querySql, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Delete Gagal!', error: err });
        }

        // jika request berhasil
        res.status(201).json({ success: true, message: "Delete Berhasil!" });
    });
};



module.exports = {
    getSiswa,
    addSiswa,
    updateSiswa,
    deleteSiswa
};