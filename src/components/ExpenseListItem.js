import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <h4>{ description }</h4>
    <p>
      { numeral(amount / 100).format('$0,0.00') } 
      - 
      { moment(createdAt).format('MMMM Do, YYYY') }</p>
    
    
    <Link to={`edit/${id}`}>
      Edit
    </Link>
</div>
)

export default ExpenseListItem