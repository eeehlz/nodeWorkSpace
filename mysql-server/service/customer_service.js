// service/customer_service.js
const mariaDB = require('../mapper/mapper.js'); //mapper 호출

//전체조회
const findAll = async () => {
  let list = await mariaDB.query('selectAll');
  return list;
};
//단건조회
const findById = async (custId) => {
  let info = (await mariaDB.query('selectById', custId))[0];
  return info;
};
//등록
const addCustomer = () => {};
//수정
const modifyCustomerInfo = () => {};
//삭제
const removeCustomerInfo = () => {};

module.exports = {
  findAll,
  findById,
  addCustomer,
  modifyCustomerInfo,
  removeCustomerInfo,
}