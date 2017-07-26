<?php 
namespace App\Services;
use Illuminate\Support\Facades\Cache as LaravelCache;
use Carbon\Carbon;
class Cache{
    //
    public function __construct(){
        
    }
    //
    public function get($key,$default=false){
        LaravelCache::get($key,$default);
    }
    //
    public function set($key,$value,$expire=false){
        if($expire==0){
            LaravelCache::forever($key,$value);
        }else{
            $expiresAt = Carbon::now()->addMinutes($expire);
            LaravelCache::put('key', 'value', $expireAt);
        }
    }
    //
    public function del($key){
        LaravelCache::forget($key);
    }
}
?>