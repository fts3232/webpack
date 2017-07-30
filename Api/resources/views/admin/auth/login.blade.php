<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-default/index.css">
    <link rel="stylesheet" href="{{ URL::asset('css/admin.css') }}">
</head>
<body class="login-page">
    <div id="app">
        <el-form ref="form" action="{{ url('/admin/login') }}" method="post" label-width="80px">
            <el-form-item>
                <h3 class="title">登陆</h3>
            </el-form-item>
            <el-form-item label="用户名">
                <el-input name="name"></el-input>
                @if ($errors->has('name'))
                    <p class="error">{{$errors->first('name')}}</p>
                @endif
            </el-form-item>
            <el-form-item label="密码">
                <el-input name="password" type="password"></el-input>
                @if ($errors->has('password'))
                    <p class="error">{{$errors->first('password')}}</p>
                @endif
            </el-form-item>
            <el-form-item label="验证码">
                <el-input name="verficode"  class="verficode"></el-input>
                <img src="{{captcha_src()}}" class="verficode"/>
                @if ($errors->has('verficode'))
                    <p class="error">{{$errors->first('verficode')}}</p>
                @endif
            </el-form-item>
            <el-form-item>
                <el-button native-type="submit">登陆</el-button>
            </el-form-item>
            {{ csrf_field() }}
        </el-form>
    </div>
    <script src="https://unpkg.com/vue"></script>
    <script src="https://unpkg.com/element-ui/lib/index.js"></script>
    <script>
        new Vue({
            el: '#app',
            mounted: function(){  
                document.getElementById('app').style.display='block';            
            } 
        })
    </script>
</body>
</html>