
export function main(input: string): number {
    return input.split('\n').reduce((sum, str) => {
        let gameData = getGameData(str);
        let colorMaxxes = getColorMaxxes(gameData.draws);
        const power: number = Object.keys(colorMaxxes).reduce((runningProduct, color) => {
            return runningProduct * colorMaxxes[color]
        }, 1)
        return sum + power
    }, 0)
}

const gameIdRegex = /Game\s+(?<gameId>[0-9]+):(?<rest>.*)/
const drawDetails = /(?<amount>[0-9]+)\s(?<color>[a-z]+)/
function getGameData(str: string): {
    gameId: number,
    draws: {[color: string]: number}[]
} {
    const gameIdExecGroups = gameIdRegex.exec(str)?.groups
    if(!gameIdExecGroups) {
        throw new Error('Failed to parse game id')
    }
    const gameId = gameIdExecGroups['gameId']
    const rest = gameIdExecGroups['rest']
    const draws = rest.split(';').map(parseColorAndAmounts)
    return {
        gameId: Number(gameId),
        draws
    }
}

function getColorMaxxes(draws: {[color: string]: number}[]): {[color: string]: number} {
    return draws.reduce((maxxes, draw) => {
        for (const color in draw) {
            maxxes[color] = Math.max(maxxes[color] || 0, draw[color])
        }
        return maxxes
    }, {} as {[color: string]: number})
}

function parseColorAndAmounts(string: string): {[color: string]: number} {
    return string.split(',').reduce((drawData, colorAndAmount) => {
        const drawDataGroups = drawDetails.exec(colorAndAmount.trim())?.groups
        if(!drawDataGroups) {
            return drawData
        }
        const amount = drawDataGroups['amount']
        const color = drawDataGroups['color']
        if(amount && color) {
            drawData[color] = Number(amount)
        }
        return drawData
    }, {} as {[color: string]: number})
}
