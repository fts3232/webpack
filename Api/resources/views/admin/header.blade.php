<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="{{ URL::asset('css/admin.css') }}">
</head>
<body>
<div class="header">
    <div class="user">
        <span class="name"> {{ Auth::guard('admin')->user()->name }} </span>
        <a href="{{url('/admin/logout')}}">登出</a>
    </div>
</div>