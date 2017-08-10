<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use App\Business\Home\Auth;
use Illuminate\Support\Facades\DB;
class AuthController extends Controller
{
    //auth
    public function login(){
        $result = Auth::login();
        return $this->json($result);
    }
    public function showLoginForm(){
        return $this->display('home.auth.login');
    }
    public function logout(){
        Auth::logout();
        return $this->redirect('/login');
    }
}
