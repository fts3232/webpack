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
use App\Exceptions\CustomException;
use Illuminate\Support\Facades\Auth;
use Gate;
use Mail;
use Carbon\Carbon;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
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
    //cache get
    protected function getCache($key,$default=false){
        return Cache::get($key,$default);
    }
    //cache set
    protected function setCache($key,$value,$expire=0){
        if($expire==0){
           Cache::forever($key,$value);
        }else{
            $expireAt = Carbon::now()->addMinutes($expire);
            Cache::put('key', 'value', $expireAt);
        }
    }
    //cache del
    protected function delCache($key){
        return Cache::forget($key);
    }
    //write log
    protected function writeLog($record,$level='info'){
        forward_static_call(array('Log',$level),$record);
    }
    //is login
    protected function isLogin($guard=''){
        return Auth::guard($guard)->check();
    }
    protected function getLoginUser($guard=''){
        return Auth::guard($guard)->user();
    }
    //request method
    protected function isGet(){
        return Request::isMethod('get');
    }
    protected function isPut(){
        return Request::isMethod('put');
    }
    protected function isPost(){
        return Request::isMethod('post');
    }
    protected function isDel(){
        return Request::isMethod('del');
    }
    protected function isAjax(){
        return Request::ajax();
    }
    //get Request Param
    protected function getRequestParam($key,$default=false,$type=false){
        $typeMap = array(
            'number'=>'numeric',
            'string'=>'string'
        );
        $value = Request::input($key,$default);
        if($type && array_key_exists($type,$typeMap)){
            $validator =  Validator::make(array('value'=>$value),['value'=>'required|'.$typeMap[$type]]);
            return !$validator->fails()?$value:$default;
        }
        return $value;
    }
    // input is num
    protected function isNum($value){
        $validator =  Validator::make(array('value'=>$value),['value'=>'required|numeric']);
        return !$validator->fails();
    }
    //cookie get
    protected function getCookie($key){
        return Cookie::get($key);
    }
    //cookie set
    protected function setCookie($key,$value,$minute){
        return Cookie::queue($key, $value, $minute);
    }
    //cookie del
    protected function delCookie($key){
        return Cookie::queue(Cookie::forget($key));
    }
    //session get
    protected function getSession($key){
        return Session::get($key);
    }
    //session has
    protected function hasSession($key){
        return Session::has($key);
    }
    //session set
    protected function setSession($key,$value){
        return Session::put($key,$value);
    }
    //session del
    protected function delSession($key){
        return Session::forget($key);
    }
    //upload
    protected function upload($key){
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
    protected function throwCustomException($message){
        throw new CustomException($message);
    }
    //send mail
    protected function sendMail($to,$title,$view,$viewData=[]){
        Mail::send($view,$viewData,function($m){
            $m->to($to)->subject($title);
        });
    }
    //check auth
    protected function checkAuth($auth,$user){
        if(1==1){
            abort(403);
        }
    }
    //debug
    public function debug($record){
        return $this->writeLog($record,'debug');
    }
    //lang
    public function lang($key){
        return trans($key);
    }
}
