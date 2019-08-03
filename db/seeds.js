const mongoose = require('mongoose')
const Promise = require('bluebird')
mongoose.Promise = Promise

const { dbURI } = require('../config/environment.js')

const Job = require('../models/job')
const Company = require('../models/company')
const Sector = require('../models/sector')
const User = require('../models/user')

mongoose.connect(dbURI, { useNewUrlParser: true }, (err, db) => {
  db.dropDatabase()
    .then(() => {
      return Promise.props({
        tech: Sector.create({
          name: 'Digital & Technology'
        }),
        finance: Sector.create({
          name: 'Financial Services Operations'
        }),
        supply: Sector.create({
          name: 'Supply Chain & Procurement'
        }),
        hospitality: Sector.create({
          name: 'Hospitality'
        }),
        fnb: Sector.create({
          name: 'Food & Beverage'
        }),
        sales: Sector.create({
          name: 'Sales'
        }),
        company1: Company.create({
          companyName: 'Company One'
        }),
        company2: Company.create({
          companyName: 'Company Two'
        }),
        admin: User.create({
          fName: 'Dexter',
          lName: 'De Leon',
          email: 'contact@dexdeleon.com',
          location: 'London',
          admin: true,
          password: 'password',
          passwordConfirmation: 'password'
        })
      })
    })
    .then(data => {
      return Promise.props({
        job1: Job.create({
          name: 'Assistant Chef',
          description: 'Medium experience chef needed to assist head chef in a small café kitchen.',
          location: 'London',
          company: data.company1,
          sectors: [data.fnb, data.hospitality]
        }),
        job2: Job.create({
          name: 'Accountant',
          description: 'Experienced accountant needed for a medium B2B credit company.',
          location: 'London',
          company: data.company2,
          sectors: [data.finance]
        }),
        job3: Job.create({
          name: 'Junior Developer',
          description: 'Junior level developer needed for a small, in-house, development team.',
          location: 'London',
          company: data.company2,
          sectors: [data.finance, data.tech]
        }),
        job4: Job.create({
          name: 'Sales Assistant',
          description: 'Entry-level sales assistant required to work with café clients/partners.',
          location: 'London',
          company: data.company1,
          sectors: [data.sales, data.hospitality, data.fnb]
        }),
        job5: Job.create({
          name: 'Waiter',
          description: 'Waiter needed for small café, experience required.',
          location: 'London',
          company: data.company1,
          sectors: [data.fnb, data.hospitality]
        })
      })
    })
    .then(() => console.log('Seeds sown 🌱'))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
