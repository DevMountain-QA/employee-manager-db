let employees = [];
let id = 1;

module.exports = {
    list: (req, res) => {
        console.log(employees)
        res.status(200).send(employees);
    },
    hire: (req, res) => {
        console.log(req.body)
        const { name, phone, title, email } = req.body;
        let employee = {
            id: id,
            name: name,
            phone: phone,
            title: title,
            email: email
        }
        employees.push(employee);
        id++;
        res.status(200).send(employees);
    },
    update: (req, res) => {
        let index = null;
        employees.forEach((employee, i) => {
          if(employee.id === Number(req.params.id)) index = i;
        })
        employees[ index ] = {
          id: employees[ index ].id,
          title: req.body.title || employees[ index ].title,
          phone: req.body.phone || employees[ index ].phone,
          email: req.body.email || employees[ index ].email,
          name: req.body.name || employees[ index ].name
        };
        res.status(200).send( employees );
    },
    delete: ( req, res ) => {
      let index = null;
      employees.forEach((employee, i) => {
        if(employee.id === Number(req.params.id)) index = i;
      })
      employees.splice(index, 1)
      res.status(200).send( employees );
    }

};