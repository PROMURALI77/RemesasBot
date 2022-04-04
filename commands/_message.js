/*CMD
  command: /message
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
 👨‍💻 *Ahora estas en contacto directo con el Administrador*
 
*Escriba su mensaje y sera atendido en un plazo de 2 a 24 horas*
  ANSWER
  keyboard: ⬅️ Volver
  aliases: 📬 Soporte
CMD*/

var stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*❌ You are banned*");
return
}
var admin_chat = Bot.getProperty("admin_chat")
let inf =
  "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
if (!admin_chat) {
  Bot.sendMessage("Sorry. Bot have not admin now")
  return // exit
}
let msg = message
if (msg.length < 5) {
  Bot.sendMessage(
    "*⚠️ Por favor, envíe un mensaje más largo!*\n_Para explicar todo lo que necesita, todo lo que pueda en un solo mensaje!_"
  )
} else {
  let user_link = Libs.commonLib.getLinkFor(user)
  let msg = message

  var b = [
    [
      {
        title: "Responder al usuario " + user.first_name,
        command: "/reply" + user.telegramid
      }
    ]
  ]

  Bot.sendInlineKeyboardToChatWithId(
    admin_chat,
    b,
    "📩 New Support Message\nFrom User: " + inf + "\nMessage: " + msg
  )
  Bot.sendMessage(
    "*Mensaje enviado al administrador:*" + "\n" + message + "\n"
  )
}

