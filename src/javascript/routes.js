
const YAML = require("js-yaml")
const container = require("./util/container")
const {v4} = require("uuid")
const {extend} = require("lodash")

const {
    deployMicroservice,
    startMicroservice,
    setMicroserviceConfig,
    terminateMicroservice,
    undeployMicroservice
} = require("./services")

const getRequestParams = request => extend({}, request.params, request.query, request.body)

const sanitizeState = state => {
    
    let res = extend({}, state)
    // res.microservices.forEach( item => {
    //     delete item.instance
    // })
    return res

}

const sendResponse = (req, res) => {

    let data = sanitizeState(container().state)
    let p = getRequestParams(req)
    let format = p.output || "json"
    if( format == "yaml" || format == "yml") {
        res.send(YAML.dump(data))    
    } else {
        res.send(data)
    } 

}

const deployMicroserviceHandler = async (req, res) => {
    try {

        let p = getRequestParams(req)
        let id = p.id || v4()
        let repo = p.repo

        await deployMicroservice(id,repo)
        sendResponse(req, res)    

    } catch (e) {
        res.status(400).send({
            message: e.toString()
        })
    }
    
}

const startMicroserviceHandler = async (req, res) => {
    try {

        let p = getRequestParams(req)
        await startMicroservice(p.id, {service: p.service})
        sendResponse(req, res)   
    } catch (e) {
        res.status(400).send({
            message: e.toString()
        })
    }    

}

const terminateMicroserviceHandler = async (req, res) => {
    try {
    
        let p = getRequestParams(req)
        await terminateMicroservice(p.id)
        sendResponse(req, res)   
    } catch (e) {
        res.status(400).send({
            message: e.toString()
        })
    }

}

const undeployMicroserviceHandler = async (req, res) => {
    try {
    
        let p = getRequestParams(req)
        await undeployMicroservice(p.id)
        sendResponse(req, res)   
    } catch (e) {
        res.status(400).send({
            message: e.toString()
        })
    }

}

const setMicroserviceConfigHandler = (req, res) => {
    try {
        
        let p = getRequestParams(req)
        setMicroserviceConfig( p.id, {service: p.service} )
        sendResponse(req, res)    
        
    } catch (e) {
        res.status(400).send({
            message: e.toString()
        })
    }     
    
} 

module.exports = [
    {
        method: "get",
        path: "/state",
        handler: sendResponse
    },
    {
        method: "post",
        path: "/state",
        handler: sendResponse
    },

    {
        method: "get",
        path: "/deploy/:id",
        handler: deployMicroserviceHandler
    },

    {
        method: "post",
        path: "/deploy/:id",
        handler: deployMicroserviceHandler
    },

    {
        method: "get",
        path: "/deploy",
        handler: deployMicroserviceHandler
    },

    {
        method: "post",
        path: "/deploy",
        handler: deployMicroserviceHandler
    },

    {
        method: "get",
        path: "/undeploy/:id",
        handler: undeployMicroserviceHandler
    },

    {
        method: "post",
        path: "/undeploy/:id",
        handler: undeployMicroserviceHandler
    },

    {
        method: "get",
        path: "/undeploy",
        handler: undeployMicroserviceHandler
    },

    {
        method: "post",
        path: "/undeploy",
        handler: undeployMicroserviceHandler
    },

    {
        method: "post",
        path: "/start",
        handler: startMicroserviceHandler
    },

    {
        method: "post",
        path: "/start/:id",
        handler: startMicroserviceHandler
    },

    {
        method: "get",
        path: "/start",
        handler: startMicroserviceHandler
    },

    {
        method: "get",
        path: "/start/:id",
        handler: startMicroserviceHandler
    },

    {
        method: "post",
        path: "/config",
        handler: setMicroserviceConfigHandler
    },

    {
        method: "post",
        path: "/config/:id",
        handler: setMicroserviceConfigHandler
    },

    {
        method: "get",
        path: "/terminate",
        handler: terminateMicroserviceHandler
    },

    {
        method: "post",
        path: "/terminate/:id",
        handler: terminateMicroserviceHandler
    },
    {
        method: "get",
        path: "/terminate",
        handler: terminateMicroserviceHandler
    },

    {
        method: "get",
        path: "/terminate/:id",
        handler: terminateMicroserviceHandler
    }


]