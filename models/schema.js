const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    imei: String,
    information: {
        changes: String,
        sleep_Struggle: String,
        bed_time: String,
        wake_up_time: String,
        sleep_hours: Number
    }
});

const USER = mongoose.model('user', userSchema);

module.exports = {
    USER: USER
};

