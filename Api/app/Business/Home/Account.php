<?php 
namespace App\Business\Home;
use App\Models\Users;
use App]Business\Business;
class Account extends Business {   
    public function register($data){
        $result = array('status'=>true,'msg'=>'');
        try{
            $result = Users::create($data);
            if(!$result)
                throw new \Exception($this->lang('asdsa'));
        }catch(\Exception $e){
            $result = array('status'=>false,'msg'=>$e->getMessage());
        }
        return $result;
    }
    public function login($id){
        $result = array('status'=>true,'msg'=>'');
        try{
            $auth = \App::make('App\Core\Auth');
            return $atuh->login($id);
        }catch(\Excetpion $e){
            $result = array('status'=>false,'msg'=>$e->getMessage());
        }
        return $result;
    }
    public function logout($id){
        
    }
    public function resetPassword($id){
        
    }
}
?>