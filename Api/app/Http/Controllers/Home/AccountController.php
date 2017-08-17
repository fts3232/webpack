<?php

namespace App\Http\Controllers\Home;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use  App\Business\Home\Account\Demo;
use  App\Business\Home\Account\Standard;
use App\Models\Account;
class AccountController extends Controller
{
    private $standardSeo = [];
    private $demoSeo = [];
    private $cidtMT4Seo = [];
    public function __construct(){
        $this->standardSeo = [
            'title'=>$this->lang('seo.standard.title'),
            'description'=>$this->lang('seo.standard.description'),
            'keyword'=>$this->lang('seo.standard.keyword'),
        ];
        $this->demoSeo = [
            'title'=>$this->lang('seo.demo.title'),
            'description'=>$this->lang('seo.demo.description'),
            'keyword'=>$this->lang('seo.demo.keyword'),
        ];
        $this->cidtMT4Seo = [
           'title'=>$this->lang('seo.cidtMT4.title'),
            'description'=>$this->lang('seo.cidtMT4.description'),
            'keyword'=>$this->lang('seo.cidtMT4.keyword'),
        ];
    }
    //trading
    public function standard(){
        return $this->display('home.account.standardAccounts',$this->standardSeo);
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
        $viewData = $this->standardSeo;
        $viewData['result'] = $result;
        return $this->display('home.account.upload', $viewData);
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
        return $this->display('home.account.demoAccounts',$this->demoSeo);
    }
    public function registerDemo(){
        $result = Demo::register();
        return $this->json($result);
    }
    public function demoActivation(){
        $result = Demo::activation();
        $viewData = $this->demoSeo;
        $viewData['result'] = $result;
        return $this->display('home.account.activation',$viewData);
        //return $this->json($result);
    }
    //mt4
    public function cidtMT4(){
        return $this->display('home.account.cidtMT4',$this->cidtMT4Seo);
    }
}
