import React from 'react'
import { connect } from 'react-redux'

import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'

import { DateRangePicker } from 'react-dates'

class ExpenseListFilter extends React.Component {
  state = {
    calendarFocused: null
  }
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate))
    this.props.dispatch(setEndDate(endDate))
  }

  render() {
    return (
      <div className="container">
        <div className="input-group">
          
          <div className="input-group--item">
            <input 
              className="text-input"
              placeholder="Search expenses"
              type="text"
              value={this.props.filter.text} 
              onChange={ (e) => { 
                this.props.dispatch(setTextFilter(e.target.value)) 
              }}
            />
          </div>

          <div className="input-group--item">
            <select 
              className="select-input"
              value={this.props.filter.sortBy}
              onChange = { (e) => { 
                (e.target.value) === 'date' ? this.props.dispatch(sortByDate()) : this.props.dispatch(sortByAmount()) 
              }}
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>

          <div className="input-group--item">
            <DateRangePicker
              startDate={ this.props.filter.startDate } 
              endDate={ this.props.filter.endDate } 
              onDatesChange={ this.onDatesChange }
              focusedInput={ this.state.calendarFocused } 
              onFocusChange={calendarFocused => this.setState({ calendarFocused })}
              numberOfMonths={1}
              isOutsideRange={() => false} 
              showClearDates={true}
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter
  }
}

export default connect(mapStateToProps)(ExpenseListFilter)