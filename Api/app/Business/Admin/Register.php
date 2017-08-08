<?php 
namespace App\Business\Admin;
use App\Business\BaseAuth\Register as BaseRegister;
use App\Models\Users;

class Register extends BaseRegister {
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
    protected function create(){
    
    }
    protected function registered(){
    
    }
}
?>