<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>{{ $title }}</title>
	<meta name="description" content="{{ $description }}" />
	<meta name="keywords" content="{{ $keyword }}" />
	<!-- <meta name="viewport" content="width=device-width, initial-scale=0, maximum-scale=0.8, user-scalable=no"> -->
	<meta name="viewport" content="width=1200,initial-scale=0.8, maximum-scale=0, user-scalable=no">
	<link rel="stylesheet" href="{{  asset($cdnPath.'/css/animate.css') }}" type="text/css" />
	<link rel="stylesheet" href="{{ asset($cdnPath.'/css/main.css?v=8') }}" type="text/css" />
</head>
<body>
    @yield('content-container')
    @if(config('app.debug'))
    <script>
		var _hmt = _hmt || [];
		(function() {
		  var hm = document.createElement("script");
		  hm.src = "https://hm.baidu.com/hm.js?317a19cdd86bd48c67a3364f0e42ae3a";
		  var s = document.getElementsByTagName("script")[0]; 
		  s.parentNode.insertBefore(hm, s);
		})();
	</script>
	@endif
</body>

</html>