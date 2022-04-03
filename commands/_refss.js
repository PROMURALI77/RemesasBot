/*CMD
  command: /refss
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 👥 Invitar
CMD*/

var stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*❌ You are banned*");
return
}
var state = Bot.getProperty("BOT")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*🛑 Bot is currently OFF*");
return
}
if (chat.chat_type != "private") {
  Bot.sendMessage("_Open me in private_")
  return
}

let lib = Libs.ReferralLib
let reflist = lib.currentUser.refList
reflist = lib.currentUser.refList.get()
let tgid = user.telegramid
let refcom = Libs.ResourcesLib.userRes("refcom")
let bot = Libs.ReferralLib.currentUser.getRefLink("TronUniverseV1Bot","131")
let TRX = 10*refcom.value()


let msg
if (reflist.length > 0) {
  msg = reflist.length
} else {
  msg = "0"
}

var key = [[{title:"↗️ Compartir",url:"https://t.me/share/url?url="+bot}]]

Bot.sendInlineKeyboard(key,"*👥 Sistema Referidos*" + "\n\n" + "*🥇 Nivel°1 - 1%*\n\n*👥 Estadísticas Referidos*" + "\n\n*1° Nivel:* " +reflist.length+ " Usuarios" + "\n\n*👥 Depósitos Referidos:* "  + "\n" +TRX.toFixed(8) + " *USD*" +
 "\n\n*♾ Ganancias:* " + "\n" +refcom.value().toFixed(8) + " *USD*\n\n*👨‍👨‍👦‍👦 Enlace para Invitar:* \n" +"["+bot+"]")
