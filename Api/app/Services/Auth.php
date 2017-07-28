<?php 
namespace App\Services;
use Illuminate\Support\Facades\Auth as LaravelAuth;
class Auth {   
    //is login
    public function isLogin($guard=''){
        return LaravelAuth::guard($guard)->check();
    }
    //get login user
    public function getLoginUser($guard=''){
        return LaravelAuth::guard($guard)->user();
    }
    //login
    public function login($user,$guard=''){
        return LaravelAuth::guard($guard)->login();
    }
    //logout
    public function logout($guard=''){
        return LaravelAuth::guard($guard)->logout();
    }
}
?>