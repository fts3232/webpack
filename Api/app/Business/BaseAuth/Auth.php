<?php 
namespace App\Business\BaseAuth;
use App\Business\Business;
use App\Business\Auth\ThrottlesLogins;
class Auth extends Business {   
    //验证规则
    protected $validateRule = [];
    protected $validateErrorMsg = [];
    //验证的用户名字段
    protected $username;
    //guard
    protected $guard;
    
    protected function getRequest(){
       return  \App::make('\App\Lib\Request');
    }
    protected function getAuth(){
        return  \App::make('\App\Lib\Auth');
    }
    //登录
    protected function login(){
        $result = array('status'=>true,'msg'=>$this->lang('auth.login.success'));
        try{
            $data = $this->getRequest()->getParam();
            $validator = $this->validate($data);
            if($validator!==true)
                throw new \Exception($this->lang('errors.validate'),1001);
            if ($this->hasTooManyLoginAttempts()) {
                $seconds = $this->limiter()->availableIn( $this->throttleKey() );
                throw new \Exception($this->lang('auth.login.lock',['seconds'=>$seconds]),1002);
            }
            if (!$this->attemptLogin()) 
                throw new \Exception($this->lang('auth.login.fail'),1003);
            $this->clearLoginAttempts();
        }catch(\Exception $e){
            $this->incrementLoginAttempts();
            $code = $e->getCode();
            if($code==1001)
                $result['validator'] = $validator;
            $result['status']=false;
            $result['msg'] = $e->getMessage();
            $result['code'] = $code;
        }
        return $result;
    }
    //登录验证
    protected function validate($data){
        $validator = $this->validator($data, $this->validateRule,$this->validateErrorMsg);
        return $validator;
    }
    protected function username(){
        return $this->username;
    }
    //登出
    protected function logout(){
        try{
            $session = \App::make('\App\Lib\Session');
            $this->getAuth()->logout($this->guard);
            $session->flush();
            return true;
        }catch(\Exception $e){
            return false;
        }
    }
}
?>