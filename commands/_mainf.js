/*CMD
  command: /mainf
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

                                                                                                             

var info =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";
let res = Libs.ResourcesLib.userRes("balance");
let id = "@TronUniverseV1Bot"
Bot.sendKeyboard("💲 Saldo ~ " + res.value().toFixed(8) + " USD 💲" + "\n⬇️ Depositar,➰ Reinvertir,⬆️ Retirar,\n📊 Estadísticas,🎙 Payment Hub,\n🎁 Bonus,👥 Invitar,🖥 Calcular,\n💡 About,💳 Wallet, 📬 Soporte","🔝 Menú Principal")
