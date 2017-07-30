<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    @include('admin.commonCss')
</head>
<body>
	<div id="app">
		@include('admin.header')
		@include('admin.nav')
		@yield('content-container')
	</div>
	@include('admin.commonJs')
	@yield('js')
	<script>
	    new Vue({
	        el: '#app',
	        mounted: function(){  
	            document.getElementById('app').style.display='block';            
	        } ,
	        methods:typeof vueMethods!='undefined'?vueMethods:{},
	        data:typeof vueData!='undefined'?vueData:{}
	    })
	</script>
</body>
</html>