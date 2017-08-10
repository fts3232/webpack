<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use App\Exceptions\CustomException;
use Validator;
use Illuminate\Support\Facades\Lang;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    //display view
    protected function display($template,$param=[]){
        $auth = \App::make('App\Lib\Auth');
        $param = array_merge($param,['cdnPath'=>config('app.CDN_PATH'),'isLogin'=>$auth->isLogin()]);
        return view($template,$param);
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
    protected function redirect($path=false){
        return redirect($path);
    }
    protected function back(){
        return back();
    }
    //throw exception
    protected function throwCustomException($message,$code=0){
        throw new CustomException($message,$code);
    }
    //lang
    protected function lang($key,$param=[]){
        return Lang::get($key,$param);
    }
    //validator
    protected function validator($data,$rules,$msg=[]){
        $result = true;
        $validator = Validator::make($data, $rules, $msg);
        if($validator->fails())
            $result = $validator->errors();
        return $result;
    }
}
