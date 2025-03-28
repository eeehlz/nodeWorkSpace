// mapper/sql/customers.js
// Table : customers;
const selectAll =
  `select id
		  ,name
      ,phone
      ,address
from customers
ORDER BY id`;

const selectById =
  `select id
		  ,name
      ,phone
      ,address
from customers
where id = ?`;   // ? 는 다른값으로 대체된다 는 뜻

module.exports = {
  // 'selectAll' : selectAll
  selectAll,
  selectById,
}