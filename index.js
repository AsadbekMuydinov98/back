const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth.route');
const checkRoutes = require('./routes/check.route');

const app = express();
app.use(express.json());
app.use(cors()); 

const PORT = process.env.PORT || 4000;

const bootstrap = async () => {
	try {
		await mongoose.connect('mongodb+srv://asasedmor:4aBz0btJqLcRDhs2@cluster0.qswkqgp.mongodb.net/?retryWrites=true&w=majority&appName=Ecom/yourDatabase')
		.then(() => console.log('Connected DB'))

	} catch (error) {
		console.log(`Error connecting with DB: ${error}`)
	}
}

bootstrap()


app.use('/api/auth', authRoutes);
app.use('/api/check', checkRoutes);

app.listen(PORT, () => {
  console.log(`Server http://localhost:${PORT} da ishlayapti`);
});
