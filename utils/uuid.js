const {v6} = require("uuid");

exports.generateId = () => {
    return v6();
}