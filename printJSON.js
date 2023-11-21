function fetchData() {
  return new Promise((resolve, reject) => {
    let data = {
      results: [
        {
          title: "Estudiar Js",
          priority: "alta",
          isDone: false,
        },
        {
          title: "Estudiar CSS",
          priority: "alta",
          isDone: true,
        },
        {
          title: "Estudiar OOP",
          priority: "media",
          isDone: false,
        },
        {
          title: "Estudiar IA",
          priority: "baja",
          isDone: false,
        },
      ],
    };
    resolve(data);
  });
}

function createTable(data) {
  let table = document.createElement("table");
  let headerRow = table.insertRow(0);

  for (let key in data.results[0]) {
    /* Encabezado */
    let th = document.createElement("th");
    th.textContent = key;
    headerRow.appendChild(th);
  }

  for (let i = 0; i < data.results.length; i++) {
    let row = table.insertRow(i + 1);

    for (let key in data.results[i]) {
      let cell = row.insertCell();
      cell.textContent = data.results[i][key];
    }
  }

  document.body.appendChild(table);
}

fetchData()
  .then((data) => {
    createTable(data);
  })
  .catch((error) => {
    console.error("Error al cargar los datos:", error);
  });
