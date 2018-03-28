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
            .then(() => {
                dbInstance.getEmployees()
                    .then(employees => res.status(200).send(employees))
                    .catch(err => {
                        console.log(err)
                        res.status(500).send(err)
                    })
            })
            .catch(() => res.status(500).send());

    },
    update: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params, query } = req
        console.log(params)
        console.log(query)
        if (query.id)
            dbInstance.updateEmployeeAndID([params.id, query.id, query.name, query.phone, query.email, query.title])
                .then(() => {
                    dbInstance.getEmployees()
                        .then(employees => res.status(200).send(employees))
                        .catch(err => {
                            console.log(err)
                            res.status(500).send(err)
                        })
                })
                .catch(() => res.status(500).send())
        else
            dbInstance.updateEmployee([params.id, query.name, query.phone, query.email, query.title])
                .then(() => {
                    dbInstance.getEmployees()
                        .then(employees => res.status(200).send(employees))
                        .catch(err => {
                            console.log(err)
                            res.status(500).send(err)
                        })
                })
                .catch(() => res.status(500).send())

    },
    delete: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params } = req

        dbInstance.deleteEmployee([params.id])
            .then(() => {
                dbInstance.getEmployees()
                    .then(employees => res.status(200).send(employees))
                    .catch(err => {
                        console.log(err)
                        res.status(500).send(err)
                    })
            })
            .catch(() => res.status(500).send())

    }

};