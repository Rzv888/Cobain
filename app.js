const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// Rute untuk menampilkan file index.ejs
app.get('/', (req, res) => {
  res.render('auth/loginPage');
});

app.get('/dosen', (req, res) => {
  res.render('pages/dosenPage/dosenPage');
});

// Mulai server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

