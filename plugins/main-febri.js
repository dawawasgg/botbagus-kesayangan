let handler = async m => m.reply(`
πππππ πΌπΏπΌππΌπ πππππΌππ πΌππΌπ πΏπΌππ π½πΌππΌπ ππππππ.πππππΌπ πΏπΌππ πΌππππ½πππ
`.trim()) // Tambah sendiri kalo mau
handler.customPrefix = /^(dataripan|ripan|siapakah ripan)$/i
handler.command = new RegExp

module.exports = handler
