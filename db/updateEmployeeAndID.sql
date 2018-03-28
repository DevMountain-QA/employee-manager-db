UPDATE employees
    SET employee_id = $2, employee_name = $3, employee_phone = $4, employee_email = $5, employee_title = $6
    WHERE employee_id = $1