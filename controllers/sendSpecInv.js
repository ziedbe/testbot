var request = require('request');

exports.sendFm = function(senderId, message, FACEBOOK_ACCESS_TOKEN){
	request({
		url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: { access_token: FACEBOOK_ACCESS_TOKEN },
        method: 'POST',
        json: {
            recipient: { id: senderId },
            message:{
    			attachment: {
                    type: "template",
                    payload: {
                        template_type: "generic",
                        elements: [{
                            title: "Faouzi Moussa",
                            image_url: "https://i1.rgstatic.net/ii/profile.image/AS%3A278771300093960%401443475665373_xl/Faouzi_Moussa.png",
                            subtitle: "CEO chez Cybex Solutions, Chroniqueur chez RTCI et modérateur de la table ronde",
                            buttons: [{
                            	type: "web_url",
                                url: "https://i1.rgstatic.net/ii/profile.image/AS%3A278771300093960%401443475665373_xl/Faouzi_Moussa.png", /// link for call to action
                                title: "Voir l'image"
                           	
                           	 },{
                                type: "web_url",
                                url: "https://i1.rgstatic.net/ii/profile.image/AS%3A278771300093960%401443475665373_xl/Faouzi_Moussa.png", /// link for call to action
                                title: "Voir Portfolio"
                            }
                          ],
                        }]
                    }
  				}
  			}
  		}
	})
}

exports.sendEb = function(senderId, message, FACEBOOK_ACCESS_TOKEN){
    return request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token: FACEBOOK_ACCESS_TOKEN},
        method: 'POST',
        json: {
            recipient: {id: senderId},
            message: {
                attachment: {
                    type: "template",
                    payload: {
                        template_type: "generic",
                        elements: [
                            {
                            title: "Elias Bouricha",
                            image_url: "https://media.licdn.com/media/p/8/000/2b0/3f8/1f75a8c.jpg",
                            subtitle: "CEO chez Cognira, ex Directeur Général chez Infor Predictix",
                            
                            buttons: [{
                            	type: "web_url",
                                url: "https://i1.rgstatic.net/ii/profile.image/AS%3A278771300093960%401443475665373_xl/Faouzi_Moussa.png", /// link for call to action
                                title: "Voir l'image"
                           	
                           	 },{
                                type: "web_url",
                                url: "https://www.linkedin.com/in/elias-bouricha-11b2b46/", /// link for call to action
                                title: "Voir Portfolio"
                            }]
                        }
                    ]
                    }
                }
            }
        }
    })
};

exports.sendAc = function(senderId, message, FACEBOOK_ACCESS_TOKEN){
    return request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token: FACEBOOK_ACCESS_TOKEN},
        method: 'POST',
        json: {
            recipient: {id: senderId},
            message: {
                attachment: {
                    type: "template",
                    payload: {
                        template_type: "generic",
                        elements: [
                            {
                            title: "Aymen Chakhari",
                            image_url: "https://media.licdn.com/media/AAEAAQAAAAAAAAmBAAAAJGYwNjZkN2Y3LTk2MzUtNDAxMC1hNTU5LWU2MWYxOTE4MWIxMg.jpg",
                            subtitle: "Data scientist chez Pentalog France",
                            buttons: [{
                            	type: "web_url",
                                url: "https://i1.rgstatic.net/ii/profile.image/AS%3A278771300093960%401443475665373_xl/Faouzi_Moussa.png", /// link for call to action
                                title: "Voir l'image"
                           	
                           	 },{
                                type: "web_url",
                                url: "https://www.linkedin.com/in/aymen-chakhari-4b9133107/", /// link for call to action
                                title: "Voir Portfolio"
                            }
                          ],
                        }
                    ]
                    }
                }
            }
        }
    })
};
exports.sendMa = function(senderId, message, FACEBOOK_ACCESS_TOKEN){
    return request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token: FACEBOOK_ACCESS_TOKEN},
        method: 'POST',
        json: {
            recipient: {id: senderId},
            message: {
                attachment: {
                    type: "template",
                    payload: {
                        template_type: "generic",
                        elements: [
                            {
                            title: "Majdi Ben Haj Ali",
                            image_url: "https://media.licdn.com/media/AAEAAQAAAAAAAAeYAAAAJGFmNzRmNjk0LTZhOWEtNGQ3My04ZTE1LTRjY2M2ODNhZjBmNQ.jpg",
                            subtitle: "Head of IT operations chez Oddo BHF Tunisie",
                            
                            buttons: [{
                            	type: "web_url",
                                url: "https://i1.rgstatic.net/ii/profile.image/AS%3A278771300093960%401443475665373_xl/Faouzi_Moussa.png", /// link for call to action
                                title: "Voir l'image"
                           	
                           	 },{
                                type: "web_url",
                                url: "https://www.linkedin.com/in/majdibenhajali/", /// link for call to action
                                title: "Voir Portfolio"
                            }]
                            }
                    ]
                    }
                }
            }
        }
    })
};

exports.sendMm = function(senderId, message, FACEBOOK_ACCESS_TOKEN){
    return request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token: FACEBOOK_ACCESS_TOKEN},
        method: 'POST',
        json: {
            recipient: {id: senderId},
            message: {
                attachment: {
                    type: "template",
                    payload: {
                        template_type: "generic",
                        elements: [
                            {
                            title: "Maledh Marrakchi",
                            image_url: "http://www.leaders.com.tn/uploads/FCK_files/image/maledhmarrakchi.jpg",
                            subtitle: "Professeur Associé auprès du ministère des TIC",
                            
                            buttons: [{
                            	type: "web_url",
                                url: "https://i1.rgstatic.net/ii/profile.image/AS%3A278771300093960%401443475665373_xl/Faouzi_Moussa.png", /// link for call to action
                                title: "Voir l'image"
                           	
                           	 },{
                                type: "web_url",
                                url: "https://www.linkedin.com/in/maledhmarrakchi/", /// link for call to action
                                title: "Voir Portfolio"
                            }
                          ]
                        }
                    ]
                    }
                }
            }
        }
    })
};

