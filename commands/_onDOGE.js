/*CMD
  command: /onDOGE
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

      
let wallet = options.result.address;
Bot.sendMessage("⚠️ _El mínimo de depósito es de 335.00000000 DOGE, si usted envía menos se tomará como una donación!_\n\n✅ *Envía el monto a depositar a la siguiente wallet:*")
Bot.sendMessage("`" + wallet + "`")
User.setProperty("depowalldoge",wallet,"string")

