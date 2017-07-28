<?php 
namespace App\Services;
use Illuminate\Support\Facades\Session as LaravelSession;
use Illuminate\Support\Facades\Log as LaravelLog;
class Session {   
    public function __call($methodName,$args){
        try{
            call_user_func_array(array(Session::class,$methodName),$args);
        }catch(\Exception $e){
            $array = array(
                'message' => $e->getMessage(),
                'file' => $e->getFile(),
                'line' => $e->getLine(),
                'code' => $e->getCode(),
                'url' => Request::url(),
                'level'=>'error',
            );
            LaravelLog::error($array);
            return false;
        }
    }
    //session get
    public function get($key){
        return LaravelSession::get($key);
    }
    //session has
    public function has($key){
        return LaravelSession::has($key);
    }
    //session set
    public function set($key,$value){
        return LaravelSession::put($key,$value);
    }
    //session del
    public function delete($key){
        return LaravelSession::forget($key);
    }
}
?>