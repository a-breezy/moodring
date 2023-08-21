const {Schema, model} = require('mongoose')

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match:  [/.+@.+\..+/, 'Must match an email address!']
        },
        password: {
            type: String,
            required: true,
            minlength: 7
        },
        OuraAPI: {
            // APIKey, perhaps add match for value
            type: String,
            required: true
        }
        // include path to mood data
    }
)

const User = model('User', userSchema);

module.exports = User