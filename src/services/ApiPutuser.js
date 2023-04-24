
const ApiPutuser = {

     //data Delete
     deleteData(param) {
        console.log(param.type);
        return new Promise((resolve, reject) => {
          fetch('https://relaxtimecafe.fun/delete/'+ param.data, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: param.type,
            })
          })
            .then(response => response.json())
            .then(data => {
              console.log(data);
              window.location.reload();
            })
            .catch(error => {
              console.error(error);
            });
        })
    },
}

export default ApiPutuser


