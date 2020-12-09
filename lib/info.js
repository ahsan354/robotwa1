exports.info = (id, BotName, tampilTanggal, tampilWaktu, instagram, whatsapp, kapanbotaktif) => {
	return ` ${BotName} 
  
Hai kak *${id.split("@s.whatsapp.net")[0]}*
"
Sebelum menggunakan bot ini ada baiknya kalian melihat menu *!info* dan *!donasi*
 GUNAKAN PERINTAH !donasi untuk berdonasi💵
INFO BOT! :
  *AUTHOR*: Ahsan Adinul
  *GITHUB*: https://github.com/ahsan354
  *INSTAGRAM*: ${instagram}
  *whatsapp* : ${whatsapp}

bot aktif selama : ${kapanbotaktif}
JANGAN LUPA FOLLOW instagram
 ${instagram}
 👾whatsapp : ${whatsapp}`
}
