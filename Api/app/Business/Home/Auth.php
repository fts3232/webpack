<?php 
namespace App\Business\Home;
use App\Business\BaseAuth\Auth as BaseAuth;
use MT4;
class Users extends Business {   
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
    protected $guard;
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
        if(MT4::check($this->getRequest()->getParam('name'),$this->getRequest()->getParam('password'))){
            $id = Users::check($this->getRequest()->getParam('name'),$this->getRequest()->getParam('password'));
            return $this->getAuth()->login($id,$this->guard,$this->getRequest()->has('remember'));
        }
        return false;
    }
}
?>