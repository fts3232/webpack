<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use App\Models\Users;

class IndexController extends Controller
{

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){
        return $this->display('home.index');
    }
    public function tradingAccounts(){
        return $this->display('home.account.tradingAccounts');
    }
    public function demoAccounts(){
        return $this->display('home.account.demoAccounts');
    }
    public function cidtMT4(){
        return $this->display('home.account.cidtMT4');
    }
    public function productDetails(){
        return $this->display('home.productDetails');
    }
    public function aboutUs(){
        return $this->display('home.aboutUs');
    }
    //auth
    public function login(){
        return $this->display('home.auth.login');
    }
    public function register(){
        return $this->display('home.auth.register');
    }
    
    //member
    public function personalInfo(){
        return $this->display('home.member.personalInfo');
    }
    public function onlineDeposit(){
        return $this->display('home.member.onlineDeposit');
    }
    public function injection(){
        return $this->display('home.member.injection');
    }
    public function withdrawal(){
        return $this->display('home.member.withdrawal');
    }
}
