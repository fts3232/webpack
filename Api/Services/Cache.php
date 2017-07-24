<?php 
namespace App\Services;
use Illuminate\Support\Facades\Cache;
use Carbon\Carbon;
class Cache{
    //
    public function __construct(){
        
    }
    //
    public function get($key,$default=false){
        Cache::get($key,$default);
    }
    //
    public function set($key,$value,$expire=false){
        if($expire==0){
            Cache::forver($key,$value);
        }else{
            $expiresAt = Carbon::now()->addMinutes($expire);
            Cache::put('key', 'value', $expireAt);
        }
    }
    //
    public function del($key){
        Cache::forget($key);
    }
}
?>