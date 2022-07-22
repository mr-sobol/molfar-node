module.exports = {
	service:{
		server: process.env.SERVER || "http://localhost:3002/register",
		token: process.env.TOKEN || "XcaVRzKz2nQUd8pel7az",
		mode: process.env.NODE_ENV || "development",
		port: process.env.PORT || 3003,
		host: process.env.HOST || "localhost",
		usePort: process.env.USE_PORT || true,
		deploymentDir: "./.deployment"
	}
}
