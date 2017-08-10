<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="{{ asset($cdnPath.'/css/main.css') }}" />
</head>
<body>
	<div class="b404 text-center">
		<img src="{{ asset($cdnPath.'/img/cidt404.png') }}" alt="">
		<p>Page not found.</p>
		<a href="{{ url('/') }}" class="btn sbtn bg">Home</a>
	</div>
</body>
</html>