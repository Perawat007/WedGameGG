
const ApiPutuser = {

     //data Delete
     deleteData(param) {
        return new Promise((resolve, reject) => {
          fetch('http://localhost:5000/delete/'+ param.data, {
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


