
const baseURL = 'https://relaxtimecafe.fun/'
const ApiPutuser = {

     //data Delete
     deleteData(param) {
        return new Promise((resolve, reject) => {
          fetch( baseURL+'delete/'+ param.data, {
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

    //GetLogEdit //Search ด้วย ส่ง name มา
 fetchLogEdit(param) {
  return new Promise((resolve, reject) => {
  fetch( baseURL + 'logEdit/' + param.data.id.idLog,{
            method: 'POST',
            headers: {
             'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              typeLog: param.data.id.typeLog,
              pageIndex: param.data.pageIndex,
              pageSize: param.data.pageSize
            })
        })
        .then(response => {
            if (response) {
              return response.json();
            } else {
              throw new Error('Error: ' + response.statusText);
            }
          })
          .then(data => {
            resolve(data);
          })
          .catch(error => {
            console.error('Error:', error);
          });
        })
    },
}

export default ApiPutuser


