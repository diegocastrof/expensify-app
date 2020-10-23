import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


export default class ExpenseForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      note: props.expense ? props.expense.note : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      focusedCalendar: false,
      alert: false
    }
  }
  
  handleDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }))
  }
  handleAmountChange = (e) => {
    const amount = e.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }
  handleNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }))
  }
  handleOnSubmit = (e) => {
    e.preventDefault()
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ alert: true }))
    } else { 
      this.setState(() => ({ alert: false }))
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <form className="form-group">
            {
              this.state.alert && <p className="alert">Please provide description and amount of your expense</p>
            }
            <input
              className="text-input" 
              type="text"
              placeholder="Description"
              value={ this.state.description }
              onChange={ this.handleDescriptionChange }
            />
            <input 
              className="text-input"
              type="text"
              placeholder="Amount"
              value={ this.state.amount }
              onChange={ this.handleAmountChange }
            />
            <SingleDatePicker
              date={ this.state.createdAt } 
              onDateChange={ createdAt => createdAt ? this.setState({ createdAt }) : undefined }
              focused={ this.state.focusedCalendar } 
              onFocusChange={({ focused }) => this.setState({ focusedCalendar: focused })} 
              numberOfMonths={ 1 }
              isOutsideRange= {() => false}
            />
            <textarea
              className="text-area" 
              placeholder="Add a note (optional)" 
              cols="30" rows="10"
              value={ this.state.note }
              onChange={ this.handleNoteChange }
            ></textarea>
            <button
              className="btn btn-blue btn-md" 
              onClick={ this.handleOnSubmit }
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}

