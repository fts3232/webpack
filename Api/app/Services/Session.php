<?php 
namespace App\Services;
use Illuminate\Support\Facades\Session as LaravelSession;
class Session {   
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