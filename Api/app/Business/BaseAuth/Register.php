<?php 
namespace App\Business\BaseAuth;
use App\Business\Business;
class Register extends Business {   
    //验证规则
    protected $validateRule = [];
    protected $validateErrorMsg = [];
    //guard
    protected $guard;
    protected function getRequest(){
        return  \App::make('\App\Core\Request');
    }
    protected function register(){
        $result = array('status'=>true,'msg'=>$this->lang('auth.register.success'));
        try{
            $data = $this->getRequest()->getParam();
            
            $validator = $this->validate($data);
            if($validator!==true)
                throw new \Exception($this->lang('validate.error'),1000);
            if (!$this->create()) 
                throw new \Exception($this->lang('auth.register.fail'),1003);
            $this->registered();
        }catch(\Exception $e){
            $code = $e->getCode();
            if($code==1000)
                $result['validator'] = $validator;
            $result['status']=false;
            $result['msg'] = $e->getMessage();
            $result['code'] = $code;
        }
        return $result;
    }
    protected function validate($data){
        $validator = $this->validator($data, $this->validateRule,$this->validateErrorMsg);
        return $validator;
    }
    protected function registered(){
        
    }
}
?>