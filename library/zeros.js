module.exports = {

    process: function (params_str) {
        console.log(get_type(params_str));
    }

};

function get_type(params_str) {
    let type = 0;
    let params;
    if (params_str[0] == "[" && params_str[params_str.length - 1] == "]") {
        params_str = params_str.slice(params_str.indexOf("[") + 1, params_str.lastIndexOf("]"));
        params = params_str.trim().split(' ').map(x => x.trim());
        if (params.length > 2) {
            type = 2;
        } else if (params.length > 1) {
            type = 1;
        }
    } else if (params_str.includes(",")) {
        params = params_str.trim().split(',').map(x => x.trim());
        if (params.length > 2) {
            type = 2;
        } else {
            type = 1;
        }
    } else if (/^\d+$/.test(params_str)) {
        type = 0;
        params = [parseInt(params_str)];
    } else {
        type = -1;
        params = null;
    }
    return [type, params];
}