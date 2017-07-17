(function(){

	function flexible(){
		var docEl = document.documentElement;

	    var width = docEl.getBoundingClientRect().width;

	    var ios = window.navigator.appVersion.match(/iPhone/i), dpr = window.devicePixelRatio || 1
	    if(ios){
	    	dpr = window.devicePixelRatio || 1
	    }
	    else{
	    	dpr = 1
	    }
	    var scale = 1 / dpr;
	    if(width / dpr > 640){

			width = 640 * dpr;
		}
		var rem = width / 10;
		var html = document.querySelector('html');
		if(document.querySelector('meta[name="viewport"]') != undefined){
			metaEl = document.querySelector('meta[name="viewport"]');
			metaEl.content='initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=0';
		}
		else{
			var metaEl = document.createElement('meta');
			var head = document.querySelector('head');
			metaEl.name="viewport"
		    metaEl.content='initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=0';
		    head.insertBefore(metaEl,head.childNodes[0])
		}

	    html.setAttribute('data-dpr', dpr);
	    html.style.fontSize= rem+'px';
	}
	flexible();
	flexible();
	var tid='';
	window.addEventListener('resize', function() {
		clearTimeout(tid);
        tid = setTimeout(flexible,'100')
	},false)
}());
