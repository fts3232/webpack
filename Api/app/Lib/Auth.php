<?php 
namespace App\Lib;
use Illuminate\Support\Facades\Auth as LaravelAuth;
class Auth {   
    public function __call($methodName,$args){
        $log = \App::make('\App\Lib\Log');
        try{
            return call_user_func_array(array(Auth::class,$methodName),$args);
        }catch(\Exception $e){
            $log->write($e,'alert');
            return false;
        }
    }
    protected function getSession(){
        return \App::make('App\Lib\Session');
    }
    //is login
    protected function isLogin($guard=''){
        return $this->getSession()->has($guard.'_user');
    }
    //get login user
    protected function getLoginUser($guard=''){
        return $this->getSession()->get($guard.'_user');
        //return LaravelAuth::guard($guard)->user();
    }
    //login
    protected function login($user,$guard=''){
        $this->getSession()->set($guard.'_user',$user);
    }
   /*  protected function login($id,$guard='',$remember=false){
        return LaravelAuth::guard($guard)->loginUsingId($id, $remember);
    } */
    //logout
    protected function logout($guard=''){
        return $this->getSession()->delete($guard.'_user');
        //return LaravelAuth::guard($guard)->logout();
    }
}
?>