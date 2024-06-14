const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve,ms))
}

async function  getRandomChinese (length) {
    let result = ''
    for(let i = 0; i < length; i++){
        let num = Date.now()
        let numToString = num.toString()
        let lastFive = numToString.slice(-5)
        let china = String.fromCharCode(lastFive); 
        result += china
        await delay(length*50)   
    }
    return result
}

const func = async() => {
    const chineseString = await getRandomChinese(4)
    console.log(chineseString);
}
func()