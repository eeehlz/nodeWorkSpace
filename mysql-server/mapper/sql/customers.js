// mapper/sql/customers.js
// Table : customers;
const selectAll = 
`select id
		  ,name
      ,phone
      ,address
from customers
ORDER BY id`;


module.exports={
  selectAll,
  // 'selectAll' : selectAll
}