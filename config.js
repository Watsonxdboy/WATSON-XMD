//𝓘'𝓶 𝔀𝓪𝓽𝓼𝓸𝓷𝔁𝓭𝓫𝓸𝔂

const fs = require('fs')
const { color } = require('./lib/myfunc')

//owner
global.owner = '+263781330745'
global.nomerowner = ["+263781330745"]

// Apikey 

global.skizo = '𝐰𝐚𝐭𝐬𝐨𝐧𝐅𝐨𝐮𝐫𝐩𝐞𝐧𝐜𝐞'
global.casterix = 'WATSON-XMD'
//watermark 
global.packname = '*𝐰𝐚𝐭𝐬𝐨𝐧𝐅𝐨𝐮𝐫𝐩𝐞𝐧𝐜𝐞*'
global.author = 'WATSON-XMD'

// cpanel 
global.domain = 'https://'
global.apikey2 = 'ptlc'
global.capikey2 = 'ptla'
global.eggsnya = '15'
global.location = '1'


global.apilinode = ''// apikey vps account linode
global.apitokendo = ''

//database 
global.urldb = ''; // just leave it blank but if you want to use the mongo database, fill in the mongo url

global.limitawal = {
    premium: "Infinity",
    monayawal: 0,
    free: 100
}

//rpg
global.buruan = {
   ikan: 5,
   ayam: 5,
   kelinci: 5,
   domba: 5,
   sapi: 5,
   gajah: 5
}
global.rpg = {
   darahawal: 100,
   energyawal: 252,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}

//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.autoViewStatus = true;       //make true to view statuses
global.unavailable = true;     
//to show your real presence  
global.available = true;   
// to show always online  
global.autoreadmessages = false;   
///To always read messages
global.chatbot = false;
global.autoreact = false;

global.prefix = '.';


global.welcome = false;

global.autobio = true;


//_____________//
// Don't change it
global.antibot = false
//—————「 Deadline 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
