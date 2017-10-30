var request = require('request');


exports.sendDevIt = function(senderId, message, FACEBOOK_ACCESS_TOKEN){
    return request({
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: {access_token: FACEBOOK_ACCESS_TOKEN},
    method: 'POST',
    json: {
        recipient: {id: senderId},message: {
            attachment: {
                type: "template",
                payload: {
                    template_type: "generic",
                    elements: [
                            {
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
                            {
                            title: "Talan",
                            image_url: "https://lh3.googleusercontent.com/-p_rprw-fzwy94wZ-WtbwuLlkvqzbrxO8rKlzaJkk2sliGIAsofzUtsZZgLHsTIWsO-WGozkN2dp16k=w1440-h755-rw",
                            subtitle: "Expert dans l’Accompagnement de la Transformation Agile",
                            
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
                        {
                            title: "TrustTic",
                            image_url: "https://lh3.googleusercontent.com/MCDiEofOCEd0jwL_K5m5wc7g1Z6Y8E1W6I4SANOA5P6p1gRnAgDZ1JEwdevZ7e3fBpI2cZsn0q0-_T0=w1366-h637-rw",
                            subtitle: "Découvrez Plus sur TrustTic",
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
                        {
                            title: "Tritux",
                            image_url: "https://lh5.googleusercontent.com/R_1N3qRt9p1RDlT53vZSqMHA3CsZDWgoJ5zNB1WTjmw1sxHWmDwgl6vTfhrvEa88-s_9ciKIMOTUPm0=w1440-h755-rw",
                            subtitle: "You Think it... We Do it",
                            
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
                        }]
                    }
                }
            }
        }
    })
};

exports.sendEmbarque = function(senderId, message,FACEBOOK_ACCESS_TOKEN){
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
                            title: "Sagemcom ",
                            image_url: "https://lh6.googleusercontent.com/VzDkPpNHDQeYA76BW4bNBX5VimjFTYXIVjrDXMZLZOmkE8B1JGpMINgqocIAWPsat9mLgnWoihcCQd0=w1366-h637-rw",
                            subtitle: "Découvrez Plus sur Sagemcom",
                            
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
                          ],
                        },
                    
                        {
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
                          ],
                        },
                        {
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
                          ],
                        },
                    
                    {
                            title: "Primatec",
                            image_url: "https://lh4.googleusercontent.com/yBLYg0UnHtWT75nuAlcws7NgLWjAfMn8KP7CBzJQUFmSprXUHmIzcPPNnYEQqH7q6qLEAIgpi0D50Sw=w1366-h637-rw",
                            subtitle: "Automotive Software Solutions",
                    
                            
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

exports.sendIaPred = function(senderId, message,FACEBOOK_ACCESS_TOKEN){
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
                        }, {
                            title: "Infor Predictix",
                            image_url: "https://lh6.googleusercontent.com/kImsZswwZ3S3ahutOrgudtUHKKK5vtC5vIfxoMJ21-Mg0ftPrJB5EyBy6_hWUyVF4JpeUCV4QrgbIT4=w1366-h588-rw",
                            subtitle: "Retail the way it should be.",
                            buttons: [ {
                                type: "postback",
                                title: "Description",
                                payload: "14",
                            },{
                                type: "web_url",
                                url: "https://www.facebook.com/InforTunisia/", /// link for call to action
                                title: "Consulter la Page Web"
                            },{
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

exports.sendTelecom = function(senderId, message,FACEBOOK_ACCESS_TOKEN){
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
                            title: "Sofrecom Tunisie",
                            image_url: "https://lh4.googleusercontent.com/urNIG2tD-qMKq4UzLPhpuWTRlv1ga41GA9ugspRqOMdp8T--mRhpquxpYWYGCxAW9Fes0CD-VOEwUvk=w1366-h637-rw",
                            subtitle: "The Know How Network",
                            buttons: [{
                                type: "postback",
                                title: "Description",
                                payload: "15",
                            },{
                                type: "web_url",
                                url: "http://www.sofrecom.com/fr/", /// link for call to action
                                title: "Consulter la Page Web"
                            },{
                                type: "postback",
                                title: "Voir Emplacement",
                                payload: "sofrecom",
                            }
                        ],
                }, {
                            title: "Orange",
                            image_url: "https://lh6.googleusercontent.com/ctI1FYiYkMxMzDRjp7H8d9COIGjBPc0-t3AIbF3Jl_ZWr9CjSqUUdz28ijGd_c_yskQwDXZttLSXdDo=w1366-h637-rw",
                            subtitle: "Découvrez nos Offres Mobiles et Internet",
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
exports.sendBI = function(senderId, message,FACEBOOK_ACCESS_TOKEN){
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

exports.sendFinance = function(senderId, message,FACEBOOK_ACCESS_TOKEN){
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
                        },{
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
                        },{
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
                        },
                        {
                            title: "AxeFinance",
                            subtitle: "Focus . Expertise . Value ",
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
                        },
                        {
                            title: "Vermeg",
                            subtitle: "Passionate to Deliver",
                            image_url: "https://lh5.googleusercontent.com/0CBsNczDIfu6wznj04O4iStAcjNjT-DsX8bSx2ULX3g8Or3IeUpYmpAP60GnaXe_I8ugLCegoYMhQAU=w1366-h662-rw",
                            buttons: [ {
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
                        },
                        {
                            title: "ATB",
                            subtitle: "Des Professionnels à l'Ecoute",
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
                        },
                        {
                            title: "NeoXam",
                            subtitle: "Committed To Success",
                            image_url: "https://lh6.googleusercontent.com/s-WskOQbU8W7JzzCgE0j_NeLpXSartq-j8f1_uUnlFdHdyXATJEMZMknFj6Kd9zsjEzX3Bvj9D00_zQ=w1366-h637-rw",
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
                        },
                        {
                            title: "Attijari Bank",
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
                        ]
                    }
                }
            }
        }
    })
}

exports.sendIndus = (senderId, message,FACEBOOK_ACCESS_TOKEN) =>{
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
                            {
                            title: "Integration Objects",
                            image_url: "https://lh5.googleusercontent.com/6JSxCgDGVQM9uvOdoqwVfSiaINN2oBpkrv2yiNVJV4mAYZMnF215p1baxQxxK5Alj0mbaCvLAt15bZo=w1440-h755-rw",
                            subtitle: "True Manufacturing Intelligence",
                            
                            buttons: [{
                                type: "postback",
                                title: "Description",
                                payload: "3",
                            },{
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
}