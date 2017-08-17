<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use App\Business\Home\Auth;
use Illuminate\Support\Facades\DB;
class AuthController extends Controller
{
    private $loginSeo = [];
    public function __construct(){
        $this->loginSeo = [
            'title'=>$this->lang('seo.login.title'),
            'description'=>$this->lang('seo.login.description'),
            'keyword'=>$this->lang('seo.login.keyword'),
        ];
    }
    //auth
    public function login(){
        $result = Auth::login();
        return $this->json($result);
    }
    public function showLoginForm(){
        return $this->display('home.auth.login',$this->loginSeo);
    }
    public function logout(){
         Auth::logout();
        return redirect()->route('login');
    }
}
