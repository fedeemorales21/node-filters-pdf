if (process.env.NODE_ENV == 'development') {    
    require('dotenv').config()
}
    
const express = require('express')
const exphbs = require('express-handlebars')
const { join } = require('path')

// import routes
const indexRoutes = require('./routes/indexRoutes')

// inits
const app = express()
require('./db')

// settings
app.set('port', process.env.PORT || 3000)
app.set('views', join(__dirname,'views'))
app.engine('.hbs', exphbs({
    layoutsDir: join(app.get('views'),'layouts'),
    partialsDir: join(app.get('views'),'partials'),
    defaultLayou: 'main',
    extname: '.hbs'
}))
app.set('view engine', '.hbs')

// middlewares
app.use(express.urlencoded({ extended:false  }))
app.use(express.json())

// routes
app.use(indexRoutes)

// static files
app.use(express.static(join(__dirname,'public')))

// running server
app.listen(app.get('port'), () => console.log('Server running on port', app.get('port')) )