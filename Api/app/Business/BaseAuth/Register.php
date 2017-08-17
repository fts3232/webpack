<?php 
namespace App\Business\BaseAuth;
trait Register {   
    /* //验证规则
    protected $validateRule = [];
    protected $validateErrorMsg = [];
    //guard
    protected $guard; */
    protected function getRequest(){
        return  \App::make('\App\Lib\Request');
    }
    protected function getValidateRule(){
        return property_exists($this, 'validateRule') ? $this->validateRule : [];
    }
    protected function getValidateErrorMsg(){
        return property_exists($this, 'validateErrorMsg') ? $this->validateErrorMsg : [];
    }
    protected function register(){
        $result = array('status'=>true,'msg'=>$this->lang('auth.register.success'));
        try{
            $data = $this->getRequest()->getParam();
            $validator = $this->validate($data);
            if($validator!==true)
                throw new \Exception($this->lang('errors.validate'),1001);
            if (!$this->create($data)) 
                throw new \Exception($this->lang('auth.register.fail'),1004);
            $this->registered($data);
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
    protected function create($data){
        
    }
    protected function validate($data){
        $rule =  $this->getValidateRule();
        $msg = $this->getValidateErrorMsg();
        $validator = $this->validator($data, $rule,$msg);
        return $validator;
    }
    protected function registered($data){
        
    }
}
?>