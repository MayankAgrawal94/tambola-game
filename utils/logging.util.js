import stylingCodes from "./terminalStyling.constant.js";

class Log {
    constructor(){}

    success(message) {
        console.log(stylingCodes.get('colors','green',message))
        // this.multiColor([
        //     { text: message, bgColor: 'whiteBg', color: 'green', styles:['bold'] },
        // ])
    }

    error(message) {
        console.log(stylingCodes.get('colors','red',message))
    }

    warning(message) {
        console.log(stylingCodes.get('colors','yellow',message))
    }

    info(message) {
        console.log(stylingCodes.get('colors','blue',message))
    }

    multiColor(messageParts) {
        console.log(
            messageParts.map(part => {
                let styledText = part.text;
                
                if(!styledText) return null;

                if (Array.isArray(part.styles) && part.styles.length > 0)
                    part.styles.forEach(key => {
                        styledText = stylingCodes.get('styles',key,styledText) 
                    }) 

                if (part.color)
                    styledText = stylingCodes.get('colors',part.color,styledText)

                if (part.bgColor)
                    styledText = stylingCodes.get('bgColor',part.bgColor,styledText)
        
                return styledText;
            }).filter(msg => msg != null).join(' ')
        );
    }
}

const logging = new Log();
export default logging;
  