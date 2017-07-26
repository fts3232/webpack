<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="{{ URL::asset('css/admin.css') }}">
</head>
<body id="login-page">
    
    <form action="{{url('/admin/login')}}" method="post" class="login-form">
        <div class="title">登录</div>
        <div class="input-group">
            <label for="username">用户名：</label>
            <input id="name" type="text" name="name" value='{{old('name')}}'/>
            @if ($errors->has('name'))
                <p class="error">{{$errors->first('name')}}</p>
            @endif
        </div>
        <div class="input-group">
            <label for="password"><span class="letter-space-8">密码</span>：</label>
            <input id="password" type="password" name="password" value="{{old('password')}}"/>
            @if ($errors->has('password'))
                <p class="error">{{$errors->first('password')}}</p>
            @endif
        </div>
        <div class="input-group">
            <label for="verficode">验证码：</label>
            <input id="verficode" type="text" name="verficode" value="{{old('verficode')}}"/>
            <img src="{{captcha_src()}}" class="verficode"/>
            @if ($errors->has('verficode'))
                <p class="error">{{$errors->first('verficode')}}</p>
            @endif
        </div>
        {{ csrf_field() }}
        <div class="input-group">
            <button class="button">登录</button>
        </div>
    </form>
    <script src="//cdn.bootcss.com/jquery/1.9.0/jquery.min.js"></script>
</body>
</html>