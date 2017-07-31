<?php

namespace App\Http\Controllers\Admin;

use App\Models\Users;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
    protected $registerFailMsg = [
        'exception'=>'注册失败'
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
        $this->loginFailMsg = [
            'name'=>$this->lang('auth.login.fail')
        ];
        $this->registerFailMsg = [
            'exception'=>$this->lang('auth.login.fail')
        ];
        $this->validateRegisterErrorMsg =  [
            'name.required'=>$this->lang('auth.name.required'),
            'email.required'=>$this->lang('auth.email.required'),
            'email.email'=>$this->lang('auth.email.email'),
            'password.required'=>$this->lang('auth.password.required'),
            'password.confirmed'=>$this->lang('auth.password.confirmed'),
            'password_confirmation.required'=>$this->lang('auth.password_confirmation.required'),
            'verficode.required'=>$this->lang('auth.verficode.required'),
            'verficode.captcha'=>$this->lang('auth.verficode.captcha'),
        ];
        $this->validateLoginErrorMsg = [
            'name.required'=>$this->lang('auth.name.required'),
            'password.required'=>$this->lang('auth.password.required'),
            'verficode.required'=>$this->lang('auth.verficode.required'),
            'verficode.captcha'=>$this->lang('auth.verficode.captcha'),
        ];
        $this->middleware($this->guestMiddleware(), ['except' => 'logout']);
    }

    protected function create(array $data)
    {
        try{
            $result = Users::insert(
                "insert into users_copy(name,email,password,created_at) values(?,?,?,NOW())",
                [$data['name'],$data['email'],bcrypt($data['password'])]
            );
            return $result;
        }catch(\Exception $e){
            $this->throwCustomException($this->lang('auth.register.fail'));
        }
    }
}
