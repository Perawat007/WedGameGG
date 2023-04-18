import BaseService from './BaseService'

const ApiService = {
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

  fetchDataAd(param) {
    return new Promise((resolve, reject) => {
            fetch('https://relaxtimecafe.fun/list_admin/1')
            .then(response => response.json())
            .then(data => {
                resolve(data);
            })
            .catch(error => console.error(error))
    })
  },
    
    fetchDataAg(param) {
        return new Promise((resolve, reject) => {
                fetch('https://relaxtimecafe.fun/list_agents')
                .then(response => response.json())
                .then(data => {
                    resolve(data);
                })
                .catch(error => console.error(error))
        })
    },

    putData(param) {
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
}

export default ApiService


