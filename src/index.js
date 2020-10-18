module.exports = function check(str, bracketsConfig) {
    let shallowCopyStr = str
    for(let i = 0; i < str.length; i++) {
        for(let j = 0; j < bracketsConfig.length; j++) {
            let reduceBrackets = bracketsConfig[j][0] + bracketsConfig[j][1]
            shallowCopyStr = shallowCopyStr.replace(reduceBrackets,'')
        }
    }
    return shallowCopyStr.length == 0
}
