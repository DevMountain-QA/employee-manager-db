let employees = [];

module.exports = {
    list: (req, res, next) => {
        const dbInstance = req.app.get('db');
        dbInstance.getEmployees()
            .then(employees => res.status(200).send(employees))
            .catch(err => {
                console.log(err)
                res.status(500).send(err)
            })

    },
    hire: (req, res, next) => {
        console.log(req.body)

        const dbInstance = req.app.get('db')
        const { id, name, phone, email, title } = req.body;

        dbInstance.hireEmployee([id, name, phone, email, title])
            .then(() => res.status(200).send())
            .catch(() => res.status(500).send());

        // let employee = {
        //     id: id,
        //     name: name,
        //     phone: phone,
        //     title: title,
        //     email: email
        // }
        // employees.push(employee);
        // id++;
        // res.status(200).send(employees);
    },
    update: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params, query } = req
        console.log(params)
        console.log(query)
        dbInstance.updateEmployee([ params.id, query.name, query.phone, query.email, query.title])
            .then(() => {
                dbInstance.getEmployees()
                .then(employees => res.status(200).send(employees))
                .catch(err => {
                    console.log(err)
                    res.status(500).send(err)
                })
            })
            .catch(() => res.status(500).send())
        // let index = null;
        // employees.forEach((employee, i) => {
        //   if(employee.id === Number(req.params.id)) index = i;
        // })
        // employees[ index ] = {
        //   id: employees[ index ].id,
        //   title: req.body.title || employees[ index ].title,
        //   phone: req.body.phone || employees[ index ].phone,
        //   email: req.body.email || employees[ index ].email,
        //   name: req.body.name || employees[ index ].name
        // };
        // res.status(200).send( employees );
    },
    delete: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params } = req

        dbInstance.deleteEmployee([ params.id ])
            .then( () => res.status(200).send() )
            .catch( () => res.status(500).send() )
        // let index = null;
        // employees.forEach((employee, i) => {
        //     if (employee.id === Number(req.params.id)) index = i;
        // })
        // employees.splice(index, 1)
        // res.status(200).send(employees);
    }

};