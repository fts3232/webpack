<?php 
namespace App\Business\Home;
use App\Business\BaseAuth\Auth as BaseAuth;
use App\Business\BaseAuth\ThrottlesLogins;
use  App\Business\Home\MT4;
use App\Models\Account;
use App\Models\Customer;
class Auth extends BaseAuth {   
    use ThrottlesLogins;
    //验证规则
    protected $validateRule = [
        'username'=>'required',
        'password'=>'required',
        'verficode'=>'required|captcha'
    ];
    protected $validateErrorMsg = [];
    //验证的用户名字段
    protected $username = 'ACC_ID';
    //guard
    protected $guard;
    //
    protected function __construct(){
        $this->validateErrorMsg = [
            'username.required'=>$this->lang('validate.username.required'),
            'password.required'=>$this->lang('validate.password.required'),
            'verficode.required'=>$this->lang('validate.verficode.required'),
            'verficode.captcha'=>$this->lang('validate.verficode.captcha')
        ];
    }
    protected function attemptLogin(){
        $return = ['status'=>true];
        try{
            $username = $this->getRequest()->getParam('username');
            $password = $this->getRequest()->getParam('password');
            /* if(!MT4::check( $username,$password))
                throw new \Exception($this->lang('auth.login.fail'),1003); */
            $user = Customer::findUser($username,$password);
            if(!$user)
                throw new \Exception($this->lang('auth.login.fail'),1011);
            Customer::changeLastLogin($user->CUS_ID);
            $auth = $this->getAuth();
            $auth->login($user);
        }catch(\Exception $e){
            $return['status'] = false;
            $return['msg'] = $e->getMessage();
            $return['code']=$e->getCode();
        }
        return $return;
    }
}
?>