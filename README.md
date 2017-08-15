# skype-botbuilder-apiai
Node js server to connect Api.ai to Skype. It acts as a middle-man server between Api.ai and Microsoft Bot Builder.

# Setup Heroku Dyno
Create a Dyno on Heroku https://dashboard.heroku.com/apps
In the project folder run heroku git:remote -a YOUR-HEROKU-REPO-NAME
git push heroku master

# Setup Microsoft Bot Builder
Create a bot in Bot Framework https://dev.botframework.com/
Go to Bot Settings and fill Messagin endpoint under Configuration with your heroku dyna public address

# Heroku Config Variables
In the heroku settings add following config variables :

MS_BOTBUILDER_APP_ID="MICROSOFT BOT BUILDER APPLICATION ID HERE"
MS_BOTBUILDER_APP_PASSWORD="MICROSOFT BOT BUILDER PASSWORD HERE"
APIAI_CLIENT_ACCESS_TOKEN="APIAI CLIENT ACCESS TOKEN HERE"

You can add your bot to your Skype contact list for testing. When you are ready, you can deploy your bot to public access on Skype directory.
You can also get embed code for this bot and add it to your web page.