import BaseService from './BaseService'

const ApiService = {
    fetchData(param) {
        return new Promise((resolve, reject) => {
            /*BaseService(param)
                .then((response) => {
                    resolve(response)
                    console.log(response)
                })
                .catch((errors) => {
                    reject(errors)
                })*/
                fetch('http://localhost:5000/post/agent')
                .then(response => response.json())
                .then(data => {
                    resolve(data);
                })
                .catch(error => console.error(error))
        })
    },

    putData(param) {
        return new Promise((resolve, reject) => {
                fetch('http://localhost:5000/post/agent')
                .then(response => response.json())
                .then(data => {
                    resolve(data);
                })
                .catch(error => console.error(error))
        })
    },
}

export default ApiService

