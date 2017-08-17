<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use  App\Business\Home\User as UserBusiness;
class UserController extends Controller
{
    private $personalInfoSeo = [
        'title'=>'Personal Data | CIDT GLOBAL',
        'description'=>'',
        'keyword'=>''
    ];
    private $onlineDepositSeo = [
        'title'=>'Online Deposit | CIDT GLOBAL',
        'description'=>'',
        'keyword'=>''
    ];
    private $injectionSeo = [
        'title'=>'Bank Injection | CIDT GLOBAL ',
        'description'=>'',
        'keyword'=>''
    ];
    private $withdrawalSeo = [
        'title'=>'Account Withdrawal | CIDT GLOBAL ',
        'description'=>'',
        'keyword'=>''
    ];
    private $request;
    public function __construct(){
        $this->request = \App::make('App\Lib\Request');
    }
    //member
    public function personalInfo(){
        return $this->display('home.user.personalInfo',$this->personalInfoSeo);
    }
    public function onlineDeposit(){
        if($this->request->isPost()){
            UserBusiness::onlineDeposit($this->request );
        }else{
            return $this->display('home.user.onlineDeposit',$this->onlineDepositSeo);
        }
    }
    public function injection(){
        if($this->request->isPost()){
            $result = UserBusiness::injection($this->request );
            
            dd($result);
            //return $this->back()->with('msg',$result['msg'])->with('status',$result['status']);
        }else{
            return $this->display('home.user.injection',$this->injectionSeo);
        }
    }
    public function withdrawal(){
        if($this->request->isPost()){
            $result = UserBusiness::withdraw($this->request );
            return $this->json($result);
        }else{
            return $this->display('home.user.withdrawal',$this->withdrawalSeo);
        }
    }
    public function uploadPic(){
        $result = UserBusiness::uploadPic($this->request);
        return $this->display('home.account.upload',['result'=>$result]);
    }
}
