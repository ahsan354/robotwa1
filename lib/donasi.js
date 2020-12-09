exports.donasi = (id, BotName, tampilTanggal, tampilWaktu, instagram, whatsapp, kapanbotaktif) => {
	return `{ *MENU DONASI ${BotName}* }
  
  
TERIMA KASIH
*${id.split("@s.whatsapp.net")[0]}*
TELAH MEMBUKA MENU DONASI

 *${tampilTanggal}* 
 *${tampilWaktu}* 
(Waktu Server)
KALIAN BISA DONASI MENGGUNAKAN
   
 *PULSA*: 085157566434
 *DANA* : 085157566434

*Follow Me On Instagram*
${instagram}
👾whatsapp : ${whatsapp}
`
}
