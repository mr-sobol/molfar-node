const bodyParser = require('body-parser')
const express = require('express')
const CORS = require("cors")

const config  = require('./config')

const app = express();

app.use(CORS({
    origin: '*'
}))

app.use(bodyParser.text());

app.use(bodyParser.json({
    limit: '50mb'
}))

app.use(bodyParser.urlencoded({
        parameterLimit: 100000,
        limit: '50mb',
        extended: true
    }));


let routes = require("./src/javascript/routes")

routes.forEach( route => {
	// console.log(route)
	app[route.method](route.path, route.handler)
})

const container = require("./src/javascript/util/container")
const restoreNodeState = require("./src/javascript/util/restore")

// console.log(container().state)

restoreNodeState()
	.then(() => {
		app.listen(config.service.port, () => {
		  console.log(`\n@MOLFAR Node: starts on port ${config.service.port} in ${config.service.mode} mode.`);
		});
	})




// node self-registration section ref to ./src/javascript/container


module.exports = app