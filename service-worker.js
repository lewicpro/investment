importScripts('./ngsw-worker.js');

self.addEventListener('sync', (event) =>{
    if(event.tag === 'post-data'){
        event.waitUntil(getDataAndSend());
    }
});

function addData(username){
    let obj = {
        name:username,
    };
    fetch('http://localhost:3000/data', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)
    })
    .then(()=> Promice.resolve())
    .catch(()=> Promice.reject())
}

function getDataAndSend(){
    let db;
    const request =indexedDB.open('my-db');
    request.onerror = (event)=>{
        console.log('please allow my web app to use indexedDB >>>>>')
    }
    request.onsuccess = (event)=>{
        db = event.target.result;
        getDataAndSend(db);

    };
};

function getData(db){
    const transaction = db.transaction(['user-store']);
    const objectStore=transaction.objectStore('user-store');
    const request = objectStore.get('name');
    request.onerror = (event)=>{

    };
    request.onsuccess = (event)=>{
        addData(request.result);
        console.log('Name of the user is ' + request.result)
    };

}