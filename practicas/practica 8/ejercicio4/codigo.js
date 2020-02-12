const indexedDB = window.indexedDB;

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let edad = document.getElementById("edad");
let btnAnadirItemBD = document.getElementById("btnAnadirItemBD");
let btnAnadirItemBD2 = document.getElementById("btnAnadirItemBD2");
let btnLeerBD = document.getElementById("btnLeerBD");
let btnActualizarValorBD1 = document.getElementById("btnActualizarValorBD1");
let btnBorrarValorBD1 = document.getElementById("btnBorrarValorBD1");
let btnIterar1 = document.getElementById("iterar1");
let textArea1 = document.getElementById("textArea1");
let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");
let btnIterar2 = document.getElementById("iterar2");
let textArea2 = document.getElementById("textArea2");

if (indexedDB) {
    let db;
    const request = indexedDB.open("gente", 1);

    btnAnadirItemBD.addEventListener("click", function () {
        anadirItemBD("objectStore1");
    });
    btnAnadirItemBD2.addEventListener("click", function () {
        anadirItemBD("objectStore2");
    });

    request.onsuccess = () => {
        db = request.result;
        console.log("OPEN", db);

        btnLeerBD.addEventListener("click", leerBD);
        btnActualizarValorBD1.addEventListener('click', actualizarValorBD1);
        btnBorrarValorBD1.addEventListener('click', borrarValorBD1);
        btnIterar1.addEventListener("click", iterar1);
        btnIterar2.addEventListener("click", iterar2);

        function leerBD() {
            if (nombre.value == "") {
                alert("El campo nombre no puede estar vacio.");
                return;
            }
            findData("objectStore1");
            limpiarCeldas();
        }

        function iterar1() {
            textArea1.innerHTML = "";
            readData("objectStore1");
        }

        function iterar2() {
            readDataBetweenTwoValues("objectStore2", valor1.value, valor2.value);
        }

        function actualizarValorBD1() {
            if (nombre.value == "" || apellido.value == "" || edad.value == "") {
                alert("Los campos nombre, apellido y edad no pueden estar vacios");
                return;
            }
            const data = {
                Nombre: nombre.value,
                Apellidos: apellido.value,
                Edad: edad.value
            };
            updateData(data, "objectStore1");
            limpiarCeldas();
        }

        function borrarValorBD1() {
            if (nombre.value == "") {
                alert("El campo nombre no puede estar vacio.");
                return;
            }
            deleteData("objectStore1");
            limpiarCeldas();
        }
    };

    request.onupgradeneeded = () => {
        db = request.result;
        const objectStore = db.createObjectStore("objectStore1", {
            autoIncrement: true
        });
        const objectStore2 = db.createObjectStore("objectStore2", {
            autoIncrement: true
        });
    };

    request.onerror = error => {
        console.log("Error", error);
    };

    const addData = (data, storeName) => {
        const transaction = db.transaction([storeName], "readwrite");
        const objectStore = transaction.objectStore(storeName);
        const request = objectStore.add(data);
    };

    const readData = storeName => {
        const transaction = db.transaction([storeName], "readonly");
        const objectStore = transaction.objectStore(storeName);
        const request = objectStore.openCursor();

        request.onsuccess = e => {
            const cursor = e.target.result;
            if (cursor) {
                textArea1.innerHTML += "Nombre: " + cursor.value.Nombre + "\n";
                textArea1.innerHTML += "Apellidos: " + cursor.value.Apellidos + "\n";
                textArea1.innerHTML += "Edad: " + cursor.value.Edad + "\n\n";
                cursor.continue();
            }
        };
    };

    const readDataBetweenTwoValues = (storeName, val1, val2) => {
        const transaction = db.transaction([storeName], "readonly");
        const objectStore = transaction.objectStore(storeName);
        const request = objectStore.openCursor();

        request.onsuccess = e => {
            const cursor = e.target.result;
            if (cursor) {
                if (cursor.key >= val1 && cursor.key <= val2) {
                    textArea2.innerHTML += "Nombre: " + cursor.value.Nombre + "\n";
                    textArea2.innerHTML += "Apellidos: " + cursor.value.Apellidos + "\n";
                    textArea2.innerHTML += "Edad: " + cursor.value.Edad + "\n\n";
                }
                cursor.continue();
            }
        };
    };

    const deleteData = storeName => {
        const transaction = db.transaction([storeName], "readwrite");
        const objectStore = transaction.objectStore(storeName);
        let request = objectStore.openCursor();

        request.onsuccess = e => {
            const cursor = e.target.result;
            if (cursor) {
                if (cursor.value.Nombre == nombre.value) {
                    key = cursor.key;
                    request = objectStore.delete(key);
                } else {
                    cursor.continue();
                }
            }

        };

    };

    const updateData = (data, storeName) => {
        const transaction = db.transaction([storeName], "readwrite");
        const objectStore = transaction.objectStore(storeName);
        let request = objectStore.openCursor();

        request.onsuccess = e => {
            const cursor = e.target.result;
            if (cursor) {


                if (cursor.value.Nombre == nombre.value) {
                    key = cursor.key;
                    request = objectStore.put(data, key);
                } else {
                    cursor.continue();
                }
            }

        };

    };

    const findData = storeName => {
        const transaction = db.transaction([storeName], "readonly");
        const objectStore = transaction.objectStore(storeName);
        const request = objectStore.openCursor();

        request.onsuccess = e => {
            const cursor = e.target.result;
            if (cursor) {
                if (cursor.value.Nombre == nombre.value) {

                    alert("Nombre: " + cursor.value.Nombre + "," + "Apellidos: " + cursor.value.Apellidos + "," + "Edad: " + cursor.value.Edad
                    );

                } else {
                    cursor.continue();
                }
            }
        };
    };

    function anadirItemBD(objectStore) {
        if (nombre.value == "" || apellido.value == "" || edad.value == "") {
            alert("Los campos no pueden estar vacios");
            return;
        }
        const data = {
            Nombre: nombre.value,
            Apellidos: apellido.value,
            Edad: edad.value
        };

        addData(data, objectStore);
        limpiarCeldas();
    }

    function limpiarCeldas() {
        nombre.value = "";
        apellido.value = "";
        edad.value = "";
    }
}