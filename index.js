const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

let kelasRouter = require('./routes/kelasRoute');
let siswaRouter = require('./routes/siswaRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}))

app.use('/kelas', kelasRouter);
app.use('/siswa', siswaRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})