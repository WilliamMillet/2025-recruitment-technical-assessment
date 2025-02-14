// Input a number and a noun, then get an output that adds 's' to the noun if necessary

// No need to use this with uncountable names like sheep or wine


const formatNumAndPluralisedNoun = (num, noun) => {
    if (num === 1) {
        return `${num} ${noun}`
    } else {
        return `${num} ${noun}s`
    }
}
 
export default formatNumAndPluralisedNoun;