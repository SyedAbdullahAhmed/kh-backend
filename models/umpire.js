const mongoose = require('mongoose');

const commonFields = (dataType, isRequired, isUnique) => ({
     type: dataType,
     required: isRequired,
     unique: isUnique,
});

const umpireSchema = new mongoose.Schema({
     umpire_name: commonFields(String,true,true),
     contact_information: {
          emailAddress: {
               type: String,
               required: true,
               unique: false,
               validate: {
                 validator: (value) => {
                   return validator.validate(value);
                 },
                 message: 'Invalid email address',
               },
          },
          phoneNumber: {
               type: String,
               required: true,
               unique: true,
               validate: {
                 validator: function (value) {
                   return value.length === 11;
                 },
                 message: 'Phone number must be a 11-digit number without spaces or special characters.'
               }
          },
          town: commonFields(String,false,false)
     },
     umpire_photo: commonFields(String,false,false),
     certifications: [String],
     umpire_category: commonFields(String,false,false),
     match_history: [],
     ratings: commonFields(Number,false,false),
     umpire_bio: commonFields(String,false,false),
});

const Umpire = mongoose.model('Umpire', umpireSchema);

module.exports = Umpire;



