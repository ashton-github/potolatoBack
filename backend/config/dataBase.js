const mongoose = require("mongoose");


const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        mongoose.connect(process.env.DATABASE_URL)
            .then(() => {
                console.log('Connexion DB OK');
            })
            .catch(() => console.log('Connexion not OK'));
    }catch (err) {
        console.log(err);
        process.exit();
    }
}

module.exports = connectDB;
