let handler = async (m, { conn }) => {
let caption = `*BELI SC SILAHKAN CHT https://wa.me/6285828764046*`

conn.sendButton( m.chat, caption, `©️ zifabotz`, `Otw tanya owner`, `.owner`, m)

       }
       
handler.customPrefix = /^(.sc|.script|.beli sc|.beli)/i
handler.command = new RegExp
module.exports = handler
