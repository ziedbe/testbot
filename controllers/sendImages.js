var request = require('request');


exports.cr = function(senderId,message, FACEBOOK_ACCESS_TOKEN){
   var card = {
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: { access_token: FACEBOOK_ACCESS_TOKEN },
        method: 'POST',
        json: {
            recipient: { id: senderId },
            message:{
                attachment:{
                    type:"image", 
                    payload:{
                         url:"https://i1.rgstatic.net/ii/profile.image/AS%3A278771300093960%401443475665373_xl/Faouzi_Moussa.png", 
                         is_reusable:true
                         }
                 }
            }
        }
    }
}