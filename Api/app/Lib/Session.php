<?php 
namespace App\Lib;
use Illuminate\Support\Facades\Session as LaravelSession;
class Session {   
    public function __call($methodName,$args){
        $log = \App::make('\App\Lib\Log');
        try{
            return call_user_func_array(array(Session::class,$methodName),$args);
        }catch(\Exception $e){
            $log->write($e,'error');
            return false;
        }
    }
    protected function all(){
       return LaravelSession::all();
    }
    //session get
    protected function get($key){
        return LaravelSession::get($key);
    }
    //session has
    protected function has($key){
        return LaravelSession::has($key);
    }
    //session set
    protected function set($key,$value){
        return LaravelSession::put($key,$value);
    }
    //session del
    protected function delete($key){
        return LaravelSession::forget($key);
    }
    //session all del
    protected function flush(){
        return LaravelSession::flush();
    }
}
?>