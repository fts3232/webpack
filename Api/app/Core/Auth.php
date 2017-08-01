<?php 
namespace App\Core;
use Illuminate\Support\Facades\Auth as LaravelAuth;
class Auth {   
    public function __call($methodName,$args){
        $log = \App::make('\App\Core\Log');
        try{
            return call_user_func_array(array(Auth::class,$methodName),$args);
        }catch(\Exception $e){
            $log->write($e,'alert');
            return false;
        }
    }
    protected function attempt($user,$guard='',$remember=false){
        return LaravelAuth::guard($guard)->attempt($user, $remember);
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
    protected function login($id,$guard=''){
        return LaravelAuth::guard($guard)->loginUsingId($id);
    }
    //logout
    protected function logout($guard=''){
        return LaravelAuth::guard($guard)->logout();
    }
}
?>