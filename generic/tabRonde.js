var request = require('request');


exports.sendPanel = function (senderId, result, FACEBOOK_ACCESS_TOKEN){
	 request({
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
                            title: "Faouzi Moussa",
                            image_url: "https://i1.rgstatic.net/ii/profile.image/AS%3A278771300093960%401443475665373_xl/Faouzi_Moussa.png",
                            subtitle: "CEO chez Cybex Solutions, Chroniqueur chez RTCI et modérateur de la table ronde",
                            buttons: [{
                                type: "web_url",
                                url: "https://www.linkedin.com/in/faouzi-moussa-aa321a16/", /// link for call to action
                                title: "En Savoir Plus"
                            }
                          ],
                        },
                        {
                        	title: "Elias Bouricha",
                            image_url: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/8/000/2b0/3f8/1f75a8c.jpg",
                            subtitle: "CEO chez Cognira, ex Directeur Général chez Infor Predictix",
                            buttons: [{
                                type: "web_url",
                                url: "https://www.linkedin.com/in/elias-bouricha-11b2b46/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_top%3BFtrdXHv0RcWQQpeqB5%2FDkA%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_search_srp_top-search_srp_result&lici=z%2FcJtXQDQhSi85CzZlORnA%3D%3D", /// link for call to action
                                title: "En Savoir Plus"
                            }
                          ],
                        },
                        {
                        	title: "Majdi Ben Haj Ali",
                            image_url: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAeYAAAAJGFmNzRmNjk0LTZhOWEtNGQ3My04ZTE1LTRjY2M2ODNhZjBmNQ.jpg",
                            subtitle: "Head of IT operations chez Oddo BHF Tunisie",
                            buttons: [{
                                type: "web_url",
                                url: "https://www.linkedin.com/in/majdibenhajali/", /// link for call to action
                                title: "En Savoir Plus"
                            }
                          ],
                        },
                        {
                        	title: "Aymen Chakhari",
                            image_url: "https://revsquare.com/media/_versions/staff/aymenchakari-square_bio_thumbnail.jpg",
                            subtitle: "Data Scientist chez Pentalog France",
                            buttons: [{
                                type: "web_url",
                                url: "https://www.linkedin.com/in/aymen-chakhari-4b9133107/", /// link for call to action
                                title: "En Savoir Plus"
                            }
                          ],
                        },
                         {
                        	title: "Maledh Marrakchi",
                            image_url: "http://www.leaders.com.tn/uploads/FCK_files/image/maledhmarrakchi.jpg",
                            subtitle: "Professeur Associé auprès du ministère des TIC",
                            buttons: [{
                                type: "web_url",
                                url: "https://www.linkedin.com/in/maledhmarrakchi/", /// link for call to action
                                title: "En Savoir Plus"
                            }
                          ],
                        }
                        ]
                    }
                }
            }
        }
    })
}