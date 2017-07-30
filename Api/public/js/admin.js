function query(params){
	var str ='';
	var temp = [];
	for(var index in params){
		temp.push(index+'='+params[index]);
	}
	str = temp.join('&');
	return str;
}