exports.entDomain = function (senderId, result, FACEBOOK_ACCESS_TOKEN) {
    var generic = {
        "text" : null,
        "card" : null
    }
    var card = {
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
                        elements: []

                    }
                }
            }
        }
    }
    for(var i = 0; i< 10 ; i++){
        var gen = {
            title: result.data[i].name,
            subtitle: "Découvrez plus sur "+ result.data[i].name,
            image_url: result.data[i].images[0],
            buttons: [{
                type: "web_url",
                url: result.data[i].images[0],
                title: "Show image"
            }, {
                type: "postback",
                title: "Add to card",
                payload: "Payload for first element in a generic bubble",
            }]
        };
        generic.text = "Found it, here is the product you asked for :D , with some similar products";
        card.json.message.attachment.payload.elements.push(gen);
    }
    generic.card = card;
    return generic;
}
