import BaseService from './BaseService'

const ApiService = {
      //Login Admin
      fetchData(param) {
        return new Promise((resolve, reject) => {
          fetch('https://relaxtimecafe.fun/login/admin', {
                method: 'POST',
                headers: {
                 'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: param.data.username,
                    password: param.data.password
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
    });
    },
    signOut(param) {
      return new Promise((resolve, reject) => {
          BaseService(param)
              .then((response) => {
                  console.log(response);
                  resolve(response)
              })
              .catch((errors) => {
                  reject(errors)
              }) 
      });
  },

  //GetDataAdmin //Search ด้วย ส่ง name มา
  fetchDataAd(param) {
    return new Promise((resolve, reject) => {
      fetch('https://relaxtimecafe.fun/list_admins', {
        method: 'POST',
        headers: {
         'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: param.data.query,
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

  //GetDataAgent //Search ด้วย ส่ง name มา
    fetchDataAg(param) {
        return new Promise((resolve, reject) => {
          fetch('https://relaxtimecafe.fun/list_agents', {
            method: 'POST',
            headers: {
             'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: param.data.query,
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

     //GetDataMember //Search ด้วย ส่ง name มา
     fetchDataMember(param) {
      return new Promise((resolve, reject) => {
        fetch('https://relaxtimecafe.fun/list_users')
            .then(response => response.json())
            .then(data => {
                resolve(data);
            })
            .catch(error => console.error(error))
      })
  },

    //putAgent
    putDataAgent(param) {
        return new Promise((resolve, reject) => {
          fetch('https://relaxtimecafe.fun/agent/'+ param.data.id, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              username: param.data.username,
              status: param.data.status
            })
          })
            .then(response => response.json())
            .then(data => {
              console.log(data);
            })
            .catch(error => {
              console.error(error);
            });
        })
    },

    //putAdmin
    putDataAdmin(param) {
      return new Promise((resolve, reject) => {
        fetch('https://relaxtimecafe.fun/admin/'+ param.data.id, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: param.data.username,
            status: param.data.status
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

    //AddAgent
    addAgent(param) {
      return new Promise((resolve, reject) => {
        console.log(param);
        fetch('https://relaxtimecafe.fun/signupAgent', {
              method: 'POST',
              headers: {
               'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  name: param.data.name,
                  username: param.data.username,
                  password: param.data.password
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
  });
  },

  //AddAdmin
  addAdmin(param) {
    return new Promise((resolve, reject) => {
      console.log(param);
      fetch('https://relaxtimecafe.fun/signup', {
            method: 'POST',
            headers: {
             'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: param.data.name,
                username: param.data.username,
                password: param.data.password
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
});
},

 //GetLogMember //Search ด้วย ส่ง name มา
 fetchLogMember(param) {
  return new Promise((resolve, reject) => {
  fetch('https://relaxtimecafe.fun/user_play/user_lay/' + param.data.idLog, {
            method: 'POST',
            headers: {
             'Content-Type': 'application/json'
            },
            body: JSON.stringify({
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


  getValusData() {
    return new Promise((resolve, reject) => {
            fetch('https://relaxtimecafe.fun/getallData')
            .then(response => response.json())
            .then(data => {
                resolve(data);
            })
            .catch(error => console.error(error))
    })
  },
}

export default ApiService


