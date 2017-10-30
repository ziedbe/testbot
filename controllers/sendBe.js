var request = require('request');


exports.sendBe = function (senderId, result, FACEBOOK_ACCESS_TOKEN){
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
                            title: "Seif Dassi",
                            image_url: "http://ensi-junior-entreprise.com/images/team/1.jpg",
                            subtitle: "Président",
                            buttons: [{
                                type: "web_url",
                                url: "https://www.facebook.com/seifd", /// link for call to action
                                title: "Contacter Seif"
                            }
                          ],
                        },
                        {
                        	title: "Hassen Gahbiche",
                            image_url: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAA05AAAAJDdkMDRjYTYxLTliODMtNGQ4NS1iYzMzLWY0YzQxMDMyMWNiYQ.jpg",
                            subtitle: "Vice Président",
                            buttons: [{
                                type: "web_url",
                                url: "https://www.facebook.com/hassen.gahbiche.9", /// link for call to action
                                title: "Contacter Hassen"
                            }
                          ],
                        },
                        {
                            title: "Khaled Chekir",
                            image_url: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAjAAAAAJDk5MTA1MWMwLTMwY2UtNGM0ZC1hYmRjLWU3OGM4ZGIwMjNmNQ.jpg",
                            subtitle: "Secrétaire Général",
                            buttons: [{
                                type: "web_url",
                                url: "https://www.facebook.com/khaled.chekir", /// link for call to action
                                title: "Contacter Khaled"
                            }
                          ],
                        },
                        {
                            title: "Oussama Chaker",
                            image_url: "http://ensi-junior-entreprise.com/images/team/6.jpg",
                            subtitle: "Trésorier",
                            buttons: [{
                                type: "web_url",
                                url: "https://www.facebook.com/oussama.chaker1", /// link for call to action
                                title: "Contacter Oussama"
                            }
                          ],
                        },
                        {
                        	title: "Yosra Driwech",
                            image_url: "http://ensi-junior-entreprise.com/images/team/7.jpg",
                            subtitle: "Directrice des affaires internationales",
                            buttons: [{
                                type: "web_url",
                                url: "https://www.facebook.com/yosra.driwech", /// link for call to action
                                title: "Contacter Yosra"
                            }
                          ],
                        },
                        {
                        	title: "Ahmed Khanchouch",
                            image_url: "http://ensi-junior-entreprise.com/images/team/4.jpg",
                            subtitle: "Directeur des Opérations",
                            buttons: [{
                                type: "web_url",
                                url: "https://www.facebook.com/Zeuxs.Z", /// link for call to action
                                title: "Contacter Ahmed"
                            }
                          ],
                        },
                         {
                        	title: "Khalil Gorsane Mestiri",
                            image_url: "http://ensi-junior-entreprise.com/images/team/5.jpg",
                            subtitle: "Directeur Marketing",
                            buttons: [{
                                type: "web_url",
                                url: "https://www.facebook.com/profile.php?id=100009579290247", /// link for call to action
                                title: "Contacter Khalil"
                            }
                          ],
                        },
                        {
                            title: "Aziz Thabet",
                            image_url: "http://ensi-junior-entreprise.com/images/team/8.png",
                            subtitle: "Community Manager",
                            buttons: [{
                                type: "web_url",
                                url: "https://www.facebook.com/aziz.thabet", /// link for call to action
                                title: "Contacter Aziz"
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