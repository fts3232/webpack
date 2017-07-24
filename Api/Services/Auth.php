<?php 
namespace App\Services;
use Illuminate\Support\Facades\Auth;
class Auth{
    protected $guard;
    //
    public function __construct(){
        Auth::guard($this->$guard);
    }
    //
    public function login($login){
        return Auth::attempt($login);
    }
    //
    public function logout(){
        return Auth::logout();
    }
    //
    public function check(){
        return Auth::check();
    }
    //
    public function getUser(){
        return Auth::user();
    }
    //
    public function getID(){
        return Auth::id();
    }
}
?>