async function eliminarApi(id) { 

    const request = await fetch('medicosApi/' + id,{
        method : "DELETE",
        headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        }
    });
    location.reload();
}

export {eliminarApi};