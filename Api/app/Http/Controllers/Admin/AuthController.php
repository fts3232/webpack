<?php

namespace App\Http\Controllers\Admin;

use App\Models\Users;
use App\Http\Controllers\BaseAuthController;

class AuthController extends BaseAuthController
{
    /**
     * Where to redirect users after login / registration.
     *
     * @var string
     */
    protected $redirectTo = '/admin';
    protected $redirectAfterLogout = '/admin/login';
    protected $guard = 'admin';
    protected $username='name';
    protected $validateLoginRule = [
        'name'=>'required',
        'password'=>'required',
        'verficode'=>'required|captcha'
    ];
    protected $validateRegisterRule = [
        'name'=>'required',
        'email'=>'required|email',
        'password'=>'required|confirmed',
        'password_confirmation'=>'required',
        'verficode'=>'required|captcha'
    ];
    protected $loginView = 'admin.auth.login';
    protected $registerView = 'admin.auth.register';
    protected $validateLoginErrorMsg = [
       'name.required'=>'用户名不能为空',
        'password.required'=>'密码不能为空',
        'verficode.required'=>'验证码不能为空',
        'verficode.captcha'=>'验证码错误'
    ];
    protected $validateRegisterErrorMsg = [
        'name.required'=>'用户名不能为空',
        'email.required'=>'邮箱不能为空',
        'email.email'=>'邮箱格式不正确',
        'password.required'=>'密码不能为空',
        'password.confirmed'=>'密码不一致',
        'password_confirmation.required'=>'确认密码不能为空',
        'verficode.required'=>'验证码不能为空',
        'verficode.captcha'=>'验证码错误'
    ];
    protected $loginFailMsg = [
        'name'=>'用户名或密码不正确'
    ];
    protected $loginFailReturn = ['name','verficode'];
    protected $registerFailReturn = ['name','email','verficode'];
    /**
     * Create a new authentication controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware($this->guestMiddleware(), ['except' => 'logout']);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return User
     */
    protected function create(array $data)
    {
        $result = Users::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'created_at'=>'NOW()'
        ]);
        return $result;
    }
}
