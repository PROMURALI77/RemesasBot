/*CMD
  command: /depo
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: ⬇️ Depositar
CMD*/

var key = [[{title:"TRX",command:"/depot"},{title:"USDT-TRC20",command:"/depot"}],[{title:"BTC",command:"/depob"}],[{title:"LTC",command:"/depol"},{title:"DOGE",command:"/depod"}]]

Bot.sendInlineKeyboard(key,"✅ Todo Depósito es convertido a USD\n\nMínimo de Depósito: 50 USD\nMáximo de Depósito: Indefinido")
