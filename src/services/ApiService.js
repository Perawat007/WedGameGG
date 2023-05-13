import BaseService from './BaseService'
import useAuth from 'utils/hooks/useAuth';
const token = localStorage.getItem("token");
const baseURL = 'https://relaxtimecafe.fun/'
const ApiService = {
  //Login Admin
  loginAdmin(param) {
    return new Promise((resolve, reject) => {
      fetch(baseURL+'login/admin', {
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
                const accessToken = data.token;
                localStorage.setItem('token',accessToken);
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
        resolve(response)
        })
      .catch((errors) => {
        reject(errors)
        }) 
      });
  },

  //GetDataAdmin //Search ด้วย ส่ง name มา
  fetchDataAd (param) {
    return new Promise((resolve, reject) => {
      console.log(token);
      fetch(baseURL + 'list_admins', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
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
        localStorage.removeItem('admin')
        //localStorage.removeItem('token')
        window.location.reload();
        console.error('Error:', error);
      });
    })
  },

  //GetDataAgent //Search ด้วย ส่ง name มา
      fetchDataAg(param) {
        return new Promise((resolve, reject) => {
          fetch(baseURL + 'list_agents', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              name: param.data.query,
              idedit: 1,
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
            localStorage.removeItem('admin')
            //localStorage.removeItem('token')
            window.location.reload();
            console.error('Error:', error);
          });
        })
      },

     //GetDataMember //Search ด้วย ส่ง name มา
     fetchDataMember(param) {
      return new Promise((resolve, reject) => {
        fetch(baseURL + 'list_users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            name: param.data.query,
            idedit: 1,
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
          localStorage.removeItem('admin')
          //localStorage.removeItem('token')
          window.location.reload();
          console.error('Error:', error);
        });
      })
  },

    //putAgent
    putDataAgent(param) {
        return new Promise((resolve, reject) => {
          console.log(param.data);
          fetch(baseURL + 'agent/'+ param.data.id, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              username: param.data.username,
              name: param.data.name,
              status: param.data.status,
              contact_number: param.data.phoneNumber,
              credit : param.data.credit,
              idedit : 1
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

    //putAdmin
    putDataAdmin(param) {
      return new Promise((resolve, reject) => {
        fetch(baseURL + 'admin/'+ param.data.id, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: param.data.username,
            idedit: 1,
            status: param.data.status,
            contact_number: param.data.phoneNumber,
            name: param.data.name,
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

  //putMember
  putDataMember(param) {
    return new Promise((resolve, reject) => {
      console.log(param);
      fetch(baseURL + 'member/'+ param.data.id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          member_code: param.data.member_code,
          name: param.data.name,
          idedit: 1,
          username: param.data.username,
          status: param.data.status,
          credit: param.data.credit,
          edittype: 'admin',
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
        fetch(baseURL + 'signupAgent', {
              method: 'POST',
              headers: {
               'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  name: param.data.name,
                  username: param.data.username,
                  password: param.data.password,
                  contact_number: param.data.contact_number,
                  credit : param.data.credit,
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
      fetch(baseURL+'signup', {
            method: 'POST',
            headers: {
             'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: param.data.name,
                username: param.data.username,
                password: param.data.password,
                contact_number: param.data.phoneNumber,
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

//AddMember
addMember(param) {
  return new Promise((resolve, reject) => {
    fetch(baseURL+'signupMember', {
          method: 'POST',
          headers: {
           'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              agent_id : param.data.agent_id,
              member_code: param.data.member_code,
              name: param.data.name,
              username: param.data.username,
              password: param.data.password,
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
  fetch(baseURL+'user_play/user_lay/' + param.data.id, {
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

    //GetLogMember //Search ด้วย ส่ง name มา
  fetchDataAgMember(param) {
    console.log(param.params.id.idLog);
    return new Promise((resolve, reject) => {
    fetch(baseURL+ 'post/logAgentMember/' + param.params.id.idLog, {
            method: 'POST',
            headers: {
             'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: param.params.query,
              pageIndex: param.params.pageIndex,
              pageSize: param.params.pageSize
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
            fetch(baseURL+ 'getallData')
            .then(response => response.json())
            .then(data => {
                resolve(data);
            })
            .catch(error => console.error(error))
    })
  },

  getCommission() {
    return new Promise((resolve, reject) => {
            fetch(baseURL+ 'post/commissionGame')
            .then(response => response.json())
            .then(data => {
                resolve(data);
            })
            .catch(error => console.error(error))
    })
  },

  getCommissionMonthly() {
    return new Promise((resolve, reject) => {
            fetch(baseURL+ 'post/commissionMonthly')
            .then(response => response.json())
            .then(data => {
                resolve(data);
            })
            .catch(error => console.error(error))
    })
  },
}

export default ApiService


