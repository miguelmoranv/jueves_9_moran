

const app = require("./app");
const port = 80;
const mongoose = require("mongoose");
//asignacion del puerto y requerir el archivo app para iniciar el servidor

//conexion a mongodb atlas
const URI =
  "mongodb+srv://Luis_Castro_Iturbide:juan13luis7@cluster0.nhgsaca.mongodb.net/Estacion_Meteorologica";

mongoose.set("strictQuery", false);

mongoose
  .connect(URI)
  .then(console.log("Conectado a mongo Atlas"))
  .catch((error) => console.log(error));

//arranque de la api
app.listen(port, () => {
  console.log("Server on port", port);
});