const mongoose = require("mongoose");

const personalInfoScehma = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    firstName: {
      type: String,
    },

    lastName: {
      type: String,
    },

    otherNames: {
      type: String,
    },

    email: {
      type: String,
      unique: true,
    },

    phoneNumber: {
      type: String,
    },

    dob: {
      type: String,
    },

    firstLang: {
      type: String,
    },

    nationality: {
      type: String,
    },

    passportNum: {
      type: String,
    },

    passportExpDate: {
      type: String,
    },

    gender: {
      type: String,
    },

    maritalStatus: {
      type: String,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
    state: {
      type: String,
    },
    zipCode: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("PersonalInfo", personalInfoScehma);
