<?php 
namespace App\Lib;
use Illuminate\Support\Facades\Cookie as LaravelCookie;
class Cookie {   
    //cookie get
    public function get($key){
        return LaravelCookie::get($key);
    }
    //cookie set
    public function set($key,$value,$minute){
        return LaravelCookie::queue($key, $value, $minute);
    }
    //cookie del
    public function delete($key){
        return LaravelCookie::queue(LaravelCookie::forget($key));
}   
}
?>