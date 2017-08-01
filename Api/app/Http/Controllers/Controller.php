<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use App\Exceptions\CustomException;
use Mail;
use Crypt;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    protected $cache;
    protected $log;
    protected $auth;
    protected $cookie;
    protected $session;
    protected $request;
    protected $mail;
    public function __construct(){
        $this->cache = \App::make('\App\Core\Cache');
        $this->request = \App::make('\App\Core\Request');
        $this->cookie = \App::make('\App\Core\Cookie');
        $this->session = \App::make('\App\Core\Session');
        $this->auth = \App::make('\App\Core\Auth');
        $this->log = \App::make('\App\Core\Log');
        $this->mail =  \App::make('\App\Core\Mail');
    }
    
    //display view
    protected function display($template){
        return view($template);
    }
    //display error
   protected function error($msg){
        return $this->json(['status'=>false,'msg'=>$msg]);
    }
    //display success
    protected function success($msg=''){
        return $this->json(['status'=>true,'msg'=>$msg]);
    }
    
    //download
    protected function download($file){
        return response()->download($file);
    }
    //json
    protected function json($data){
        return response()->json($data);
    }
    //jsonp
    protected function jsonp($data,$callback='callback'){
        return response()->json($data)->setCallback($callback);
    }
    //redirect
    protected function redirect($path){
        return redirect($path);
    }
    //throw exception
    protected function throwCustomException($message,$code=0){
        throw new CustomException($message,$code);
    }
}
