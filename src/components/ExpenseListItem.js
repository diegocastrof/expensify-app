import React from 'react'
import { Link } from 'react-router-dom'

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <h4>{ description }</h4>
    <p>{ amount } - { createdAt}</p>
    <Link to={`edit/${id}`}>
      Edit
    </Link>
</div>
)

export default ExpenseListItem