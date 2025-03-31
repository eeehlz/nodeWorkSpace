const selectAll =
`SELECT id, first_name, last_name, email, gender, ip_address
 FROM employees
 ORDER BY id`

const selectById =
`SELECT id, first_name, last_name, email, gender, ip_address
 FROM employees
 WHERE id = ?`

const insertInfo =
`INSERT INTO employees(first_name, last_name, email, gender, ip_address)
 VALUES (?, ?, ?, ?, ?)`

const updateInfo =
`UPDATE employees
 SET ?
 WHERE id = ?`

const deleteInfo =
`DELETE
 FROM employees
 WHERE id = ?`

module.exports = {
    selectAll,
    selectById,
    insertInfo,
    updateInfo,
    deleteInfo,
}