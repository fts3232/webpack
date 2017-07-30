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
    public function __construct(){
        $this->cache = \App::make('\App\Core\Cache');
        $this->request = \App::make('\App\Core\Request');
        $this->cookie = \App::make('\App\Core\Cookie');
        $this->session = \App::make('\App\Core\Session');
        $this->auth = \App::make('\App\Core\Auth');
        $this->log = \App::make('\App\Core\Log');
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
    //upload
    protected function upload($key){
        $result =true;
        try{
            $file = Request::file($key);
            if(Request::hasFile($key) &&  $file->isValid()){
                $destPath = public_path('upload');
                $extension = $file->extension();
                if(!file_exists($destPath))
                    mkdir($destPath,0755,true);
                $filename = date("YmdHis").floor(microtime()*1000).'.'.$extension;
                $file->move($destPath,$filename);
                if($file->getError()!==0){
                    $result = false;
                }
            }
        }catch(\Exception $e){
            $array = array(
                'message' => $e->getMessage(),
                'file' => $e->getFile(),
                'line' => $e->getLine(),
                'code' => $e->getCode(),
                'url' => Request::url(),
                'level'=>'error'
            );
            $this->log->writeLog($array,'error');
            $result = false;
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
    protected function throwCustomException($message,$code=0){
        throw new CustomException($message,$code);
    }
    //send mail
    protected function sendMail($to,$title,$view,$viewData=[]){
        $result = true;
        try{
            $result =  Mail::send($view,$viewData,function($m) use ($to,$title){
                $m->to($to)->subject($title);
            });
        }catch(Exception $e){
            $array = array(
                'message' => $e->getMessage(),
                'file' => $e->getFile(),
                'line' => $e->getLine(),
                'code' => $e->getCode(),
                'url' => Request::url(),
                'level'=>'error'
            );
            $this->log->writeLog($array,'error');
            $result = false;
        }
        return $result;
    }
    //debug
    public function debug($record){
        return $this->log->writeLog($record,'debug');
    }
    //lang
    public function lang($key){
        return trans($key);
    }
    //encrypt
    public function encrypt($value){
        return Crypt::encrypt($value);
    }
    //decrypt
    public function decrypt($value){
        try {
            $decrypted = Crypt::decrypt($value);
        } catch (\Exception $e) {
            $decrypted = false;
        }
       return  $decrypted;
    }
}
