<?php 
namespace App\Services;
use Illuminate\Support\Facades\Cache as LaravelCache;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Log as LaravelLog;
use Carbon\Carbon;
class Cache{
    public function __call($methodName,$args){
        try{
            call_user_func_array(array(Cache::class,$methodName),$args);
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