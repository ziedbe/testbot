var request = require('request');

exports.sendQr = function(senderId, message, result, FACEBOOK_ACCESS_TOKEN){
	request({
		url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: { access_token: FACEBOOK_ACCESS_TOKEN },
        method: 'POST',
        json : {
        	recipient: { id: senderId },
        	message: {
                text:result,
                quick_replies:[
                    {
                        content_type: "text",
                        title: "Forum Annuel de l'ENSI",
                        payload: "a"
                    },
                    {
                        content_type :"text",
                        title :"ENSI JE",
                        payload :"h"
                    },
                    {
                        content_type :"text",
                        title :"Contact",
                        payload :"h"
                    }]
            }
        }	
	})
}

exports.sendQrForum = function(senderId, message, result, FACEBOOK_ACCESS_TOKEN){
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: { access_token: FACEBOOK_ACCESS_TOKEN },
        method: 'POST',
        json : {
            recipient: { id: senderId },
            message: {
                text:result,
                quick_replies:[
                    {
                        content_type: "text",
                        title: "Plus d'infos",
                        payload: "a"
                    },
                    {
                        content_type :"text",
                        title :"Entreprises Participantes",
                        payload :"h"
                    },
                    {
                        content_type :"text",
                        title :"Table Ronde",
                        payload :"h"
                    },
                    {
                        content_type :"text",
                        title :"Workshop",
                        payload :"h"
                    },
                    {
                        content_type :"text",
                        title :"Planning",
                        payload :"h"
                    }]
            }
        }   
    })
}
exports.sendQrEnt = function(senderId, message, result, FACEBOOK_ACCESS_TOKEN){
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: { access_token: FACEBOOK_ACCESS_TOKEN },
        method: 'POST',
        json : {
            recipient: { id: senderId },
            message: {
                text:result,
                quick_replies:[
                    {
                        content_type: "text",
                        title: "Parrains",
                        payload: "a"
                    },
                    {
                        content_type :"text",
                        title :"Partenaires Premium",
                        payload :"h"
                    },
                    {
                        content_type :"text",
                        title :"Collaborateurs",
                        payload :"h"
                    }
                    ]
            }
        }   
    })
}