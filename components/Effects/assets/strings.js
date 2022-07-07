export const generate = (string, index, replacement) => {
    const outputStr = string.substr(0, index) + replacement +
        string.substr(index + string.length)
    return (string.length !== index) ? outputStr : string
}

export const modify = (string, index, replacement) => {
    const outputStr = string.substring(0, index) + replacement +
        string.substring(index, string.length)
    return (string.length !== index) ? outputStr : string
}

export const type = (string, index) =>
    string
        .substring(0, index)
        .split("\n")
        .join("<br/>")
