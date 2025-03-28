// router/costomer_router.js
//라우터 모듈

const express = require('express');
const router = express.Router();
const custService = require('../service/customer_service.js');

module.exports = router;

//customers
//전체조회        : GET + '/customers'
router.get('/customers', async (req, res) => {
  let custList = await custService.findAll();
  res.send(custList);
});
//단건조회        : GET + '/customers/:id'
router.get('/customers/:id', async (req, res) => {
  let custId = req.params.id;
  let custInfo = await custService.findById(custId);
  res.send(custInfo);
});
//등록            : POST + '/customers' + JSON(추가할 데이터, body)
router.post('/customers', (req, res) => {

});
//수정            : PUT + '/customers/:id + JSON'
router.put('/customers:id', (res, req) => {

});
//삭제            : DELETE + '/customers/:id'
router.delete('/customers:id', (res, req) => {

});