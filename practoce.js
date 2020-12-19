const doStuff = str => {
    const lower = str.toLowerCase()
    const words = lower.split(' ')

    words.reverse()

    for (let i in words) {
        words[i] = words[i].trim()
    }

    let keepers = []

    for (let i in words) {
        if (words[i].length > 3) {
            keepers.push(words[i])
        }
    }

    return keepers.join('')
}



console.log(doStuff("Hey Arun Hello"));