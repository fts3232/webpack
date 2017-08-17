<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use  App\Business\Home\Customer;
class CustomerController extends Controller
{
    private $personalInfoSeo = [];
    private $onlineDepositSeo = [];
    private $injectionSeo = [];
    private $withdrawalSeo = [];
    private $request;
    public function __construct(){
        $this->request = \App::make('App\Lib\Request');
        $this->personalInfoSeo = [
            'title'=>$this->lang('seo.personalInfo.title'),
            'description'=>$this->lang('seo.personalInfo.description'),
            'keyword'=>$this->lang('seo.personalInfo.keyword'),
        ];
        $this->onlineDepositSeo = [
            'title'=>$this->lang('seo.onlineDeposit.title'),
            'description'=>$this->lang('seo.onlineDeposit.description'),
            'keyword'=>$this->lang('seo.onlineDeposit.keyword'),
        ];
        $this->injectionSeo = [
            'title'=>$this->lang('seo.injection.title'),
            'description'=>$this->lang('seo.injection.description'),
            'keyword'=>$this->lang('seo.injection.keyword'),
        ];
        $this->withdrawalSeo = [
            'title'=>$this->lang('seo.withdrawal.title'),
            'description'=>$this->lang('seo.withdrawal.description'),
            'keyword'=>$this->lang('seo.withdrawal.keyword'),
        ];
    }
    //member
    public function personalInfo(){
        return $this->display('home.customer.personalInfo',$this->personalInfoSeo);
    }
    public function onlineDeposit(){
        if($this->request->isPost()){
            Customer::onlineDeposit($this->request );
        }else{
            return $this->display('home.customer.onlineDeposit',$this->onlineDepositSeo);
        }
    }
    public function injection(){
        if($this->request->isPost()){
            $result = Customer::injection($this->request );
        }else{
            return $this->display('home.customer.injection',$this->injectionSeo);
        }
    }
    public function withdrawal(){
        if($this->request->isPost()){
            $result = Customer::withdraw($this->request );
            return $this->json($result);
        }else{
            return $this->display('home.customer.withdrawal',$this->withdrawalSeo);
        }
    }
    public function uploadPic(){
        $result = Customer::uploadPic($this->request);
        return $this->display('home.account.upload',['result'=>$result]);
    }
}
