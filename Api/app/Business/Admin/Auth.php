<?php 
namespace App\Business\Admin;
use App\Business\BaseAuth\Auth as BaseAuth;
use App\Business\BaseAuth\ThrottlesLogins;
use App\Models\Users;

class Auth extends BaseAuth {
    use ThrottlesLogins;
    //验证规则
    protected $validateRule = [
        'name'=>'required',
        'password'=>'required',
        'verficode'=>'required|captcha'
    ];
    protected $validateErrorMsg = [];
    //验证的用户名字段
    protected $username = 'user';
    //guard
    protected $guard='admin';
    //
    protected function __construct(){
        $this->validateErrorMsg = [
            'name.required'=>$this->lang('validate.name.required'),
            'password.required'=>$this->lang('validate.password.required'),
            'verficode.required'=>$this->lang('validate.verficode.required'),
            'verficode.captcha'=>$this->lang('validate.verficode.captcha')
        ];
    }
    protected function attemptLogin(){
        $id = Users::check($this->getRequest()->getParam('name'),$this->getRequest()->getParam('password'));
        return $this->getAuth()->login($id,$this->guard,$this->getRequest()->has('remember'));
    }
}
?>