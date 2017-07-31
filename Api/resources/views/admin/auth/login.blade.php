<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    @include('admin.commonCss')
</head>
<body class="login-page">
    <div id="app">
        <el-form ref="form" action="{{ url('/admin/login') }}" method="post" label-width="0px">
            <h3 class="title">登陆</h3>
            <el-form-item >
                <el-input name="name" placeholder="用户名"></el-input>
                @if ($errors->has('name'))
                    <p class="error">{{$errors->first('name')}}</p>
                @endif
            </el-form-item>
            <el-form-item >
                <el-input name="password" type="password" placeholder="密码"></el-input>
                @if ($errors->has('password'))
                    <p class="error">{{$errors->first('password')}}</p>
                @endif
            </el-form-item>
            <el-form-item >
                <img src="{{captcha_src()}}" class="verficode" @click="changeVerficode"/>
                <el-input name="verficode"  class="verficode" placeholder="验证码" ></el-input>
                @if ($errors->has('verficode'))
                    <p class="error">{{$errors->first('verficode')}}</p>
                @endif
            </el-form-item>
            <el-form-item class="remember">
                <el-checkbox v-model="checked" name="remember"><span>记住我</span></el-checkbox>
            </el-form-item>
            <el-form-item>
                <el-button type='primary' native-type="submit">登陆</el-button>
            </el-form-item>
            {{ csrf_field() }}
        </el-form>
    </div>
    @include('admin.commonJs')
    <script>
        new Vue({
            el: '#app',
            data:{
                'checked':false
            },
            methods:{
                changeVerficode(){
                    var a = document.querySelector('img.verficode');
                    a.src = a.src+Math.random();
                }
            },
            mounted: function(){  
                document.getElementById('app').style.display='block';            
            } 
        })
    </script>
</body>
</html>