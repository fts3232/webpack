<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
class LoginController extends Controller
{
    protected $guard = 'admin';
    public function __construct(){
        $this->middleware($this->guestMiddleware(), ['except' => 'logout']);
    }
    //
    public function logout(){
        return Auth::guard('admin')->logout();
    }
    public function check(){
        return Auth::guard('admin')->check();
    }
    public function login($data){
        return Auth::guard('admin')->attempt($data);
    }
}
