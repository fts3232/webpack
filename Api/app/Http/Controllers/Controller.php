<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    //display view
    public function display($template){
        return view($template);
    }
    //cache get
    public function getCache($key,$default=false){
        return Cache::get($key,$default);
    }
    //cache set
    public function setCache($key,$value,$expire=0){
        if($expire==0){
           Cache::forever($key,$value);
        }else{
            $expireAt = Carbon::now()->addMinutes($expire);
            Cache::put('key', 'value', $expireAt);
        }
    }
    //cache del
    public function delCache($key){
        return Cache::forget($key);
    }
    //write log
    public function writeLog($record,$level='info'){
        forward_static_call(array('Log',$level),$record);
    }
    //is login
    public function isLogin($guard=''){
        return Auth::guard($guard)->check();
    }
    //request method
    public function isGet(){
        return Request::isMethod('get');
    }
    public function isPut(){
        return Request::isMethod('put');
    }
    public function isPost(){
        return Request::isMethod('post');
    }
    public function isDel(){
        return Request::isMethod('del');
    }
    public function isAjax(){
        return Request::ajax();
    }
    //get input
    public function getInput($key,$default=false){
        return Request::input($key,$default);
    }
    // input is num
    public function isNum($value){
        $validator =  Validator::make(array('value'=>$value),['value'=>'required|numeric']);
        return !$validator->fails();
    }
    //cookie get
    public function getCookie($key){
        return Cookie::get($key);
    }
    //cookie set
    public function setCookie($key,$value,$minute){
        return Cookie::queue($key, $value, $minute);
    }
    //cookie del
    public function delCookie($key){
        return Cookie::queue(Cookie::forget($key));
    }
    //session get
    public function getSession($key){
        return Session::get($key);
    }
    //session has
    public function hasSession($key){
        return Session::has($key);
    }
    //session set
    public function setSession($key,$value){
        return Session::put($key,$value);
    }
    //session del
    public function delSession($key){
        return Session::forget($key);
    }
    //upload
    public function upload($key){
        $result = false;
        $file = Request::file($key);
        if(Request::hasFile($key) &&  $file->isValid()){
            $destPath = public_path('upload');
            $extension = $file->extension();
           if(!file_exists($destPath))
                mkdir($destPath,0755,true);
            $filename = date("YmdHis").floor(microtime()*1000).'.'.$extension;
            $file->move($destPath,$filename);
            if($file->getError()===0){
                $result = true;
            }
        }
        return $result;
    }
    //download
    public function download($file){
        return response()->download($file);
    }
    //json
    public function json($data){
        return response()->json($data);
    }
    //jsonp
    public function jsonp($data,$callback='callback'){
        return response()->json($data)->setCallback($callback);
    }
    public function redirect($path){
        return redirect($path);
    }
}
