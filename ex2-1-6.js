// Övning 2.1.6
// Skriv ett program som frågar användaren efter ett filnamn. Om filen finns så ska innehållet skrivas ut, annars ska programmet säga att filen inte existerar och avslutas. Utan felmeddelanden!

const fs = require('fs');

console.log('Skriv ett filnamn! Please!!');

let stdin = process.openStdin();
stdin.on('data', chunk => {
	let text = chunk.toString('utf8').trim();
	fs.readFile('./' + text, 'utf8', (err, content) => {
		if( err ) {
			console.log('Filen existerar inte!');
			process.exit();
		} else {
			console.log(content);
		}
	})
})
