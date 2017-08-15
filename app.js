var restify = require('restify');
var builder = require('botbuilder');
var apiai = require('apiai');

var apiaiapp = apiai(process.env.APIAI_CLIENT_ACCESS_TOKEN);
var apiai_session_id = '4d90-d726-79b75fb2ae14' // Should be randomized

// Create bot and add dialogs
var connector = new builder.ChatConnector({
    appId: process.env.MS_BOTBUILDER_APP_ID,
    appPassword: process.env.MS_BOTBUILDER_APP_PASSWORD
});
var bot = new builder.UniversalBot(connector);
  
bot.dialog('/', function (session) {
	// Get user input
	console.log(session.message.text);
	var apiairequest = apiaiapp.textRequest(session.message.text, {
		sessionId: apiai_session_id
	});
	apiairequest.on('response', function(response) {
		console.log(response.result.fulfillment.speech);
		session.send(response.result.fulfillment.speech);
	});
	apiairequest.on('error', function(error) {
		console.log(error);
	});
	
	apiairequest.end();
});

// Setup Restify Server
var server = restify.createServer();
server.post('/api/messages', connector.listen());
server.listen(process.env.PORT || 5000, function () {
    console.log('%s listening to %s', server.name, server.url); 
});