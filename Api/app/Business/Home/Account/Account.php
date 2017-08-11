<?php 
namespace App\Business\Home\Account;
use App\Business\Business;
use Captcha;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
class Account extends Business{
    protected function singleValidator($key){
        $result = array('status'=>true);
        try{
            $value = $this->getRequest()->getParam($key);
            $rule = [$key=>$this->validateRule[$key]];
            $msg = $this->validateErrorMsg;
            $validator = $this->validator([$key=>$value],$rule, $msg);
            if($validator!==true)
                throw new \Exception($this->lang('errors.validate'),1001);
            if($key=='verficode' && !$this->checkVerficode($value)){
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
    protected function checkVerficode($value){
        $session = \App::make('\App\Lib\Session');
        if ( !  $session->has('captcha')){
            return false;
        }
    
        $key = $session->get('captcha.key');
    
        if ( ! $session->get('captcha.sensitive')) {
            $value = Str::lower($value);
        }
    
        return Hash::check($value, $key);
    }
}
?>