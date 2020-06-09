import React, { useState } from "react";
import { connect } from "react-redux";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from "../../actions/filter";

const ExpenseListFilters = ({
  filters,
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
}) => {
  const [calendarFocused, setCalendarFocused] = useState(null);
  const onDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };
  const onFocusChange = (calendarFocused) => {
    setCalendarFocused(calendarFocused);
  };

  return (
    <div className="content-container">
      <div className="input-group">
        <div className="input-group__item">
          <input
            type="text"
            className="text-input"
            value={filters.text}
            placeholder="Search For Expenses"
            onChange={(e) => {
              setTextFilter(e.target.value);
            }}
          />
        </div>
        <div className="input-group__item">
          <select
            value={filters.sortBy}
            className="select"
            onChange={(e) => {
              if (e.target.value === "date") {
                sortByDate();
              } else if (e.target.value === "amount") {
                sortByAmount();
              }
            }}
          >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
        </div>
        <div className="input-group__item">
          <DateRangePicker
            startDate={filters.startDate}
            endDate={filters.endDate}
            onDatesChange={onDatesChange}
            focusedInput={calendarFocused}
            onFocusChange={onFocusChange}
            showClearDates={true}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  filters: state.filters,
});

export default connect(mapStateToProps, {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
})(ExpenseListFilters);
