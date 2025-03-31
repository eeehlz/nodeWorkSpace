const mariaDB = require("../mapper/mapper.js")

const findAll = async () => {
    let list = mariaDB.query("selectAll");
    return list;
};

const findById = async (empId) => {
    let info = (await mariaDB.query("selectById", empId))[0];
    return info;
};

const addEmployee = async (empInfo) => {
    let columnList = ["first_name", "last_name", "email", "gender", "ip_address"];
    let addInfo = convertAry(empInfo, columnList);
    let result = await mariaDB.query("insertInfo", addInfo);
    return result;
};

const convertAry = (target, list) => {
    let ary = [];
    for (let field of list) {
        let val = target[field];
        ary.push(val);
    }
    return ary;
}

const modifyEmployeeInfo = async (empInfo, empId) => {
    let updateInfo = [empInfo, empId];
    let result = await mariaDB.query("updateInfo", updateInfo);
    return result;
};

const removeEmployeeInfo = async (empId) => {
    let result = await mariaDB.query("deleteInfo", empId);
    return result;
};

module.exports = {
    findAll,
    findById,
    addEmployee,
    modifyEmployeeInfo,
    removeEmployeeInfo,
}