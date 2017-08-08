<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    @include('admin.commonCss')
    @yield('pageCss')
</head>
<body>
	<div id="app">
		@include('admin.header')
		@include('admin.nav')
		@yield('content-container')
	</div>
	@include('admin.commonJs')
	@yield('pageJs')
	<script>
	    new Vue({
	        el: '#app',
	        mounted: function(){  
	            document.getElementById('app').style.display='block';            
	        } ,
	        components:typeof vueComponents!='undefined'?vueComponents:{},
	        methods:typeof vueMethods!='undefined'?vueMethods:{},
	        data:typeof vueData!='undefined'?vueData:{}
	    })
	</script>
</body>
</html>