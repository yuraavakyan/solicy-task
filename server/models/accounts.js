const mongoose = require('mongoose');

const accountSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
},
    { timestamps: true }
)

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;