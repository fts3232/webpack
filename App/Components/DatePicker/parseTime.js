export function parseTime(time){
	if(time instanceof Date){
		return {
			hours:time.getHours(),
			minutes:parseInt(time.getMinutes(),10),
			seconds:parseInt(time.getSeconds(),10)
		}
	}else{
		const values = time.split(':');
		if (values.length >= 2) {
		    const hours = parseInt(values[0], 10);
		    const minutes = parseInt(values[1], 10);
		    const seconds = parseInt(values[2], 10);
		    return {
		      hours,
		      minutes,
		      seconds
		    };
		}
		/* istanbul ignore next */
		return null;
	}
}

export function parseDate(date){
	if(date==null){
		return null;
	}else if(date instanceof Date){
		date.setHours(0);
	    date.setMinutes(0);
	    date.setSeconds(0);
		return date
	}else{
		const values = date.split('-');
		if (values.length >= 2) {
		    const year = parseInt(values[0], 10);
		    const month = parseInt(values[1], 10);
		    const day = parseInt(values[2], 10);
		    let date = new Date();
		    date.setFullYear(year);
		    date.setMonth(month-1);
		    date.setDate(day);
		    date.setHours(0);
		    date.setMinutes(0);
		    date.setSeconds(0);
		    return date;
		}
		/* istanbul ignore next */
		return null;
	}
}

export function formatDate(date){
	if(date instanceof Date){
		let month = date.getMonth()+1;
			month = month<10?`0${month}`:month;
		let year  = date.getFullYear();
		let day = date.getDate();
			day = day<10?`0${day}`:day;
		return `${year}-${month}-${day}`;
	}else{
		return '';
	}
}

export function format(format,time){
	var o = {
        "M+": time.getMonth() + 1, //月份 
        "d+": time.getDate(), //日 
        "h+": time.getHours(), //小时 
        "m+": time.getMinutes(), //分 
        "s+": time.getSeconds(), //秒 
        "q+": Math.floor((time.getMonth() + 3) / 3), //季度 
        "S": time.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(format)) format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return format;
}