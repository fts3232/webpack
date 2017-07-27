<?php 
namespace App\Services;
use Illuminate\Support\Facades\Cache as LaravelCache;
use Carbon\Carbon;
class Cache{
//cache get
    public function get($key,$default=false){
        return LaravelCache::get($key,$default);
    }
    //cache set
    public function set($key,$value,$expire=0){
        if($expire==0){
           LaravelCache::forever($key,$value);
        }else{
            $expireAt = Carbon::now()->addMinutes($expire);
            LaravelCache::put($key, $value, $expireAt);
        }
    }
    //cache del
    public function delete($key){
        return LaravelCache::forget($key);
    }
}
?>