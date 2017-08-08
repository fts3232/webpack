<?php 
namespace App\Business\Home;
use App\Business\BaseAuth\Auth as Register;
class RealAccount extends Register{
    //验证规则
    protected $validateRule = [
        'platform'=>'required|in:xx,xx',
        'acct_size'=>'required|in:xx,xx',
        'acct_currency'=>'required|in:CNY,USD,',
        'name'=>['required','regex:/([^A-Za-z\x{4e00}-\x{9fa5}]+)/u'],
        'title'=>'required|in:xx,xx',
        'country'=>['required','regex:/([^A-Za-z ]+)|(^\s*$)/'],
        'id_type'=>'required|in:xx,xx',
        'id_no'=>['required','regex:/([^A-Za-z ]+)|(^\s*$)/'],
        'email'=>'required|email',
        'mobile'=>['required','regex:/^([2,3,5,6,8,9]\d{7}|1(3[0-9]|4[579]|5[0-35-9]|7[35-8]|8[0-9])\d{8})$/'],
        'qq'=>'regex:/^[0-9]{5,15}$/',
        //'referee'=>''
        'bank_name'=>['required','regex:/([^A-Za-z ]+)|(^\s*$)/'],
        'bank_account'=>['required','regex:/([^A-Za-z ]+)|(^\s*$)/'],
        'bank_address0'=>['required','regex:/([^A-Za-z ]+)|(^\s*$)/'],
        'bank_address1'=>['required','regex:/([^A-Za-z ]+)|(^\s*$)/'],
        'bank_branch'=>['required','regex:/([^A-Za-z0-9\x{4e00}-\x{9fa5}]+)|(^\s*$)/u'],
        'card_type'=>'required|in:xx,xx,',
        'bank_currency'=>'required|in:CNY,USD,',
    ];
    protected function __construct(){
        $this->validateErrorMsg = [
            'platform.required'=>$this->lang('validate.platform.required'),
            'platform.in'=>$this->lang('validate.platform.in'),
            'acct_size.required'=>$this->lang('validate.acct_szie.required'),
            'acct_size.in'=>$this->lang('validate.acct_size.in'),
            'acct_currency.required'=>$this->lang('validate.acct_currency.required'),
            'name.required'=>$this->lang('validate.name.required'),
            'name.regex'=>$this->lang('validate.name.regex'),
            'title.required'=>$this->lang('validate.title.required'),
            'title.in'=>$this->lang('validate.title.in'),
            'country.required'=>$this->lang('validate.country.required'),
            'country.regex'=>$this->lang('validate.country.regex'),
            'id_type.required'=>$this->lang('validate.id_type.required'),
            'id_type.regex'=>$this->lang('validate.id_type.regex'),
            'id_no.required'=>$this->lang('validate.id_no.register'),
            'id_no.regex'=>$this->lang('validate.id_no.regex'),
            'email.requried'=>$this->lang('validate.email.required'),
            'email.email'=>$this->lang('validate.email.email'),
            'mobile.required'=>$this->lang('validate.mobile.required'),
            'mobile.regex'=>$this->lang('validate.mobile.regex'),
            'qq.regex'=>$this->lang('validate.qq.regex'),
            'bank_name.required'=>$this->lang('validate.bank_name.register'),
            'bank_name.regex'=>$this->lang('validate.bank_name.regex'),
            'bank_account.required'=>$this->lang('validate.bank_account.required'),
            'bank_account.regex'=>$this->lang('validate.bank_account.regex'),
            'bank_address0.required'=>$this->lang('validate.bank_address0.required'),
            'bank_address0.regex'=>$this->lang('validate.bank_address0.regex'),
            'bank_address1.required'=>$this->lang('validate.bank_address1.required'),
            'bank_address1.regex'=>$this->lang('validate.bank_address1.regex'),
            'bank_branch.required'=>$this->lang('validate.bank_branch.required'),
            'bank_branch.regex'=>$this->lang('validate.bank_branch.regex'),
            'card_type.required'=>$this->lang('validate.card_type.required'),
            'card_type.in'=>$this->lang('validate.card_type.in'),
            'bank_currency.required'=>$this->lang('validate.bank_currency.required'),
            'bank_currency.in'=>$this->lang('validate.bank_currency.in'),
        ];
    }
    protected function create(){
        
    }
    protected function registered(){
        
    }
}
?>