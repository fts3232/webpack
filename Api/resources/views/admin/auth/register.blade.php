<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="{{ URL::asset('css/admin.css') }}">
</head>
<body id="login-page">
    
    <form action="{{url('/admin/register')}}" method="post" class="login-form">
        <div class="title">注册</div>
        <div class="input-group">
            <label for="username" ><span class="letter-space-5">用户名</span>：</label>
            <input id="name" type="text" name="name" value='{{old('name')}}'/>
            @if ($errors->has('name'))
                <p class="error">{{$errors->first('name')}}</p>
            @endif
        </div>
        <div class="input-group">
            <label for="email" ><span class="letter-space-16">邮箱</span>：</label>
            <input id="email" type="text" name="email" value='{{old('email')}}'/>
            @if ($errors->has('name'))
                <p class="error">{{$errors->first('email')}}</p>
            @endif
        </div>
        <div class="input-group">
            <label for="password"><span class="letter-space-16">密码</span>：</label>
            <input id="password" type="password" name="password" />
            @if ($errors->has('password'))
                <p class="error">{{$errors->first('password')}}</p>
            @endif
        </div>
        <div class="input-group">
            <label for="password"><span>确认密码</span>：</label>
            <input id="password" type="password" name="password_confirmation"/>
            @if ($errors->has('password_confirmation'))
                <p class="error">{{$errors->first('password_confirmation')}}</p>
            @endif
        </div>
        <div class="input-group">
            <label for="verficode"><span class="letter-space-5">验证码</span>：</label>
            <input id="verficode" type="text" name="verficode" value="{{old('verficode')}}"/>
            <img src="{{captcha_src()}}" class="verficode"/>
            @if ($errors->has('verficode'))
                <p class="error">{{$errors->first('verficode')}}</p>
            @endif
        </div>
        {{ csrf_field() }}
        <div class="input-group">
            <button class="button">注册</button>
            @if ($errors->has('exception'))
                <p class="error">{{$errors->first('exception')}}</p>
            @endif
        </div>
    </form>
    <script src="//cdn.bootcss.com/jquery/1.9.0/jquery.min.js"></script>
</body>
</html>