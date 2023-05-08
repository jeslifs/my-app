import React from 'react'

function Alert(props) {
    // to make the first word capital of alert
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        // after taking 1 char it cuts remaining char
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div style={{height: '50px'}}>
    {/* // jsx will be converted to javascrit calls */}

    {/* // use props.alert && since it was showing error as none coz no alert message was present. use && if first part is true the continue with next part. */}
   { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        {/* <strong>Holy guacamole!</strong> You should check in on some of those fields below. */}
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        {/* after 2 sec alto cancel */}
    </div>}
    </div>
  )
}

export default Alert
