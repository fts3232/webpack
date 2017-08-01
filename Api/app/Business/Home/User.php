<?php 
namespace App\Business\Home;
use App\Models\Users;
use App\Business\Business;
class SimulateAccount extends Business {   
    private $loginFailMsg;
    public function __construct(){
        $this->loginFailMsg = $this->lang('home.error.5000');
    }
    //login
    protected function login($data){
        $data = array('status'=>true,'msg'=>'');
        try{
            $user = Users::findUser($data);
            if(!$user)
                throw new \Exception($this->lang());
            $auth = \App::make('App\Core\Auth');
            $result = $auth->login($id,'admin');
            if(!$result )
                throw new \Exception($this->loginFailMsg,5000);
        }catch(\Excetpion $e){
            $data = array('status'=>false,'msg'=>$e->getMessage(),'code'=>$e->getCode());
        }
        return $data;
    }
    //logout
    public function logout($id){
        $auth = \App::make('App\Core\Auth');
        return $auth->logout();
    }
    //reset password
    public function resetPassword($id){
    
    }
    //edit person info
    public function editPersonInfo($data){
    
    }
    //withdraw
    public function withdraw($data){
    
    }
}
?>