const terminalStylingCodes = {
    get: function(type, code, msg){
        const styleCode = this[type][code]
        return styleCode ? `\x1b[${styleCode}m${msg}\x1b[0m` : msg;
    },
    colors: {
        red: '31', // Text color
        green: '32', // Text color
        yellow: '33', // Text color
        blue: '34', // Text color
        magenta: '35', // Text color
        cyan: '36', // Text color
        white: '37', // Text color
        brightRed: '91', // Bright text color
        brightGreen: '92', // Bright text color
        brightYellow: '93', // Bright text color
        brightBlue: '94', // Bright text color
        brightMagenta: '95', // Bright text color
        brightCyan: '96', // Bright text color
        brightWhite: '97', // Bright text color
    },
    bgColor: {
        blackBg: '40', // Black background
        redBg: '41', // Red background
        greenBg: '42', // Green background
        yellowBg: '43', // Yellow background
        blueBg: '44', // Blue background
        magentaBg: '45', // Magenta background
        cyanBg: '46', // Cyan background
        whiteBg: '47' // White background
    },
    styles: {
        bold: '1',
        dimmed: '2',
        italic: '3',
        underline: '4',
        blinking: '5',
        rapidBlinking: '6',
        inverse: '7',
        hidden: '8'
    }
}

export default terminalStylingCodes;