const re = /^[^\d]*([\d]).*?([\d])?[^\d]*$/

export function main(input: string): number {
    return input.split('\n').reduce((sum, str) => {
        if (re.test(str)) {
            let regExpExecArray = re.exec(str);
            if (regExpExecArray) {
                const firstNumber = regExpExecArray[1]
                const lastNumber = regExpExecArray[2] === undefined ? firstNumber : regExpExecArray[2]
                return sum + Number(`${firstNumber}${lastNumber}`.trim())
            }
            return sum
        } else return sum
    }, 0)
}
