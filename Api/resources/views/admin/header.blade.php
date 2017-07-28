<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-default/index.css">
    <link rel="stylesheet" href="{{ URL::asset('css/admin.css') }}">
</head>
<body>
<div id="app">
	<div class="header">
	    <div class="user">
	        <span class="name"> {{ Auth::guard('admin')->user()->name }} </span>
	        <a href="{{url('/admin/logout')}}">登出</a>
	    </div>
	</div>