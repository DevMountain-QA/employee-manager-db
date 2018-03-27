UPDATE employees
    SET employee_name = $2, employee_phone = $3, employee_email = $4, employee_title = $5
    WHERE employee_id = $1