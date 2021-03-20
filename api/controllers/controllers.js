const axios = require('axios').default

const getUsers = (req, res) => {
    try {
        axios.get("https://randomuser.me/api/?results=20")
            .then(response => {
                res.status(200).send(response.data.results)
            })
            .catch(err => res.send(err))
    } catch (error) {
        console.error(error)
    }
}

module.exports.getUsers = getUsers