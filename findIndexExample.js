const songs = ['Best part', 'Still', 'จี่หอย', 'กอดเสาเถียง']
const indexOfJeeHoi = songs.findIndex(song => song === 'จี่หอย')
const elemOfJeeHoi = songs[indexOfJeeHoi]

console.log(`Index: ${indexOfJeeHoi} Value: ${elemOfJeeHoi}`)

const impossibleJeeHoi = songs.findIndex(song => song === 'จี่หอย (Remastered)')
console.log(impossibleJeeHoi)

const testingFunction = song => song === 'Still'
console.log(`by indexOf: ${songs.indexOf('Still')}`)
console.log(`by findIndex: ${songs.findIndex(testingFunction)}`)