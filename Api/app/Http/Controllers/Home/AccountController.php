<?php

namespace App\Http\Controllers\Home;
use App\Http\Controllers\Controller;
use  App\Business\Home\DemoAccount;
use  App\Business\Home\TradingAccount;
class AccountController extends Controller
{
    public function trading(){
        return $this->display('home.account.tradingAccounts');
    }
    public function demo(){
        return $this->display('home.account.demoAccounts');
    }
    public function registerDemo(){
        $result = DemoAccount::register();
        return $this->json($result);
    }
    public function tradingStep1(){
        $result = TradingAccount::step1();
        return $this->json($result);
    }
    public function tradingStep2(){
        $result = TradingAccount::step2();
        return $this->json($result);
    }
    public function tradingStep3(){
        $result = TradingAccount::step3();
        return $this->json($result);
    }
    public function tradingStep4(){
        $result = TradingAccount::step4();
        return $this->display('home.account.upload',['result'=>$result]);
    }
    public function cidtMT4(){
        return $this->display('home.account.cidtMT4');
    }
}
