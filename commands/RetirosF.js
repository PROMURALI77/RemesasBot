/*CMD
  command: RetirosF
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: ⬆️ Retirar
CMD*/
let balance = Libs.ResourcesLib.userRes("balance");
let ress = Libs.ResourcesLib.userRes("ress")
if(balance.value() < 1){
Bot.sendMessage("*❌ You can not invest multiple deposit right now:* " + "Please wait until your active investment expire!")
}else{
Bot.runCommand("/with")
}
