var request = require('request');

exports.sendTrustTic = function(senderId, message,FACEBOOK_ACCESS_TOKEN){
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
                            title: "TrustTic",
                            image_url: "https://lh6.googleusercontent.com/7xJdAKOFISV6SnflKPhsI5XmsEjzwAQ-NkL_cZsZDqZPU_YPnPSyVF4s-QlnPsFZISIGLs6tQwy9tY0=w1440-h755-rw",
                            subtitle: "Découvrez plus sur TrustTic",
                            buttons: [{
                                type: "postback",
                                payload: "1",
                                title: "Description",
                            },
                            {
                                type: "web_url",
                                url: "https://fr.linkedin.com/company/trusttic", /// link for call to action
                                title: "Consulter la Page Web"
                            },
                            {
                                type: "postback",
                                payload: "trusttic",
                                title: "Emplacement",
                            }
                          ],
                        },
                          ]
                        }
                    }
                }
            }
        }
    )
};

exports.sendTalan = function(senderId, message,FACEBOOK_ACCESS_TOKEN){
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
                            title: "Talan",
                            image_url: "https://lh3.googleusercontent.com/-p_rprw-fzwy94wZ-WtbwuLlkvqzbrxO8rKlzaJkk2sliGIAsofzUtsZZgLHsTIWsO-WGozkN2dp16k=w1440-h755-rw",
                            subtitle: "Expert dans l’accompagnement de la transformation agile",
                            
                            buttons: [{
                                type: "postback",
                                title: "Description",
                                payload: "2"
                            },
                            {
                                type: "web_url",
                                url: "https://www.facebook.com/talan/", /// link for call to action
                                title: "Consulter la Page Web"                            },
                            {
                                type: "postback",
                                title: "Emplacement",
                                payload: "talan",
                            }
                          ]
                        },
                          ]
                        }
                    }
                }
            }
        }
    )
};


exports.sendIO = function(senderId, message,FACEBOOK_ACCESS_TOKEN){
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

                                        title: "integration objects",
                                        image_url: "https://lh5.googleusercontent.com/6JSxCgDGVQM9uvOdoqwVfSiaINN2oBpkrv2yiNVJV4mAYZMnF215p1baxQxxK5Alj0mbaCvLAt15bZo=w1440-h755-rw",
                                        subtitle: "True Manufacturing Intelligence",
                                        
                                        buttons: [{
                                            type: "postback",
                                            title: "Description",
                                            payload: "3",
                                        },
                                        {
                                            type: "web_url",
                                            url: "https://integrationobjects.com/", /// link for call to action
                                            title: "Consulter la Page Web"
                                        },
                                        {
                                            type: "postback",
                                            title: "Voir Emplacement",
                                            payload: "io",
                                                                    }
                                      ]
                                    }]
                                }
                            }
                        }
                    }
    })
};

exports.sendHLI = function(senderId, message,FACEBOOK_ACCESS_TOKEN){
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
                            title: "HLI",
                            image_url: "https://lh5.googleusercontent.com/sF0w17SeQN4837Gn94chJ9TbBB9tRTczBL8z1aJla6xKLaznqsMvLRrmK2M_4xnnyMdoh_gyFQ6DmXI=w1440-h755-rw",
                            subtitle: "Partenaire de vos projets informatiques & analytiques",
                            buttons: [
                            {
                            type: "postback",
                            title: "Description",
                            payload: "4",
                            },
                            {
                            type: "web_url",
                            url: "https://www.facebook.com/GroupeHLi/?fref=ts", /// link for call to action
                            title: "Consulter la Page Web"
                            }, 
                            {
                            type: "postback",
                            title: "Voir Emplacement",
                            payload: "hli",
                            }
                            ],
                            },
                       ]
                    }
                            }
                }
            }
        }
    )
};


exports.sendTritux = function(senderId, message,FACEBOOK_ACCESS_TOKEN){
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
                                title: "Tritux",
                                image_url: "https://lh5.googleusercontent.com/R_1N3qRt9p1RDlT53vZSqMHA3CsZDWgoJ5zNB1WTjmw1sxHWmDwgl6vTfhrvEa88-s_9ciKIMOTUPm0=w1440-h755-rw",
                                subtitle: " International editor for high added value solutions",
                                
                                buttons: [{
                                    type: "postback",
                                    title: "Description",
                                    payload: "5",
                                },
                                {
                                    type: "web_url",
                                    url: "http://www.tritux.com/", /// link for call to action
                                    title: "Consulter la Page Web"
                                },
                                {
                                    type: "postback",
                                    title: "Voir Emplacement",
                                    payload: "tritux",
                                }
                              ],
                            },
                              ]
                            }
                        }
                    }
                }
            }
    )
};

exports.sendGenericMessageSagemcom = function(senderId, message,FACEBOOK_ACCESS_TOKEN){
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
                            title: "Sagemcom",
                            image_url: "https://lh6.googleusercontent.com/VzDkPpNHDQeYA76BW4bNBX5VimjFTYXIVjrDXMZLZOmkE8B1JGpMINgqocIAWPsat9mLgnWoihcCQd0=w1366-h637-rw",
                            subtitle: "decouvrez plus sur sagemcom",
                            
                            buttons: [{
                                type: "postback",
                                title: "Description",
                                payload: "paySagem",
                            },
                            {
                                type: "web_url",
                                url: "https://www.facebook.com/SagemcomSoftwareetTechnologies/?hc_ref=ARTtf0uOMg-_2lgsRTazpXmcm9r68bpfasJfvgDG9-u3nv7zSbKdBr3woCyUqd1zFs8", /// link for call to action
                                title: "Consulter la Page Web"
                            },
                            {
                                type: "postback",
                                title: "Voir Emplacement",
                                payload: "sagem",
                            }
                        ]
                    }]    
                    }
                }
            }
        }
    })
};

exports.sendGenericMessagefocus = function(senderId, message,FACEBOOK_ACCESS_TOKEN){
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
                            title: "Focus Corp",
                            image_url: "https://lh4.googleusercontent.com/LUoBiWq9z2pLQYmSTkjNVehGy7xTMv0M5GWPfBIu0b65bAI54hEltol5nJb7Uh-OoNFMfxY1ef-rKKM=w1366-h637-rw",
                            subtitle: "Your Trusted IT Partner",
                            
                            buttons: [{
                                type: "postback",
                                title: "Description",
                                payload: "6",
                            },
                            {
                                type: "web_url",
                                url: "https://www.facebook.com/FocusCorporationIT/?hc_ref=ARSD3UdMI5w3QmSyySfxmzc8Y2E4AwiJ8IfvWBUrw-SqkPKItJ7oNOvuTKp85uoajwE", /// link for call to action
                                title: "Consulter la Page Web"
                            },
                            {
                                type: "postback",
                                title: "Voir Emplacement",
                                payload: "focus",
                            }
                        ]
                    }]    
                    }
                }
            }
        }
    })
};
exports.sendGenericMessageArdia = function(senderId, message,FACEBOOK_ACCESS_TOKEN){
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
                            title: "Ardia",
                            image_url: "https://lh5.googleusercontent.com/7WMQupvke_NGFGY08uoIUfoRcSb71vzRNp4MqePqX_0CfuUMW-JCeQh5kmNiz0VuMLyuWlmS894DnrQ=w1366-h637-rw",
                            subtitle: "Découvrez plus sur Ardia",
                            
                            buttons: [{
                                type: "postback",
                                title: "Description",
                                payload: "7",
                            },
                            {
                                type: "web_url",
                                url: "http://www.ardia.com.tn/", /// link for call to action
                                title: "Consulter la Page Web"
                            },
                            {
                                type: "postback",
                                title: "Voir Emplacement",
                                payload: "ardia",
                            }
                        ]
                    }]    
                    }
                }
            }
        }
    })
};
exports.sendGenericMessagePrimatec = function(senderId, message,FACEBOOK_ACCESS_TOKEN){
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
                            title: "Primatec",
                            image_url: "https://lh4.googleusercontent.com/yBLYg0UnHtWT75nuAlcws7NgLWjAfMn8KP7CBzJQUFmSprXUHmIzcPPNnYEQqH7q6qLEAIgpi0D50Sw=w1366-h637-rw",
                            subtitle: "Automotive software solutions",
                            
                            buttons: [{
                                type: "postback",
                                title: "Description",
                                payload: "8",
                            },
                            {
                                type: "web_url",
                                url: "http://www.primatec.tn/", /// link for call to action
                                title: "Consulter la Page Web"
                            },
                            {
                                type: "postback",
                                title: "Voir Emplacement",
                                payload: "primatec",
                            }
                        ]
                    }]    
                    }
                }
            }
        }
    })
};

exports.sendGenericMessageLinedata = function(senderId, message,FACEBOOK_ACCESS_TOKEN){
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
                            title: "Linedata",
                            image_url: "https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAdPAAAAJDNjZTdmMjFiLTBmODUtNDE5NC05NTQzLTllN2UxYTZkYjM4YQ.jpg",
                            subtitle: "Empowering Financial Services to Deliver the Future",
                            buttons: [ {
                                type: "postback",
                                title: "Description",
                                payload: "9",
                            },{
                                type: "web_url",
                                url: "http://fr.linedata.com/", /// link for call to action
                                title: "Consulter la Page Web"
                            },
                              {
                                type: "postback",
                                title: "Voir Emplacement",
                                payload: "linedata",
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

exports.sendGenericMessageFIS = function(senderId, message,FACEBOOK_ACCESS_TOKEN){
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
                            title: "FIS",
                            image_url: "https://lh6.googleusercontent.com/5lXcEbv2uHIT61ymSup4quy9SOQB2PHzO2IDSxoI2PnN6hTCoD3gVmrbJlBg0E9VUsl05M5skc_7eYI=w1366-h637-rw",
                            subtitle: "Emporing the Financial World",
                            buttons: [{
                                type: "postback",
                                title: "Description",
                                payload: "10",
                            },{
                                type: "web_url",
                                url: "https://www.facebook.com/FIStoday/", /// link for call to action
                                title: "Consulter la Page Web"
                            }, 
                              {
                                type: "postback",
                                title: "Voir Emplacement",
                                payload: "fis",
                            }
                          ],
                        }]
                    }
                }
            }
        }
    })
}

exports.sendGenericMessageOddo = function(senderId, message,FACEBOOK_ACCESS_TOKEN){
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
                            title: "ODDO BHF",
                            image_url: "https://lh6.googleusercontent.com/5Y2hoiDgQzAMtIVEq8Gdc4cNAOscsAflmB69nSBFqoQX4AHa4yPq8p51Auy8u-2ns5V_vA0oNTrTUDo=w1366-h637-rw",
                            subtitle: "La Finance au Service de vos Ambitions",
                            buttons: [{
                                type: "postback",
                                title:"Description",
                                payload: "11",
                            },{
                                type: "web_url",
                                url: "http://www.oddo.eu/#!home/fr", /// link for call to action
                                title: "Consulter la Page Web"
                            }, 
                              {
                                type: "postback",
                                title: "Voir Emplacement",
                                payload: "oddo",
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

exports.sendGenericMessageCognira = function(senderId, message,FACEBOOK_ACCESS_TOKEN){
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
                            title: "Cognira",
                            image_url: "https://lh6.googleusercontent.com/jX2zLc0K-d6f_-SWOvDREtnxf4Kc9irMRj8CQLsYcNljIu9uexeI8YJapcyySo-KAfGwHMLQgTT4YNM=w1366-h637-rw",
                            subtitle: "Retail Analytics. Simplified.",
                            buttons: [{
                                type: "postback",
                                title: "Description",
                                payload: "12",
                            },{
                                type: "web_url",
                                url: "https://www.cognira.com/", /// link for call to action
                                title: "Consulter la Page Web"
                            },{
                                type: "postback",
                                title: "Voir Emplacement",
                                payload: "cognira",
                            }
                        ],
                }, ]
                }
            }
        }
    }
})
}


exports.sendGenericMessageOrange = function(senderId, message,FACEBOOK_ACCESS_TOKEN){
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
                         
                            title: "Orange",
                            image_url: "https://lh6.googleusercontent.com/ctI1FYiYkMxMzDRjp7H8d9COIGjBPc0-t3AIbF3Jl_ZWr9CjSqUUdz28ijGd_c_yskQwDXZttLSXdDo=w1366-h637-rw",
                            subtitle: " Découvrez nos offres mobiles et internet",
                            buttons: [{
                                type: "postback",
                                title: "Description",
                                payload: "13",
                            },{
                                type: "web_url",
                                url: "https://www.facebook.com/orange.tn/?brand_redir=131619693520002", /// link for call to action
                                title: "Consulter la Page Web"
                        }, 
                            {
                                type: "postback",
                                title: "Voir Emplacement",
                                payload: "orange",
                            }
                        ],
                         }]
                     }
                }
            }
        }
    })
}



exports.sendGenericMessageInforPredictix = function(senderId, message,FACEBOOK_ACCESS_TOKEN){
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
                            title: "Infor Predictix",
                            image_url: "https://lh6.googleusercontent.com/kImsZswwZ3S3ahutOrgudtUHKKK5vtC5vIfxoMJ21-Mg0ftPrJB5EyBy6_hWUyVF4JpeUCV4QrgbIT4=w1366-h588-rw",
                            subtitle: "Retail the way it should be",
                            buttons: [{
                                type: "postback",
                                title: "Description",
                                payload: "14",
                            },{
                                type: "web_url",
                                url: "https://www.facebook.com/InforTunisia/", /// link for call to action
                                title: "Consulter la Page Web"
                        }, 
                            {
                                type: "postback",
                                title: "Voir Emplacement",
                                payload: "infor",
                            }
                        ],
                    }]
                }
            }
        }
    }
    })
}


exports.sendGenericMessageSofrecomTunisie = function(senderId, message,FACEBOOK_ACCESS_TOKEN){
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
                            title: "Sofrecom Tunisie",
                            image_url: "https://lh4.googleusercontent.com/urNIG2tD-qMKq4UzLPhpuWTRlv1ga41GA9ugspRqOMdp8T--mRhpquxpYWYGCxAW9Fes0CD-VOEwUvk=w1366-h637-rw",
                            subtitle: "the Know How Network",
                            buttons: [{
                                type: "postback",
                                title: "Description",
                                payload: "15",
                            },{
                                type: "web_url",
                                url: "http://www.sofrecom.com/fr/", /// link for call to action
                                title: "Consulter la Page Web"
                        }, 
                            {
                                type: "postback",
                                title: "Voir Emplacement",
                                payload: "sofrecom",
                            }
                        ],
                    }]
                }
            }
        }
    }
    })
}
exports.sendGenericMessageSymathique = function(senderId, message,FACEBOOK_ACCESS_TOKEN){
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
                            title: "Symathique",
                            image_url: "blabla.jpg",
                            subtitle: "Soutenir Votre Croissance",
                            buttons: [{
                                type: "postback",
                                title: "Description",
                                payload: "24",
                            },{
                                type: "web_url",
                                url: "http://www.symatique.com/", /// link for call to action
                                title: "Consulter la Page Web"
                        }, 
                            {
                                type: "postback",
                                title: "Voir Emplacement",
                                payload: "symathique",
                            }
                        ],
                    }]
                }
            }
        }
    }
    })
}

exports.sendGenericMessageExpensya = function(senderId, message,FACEBOOK_ACCESS_TOKEN){
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
                            title: "Expensya",
                            image_url: "blabla.jpg",
                            subtitle: "EXPENSE MANAGEMENT OF TOMORROW, TODAY!",
                            buttons: [{
                                type: "postback",
                                title: "Description",
                                payload: "23",
                            },{
                                type: "web_url",
                                url: "https://www.expensya.com/fr", /// link for call to action
                                title: "Consulter la Page Web"
                        }, 
                            {
                                type: "postback",
                                title: "Voir Emplacement",
                                payload: "expensya",
                            }
                        ],
                    }]
                }
            }
        }
    }
    })
}
exports.sendGenericMessageVistaprint = function(senderId, message,FACEBOOK_ACCESS_TOKEN){
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
                            title: "Vistaprint",
                            image_url: "https://lh3.googleusercontent.com/sSbmVS4ZaYf2M2E38DZ1cWN4gmgdpNZTJMuIgNAuB3_T127XV6WykxwMx51mfq5nOYh6DoExKIHw2HQ=w1366-h637-rw",
                            subtitle: "Everything you create matters. Everything to market your business. Best printing. Best price. ",
                            buttons: [
                            {
                            type: "postback",
                            title: "Description",
                            payload: "22",
                            },
                            {
                            type: "web_url",
                            url: "https://www.vistaprint.fr/", /// link for call to action
                            title: "Consulter la Page Web"
                            },
                            {
                            type: "postback",
                            title: "Voir Emplacement",
                            payload: "vistaprint",
                            }
                            ],
                        },
                        ]
                    }
                }
            }
        }
    })
}
exports.sendGenericMessageSwib = function(senderId, message,FACEBOOK_ACCESS_TOKEN){
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
                            title: "Swib Info",
                            image_url: "blabla.jpg",
                            subtitle: "Innovation, Efficacité et Engagement",
                            buttons: [{
                                type: "postback",
                                title: "Description",
                                payload: "23",
                            },{
                                type: "web_url",
                                url: "https://www.expensya.com/fr", /// link for call to action
                                title: "Consulter la Page Web"
                        }, 
                            {
                                type: "postback",
                                title: "Voir Emplacement",
                                payload: "swib",
                            }
                        ],
                    }]
                }
            }
        }
    }
    })
}
exports.sendGenericMessageBI = function(senderId, message,FACEBOOK_ACCESS_TOKEN){
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
                            title: "Business & Decision",
                            image_url: "https://lh4.googleusercontent.com/NClQ1OPSDy4xQ3tjnj-4WYTMeRP8frdE7_VNVlxuq6bG4QDfDZJZ9mbU019DV2slA_kFLsTl5LQ2Qy8=w1366-h662-rw",
                            subtitle: "Expert de la Data depuis 1992",
                            buttons: [
                            {
                                type: "postback",
                                title: "Description",
                                payload: "21",
                            },
                            {
                                type: "web_url",
                                url: "http://www.businessdecision.tn/", /// link for call to action
                                title: "Consulter la Page Web"
                            }, 
                              {
                                type: "postback",
                                title: "Voir Emplacement",
                                payload: "BD",
                            }
                          ],
                        }]
                    }
                }
            }
        }
    })
}

exports.sendGenericMessageSofrecomTunisie = function(senderId, message,FACEBOOK_ACCESS_TOKEN){
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
                            title: "Sofrecom Tunisie",
                            image_url: "https://lh4.googleusercontent.com/urNIG2tD-qMKq4UzLPhpuWTRlv1ga41GA9ugspRqOMdp8T--mRhpquxpYWYGCxAW9Fes0CD-VOEwUvk=w1366-h637-rw",
                            subtitle: "the Know How Network",
                            buttons: [{
                                type: "postback",
                                title: "Description",
                                payload: "paySofrecom",
                            },{
                                type: "web_url",
                                url: "http://www.sofrecom.com/fr/", /// link for call to action
                                title: "Consulter la Page Web"
                        }, 
                            {
                                type: "postback",
                                title: "Voir Emplacement",
                                payload: "sofrecom",
                            }
                        ],
                    }]
                }
            }
        }
    }
    })
}


exports.sendGenericMessageAxeFinance = function(senderId, message,FACEBOOK_ACCESS_TOKEN){
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
                            title: "AxeFinance",
                            subtitle: "Focus . Expertise . Value",
                            image_url: "https://lh3.googleusercontent.com/7Yvax4sxx1-Z0wBkwGF7b7v7uJrEJG5uvJrnxxJBPMjT7mFnL2Fy_cMpzL2WBy6kXzYLqaO8E9hVQWQ=w1366-h662-rw",
                            buttons: [ {
                                type: "postback",
                                title: "Description",
                                payload: "16",
                            },
                            {
                                type: "web_url",
                                url: "http://www.axefinance.com", 
                                title: "Consulter la Page Web"
                            },
                              {
                                type: "postback",
                                title: "Voir Emplacement",
                                payload: "axe",
                            }
                          ],
                        }
                        
                        ]}
                    }
                }
            }
        }
    );
};

exports.sendGenericMessageVermeg = function(senderId, message,FACEBOOK_ACCESS_TOKEN){
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
                            title: "Vermeg",
                            subtitle: "Passionate To Deliver",
                            image_url: "https://lh5.googleusercontent.com/0CBsNczDIfu6wznj04O4iStAcjNjT-DsX8bSx2ULX3g8Or3IeUpYmpAP60GnaXe_I8ugLCegoYMhQAU=w1366-h662-rw",
                            buttons: [{
                                type: "postback",
                                title: "Description",
                                payload: "17",
                            },
                            {
                                type: "web_url",
                                url: "https://www.vermeg.com/", 
                                title: "Consulter la Page Web"
                            },
                              {
                                type: "postback",
                                title: "Voir Emplacement",
                                payload: "vermeg",
                            }
                          ],
                        }
                        ]}
                    }
                }
            }
        }
    );
};


exports.sendGenericMessageATB = function(senderId, message,FACEBOOK_ACCESS_TOKEN){
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
                            title: "ATB",
                            subtitle: "Des professionnels à l'écoute",
                            image_url: "https://lh4.googleusercontent.com/wU8PAdJDItz3hUENWIVybMerp_Ahax0nAnHDrEzmrgIna-I8GRheljdSpKfDZLM5svl_IfVLLEQVhEM=w1366-h662-rw",
                            buttons: [{
                                type: "postback",
                                title: "Description",
                                payload: "18",
                            },
                            {
                                type: "web_url",
                                url: "www.atb.com.tn", 
                                title: "Consulter la Page Web"
                            },
                              {
                                type: "postback",
                                title: "Voir Emplacement",
                                payload: "atb",
                            }
                          ],
                        }
                        
                        ]}
                    }
                }
            }
        }
    );
};

exports.sendGenericMessageAttijari = function(senderId, message,FACEBOOK_ACCESS_TOKEN){
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
                            title: "Attijari",
                            subtitle: "Croire En Vous",
                            image_url: "https://lh4.googleusercontent.com/S_IaSJBO-c3pwsh5LpDA7prIeDw81aEsMpZS6zWWxH-3sXauHJ0YymD7QUcHFIOhGMG5rZxH-flvE8g=w1366-h662-rw",
                            buttons: [{
                                type: "postback",
                                title: "Description",
                                payload: "19",
                            },
                            {
                                type: "web_url",
                                url: "http://www.attijaribank.com.tn", 
                                title: "Consulter la Page Web"
                            }, 
                              {
                                type: "postback",
                                title: "Voir Emplacement",
                                payload: "tijeri",
                            }
                          ],
                        }
                        
                        ]}
                    }
                }
            }
        }
    );
};
  
   exports.sendGenericMessageNeoXam = function(senderId, message,FACEBOOK_ACCESS_TOKEN){
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
                            title: "Neoxam",
                            subtitle: "Committed To Success",
                            image_url: "",
                            buttons: [{
                                type: "postback",
                                title: "Description",
                                payload: "20",
                            },
                            {
                                type: "web_url",
                                url: "www.neoxam.com", 
                                title: "Consulter la Page Web"
                            },
                              {
                                type: "postback",
                                title: "Voir Emplacement",
                                payload: "neoxam",
                            }
                          ],
                        }
                        
                        ]}
                    }
                }
            }
        }
    );
};
