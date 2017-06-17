const express = require('express');
const hbs = require('hbs');
const app = express();
const fs = require('fs');

const port = process.env.PORT || 3000

//hbs partials - reusing components
hbs.registerPartials(__dirname + '/public/partials')
app.set('view engine', 'hbs');

app.use((req, res, next) => {
  var logTime = new Date().toString();
  var log = `${logTime} : ${req.method} : ${req.url}`
  
  console.log(log)
  next()
})

// app.use((req, res, next) => {
//   res.render('maintenance.hbs')
// })

app.use(express.static(__dirname + '/public'))

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
})

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase()
})

app.get('/projects', (req, res) => {
  res.render('projects.hbs', {
    pageTitle: "Projects Page"
  })
})

// app.get('/', (req, res) => {
//   res.send({
//     name : 'rohan',
//     collegeDetails : {
//       collegeName : 'Rajasthan Technical University',
//       specialization : 'Computer Science'
//     }
//   })
// })

app.get('/', (req, res) => {
  res.render('home.hbs')
})

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page'
  });
});

app.listen(port, () => {
  console.log(`Server started at port ${port}`)
});