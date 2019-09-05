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
          companyName: 'Company One',
          location: 'London',
          contact: {
            fName: 'John',
            lName: 'Smith',
            title: 'Administrative Officer',
            phone: '07712345678',
            email: 'john@companyone.com'
          }
        }),
        company2: Company.create({
          companyName: 'Company Two',
          location: 'London',
          contact: {
            fName: 'Jane',
            lName: 'Doe',
            title: 'Administrative Officer',
            phone: '07787654321',
            email: 'jane@companyone.com'
          }
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
          type: 'full-time',
          active: true,
          sectors: [data.fnb, data.hospitality]
        }),
        job2: Job.create({
          name: 'Accountant',
          description: 'Experienced accountant needed for a medium B2B credit company.',
          location: 'London',
          company: data.company2,
          type: 'full-time',
          active: true,
          sectors: [data.finance]
        }),
        job3: Job.create({
          name: 'Junior Developer',
          description: 'Junior level developer needed for a small, in-house, development team.',
          location: 'London',
          company: data.company2,
          type: 'full-time',
          active: true,
          sectors: [data.finance, data.tech]
        }),
        job4: Job.create({
          name: 'Sales Assistant',
          description: 'Entry-level sales assistant required to work with café clients/partners.',
          location: 'London',
          company: data.company1,
          type: 'full-time',
          active: true,
          sectors: [data.sales, data.hospitality, data.fnb]
        }),
        job5: Job.create({
          name: 'Waiter',
          description: 'Waiter needed for small café, experience required.',
          location: 'London',
          company: data.company1,
          type: 'full-time',
          active: true,
          sectors: [data.fnb, data.hospitality]
        })
      })
    })
    .then(data1 => {
      return Promise.props({
        admin: User.create({
          email: 'admin@acquio.co.uk',
          password: 'password',
          passwordConfirmation: 'password',
          fName: 'Reinfredo',
          lName: 'Bondoc',
          location: 'London',
          admin: true
        }),
        user1: User.create({
          email: 'contact@dexdeleon.com',
          password: 'password',
          passwordConfirmation: 'password',
          fName: 'Dexter',
          lName: 'De Leon',
          location: 'London',
          statement: 'I\'m Dex De Leon, a full-stack Web Developer looking for a full-time role.',
          portfolio: 'http://dexdeleon.com',
          github: 'https://github.io/Dextorr',
          linkedIn: 'https://www.linkedin.com/in/dexter-de-leon/',
          phone: '07710422560',
          jobs: [data1.job3],
          admin: false
        }),
        user2: User.create({
          email: 'johndoe@email.com',
          password: 'password',
          passwordConfirmation: 'password',
          fName: 'John',
          lName: 'Doe',
          location: 'London',
          statement: 'I\'m John Doe, an accountant looking for a full-time role.',
          jobs: [data1.job2],
          admin: false
        })
      })
    })
    .then(() => console.log('Seeds sown 🌱'))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
