<?php 
namespace App\Business\Home;
use App\Business\BaseAuth\Auth as Register;
class SimulateAccount extends Register{
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
            'platform.required'=>'',
            'platform.in'=>'',
            'acct_szie.required'=>'',
            'acct_size.in'=>'',
            'acct_currency.required'=>'',
            'name.required'=>'',
            'name.regex'=>'',
            'title.required'=>'',
            'title.in'=>'',
            'country.required'=>'',
            'country.regex'=>'',
            'id_type.required'=>'',
            'id_type.regex'=>'',
            'id_no.required'=>'',
            'id_no.regex'=>'',
            'email.requried'=>'',
            'email.email'=>'',
            'mobile.required'=>'',
            'mobile.regex'=>'',
            'qq.regex'=>'',
            'bank_name.required'=>'',
            'bank_name.regex'=>'',
            'bank_account.required'=>'',
            'bank_account.regex'=>'',
            'bank_address0.required'=>'',
            'bank_address0.regex'=>'',
            'bank_address1.required'=>'',
            'bank_address1.regex'=>'',
            'bank_branch.required'=>'',
            'bank_branch.regex'=>'',
            'card_type.required'=>'',
            'card_type.in'=>'',
            'bank_currency.required'=>'',
            'bank_currency.in'=>'',
        ];
    }
    protected function create(){
        
    }
    protected function registered(){
        
    }
}
?>