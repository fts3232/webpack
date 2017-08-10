<?php 
namespace App\Business\Home;
use App\Business\BaseAuth\Auth as BaseAuth;
use App\Business\BaseAuth\ThrottlesLogins;
use MT4;
use App\Models\Users;
class Auth extends BaseAuth {   
    use ThrottlesLogins;
    //验证规则
    protected $validateRule = [
        'username'=>'required',
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
            'username.required'=>$this->lang('validate.username.required'),
            'password.required'=>$this->lang('validate.password.required'),
            'verficode.required'=>$this->lang('validate.verficode.required'),
            'verficode.captcha'=>$this->lang('validate.verficode.captcha')
        ];
    }
    protected function attemptLogin(){
        return false;
        $id = Users::check($this->getRequest()->getParam('username'),$this->getRequest()->getParam('password'));
        return $id?$this->getAuth()->login($id,$this->guard,$this->getRequest()->has('remember')):false;
        /* if(MT4::check($this->getRequest()->getParam('username'),$this->getRequest()->getParam('password'))){
            $id = Users::check($this->getRequest()->getParam('username'),$this->getRequest()->getParam('password'));
            return $this->getAuth()->login($id,$this->guard,$this->getRequest()->has('remember'));
        }
        return false; */
    }
}
?>