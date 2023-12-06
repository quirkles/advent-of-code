// const re = /^[^\d]*([\d]{1}|one|two|three|four|five|six|seven|eight|nine).*?([\d]|one|two|three|four|five|six|seven|eight|nine)?[^\d]*$/
const re = /(?=(\d|one|two|three|four|five|six|seven|eight|nine))/g

export function main(input: string): number {
    return input.split('\n').reduce((sum, str) => {
        const matches = Array.from(str.matchAll(re))
        if (matches) {
            const toAdd = Number(`${parseNumberString(matches[0][1])}${parseNumberString(matches[matches.length - 1][1])}`)
            return sum + toAdd
        } else {
            return sum
        }
    }, 0)
}

function parseNumberString(str: string) {
    switch (str){
        case 'one':
            return 1
        case 'two':
            return 2
        case 'three':
            return 3
        case 'four':
            return 4
        case 'five':
            return 5
        case 'six':
            return 6
        case 'seven':
            return 7
        case 'eight':
            return 8
        case 'nine':
            return 9
        default:
            return Number(str)
    }
}