const koneksi = require('../config/database');

const getKelas = (req, res, next) => {
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
    
};

const addKelas = (req, res, next) => {
    let kode = req.body.kode;
    let nama = req.body.nama;
    
    const queryCheckData = "select count(*) as jumlah from kelas where kode_kelas = '"+kode+"'";

    // jalankan query
    koneksi.query(queryCheckData, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Gagal panggil data!', error: err });
        }

        if(rows[0].jumlah >=1) {
        
            return res.status(500).json({ message: 'Kode kelas sudah ada , ganti ler', error: err });
        }else{
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
    }
    });
};

const updateKelas = (req, res, next) => {
    let kode = req.body.kode
    let nama = req.body.nama

    const queryCheckData = "select count(*) as jumlah from kelas where kode_kelas = '"+kode+"'";

     // jalankan query
     koneksi.query(queryCheckData, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Gagal panggil data!', error: err });
        }

        if(rows[0].jumlah >=1) {
        
            return res.status(500).json({ message: 'kode kelas sdah ada , coba gnti', error: err });
        }else{
    const querySql = "update kelas set nama_kelas = '"+nama+"' where kode_kelas = '"+kode+"' ";

    // jalankan query
    koneksi.query(querySql, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Gagal Update!', error: err });
        }

        // jika request berhasil
        res.status(201).json({ success: true, message: 'Berhasil update data!' });
    });
}
        });
};

const deleteKelas = (req, res, next) => {let kode = req.body.kode

    const querySql = "delete from kelas where kode_kelas ='"+kode+"'" ;

    // jalankan query
    koneksi.query(querySql, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Delete Gagal!', error: err });
        }

        // jika request berhasil
        res.status(201).json({ success: true, message: "Delete Berhasil!" });
    });


}

module.exports = {
    getKelas,
    addKelas,
    updateKelas,
    deleteKelas
};