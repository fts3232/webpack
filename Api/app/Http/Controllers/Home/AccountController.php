<?php

namespace App\Http\Controllers\Home;
use App\Http\Controllers\Controller;
use  App\Business\Home\Account\Demo;
use  App\Business\Home\Account\Standard;
class AccountController extends Controller
{
    //trading
    public function standard(){
        return $this->display('home.account.standardAccounts');
    }
    public function standardStep1(){
        $result = Standard::step1();
        return $this->json($result);
    }
    public function standardStep2(){
        $result = Standard::step2();
        return $this->json($result);
    }
    public function standardStep3(){
        $result = Standard::step3();
        return $this->json($result);
    }
    public function standardStep4(){
        $result = Standard::step4();
        return $this->display('home.account.upload',['result'=>$result]);
    }
    public function standardValidator($key){
        $result = Standard::singleValidator($key);
        return $this->json($result);
    }
    //demo
    public function demoValidator($key){
        $result = Demo::singleValidator($key);
        return $this->json($result);
    }
    public function demo(){
        return $this->display('home.account.demoAccounts');
    }
    public function registerDemo(){
        $result = Demo::register();
        return $this->json($result);
    }
    //mt4
    public function cidtMT4(){
        return $this->display('home.account.cidtMT4');
    }
}
