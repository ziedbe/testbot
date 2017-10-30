var request = require('request');
const API_AI_TOKEN = 'aa261308d9724dbfb4b588bd082b3ede';
const FACEBOOK_ACCESS_TOKEN = 'EAAB1oLuChvIBAP01vKZCSzCxZASQ55c6Agoz8rT3FJwRqy7I6pYEmGAzmx48AJFHSgq13m0dCfZAxQIGJjQog7MGqfnCc49Q9zZA9mLL8ZBkPjXSCIwNZBngk1Qv3f8IbkThuo7N8e3SWMuzTmk4C22DL2qLreIsCEGvTRrfLYhFZArOm2wMjx8';
const desc = require('./sendDesc')


exports.findPostback = function(senderId,event,postback){


	var str = event.postback.payload;
	
	if (str === "sagem") {
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
                         url:"https://lh4.googleusercontent.com/yqJ9W_Z-Vs4_ZqSMQ2JI7sWlu5iBqWsMgwJxN2X8acdjwt3qyUKtxGYM6a6cXuDogsiZYflSVONeUa0=w1366-h677-rw", 
                         is_reusable:true
                         }
                 }
            }
        }
    });
	}		
	else if (str === "focus") {
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
                         url:"https://lh4.googleusercontent.com/lGlWlcHkTU4-c45xBTzkYP3jjIz27pwOC2hC4KcbOMdrxQ9MoOA9xkXgkVns3y68TvrD9e48LqZvYOI=w1366-h677-rw", 
                         is_reusable:true
                         }
                 }
            }
        }
    });
	}

	else if (str === "trustic") {
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
                         url:"https://lh5.googleusercontent.com/E1cDsRmL-WUt2B98K49RpfhfJ9g_IL0DHVBW9bBAFRUmDCW2TuzyVUy4v3gIC9UY3PqWdLpthXMTsAI=w1366-h677-rw", 
                         is_reusable:true
                         }
                 }
            }
        }
    });
	}
	else if (str === "talan") {
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
                         url:"https://lh3.googleusercontent.com/woSumBAdmbF-MqkQb7kV3O26QPoA2vHkJ9JiEsYOsJuwJ1tezs_VVAYsXbzL_mqBd0bLFRa6i9svsLo=w1366-h677-rw", 
                         is_reusable:true
                         }
                 }
            }
        }
    });
	}
	else if (str === "io") {
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
                         url:"https://lh3.googleusercontent.com/33ohboN0jjdBV03E_c7Lqmm7qW42R9Qm6D_6X3_-VnpnglXFlHK3VBmJTqQMcMfyDbTb6vS1abuc9WM=w1366-h677-rw", 
                         is_reusable:true
                         }
                 }
            }
        }
    });
	}
	else if (str === "hli") {
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
                         url:"https://lh5.googleusercontent.com/AxtJ9vVUOn-Ai6d-802_w5tm-6YKpsxgCzhF5RScwYPTsYkt6EePysfYa9cCcp0Z3SBYQLDpuFyVGJI=w1366-h677-rw", 
                         is_reusable:true
                         }
                 }
            }
        }
    });
	}
	else if (str === "tritux") {
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
                         url:"https://lh6.googleusercontent.com/P77wxEsrtF5oe3ZW9Pyg_t4oB8Ii4iZJ2zGiEYDOSNX1s2iT-81EHWPrgv94iA314zIDBlMcUyWaJ88=w1366-h677-rw", 
                         is_reusable:true
                         }
                 }
            }
        }
    });
	}
	else if (str === "ardia") {
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
                         url:"https://lh4.googleusercontent.com/-2qjAFgVRw_Kcs0vjBtZ8aKiQmWCyiEiisA6DKHpAMz4ZgZqiyaqFQ2B53HLnWST6RiJNVlUttlMMHM=w1366-h677-rw", 
                         is_reusable:true
                         }
                 }
            }
        }
    });
	}
	else if (str === "primatec") {
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
                         url:"https://lh3.googleusercontent.com/j2BiEud4ARElbQlz0RBHplfHhL0ogRXQGOFfhY-c6UZGaKx-NMKeNIYw_F02pZ2EucCfpjcdZAmuPvU=w1366-h677-rw", 
                         is_reusable:true
                         }
                 }
            }
        }
    });
	}
	else if (str === "linedata") {
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
                         url:"https://lh6.googleusercontent.com/U2-tMmDdAeF4r5VOIFfWrRGYKw_9cxEBghWLrg9A50_Wo3btgUHA7nwzBuszKicFo8hdzEzv1Q0CLZY=w1366-h677-rw", 
                         is_reusable:true
                         }
                 }
            }
        }
    });
	}
	else if (str === "fis") {
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
                         url:"https://lh5.googleusercontent.com/8yP_ora3TH6wIbj5HxZw026kh_OI6NEfosH1YclTMSRFd7O4iYcwX4jHNThFi7dBJyJnhqb9Z9lPhNc=w1366-h677-rw", 
                         is_reusable:true
                         }
                 }
            }
        }
    });
	}
	else if (str === "oddo") {
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
                         url:"https://lh4.googleusercontent.com/Ffe-3jz7xTOO2cUBLi3l_vLfDngmgCp-UtWIxjDV7jI2zMPJZKh5LniRxvPB3i0vi15FmjLpMa7muTg=w1366-h677-rw", 
                         is_reusable:true
                         }
                 }
            }
        }
    });
	}
	else if (str === "cognira") {
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
                         url:"https://lh5.googleusercontent.com/RIGt0RMUiCQVnV8Vn5hhBktsz53eo_mGgRA87E7mUeMUDc8u-62NHLLTPBrVkPe98JGnZoC_8h80C6w=w1366-h677-rw", 
                         is_reusable:true
                         }
                 }
            }
        }
    });
	}
	else if (str === "orange") {
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
                         url:"https://lh6.googleusercontent.com/K10M2ZWwGMu46bzrnD0rLP8dlA-gSY8NDOLxa_D-5gkJTE-lnkwn2QclSkALM2ri0_RgggF-w7uOyJI=w1366-h677-rw", 
                         is_reusable:true
                         }
                 }
            }
        }
    });
	}
	else if (str === "infor") {
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
                         url:"https://lh5.googleusercontent.com/Q1FKB4PZf5rPhqfqVug92gctLhVqk5oA4yjBWEG-4_MX23vEUXlwAUCDErP9MYFNpF-CZl166PvmBvA=w1366-h677-rw", 
                         is_reusable:true
                         }
                 }
            }
        }
    });
	}
	else if (str === "sofrecom") {
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
                         url:"https://lh4.googleusercontent.com/jj1Q2tFsJz3A-WGApEaPqZCDjZ-7rfHTLzrOP_q58PhlnBXjy73g-SIFhNQxarn6Fk2sJ36FlgO8M-c=w1366-h677-rw", 
                         is_reusable:true
                         }
                 }
            }
        }
    });
	}
	else if (str === "axe") {
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
                         url:"https://lh6.googleusercontent.com/Ej-X5Ikrff4ajiLN8ikCeiWpZfuHkhqAy9omO33ZL-c6NU0rKgEW7MaVcEPUqUdNhihgb8qB4mND904=w1366-h677-rw", 
                         is_reusable:true
                         }
                 }
            }
        }
    });
	}
	else if (str === "vermeg") {
		console.log("hello");
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
                         url:"https://lh3.googleusercontent.com/cv4_nPMHLjPqt9_GrxsjigjntT8z0cOjwkAWEo7D4BTCTFXZ66RqaBVkZmicABCdQNlaBt-rds4BdcM=w1366-h677-rw", 
                         is_reusable:true
                         }
                 }
            }
        }
    });
	}
	else if (str === "atb") {
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
                         url:"https://lh5.googleusercontent.com/6K7rsZOJ9_4ClsDLSpzKqCH4dxXhW2b5AiWBAfRKxRCR7seRw7_IwdL45sn9454HjtoUA8g4ifDLKCM=w1366-h677-rw", 
                         
                         is_reusable:true
                         }
                 }
            }
        }
    });
	}
	else if (str === "tijeri") {
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
                         url:"http://res.cloudinary.com/dt0xtoykg/image/upload/v1509311908/ardia_s3hatx.png", 
                         is_reusable:true
                         }
                 }
            }
        }
    });

	} 
    else if (str === "neoxam") {
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
                         url:"", 
                         is_reusable:true
                         }
                 }
            }
        }
    });

    }
    else if (str === "expsensya") {
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
                         url:"", 
                         is_reusable:true
                         }
                 }
            }
        }
    });

    }
    else if (str === "symathique") {
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
                         url:"", 
                         is_reusable:true
                         }
                 }
            }
        }
    });

    }
    else if (str === "swib") {
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
                         url:"", 
                         is_reusable:true
                         }
                 }
            }
        }
    });

    }
    else if (str === "BD") {
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
                         url:"", 
                         is_reusable:true
                         }
                 }
            }
        }
    });

    }

	else if (str === "11") {
        sendTextMessage(senderId, desc.descOddo);
        
    }
    else if (str === "20") {
        sendTextMessage(senderId, desc.Neoxam);
        
    }
    else if (str === "paySagem") {
        sendTextMessage(senderId, desc.descSagem);
    }
    else if (str === "6") {
        sendTextMessage(senderId, desc.descFocus);
        
    }
    else if (str === "2") {
        sendTextMessage(senderId, desc.descTalan);
        
    }
    else if (str === "14") {
        sendTextMessage(senderId, desc.descPredictix);
        
    }
    else if (str === "12") {
        sendTextMessage(senderId, desc.descCognira);
        
    }
    else if (str === "3") {
        sendTextMessage(senderId, desc.descOIO);
        
    }
    else if (str === "7") {
        sendTextMessage(senderId, desc.descArdia);
        
    }
    else if (str === "15") {
        sendTextMessage(senderId, desc.descSofrecom);
        
    }
    else if (str === "8") {
        sendTextMessage(senderId, desc.descPrimatec);
        
    }
    else if (str === "10") {
        sendTextMessage(senderId, desc.descFIS);
        
    }
    else if (str === "5") {
        sendTextMessage(senderId, desc.descTritux);
        
    }
    else if (str === "1") {
        sendTextMessage(senderId, desc.descTrustTIC);
        
    }
    else if (str === "17") {
        sendTextMessage(senderId, desc.descVermeg);
        
    }
    else if (str === "20") {
        sendTextMessage(senderId, desc.descNeoxam);
        
    }
    else if (str === "9") {
        sendTextMessage(senderId, desc.descLinedata);
        
    }
    else if (str === "21") {
        sendTextMessage(senderId, desc.descBD);
        
    }
    else if (str === "4") {
        sendTextMessage(senderId, desc.descHLI);
        
    }
    else if (str === "16") {
        sendTextMessage(senderId, desc.descAxe);
        
    }
    else if (str === "13") {
        sendTextMessage(senderId, desc.descOrange);
        
    }
    else if (str === "18") {
        sendTextMessage(senderId, desc.descATB);
        
    }
    else if (str === "22") {
        sendTextMessage(senderId, desc.descVistaprint);
        
    }
    else if (str === "24") {
        sendTextMessage(senderId, desc.descSymathique);
        
    }
    else if (str === "paySwib") {
        sendTextMessage(senderId, desc.descSwib);
        
    }
    else if (str === "23") {
        sendTextMessage(senderId, desc.descExpensya);
        
    }
    else if (str === "19") {
        sendTextMessage(senderId, desc.descAttijari);
        
    }

}



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
