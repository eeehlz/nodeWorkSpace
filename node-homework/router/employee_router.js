const express = require("express");
const router = express.Router();
const empService = require("../service/employee_service.js");

router.get("/employees", async (req, res) => {
    let empList = await empService.findAll();
    res.send(empList);
});

router.get("/employees/:id", async (req, res) => {
    let empId = req.params.id;
    let empList = await empService.findById(empId);
    res.send(empList);
});

router.post("/employees", async (req, res) => {
    let addEmp = req.body;
    let result = await empService.addEmployee(addEmp);
    res.send(result);
});

router.put("/employees/:id", async (req, res) => {
    let empId = req.params.id;
    let empInfo = req.body;
    let result = await empService.modifyEmployeeInfo(empInfo, empId);
    res.send(result);
});

router.delete("/employees/:id", async (req, res) => {
    let empId = req.params.id;
    let result = await empService.removeEmployeeInfo(empId);
    res.send(result);
});

module.exports = router;