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
    //is login
    protected function isLogin($guard=''){
        return LaravelAuth::guard($guard)->check();
    }
    //get login user
    protected function getLoginUser($guard=''){
        return LaravelAuth::guard($guard)->user();
    }
    //login
    protected function login($id,$guard='',$remember=false){
        return LaravelAuth::guard($guard)->loginUsingId($id, $remember);
    }
    //logout
    protected function logout($guard=''){
        return LaravelAuth::guard($guard)->logout();
    }
}
?>