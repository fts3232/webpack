<?php

namespace App\Http\Controllers;

use Validator;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\ThrottlesLogins;
use Illuminate\Foundation\Auth\AuthenticatesAndRegistersUsers;

class AuthController extends Controller{
    use AuthenticatesAndRegistersUsers, ThrottlesLogins;
    //登陆后页面
    protected $redirectTo = '/';
    //登出跳转页面
    protected $redirectAfterLogout;
    //验证规则
    protected $validateRule = [];
    //验证的用户名字段
    protected $username='name';
    //guard
    protected $guard;
    //最多登录次数
    protected $maxLoginAttempts = 5;
    //锁定秒数
    protected $lockoutTime = 60;
    //注册页面模板
    protected $registerView;
    //登录页面模板
    protected $loginView;
    //登录请求数组
    protected $loginRequest = [];
    public function __construct(){
        //中间件跳过logout方法
        $this->middleware($this->guestMiddleware(), ['except' => 'logout']);
        $this->loginRequest = [];
    }
    //验证数据
    protected function validator(array $data){
        return Validator::make($data,$this->validateRule);
    }
    //登录验证
   protected function getCredentials(Request $request)
    {
        return $request->only($this->loginUsername(), 'password');
    }
    //创建新用户
    protected function create(array $data){
        
    }
}
