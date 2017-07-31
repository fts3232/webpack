<?php 
namespace App\Core;
use Illuminate\Support\Facades\Cache as LaravelCache;
use Carbon\Carbon;
class Cache{
    public function __call($methodName,$args){
        $log = \App::make('\App\Core\Log');
        try{
            call_user_func_array(array(Cache::class,$methodName),$args);
        }catch(\Exception $e){
            $log->write($e,'error');
            return false;
        }
    }
    //cache get
    protected function get($key,$default=false){
        return LaravelCache::get($key,$default);
    }
    //cache set
    protected function set($key,$value,$expire=0){
        if($expire==0){
           LaravelCache::forever($key,$value);
        }else{
            $expireAt = Carbon::now()->addMinutes($expire);
            LaravelCache::put($key, $value, $expireAt);
        }
    }
    //cache del
    protected function delete($key){
        return LaravelCache::forget($key);
    }
}
?>