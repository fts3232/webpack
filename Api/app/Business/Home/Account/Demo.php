<?php 
namespace App\Business\Home\Account;
use App\Business\BaseAuth\Register;
use App\Business\Home\Account\Account;
class Demo extends Account{
    use Register;
    //验证规则
    protected $validateRule = [
        'account_type'=>'required|in:standard accounts,demo accounts',
        'name'=>['required','regex:/(^[A-Za-z\x{4e00}-\x{9fa5}]+)$/u'],
        'email'=>'required|email',
        'mobile'=>['required','regex:/^([2,3,5,6,8,9]\d{7}|1(3[0-9]|4[579]|5[0-35-9]|7[35-8]|8[0-9])\d{8})$/'],
        'verficode'=>'required',
    ];
    protected $validateErrorMsg = [];
    protected function __construct(){
        $this->validateErrorMsg = [
            'account_type.required'=>$this->lang('validate.account_type.required'),
            'account_type.in'=>$this->lang('validate.account_type.in'),
            'name.required'=>$this->lang('validate.name.required'),
            'name.regex'=>$this->lang('validate.name.regex'),
            'email.required'=>$this->lang('validate.email.required'),
            'email.email'=>$this->lang('validate.email.email'),
            'mobile.required'=>$this->lang('validate.mobile.required'),
            'mobile.regex'=>$this->lang('validate.mobile.regex'),
            'verficode.required'=>$this->lang('validate.verficode.required'),
            'verficode.captcha'=>$this->lang('validate.verficode.captcha'),
        ];
    }
    protected function create(){
        return true;
    }
    protected function registered(){
        
    }
}
?>