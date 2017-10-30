const API_AI_TOKEN = 'aa261308d9724dbfb4b588bd082b3ede';
const FACEBOOK_ACCESS_TOKEN = 'EAAB1oLuChvIBAP01vKZCSzCxZASQ55c6Agoz8rT3FJwRqy7I6pYEmGAzmx48AJFHSgq13m0dCfZAxQIGJjQog7MGqfnCc49Q9zZA9mLL8ZBkPjXSCIwNZBngk1Qv3f8IbkThuo7N8e3SWMuzTmk4C22DL2qLreIsCEGvTRrfLYhFZArOm2wMjx8';
const request = require('request');
const qr = require('../quick_repliers/quick_replies');
const apiAiClient = require('apiai')(API_AI_TOKEN);
const tab = require('../generic/tabRonde');
const sendFm = require('../controllers/sendSpecInv');
const postbacks = require('../controllers/postbacks');
const cat = require('../controllers/sendCateg');
const domain = require('../controllers/sendByDomain');
const ent = require('../controllers/sendEnt');
const be = require('../controllers/sendBe');

const sendTextMessage = (senderId, text) => {
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: { access_token: FACEBOOK_ACCESS_TOKEN },
        method: 'POST',
        json: {
            recipient: { id: senderId },
            message: { text },
        }
    });
};

/*
const sendGenericMessage = (senderId, message) =>{
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
                        elements: [{
                            title: "SagemCom",
                            image_url: "http://logonoid.com/images/sagemcom-logo.jpg",
                            subtitle: "Petite Description(Salma)",
                            buttons: [
                             {
                                type: "postback",
                                title: "Description",
                                payload: "Payload for first element in a generic bubble",
                            },
                            {
                                type: "web_url",
                                url: "http://esq.h-cdn.co/assets/16/31/1470411971-weekend-sneakers-2.jpg", /// link for call to action
                                title: "Consulter la Page Web"
                            },
                              {
                                type: "postback",
                                title: "Voir Emplacement",
                                payload: "Payload for first element in a generic bubble",
                            }
                          ],
                        }, {
                            title: "Talan",
                            image_url: "https://www.talan.com/wp-content/uploads/2014/12/logo-talan-new.png",
                            subtitle: "Petite Description(Salma)",
                            
                            buttons: [{
                                type: "web_url",
                                url: "http://esq.h-cdn.co/assets/16/31/1470411971-weekend-sneakers-2.jpg", /// link for call to action
                                title: "Consulter la Page Web"
                            }, {
                                type: "postback",
                                title: "Voir Offres",
                                payload: "Payload for first element in a generic bubble",
                            },
                              {
                                type: "postback",
                                title: "Voir Emplacement",
                                payload: "Payload for first element in a generic bubble",
                            }
                          ],
                        }]
                    }
                }
            }
        }
    })
}
const sendImage = (senderId, message) => {
    request({
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
    });
}
*/


   
module.exports = (event) => {
    const senderId = event.sender.id;

    if (event.postback) {
        console.log("legend");
        postback = event.postback.payload;
        console.log(postback);
        postbacks.findPostback(senderId,event,postback);
    }
    else if (event.message) {
        const message = event.message.text;

        const apiaiSession = apiAiClient.textRequest(message, {sessionId: 'botcube_co'});

        apiaiSession.on('response', (response) => {
        const result = response.result.fulfillment.speech;

        if ( response.result.metadata.intentName === 'Default Welcome Intent'){         
            // request({
            //     url: "https://graph.facebook.com/v2.6/" + senderId,
            //     qs: {
            //         access_token: FACEBOOK_ACCESS_TOKEN,
            //         fields: "first_name, last_name"
            //         },
            //     method: "GET"
            // }, function(error, response, body) {
            //     var greeting = "";
            //         if (error) {
            //             console.log("Error getting user's name: " +  error);
            //         } else {
            //             var bodyObj = JSON.parse(body);
            //             console.log(bodyObj);
            //             console.log('ok')
            //             name = bodyObj.first_name +' '+bodyObj.last_name;
            //             greeting = "Bonjour " + name + "👋🏻😊 \n ";
            //         }
            //     var message = greeting + "Je suis le bot de la Junior ENSI. Je vous aiderai à vous renseigner sur le forum annuel qu'on organise! Vous pouvez commencer par choisir l'une de ces options 😁";
            //     sendTextMessage(senderId, message);
            //     });
            // console.log('quick');
            qr.sendQr(senderId, message, result, FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'bex'){
            sendTextMessage(senderId,result);
            be.sendBe(senderId, result, FACEBOOK_ACCESS_TOKEN)
        }
        else if (response.result.metadata.intentName === 'rubrique forum') {
            qr.sendQrForum(senderId, message, result, FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'Table Ronde'){
            sendTextMessage(senderId, result);
            tab.sendPanel(senderId, result, FACEBOOK_ACCESS_TOKEN); 
        }
        else if (response.result.metadata.intentName === 'Intervenants'){
            tab.sendPanel(senderId, result, FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'Moussa'){
            sendFm.sendFm(senderId, message, FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'Elias Bouricha'){
            sendFm.sendEb(senderId, message, FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'Aymen Chakhari'){
            sendFm.sendAc(senderId, message, FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'Majdi Ben Haj Ali'){
            sendFm.sendMa(senderId, message, FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'Maledh Marrakchi'){
            sendFm.sendMm(senderId, message, FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'Entreprises'){
            //sendTextMessage(senderId, result);
            qr.sendQrEnt(senderId, message, result, FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'Parrains'){
            cat.sendParrains(senderId, message,FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'Partenaires'){
            cat.sendPartenaires(senderId, message,FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'Collaborateurs'){
            cat.sendCollaborateurs(senderId,message,FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'devit'){
            domain.sendDevIt(senderId, message, FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'Embarqué'){
            domain.sendEmbarque(senderId, message, FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'IAPredict'){
            domain.sendIaPred(senderId, message, FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'Telecom'){
            domain.sendTelecom(senderId, message, FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'BI'){
            domain.sendBI(senderId, message, FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'Finance'){
            sendTextMessage(senderId, 'Les entreprise qui oprènt dans le secteur Banque, Finance et Assurance');
            domain.sendFinance(senderId, message, FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'indus'){
            domain.sendIndus(senderId, message, FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'Cognira'){
             sendTextMessage(senderId, result);
             ent.sendGenericMessageCognira(senderId, message,FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'Orange'){
             sendTextMessage(senderId, result);
             ent.sendGenericMessageOrange(senderId, message,FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'Sofrecom'){
             sendTextMessage(senderId, result);
             ent.sendGenericMessageSofrecomTunisie(senderId, message,FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'Infor Predictix'){
             sendTextMessage(senderId, result);
             ent.sendGenericMessageInforPredictix(senderId, message,FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'AxeFinance'){
             sendTextMessage(senderId, result);
             ent.sendGenericMessageAxeFinance(senderId, message,FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'Vermeg'){
             sendTextMessage(senderId, result);
             ent.sendGenericMessageVermeg(senderId, message,FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'NeoXam'){
             sendTextMessage(senderId, result);
             ent.sendGenericMessageNeoXam(senderId, message,FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'ATB'){
             sendTextMessage(senderId, result);
             ent.sendGenericMessageATB(senderId, message,FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'Talan'){
             sendTextMessage(senderId, result);
             ent.sendTalan(senderId, message,FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'IO'){
             sendTextMessage(senderId, result);
             ent.sendGenericMessageIO(senderId, message,FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'Tritux'){
             sendTextMessage(senderId, result);
             ent.sendTritux(senderId, message,FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'Symathique'){
            ent.sendGenericMessageSymathique(senderId, message,FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'Expensya'){
            ent.sendGenericMessageExpensya(senderId, message,FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'Vistaprint'){
            ent.sendGenericMessageVistaprint(senderId, message,FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'Swib'){
            ent.sendGenericMessageSwib(senderId, message,FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'BI'){
            ent.sendGenericMessageBI(senderId, message,FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'TrustTIC'){
             sendTextMessage(senderId, result);
             ent.sendGenericMessageTrustTic(senderId, message,FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'HLI'){
             sendTextMessage(senderId, result);
             ent.sendGenericMessageHLI(senderId, message,FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'Linedata'){
             sendTextMessage(senderId, result);
             ent.sendGenericMessageLinedata(senderId, message,FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'FIS'){
             sendTextMessage(senderId, result);
             ent.sendGenericMessageFIS(senderId, message,FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'Oddo'){
             sendTextMessage(senderId, result);
             ent.sendGenericMessageOddo(senderId, message,FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'Ardia'){
             sendTextMessage(senderId, result);
             ent.sendGenericMessageArdia(senderId, message,FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'focus'){
             sendTextMessage(senderId, result);
             ent.sendGenericMessagefocus(senderId, message,FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'Primatec'){
             sendTextMessage(senderId, result);
             ent.sendGenericMessagePrimatec(senderId, message,FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'sagemcom'){
             sendTextMessage(senderId, result);
             ent.sendGenericMessageSagemcom(senderId, message,FACEBOOK_ACCESS_TOKEN);
        }
        else if (response.result.metadata.intentName === 'Attijari'){
             sendTextMessage(senderId, result);
             ent.sendGenericMessageAttijari(senderId, message,FACEBOOK_ACCESS_TOKEN);
        }
        else {
            sendTextMessage(senderId, result);
        }


         });

         apiaiSession.on('error', error => console.log(error));
        apiaiSession.end();
    }
};
