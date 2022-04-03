/*CMD
  command: 💲
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

                                                                                                                 
var stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*❌ You are banned*");
return
}
var state = Bot.getProperty("BOT")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*🛑 Bot is currently OFF*");
}else{
let deposit = Libs.ResourcesLib.userRes("deposit");
let res = Libs.ResourcesLib.userRes("balance");
let profit = Libs.ResourcesLib.userRes("profit");
let refcom = Libs.ResourcesLib.userRes("refcom");
let withdraw = Libs.ResourcesLib.userRes("withdraw");
var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"

Bot.sendKeyboard("🏦 Depósitos,➖ Retiros,\n⬅️ Volver","*👤 Saldo de la cuenta:  *\n\n*💳 Saldo Depositado: * \n" +deposit.value().toFixed(8) + " USD\n\n*👥 Ganancias Referidos:*\n" +refcom.value().toFixed(8) +" USD\n\n*💸 Total retirado:*\n" +withdraw.value().toFixed(8) + " USD")

}
