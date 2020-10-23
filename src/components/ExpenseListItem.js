import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div className="expenses-list__item">
    <div className="expenses-list__item--expense">
      <div className="expense-description">
        <Link to={`edit/${id}`}>
          { description }
        </Link>
      </div>
      <div className="expense-date">
        { moment(createdAt).format('MMMM Do, YYYY') }
      </div>
    </div>
    
    <div className="expenses-list__item--price">
      { numeral(amount / 100).format('$0,0.00') } 
    </div>   
</div>
)

export default ExpenseListItem