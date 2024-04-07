const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');
const News = require('./models/Schema');
const cors = require('cors');

const app = express();

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

// Set EJS as View engine
app.set('view engine', 'ejs');

// Serve static files
app.use('/public/images', express.static('public/images'));




// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images'); // Destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + file.originalname);
  }
});

const upload = multer({ storage: storage });


// Mongoose connection
mongoose.connect('mongodb://127.0.0.1:27017/news', {
}).then(() => {
  console.log('Connected to database');
}).catch(err => {
  console.log('Error connecting to database:', err);
});

// Configure CORS middleware with specific options
app.use(cors({
  origin: 'http://localhost:3000',
}));

// Define an endpoint to handle creation of news items with image upload
app.post('/news', upload.single('Image'), async (req, res) => {
  try {
    const { Title,Date,Published, selectedValue, Description, Link } = req.body;
    const imagePath = req.file.filename; // Path to uploaded image
    const newNews = new News({ image: imagePath, date: Date, published: Published,  title: Title, department: selectedValue, description: Description, link: Link });
    await newNews.save();
    res.status(201).json(newNews);
  } catch (err) {
    console.error('Error creating news:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/news', async (req, res) => {
  const result = await News.find({});
  res.send(result);
});

app.listen(8080, () => {
  console.log('Server running on port 8080');
});
