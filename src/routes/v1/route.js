
const getEmployees = require('../../controller/index')

module.exports = (server) => {
    server.use("/employee", getEmployees);

};
