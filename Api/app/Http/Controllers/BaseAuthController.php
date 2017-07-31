<?php

namespace App\Http\Controllers;

use Validator;
use Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\ThrottlesLogins;
use Illuminate\Foundation\Auth\AuthenticatesAndRegistersUsers;

class BaseAuthController extends Controller{
    use AuthenticatesAndRegistersUsers, ThrottlesLogins;
    //登陆后页面
    protected $redirectTo = '/';
    //登出跳转页面
    protected $redirectAfterLogout;
    //验证规则
    protected $validateRegisterRule = [];
    protected $validateLoginRule = [];
    //验证的用户名字段
    protected $username='name';
    //guard
    protected $guard;
    //限制登录次数
    protected $maxLoginAttempts = 5;
    //锁定秒数
    protected $lockoutTime = 60;
    //注册页面模板
    protected $registerView;
    //登录页面模板
    protected $loginView;
    //登录请求数组
    protected $validateLoginErrorMsg = [];
    protected $loginFailMsg = [];
    protected $loginFailReturn = [];
    //注册请求数组
    protected $validateRegisterErrorMsg = [];
    protected $registerFailMsg = [];
    protected $registerFailReturn = [];
    public function __construct(){
        //中间件跳过logout方法
        $this->middleware($this->guestMiddleware(), ['except' => 'logout']);
    }
    //验证数据
    protected function validator(array $data){
        return Validator::make($data,$this->validateRegisterRule,$this->validateRegisterErrorMsg);
    }
    //登录验证
   protected function getCredentials(Request $request)
    {
        return $request->only($this->loginUsername(), 'password');
    }
    //创建新用户
    protected function create(array $data){
        
    }
    /**
     * Get the failed login response instance.
     *
     * @param \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    //登录失败响应
    protected function sendFailedLoginResponse(Request $request)
    {
        return redirect()->back()
        ->withInput($request->only($this->loginFailReturn))
        ->withErrors($this->loginFailMsg);
    }
    //登录验证
    protected function validateLogin(Request $request)
    {
        $this->validate($request, $this->validateLoginRule,$this->validateLoginErrorMsg);
    }
    //登录
    public function login(Request $request){
        $this->validateLogin($request);
    
        // If the class is using the ThrottlesLogins trait, we can automatically throttle
        // the login attempts for this application. We'll key this by the username and
        // the IP address of the client making these requests into this application.
        $throttles = $this->isUsingThrottlesLoginsTrait();
    
        if ($throttles && $lockedOut = $this->hasTooManyLoginAttempts($request)) {
            $this->fireLockoutEvent($request);
    
            return $this->sendLockoutResponse($request);
        }
    
        $credentials = $this->getCredentials($request);
        $auth = \App::make('App\Core\Auth');
        if ($auth->attempt($credentials, $request->has('remember'),$this->getGuard())) {
            return $this->handleUserWasAuthenticated($request, $throttles);
        }else{
            return $this->sendFailedLoginResponse($request);
        }
    
        // If the login attempt was unsuccessful we will increment the number of attempts
        // to login and redirect the user back to the login form. Of course, when this
        // user surpasses their maximum number of attempts they will get locked out.
        if ($throttles && ! $lockedOut) {
            $this->incrementLoginAttempts($request);
        }
    
        return $this->sendFailedLoginResponse($request);
    }
    //注册
    protected function register(Request $request){
        $validator = $this->validator($request->all());
        
        if ($validator->fails()) {
            $this->throwValidationException(
                $request, $validator
            );
        }
        $auth = \App::make('App\Core\Auth');
        $result = $auth->login($this->create($request->all()),$this->getGuard());
        if($auth->login($this->create($request->all()),$this->getGuard())){
            return redirect($this->redirectPath());
        }else{
            return redirect()->back()
            ->withInput($request->only($this->registerFailReturn))
            ->withErrors($this->registerFailMsg);
        }
        
        
       // return redirect($this->redirectPath());
    }
}
