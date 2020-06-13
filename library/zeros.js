module.exports = {

    process: function (params_str) {
        let type = get_type(params_str);
        switch(type){
            case 0:
                return "function zeros(x){array = [];for (i = 0; i < x;i++){subarr = [];\nfor(j = 0;j<x;j++){subarr.push(0)}array.push(subarr);return array;}"
                break;
            case 1:
                return "function zeros(x,y){array = [];for (i = 0; i < x;i++){subarr = [];for(j = 0;j<y;j++){subarr.push(0)}array.push(subarr);return array;}"
                break;
            case 2:
                return "function zeros(x,y){array = [];for (i = 0; i < x;i++){subarr = [];for(j = 0;j<y;j++){subarr.push(0)}array.push(subarr);return array;}"
                break;
        }
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