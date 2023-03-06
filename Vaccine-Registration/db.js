//indexedDB creation and usage
const IDB = (function init() {
    let db = null;
    let objectStore = null;
    const dbOpenReq = indexedDB.open('VaccineRegestrationDB', 9);

    dbOpenReq.addEventListener('error', (err) => {
        //if an error occurred while opening the database
        console.warn(err);
    });
    dbOpenReq.addEventListener('success', (ev) => {
        //database has been successfully opened, after upgradeNeeded
        db = ev.target.result;
        console.log('success', db);
    });
    dbOpenReq.addEventListener('upgradeneeded', (ev) => {
        //first time opening the database
        //Or a new version was passed into open()
        db = ev.target.result;
        let oldVersion = ev.oldVersion;
        let newVersion = ev.newVersion;
        console.log('Database updated from version ' + oldVersion + ' to ' + newVersion);

        console.log('upgrade', db);
        if(!db.objectStoreNames.contains('Registered')) {
            objectStore = db.createObjectStore('Registered', {
                keyPath : 'id',
            });
        }
    });


    document.addEventListener("submit", (ev) => {
        ev.preventDefault();

        let name = document.getElementById('fullName').value.trim();
        let age = parseInt(document.getElementById('age').value);
        let phone = document.getElementById('phoneNumber').value.trim();
        let email = document.getElementById('email').value.trim();

        let person = {
            id: uid(),
            name,
            age,
            phone,
            email
        };

        let tx = db.transaction('Registered', 'readwrite');
        tx.oncomplete = (ev) => {
            console.log(ev);
        };

        tx.onerror = (ev) => {
            console.warn(err);
        };

        let store = tx.objectStore('Registered');
        let request = store.add(person);

        request.onsuccess = (ev) => {
            console.log('successfully added person');
        };
        request.onerror = (ev) => {
            console.log('failed to add person');
        };
        //Clear
        document.getElementById("fullName").value = "";
        document.getElementById("age").value = "";
        document.getElementById("phoneNumber").value = "";
        document.getElementById("email").value = "";
    });
})();