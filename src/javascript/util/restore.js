const container = require("./container")
const config = require("../../../config")
const {
	handlerAxiosRequest,
	startMicroservice,
	holdMicroservice
} = require("../services")



module.exports = async () => {

	console.log("@MOLFAR Node: restore state...\n")
	for( let i=0; i < container().state.microservices.length; i++){
		let ms = container().state.microservices[i]
		console.log(`Hold microservice ${ms.id} by path ${ms.deployment.servicePath}`)
		holdMicroservice(ms.deployment.servicePath, ms.id)
		if(ms.start){
			console.log(`Start microservice ${ms.id}`)
			delete ms.start
			await startMicroservice(ms.id, ms.config)
		}	
	}
	console.log("@MOLFAR Node: register node...\n")
	let data = {
		"token": config.service.token,
    	"uri":    container().state.uri,
    	"instance": container().state.instance
	}
	const result = handlerAxiosRequest(config.service.server, "post", data)
	result.then(value =>{
		console.log(value)
	})
	.catch(value =>{
		console.log(value)
	})
	await result;
	console.log("\n@MOLFAR Node: ready to use")
	
} 
