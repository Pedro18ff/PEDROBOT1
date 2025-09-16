import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"

global.botNumber = ""

global.owner = ["51994884471"]

global.botname = '🕸 PedroBot'
global.namebot = '🥗 PedroBot'
global.bot = 'SakuraBot'
global.packname = '🐸 Pedro𝗕𝗼𝘁-𝗠𝗗'
global.wm = '🌿 Pedro𝘽𝙤𝙩-𝙈𝘿'
global.author = '🥗 DevPedro'
global.dev = '© Pᴏᴡᴇʀᴇᴅ Bʏ DᴇvPedro.'

global.banner = 'https://stellarwa.xyz/files/1757377941018.jpeg'
global.icon = 'https://stellarwa.xyz/files/1757378468505.jpeg'
global.currency = 'CryptoCoins'
global.sessions = 'sessions/session-bot'
global.jadi = 'sessions/session-sub'

global.api = { 
url: 'https://api.stellarwa.xyz',
key: 'Diamond'
}

global.my = {
  ch: '120363420992828502@newsletter',
}

const file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright(`Update "${file}"`))
  import(`${file}?update=${Date.now()}`)
})
