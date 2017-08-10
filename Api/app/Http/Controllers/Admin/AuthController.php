<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Business\Admin\Auth;
use App\Business\Admin\Register;
use App\Models\Users;
use Hash;
class AuthController extends Controller
{
    /**
     * Create a new authentication controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest:admin', ['except' => 'logout']);
    }
    
    public function showLoginForm(){
        return $this->display('admin.auth.login');
    }
    
    public function login(){
        $request = \App::make('App\Lib\Request');
        $result = Auth::login();
        if($result['status']){
            return $this->redirect('/admin');
        }else{
           $error = isset($result['validator'])?$result['validator']:['name'=>$result['msg']];
           return  $this->back()->withErrors($error);
        }
    }
    public function logout(){
        Auth::logout();
        return $this->redirect('/admin/login');
    }
    public function showRegisterForm(){
        return $this->display('admin.auth.register');
    }
    public function register(){
        $result = Register::register();
        var_dump($result);
    }
}
