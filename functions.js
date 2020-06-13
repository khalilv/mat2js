var zeros_class = require('./library/zeros.js');

module.exports = {
    process: function (data) {
    	result = []
        for (let i = 0; i < data.length; i++) {
            result.push(process_line(data[i]));
        }
        return result; 
    }
};

function process_line(line){
    let func_name = line.slice(0,line.indexOf("(")); 
    let param_str = line.slice(line.indexOf("(") + 1, line.lastIndexOf(")")); 
    switch (func_name) {
        case 'zeros':
            return zeros_class.process(param_str); 
            break; 
    }
}

function identify(input, inputType) {
    if (inputType == 1) {//then the line is a function call (or at least definitely not an assignment )
        console.log(input)
        return searchfunction(input)
    }
}
function searchfunction(input) {
    if (input.includes("zeros")) {
        let num = input.slice(input.indexOf("zeros(") + "zeros(".length, input.lastIndexOf(")"));
        toRet = []
        for (i = 0; i < num; i++) {
            toRet.push(0)
        }

        return "a = [" + toRet + "];";
    }
    //upon identifying the creation of a function add it here, create dictionary of it after
    else {
        return (3)
    }


}