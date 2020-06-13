module.exports = {

    process: function (params_str) {
        console.log(get_type(params_str));
    }

};

function get_type(params_str) {
    let type = -1;
    if (params_str[0] == "[" && params_str[params_str.length - 1] == "]") {
        if (params_str.slice(params_str.indexOf("[") + 1, params_str.lastIndexOf("]")).trim().split(' ').map(x => x.trim()).length > 2) {
            type = 2;
        } else {
            type = 1;
        }
    } else if (params_str.includes(",")) {
        if (params_str.trim().split(',').map(x => x.trim()).length > 2) {
            type = 2;
        } else {
            type = 1;
        }
    } else if (/^\d+$/.test(params_str)) {
        type = 0;
    }
    return type;
}