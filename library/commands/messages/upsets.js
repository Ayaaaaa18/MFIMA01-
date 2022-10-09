"use strict";
require('dotenv').config();

const { flatDirectly } = require('../../validation/importantly/flatDirectly.js');
const { configuration } = require('../../validation/arguments/configuration.js');
const { yts, node_fetch, hxz, boom, baileys, fs, chalk, PhoneNumber, FileType, util, child_process } = new flatDirectly();
const { exec, spawn } = child_process;
const { default: makeWASocket, DisconnectReason, AnyMessageContent, delay, generateForwardMessageContent, isJidGroup, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, fetchLatestBaileysVersion, jidDecode, getContentType, proto } = baileys;

module.exports = {
    async newModule(razzaq, store, jid, msg, m, cmPrefix) {
        try {
            global.superArguments = {
                autoresponder: configuration.data.jid[0].message.switching.autoresponder,
                cmdPublic: configuration.data.jid[0].message.switching.cmdPublic,
                replyErr: configuration.data.build[0].message.send,
                footer: configuration.data.jid[1].packages+configuration.data.jid[1].owner.biography.number[0]+'@s.whatsapp.net'.split("@")[0],
                mentionOwner: configuration.data.jid[1].owner.biography.number[0]+'@s.whatsapp.net'
            };
            if(superArguments.autoresponder) {
                await setTimeout(async () => {
                    let content;
                    if(m.body.includes("Assalamualaikum") || m.body.includes("Assalamu'alaikum") || m.body.includes("assalamualaikum") || m.body.includes("assalamu'alaikum")) {
                        if(razzaq.decodeJid(m.key?.fromMe)) return;
                        var teks = ["Wa'alaikumussalam Warahmatullahi Wabarakatuh\n_وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ_", "Wa'alaikumussalam Warahmatullahi Wabarakatuh 😊\n_وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ_", "Wa'alaikumussalam Warahmatullahi Wabarakatuh ❤️\n_وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ_", "Wa'alaikumussalam Warahmatullahi Wabarakatuh ✨\n_وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ_", "Wa'alaikumussalam Warahmatullahi Wabarakatuh 🤗\n_وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ_", "Wa'alaikumussalam Warahmatullahi Wabarakatuh 🌹\n_وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ_", "Wa'alaikumussalam Warahmatullahi Wabarakatuh 🙏🏻\n_وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ_"] 
                        content = teks[Math.floor(Math.random() *   teks.length)];
                        await razzaq.sendMessage(m.chat, { text: content }, { quoted: m });
                    };
                    if(m.body.includes("Pepek") || m.body.includes("pepek") || m.body.includes("Kontol") || m.body.includes("kontol") || m.body.includes("Anjeng") || m.body.includes("anjeng") || m.body.includes("Bokep") || m.body.includes("bokep") || m.body.includes("Sange") || m.body.includes("sange") || m.body.includes("Ngentot") || m.body.includes("ngentot") || m.body.includes("Babi") || m.body.includes("babi") || m.body.includes("Bangsat") || m.body.includes("bangsat")) {
                        if(razzaq.decodeJid(m.key?.fromMe)) return;
                        var requestPaymentMessage = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                        requestPaymentMessage: {
                            currencyCodeIso4217: "USD",
                            amount1000: 1000,
                            requestFrom: m.chat,
                            Message: {
                                extendedTextMessage: {
                                    text: ''
                                }, 
                            },
                        },
                        }), { userJid: m.chat, quoted: m })
                        razzaq.relayMessage(m.chat, requestPaymentMessage.message, { messageId: '' }).then(() => m.reply(`Astagfirullah`))
                    };
                }, 3000);
            };
            switch (m.command) {
                case "test": {
                    razzaq.sendMessage(m.chat, { text: "Work As Command" }, { quoted: m });
                };
                break;
                default: {
                    if(m.body.startsWith("=>")) {
                        if(!razzaq.decodeJid(m.key?.fromMe)) return;
                        try {
                            var evaled = await eval(m.body.slice(2))
                            if(typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                            m.reply(evaled)
                        } catch (err) {
                            m.reply(util.format(err))
                        };
                    };
                    if(m.body.startsWith(">")) {
                        if(!razzaq.decodeJid(m.key?.fromMe)) return;
                        try {
                            function Return(sul) {
                                var sat = JSON.stringify(sul, null, 2)
                                var bang = util.format(sat)
                            if(sat == undefined) {
                                bang = util.format(sul)
                            }
                                return m.reply(bang)
                            };
                            m.reply(util.format(eval(`(async () => { ${m.body.slice(1)} })()`)))
                        } catch (err) {
                            m.reply(util.format(err))
                        };
                    };
                    if(m.body.startsWith("<")) {
                        if(!razzaq.decodeJid(m.key?.fromMe)) return;
                        try {
                            return m.reply(JSON.stringify(eval(`${m.args.join(' ')}`),null,'\t'))
                        } catch (err) {
                            m.reply(util.format(err))
                        };
                    };
                    if(m.body.startsWith("$")) {
                        if(!razzaq.decodeJid(m.key?.fromMe)) return;
                        var qur = m.body.slice(1)
                        try {
                            exec(qur, (err, stdout) => {
                                if(err) return m.reply(util.format(err))
                                if(stdout) {
                                    m.reply(util.format(stdout))
                                };
                            });
                        } catch (err) {
                            if(err.code === 'ERR_INVALID_ARG_VALUE') {
                                return m.reply(undefined)
                            };
                            m.reply(util.format(err))
                        };
                    };
                };
            };
                function doc() { 
                    return {
                        key: {
                            fromMe: false, 
                            participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "" } : {}) 
                        },
                        message: {
                            documentMessage: {
                                url: "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
                                mimetype: "application/octet-stream",
                                fileSha256: "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
                                fileLength: "64455",
                                pageCount: 1,
                                mediaKey: "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
                                fileName: m.name,
                                fileEncSha256: "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
                            },
                        },
                    };
                };
            function jsonformat(string) {
                return JSON.stringify(string, null, 2);
            };
            function isUrl(url) {
                return new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi).test(url);
            };
        } catch (err) {
            m.reply(util.format(err));
        };
    },
};

fs.watchFile(require.resolve(__filename), () => {
    fs.unwatchFile(require.resolve(__filename));
    console.log(chalk.redBright(require.resolve(__filename)));
    delete require.cache[require.resolve(__filename)];
  	require(require.resolve(__filename));
}); 