const prompt = require('prompt-sync')({ sigint: true });

let colorType = Number(prompt(`Type "1" to combine colors. Type "2" to deconstruct colors: `));


if (colorType === 1) {
    let color1 = prompt(`Pick red, blue, or yellow: `);
    if (color1 === 'red') {
        let color2 = prompt(`Pick blue, or yellow: `);
        if ((color1 === 'red' || color2 === 'red') && (color1 === 'blue' || color2 === 'blue')) {
            console.log(`You made purple!`)
        } else if ((color1 === 'red' || color2 === 'red') && (color1 === 'yellow' || color2 === 'yellow')) {
            console.log(`You made orange!`)
        } else {
            console.log(`Error! Follow the instructions!`)
        }
    }
    if (color1 === 'blue') {
        let color2 = prompt(`Pick red, or yellow: `);
        if ((color1 === 'blue' || color2 === 'blue') && (color1 === 'red' || color2 === 'red')) {
            console.log(`You made purple!`)
        } else if ((color1 === 'blue' || color2 === 'blue') && (color1 === 'yellow' || color2 === 'yellow')) {
            console.log(`You made green!`)
        } else {
            console.log(`Error! Follow the instructions!`)
        }
    }
    if (color1 === 'yellow') {
        let color2 = prompt(`Pick red, or blue: `);
        if ((color1 === 'yellow' || color2 === 'yellow') && (color1 === 'red' || color2 === 'red')) {
            console.log(`You made orange!`)
        } else if ((color1 === 'yellow' || color2 === 'yellow') && (color1 === 'blue' || color2 === 'blue')) {
            console.log(`You made green!`)
        } else {
            console.log(`Error! Follow the instructions, please!`)
        }
    }
}

if (colorType === 2) {
    let colorPick = prompt(`Pick purple, orange, or green: `);
    if (colorPick === 'purple') {
        console.log(`Purple is made of red and blue.`)
    } else if (colorPick === 'orange') {
console.log(`Orange is made of red and yellow.`)
    } else if (colorPick === 'green') {
        console.log(`Green is made of blue and yellow.`)
    } else {
        console.log(`Error! Follow the instructions, please!`)
    }
}