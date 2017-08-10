<?php 
namespace App\Business\Home;
use App\Business\BaseAuth\Register;
use App\Business\Business;
use Captcha;
class TradingAccount extends Business{
    use Register;
    //验证规则
    protected $step1Rule = [
        //step1
        'platform'=>'required|in:MT4,FX Trader',
        'account_type'=>'required|in:Mini Account,Standard account',
        'account_currency'=>'required|in:USD,CHF',
        'name'=>['required','regex:/(^[A-Za-z\x{4e00}-\x{9fa5}]+)$/u'],
        'certificate_type'=>'required|in:ID Cart,Number 1,Number 2',
        'document_number'=>['required','regex:/(^[A-Za-z0-9\s]+)$/'],
        'birthday'=>'required|date_format:Y-m-d',
        'resid_addr'=>'required',
        'mobile'=>['required','regex:/^([2,3,5,6,8,9]\d{7}|1(3[0-9]|4[579]|5[0-35-9]|7[35-8]|8[0-9])\d{8})$/'],
        'email'=>'required|email',
        'verficode'=>'required',
    ];
    protected $step2Rule = [
        //step2
        'account_name'=>['required','regex:/(^[A-Za-z\x{4e00}-\x{9fa5}]+)$/u'],
        'bank_name'=>['required','in:ICBC,SPA,IIS'],
        'bank_account'=>['required','regex:/^([A-Za-z0-9-\s]+)$/'],
        'bank_area'=>['required','in:CHINA,USA'],
        'bank_address'=>['required','regex:/(^[A-Za-z0-9\x{4e00}-\x{9fa5}]+)$/u'],
        'acct_bran_bank'=>['required','regex:/(^[A-Za-z0-9\x{4e00}-\x{9fa5}]+)$/u'],
        'cart_type'=>'required|in:Debit Card,ICBC Card,BBK Card,',
        'cart_currency'=>'required|in:IIS,USD,CHF',
    ];
    protected function __construct(){
        $this->validateStep1ErrorMsg = [
            'platform.required'=>$this->lang('validate.platform.required'),
            'platform.in'=>$this->lang('validate.platform.in'),
            'account_type.required'=>$this->lang('validate.acct_szie.required'),
            'account_type.in'=>$this->lang('validate.acct_size.in'),
            'account_currency.required'=>$this->lang('validate.acct_currency.required'),
            'name.required'=>$this->lang('validate.name.required'),
            'name.regex'=>$this->lang('validate.name.regex'),
            'certificate_type.required'=>$this->lang('validate.certificate_type.required'),
            'certificate_type.in'=>$this->lang('validate.certificate_type.regex'),
            'document_number.required'=>$this->lang('validate.document_number.required'),
            'document_number.regex'=>$this->lang('validate.document_number.regex'),
            'birthday.required'=>$this->lang('validate.birthday.required'),
            'birthday.date_format'=>$this->lang('validate.birthday.date_format'),
            'resid_addr.required'=>$this->lang('validate.resid_addr.required'),
            'email.required'=>$this->lang('validate.email.required'),
            'email.email'=>$this->lang('validate.email.email'),
            'mobile.required'=>$this->lang('validate.mobile.required'),
            'mobile.regex'=>$this->lang('validate.mobile.regex'),
            'verficode.required'=>$this->lang('validate.verficode.required'),
            'verficode.captcha'=>$this->lang('validate.verficode.captcha'),
         ];
        $this->validateStep2ErrorMsg = [
            //step2
            'account_name.required'=>$this->lang('validate.account_name.required'),
            'account_name.regex'=>$this->lang('validate.account_name.regex'),
            'bank_name.required'=>$this->lang('validate.bank_name.required'),
            'bank_name.regex'=>$this->lang('validate.bank_name.regex'),
            'bank_account.required'=>$this->lang('validate.bank_account.required'),
            'bank_account.regex'=>$this->lang('validate.bank_account.regex'),
            'bank_area.required'=>$this->lang('validate.bank_area.required'),
            'bank_area.regex'=>$this->lang('validate.bank_area.regex'),
            'bank_address.required'=>$this->lang('validate.bank_address.required'),
            'bank_address.regex'=>$this->lang('validate.bank_address.regex'),
            'acct_bran_bank.required'=>$this->lang('validate.acct_bran_bank.required'),
            'acct_bran_bank.regex'=>$this->lang('validate.acct_bran_bank.regex'),
            'card_type.required'=>$this->lang('validate.card_type.required'),
            'card_type.in'=>$this->lang('validate.card_type.in'),
            'cart_currency.required'=>$this->lang('validate.cart_currency.required'),
            'cart_currency.in'=>$this->lang('validate.cart_currency.in'),
        ];
    }
    protected function create(){
        return true;
    }
    protected function validateStep1($data){
        $validator = $this->validator($data, $this->step1Rule,$this->validateStep1ErrorMsg);
        return $validator;
    }
    protected function validateStep2($data){
        $validator = $this->validator($data, $this->step2Rule,$this->validateStep2ErrorMsg);
        return $validator;
    }
    protected function Step1(){
        $result = array('status'=>true);
        try{
            $data = $this->getRequest()->getParam();
            $validator = $this->validateStep1($data);
            if($validator!==true)
                throw new \Exception($this->lang('errors.validate'),1001);
            if(!Captcha::check($data['verficode'])){
                $session = \App::make('\App\Lib\Session');
                $validator = new \StdClass();
                $validator->verficode = [$this->lang('validate.verficode.captcha')];
                throw new \Exception($this->lang('errors.validate'),1001);
            }
        }catch(\Exception $e){
            $code = $e->getCode();
            if($code==1001)
                $result['validator'] = $validator;
            $result['status']=false;
            $result['msg'] = $e->getMessage();
            $result['code'] = $code;
        }
        return $result;
    }
    protected function Step2(){
        $result = array('status'=>true);
        try{
            $data = $this->getRequest()->getParam();
            $validator = $this->validateStep2($data);
            if($validator!==true)
                throw new \Exception($this->lang('errors.validate'),1001);
        }catch(\Exception $e){
            $code = $e->getCode();
            if($code==1001)
                $result['validator'] = $validator;
            $result['status']=false;
            $result['msg'] = $e->getMessage();
            $result['code'] = $code;
        }
        return $result;
    }
    protected function Step3(){
        $this->validateRule =  array_merge($this->step1Rule,$this->step2Rule);
        $this->validateErrorMsg  =  array_merge($this->validateStep1ErrorMsg,$this->validateStep2ErrorMsg);
        return $this->register();
    }
    protected function Step4(){
        $data = array('status'=>true,'msg'=>$this->lang('upload.success'));
        try{
            $request = \App::make('\App\Lib\Request');
            $result = $request->upload('file','upload/user');
            if(!$result['status'])
                throw new \Exception($result['msg']);
            $data['file']['file'] = $result['file'];
            $result = $request->upload('file2','upload/user');
            if(!$result['status'])
                throw new \Exception($result['msg']);
            $data['file']['file1'] = $result['file'];
            $result = $request->upload('file3','upload/user');
            if(!$result['status'])
                throw new \Exception($result['msg']);
            $data['file']['file2'] = $result['file'];
        }catch(\Exception $e){
            $data = $result ;
        }
        return $data;
    }
    protected function registered(){
        $session = \App::make('\App\Lib\Session');
        $session->delete('captcha');
    }
}
?>