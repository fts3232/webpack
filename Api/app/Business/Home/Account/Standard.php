<?php 
namespace App\Business\Home\Account;
use App\Business\BaseAuth\Register;
use App\Business\Home\Account\Account;
use App\Models\Customer;
use App\Models\Account as AccountModel;
class Standard extends Account{
    use Register;
    protected $cus_id;
    protected $acc_id;
    //验证规则
    protected $step1Rule = [
        //step1
        'platform'=>'required|in:1,2',
        'account_type'=>'required|in:1,2',
        'account_currency'=>'required|in:1,2',
        'name'=>['required','regex:/(^[A-Za-z\x{4e00}-\x{9fa5}]+)$/u'],
        'password'=>['required','password:6,15'],
        'certificate_type'=>'required|in:1,2',
        'document_number'=>['required','regex:/(^[A-Za-z0-9\s]+)$/','id_number'],
        //'birthday'=>'required|date_format:Y-m-d',
        'mobile'=>['required','regex:/^([2,3,5,6,8,9]\d{7}|1(3[0-9]|4[579]|5[0-35-9]|7[35-8]|8[0-9])\d{8})$/','customer_mobile'],
        'email'=>'required|email|customer_email',
        'verficode'=>'required',
    ];
    protected $step2Rule = [
        //step2
        'account_name'=>['required','regex:/(^[A-Za-z\x{4e00}-\x{9fa5}]+)$/u'],
        'bank_name'=>['required','in:1,2,3'],
        'bank_account'=>['required','regex:/^([A-Za-z0-9-\s]+)$/'],
        'bank_area'=>['required','in:1,2,3,4'],
        'bank_address'=>['required','regex:/(^[A-Za-z0-9\x{4e00}-\x{9fa5}\s]+)$/u'],
        'acct_bran_bank'=>['required','regex:/(^[A-Za-z0-9\x{4e00}-\x{9fa5}\s]+)$/u'],
        'cart_type'=>'required|in:1,2',
        'cart_currency'=>'required|in:1,2,3',
    ];
    protected function __construct(){
        $this->validateStep1ErrorMsg = [
            'platform.required'=>$this->lang('validate.platform.required'),
            'platform.in'=>$this->lang('validate.platform.in'),
            'account_type.required'=>$this->lang('validate.account_type.required'),
            'account_type.in'=>$this->lang('validate.account_type.in'),
            'account_currency.required'=>$this->lang('validate.acct_currency.required'),
            'name.required'=>$this->lang('validate.name.required'),
            'name.regex'=>$this->lang('validate.name.regex'),
            'password.required'=>$this->lang('validate.password.required'),
            'password.password'=>$this->lang('validate.password.password'),
            'certificate_type.required'=>$this->lang('validate.certificate_type.required'),
            'certificate_type.in'=>$this->lang('validate.certificate_type.regex'),
            'document_number.required'=>$this->lang('validate.document_number.required'),
            'document_number.regex'=>$this->lang('validate.document_number.regex'),
            'document_number.id_number'=>$this->lang('validate.document_number.isExists'),
            'birthday.required'=>$this->lang('validate.birthday.required'),
            'birthday.date_format'=>$this->lang('validate.birthday.date_format'),
            'resid_addr.required'=>$this->lang('validate.resid_addr.required'),
            'email.required'=>$this->lang('validate.email.required'),
            'email.email'=>$this->lang('validate.email.email'),
            'email.customer_email'=>$this->lang('validate.email.isExists'),
            'mobile.required'=>$this->lang('validate.mobile.required'),
            'mobile.customer_mobile'=>$this->lang('validate.mobile.isExists'),
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
    private function getSession(){
        return \App::make('\App\Lib\Session');
    }
    private function getMail(){
        return \App::make('\App\Lib\Mail');
    }
    private function getAuth(){
        return \App::make('\App\Lib\Auth');
    }
    protected function singleValidator($key){
        $this->validateRule =  array_merge($this->step1Rule,$this->step2Rule);
        $this->validateErrorMsg  =  array_merge($this->validateStep1ErrorMsg,$this->validateStep2ErrorMsg);
        return parent::singleValidator($key);
    }
    protected function validateStep1($data){
        $auth =$this->getAuth();
        $rule = $this->step1Rule;
        if($auth->isLogin()){
            unset($rule['password'],$rule['name'],$rule['email'],$rule['mobile'],$rule['certificate_type'],$rule['document_number']);
        }
        $validator = $this->validator($data, $rule,$this->validateStep1ErrorMsg);
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
            if(!$this->checkVerficode($data['verficode'])){
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
            $request = $this->getRequest();
            $session = $this->getSession();
            $acc_id = $session->get('acc_id');
            $uploadDir = 'upload/user/'.$acc_id;
            if(!$acc_id)
                throw new \Exception($this->lang('upload.fail'),1001);
            $result = $request->upload('file',$uploadDir,'IDCard1.jpg');
            if(!$result['status'])
                throw new \Exception($result['msg'],$result['code']);
            $data['file']['file'] = $result['file'];
            $result = $request->upload('file2',$uploadDir,'IDCard2.jpg');
            if(!$result['status'])
                throw new \Exception($result['msg'],$result['code']);
            $data['file']['file1'] = $result['file'];
            $result = $request->upload('file3',$uploadDir,'Bank.jpg');
            if(!$result['status'])
                throw new \Exception($result['msg'],$result['code']);
            $data['file']['file2'] = $result['file'];
        }catch(\Exception $e){
            $data = array('status'=>false,'msg'=>$this->lang('upload.fail'),'code'=>$e->getCode());
        }
        return $data;
    }
    protected function validate($data){
        $rule =  $this->getValidateRule();
        $msg = $this->getValidateErrorMsg();
        $auth =$this->getAuth();
        if($auth->isLogin()){
            unset($rule['email'],$rule['password'],$rule['name'],$rule['mobile'],$rule['certificate_type'],$rule['document_number']);
        }
        $validator = $this->validator($data, $rule,$msg);
        return $validator;
    }
   
    protected function create($data){
        $return = false;
        $auth =$this->getAuth();
        try{
            if(!$auth->isLogin()){
                $data['ip'] = $this->getRequest()->ip();
                $this->cus_id = Customer::standardCustomerCreate($data);
                if(!$this->cus_id)
                    throw new \Exception('添加Customer表数据失败');
                $data['cus_id'] = $this->cus_id;
            }
            else{
                $user = $auth->getLoginUser();
                $data['cus_id'] = $user->CUS_ID;
            }
            $this->acc_id = AccountModel::standardAccountCreate($data);
            if(!$this->acc_id)
                throw new \Exception('添加Account表数据失败');
            $session = $this->getSession();
            $session->set('acc_id',$this->acc_id);
            return $this->acc_id;
        }catch(\Exception $e){
            $return = false;
        }
        return $return;
    }
    protected function registered($data){
        $auth =$this->getAuth();
        $session = $this->getSession();
        $session->delete('captcha');
        $mail = $this->getMail();
        if($auth->isLogin()){
            $user = $auth->getLoginUser();
            $email = $user->EMAIL;
        }else{
            $email = $data['email'];
        }
        $mail->send($email,$this->lang('email.standard.verification.title'),'home.email.standardVerification',['email'=>$email]);
    }
}
?>