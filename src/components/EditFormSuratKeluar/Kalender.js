import React, { useState } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import id from 'date-fns/locale/id'
import 'react-datepicker/dist/react-datepicker.css'
registerLocale('id', id)

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Kalender = ({ onChange, minDate, data }) => {
  const [startDate, setStartDate] = useState(
    data != null ? new Date(data) : null,
  )

  const dateToString = (d) =>
    `${d.getFullYear()}-${('00' + (d.getMonth() + 1)).slice(-2)}-${(
      '00' + d.getDate()
    ).slice(-2)}`

  const changes = (date) => {
    setStartDate(date)
    console.log('date:' + date)
    let value = new Date(date)
    const exDate = dateToString(value)
    console.log('date2:' + value)
    console.log('date3:' + exDate)
    console.log('date4:' + new Date(data))

    onChange(exDate, value)
  }

  return (
    <DatePicker
      dateFormat="dd  MMMM  yyyy"
      locale="id"
      key="example9"
      selected={startDate}
      onChange={(date) => changes(date)}
      minDate={minDate}
    />
  )
}

export default Kalender
