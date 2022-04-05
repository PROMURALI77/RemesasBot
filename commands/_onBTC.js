/*CMD
  command: /onBTC
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

        
let wallet = options.result.address;
Bot.sendMessage("⚠️ _El mínimo de depósito es de 0.0011 BTC, si usted envía menos se tomará como una donación!_\n\n✅ *Envía el monto a depositar a la siguiente wallet:*")
Bot.sendMessage("`" + wallet + "`")
User.setProperty("depowallbtc",wallet,"string")

