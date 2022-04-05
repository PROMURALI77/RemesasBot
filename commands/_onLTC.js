/*CMD
  command: /onLTC
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

        

var data = JSON.parse(content)

let wallet = options.result.address;
Bot.sendMessage("⚠️ _El mínimo de depósito es de 0.400000000 LTC, si usted envía menos se tomará como una donación!_\n\n✅ *Envía el monto a depositar a la siguiente wallet:*")
Bot.sendMessage("`" + wallet + "`")
User.setProperty("depowallltc",wallet,"string")

