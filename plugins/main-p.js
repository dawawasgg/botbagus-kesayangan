let handler = async m => m.reply(`
π.π.π  ππΌππΌπ πΏπππ ππΌππΌ .πΌπππΌππΌπππΌππΌππππ.ππππ πππ.πππ π
`.trim()) // Tambah sendiri kalo mau
handler.customPrefix = /^(p)$/i
handler.command = new RegExp

module.exports = handler