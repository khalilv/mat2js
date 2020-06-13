module.exports = {
    test : function () {
        return 0; 
    },
    assignment: function (whole){
    	simple = whole[0]//inputarray
    	let line = simple.split('=')
    	console.log(line)
    	inputType = line.length
    	outputarr = [identify(line[0],inputType)]
    	console.log(inputType)
    	return outputarr
    }
}; 
function identify(input,inputType){
    if(inputType == 1){//then the line is a function call (or at least definitely not an assignment )
    	console.log(input)
    	return searchfunction(input)
    }
}
function searchfunction(input){
	if(input.includes("zeros")){
		let num = input.slice(input.indexOf("zeros(") + "zeros(".length, input.lastIndexOf(")"));
		toRet = [] 
		for(i = 0; i<num;i++){
			toRet.push(0)
		}
	
		return "a = [" + toRet + "];"; 
	}
	//upon identifying the creation of a function add it here, create dictionary of it after
	else{
		return(3)
	}


}