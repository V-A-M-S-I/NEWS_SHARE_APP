const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');
const News = require('./models/FormSchema');
const Users = require('./models/loginSchema');
const Admin = require('./models/adminSchema');
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
mongoose.connect('mongodb://127.0.0.1:27017/news', {}).then(() => {
  console.log('Connected to database');
}).catch(err => {
  console.log('Error connecting to database:', err);
});

// Configure CORS middleware with specific options
app.use(cors({
  origin: 'http://localhost:3000',
}));



  // Routes
  app.post('/Admin', upload.single('Image'), async (req, res) => {
    try {
      const { Title, Date, Published, selectedValue, Description, Link } = req.body;
      const imagePath = req.file.filename; 
      const newNews = new News({ image: imagePath, date: Date, published: Published, title: Title, department: selectedValue, description: Description, link: Link });
      await newNews.save();
      res.status(201).json(newNews);
    } catch (err) {
      console.error('Error creating news:', err);
      res.status(500).json({ error: 'Server error' });
    }
  });

  app.get('/Admin', async (req, res) => {
    try {
      // Fetch news items with the status 'Unaccepted' from the database
      const result = await News.find({ status: false });
      console.log(result)
      res.send(result);
    } catch (err) {
      console.error('Error fetching news:', err);
      res.status(500).json({ error: 'Server error' });
    }
  });

  app.delete('/Admin/:index', async (req, res) => {
    try {
      const index = parseInt(req.params.index); 
      const allNews = await News.find({}); 
      const newsToDelete = allNews[index]; 

      if (!newsToDelete) {
        return res.status(404).json({ error: 'News item not found' });
      }

      await News.findByIdAndDelete(newsToDelete._id);

      res.status(200).json({ message: 'News item deleted successfully' });
    } catch (err) {
      console.error('Error deleting news:', err);
      res.status(500).json({ error: 'Server error' });
    }
  });

  app.post('/Admin/accept/:id', async (req, res) => {
    try {
      await News.updateOne({ _id: req.params.id }, { $set: {status: true} });
      res.status(200).json({ message: 'News item accepted successfully' });
    } catch (err) {
      console.error('Error accepting news:', err);
      res.status(500).json({ error: 'Server error' });
    }
  });

  app.get('/Admin/accept', async (req, res) => {
    try {
      const result = await News.find({ status: true });
      console.log(result)
      res.send(result);
    } catch (err) {
      console.error('Error fetching accepted news:', err);
      res.status(500).json({ error: 'Server error' });
    }
  });

  app.post('/login', async (req, res) => {
    try {
      const { id, password } = req.body;
      const matchedUser = await Users.findOne({ id, password });
      if (matchedUser) {
        res.status(200).json({ message: 'Login successful', user: matchedUser });
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    } catch (err) {
      console.error('Error authenticating user:', err);
      res.status(500).json({ error: 'Server error' });
    }
  });


  app.post('/signin', async (req, res) => {
    try {
      
      const { id, password } = req.body;
      const matchAdmin = await Admin.findOne({ id, password });
      if (matchAdmin) {
        res.sendStatus(200); 
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    } catch (err) {
      console.error('Error authenticating admin:', err);
      res.status(500).json({ error: 'Server error' });
    }
  });
  

  // Start server
  app.listen(8080, () => {
    console.log('Server running on port 8080');
  });

