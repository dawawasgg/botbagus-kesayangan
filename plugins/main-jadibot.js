let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'JadiBot'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Hallo mypren ๐
*MAAF KAK FITUR JADIBOT TIDAK ADA DI DALAM FITUR KAMI*
โฉยป *Kalau kakak mau jadi bot silahkan jasa run aja kak*
          
โโโใ ฤฑll *HARGA* llฤฑ ใโโ๊ฅ
โฌก *1 minggu * 5.000
โฌก *3 minggu:* 20.000
โฌก *Tutorial Jadibot:* 50.000
โโโโโโโโโโโโโโโโโโโ๊ฅ
โโโโใ ฤฑll *PAYMENT* llฤฑ ใโโ๊ฅ
โฌก *DANA:* ${dana}
โฌก *GOPAY:* ${pulsa}
โโโโโโโโโโโโโโโโโโโ๊ฅ
โโโใ ฤฑll *RULES* llฤฑ ใโ๊ฅ
โฌก [โ] *Dana yang sudah masuk tidak bisa di kembalikan*
โฌก [โ] *Kalau akunmu ke banned bukan urusan saya*
โโโโโโโโโโโ๊ฅ
Jika anda berminat hubungi nomor di bawah!!
โฉยป *jangan lupa donasi kak* ยซโจ
Terimakasih yang sudah mendonasikan untuk bot

Contact person jasa run:
wa.me/${numberowner} (Owner)

*Follow Instagram ku juga kak๐ผ*`
  conn.send2ButtonImg(m.chat, fla + teks, anu, instagram, 'Donasi', '.donasi', 'SewaBot', '.sewaoscar', m) 
}
handler.help = ['jadibot']
handler.tags = ['info']
handler.command = /^(jadibot)$/i

module.exports = handler
