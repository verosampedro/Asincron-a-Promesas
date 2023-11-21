const fs = require("fs/promises");

async function readJSON() {
  try {
    const data = await fs.readFile("exercise.json", "utf8");

    const jsonData = JSON.parse(data);

    jsonData.results.forEach(function (item) {
      console.log(item.title);
    });

    console.log("Lectura correcta.");
  } catch (err) {
    console.error("Error leyendo el archivo:", err);
  }
}

readJSON();
