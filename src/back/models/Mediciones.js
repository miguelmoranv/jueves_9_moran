const mongoose = require("mongoose");

const medicionesSchema= new mongoose.Schema({
      Dispositivo: {
        type: String,
      },
      Velocidad_viento: {
        type: Number,
      },
      Temperatura: {
        type: String
      },
      Humedad_atm: {
        type: String
      },
      Humedad_cultivo: {
        type: Number
      },
      Date: {
        type: String
      },
      Hour: {
        type: String
      }
});

module.exports = mongoose.model("mediciones", medicionesSchema);