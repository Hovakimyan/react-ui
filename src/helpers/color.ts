export const hexToRgbA = (colorHex: string, percent: number): string => {
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(colorHex)) {
        let hex = colorHex.substring(1).split('')
        if (hex.length === 3) {
            hex = [hex[0], hex[0], hex[1], hex[1], hex[2], hex[2]]
        }

        const hexVal = Number(`0x${hex.join('')}`)

        return `rgba(${[(hexVal >> 16) & 255, (hexVal >> 8) & 255, hexVal & 255].join(',')},${
            percent / 100
        })`
    }
    throw new Error('Bad Hex')
}
