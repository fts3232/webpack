<?php 
namespace  App\Business\BaseAuth;
use Business;
use Illuminate\Support\Str;
use Illuminate\Cache\RateLimiter;
use Illuminate\Auth\Events\Lockout;
trait ThrottlesLogins {   
    protected function throttleKey() {
        $request =$this->getRequest();
        return Str::lower($request->getParam($this->username())).'|'.$request->ip();
    }
    protected function maxAttempts(){
        return property_exists($this, 'maxAttempts') ? $this->maxAttempts : 5;
    }
    protected function decayMinutes() {
        return property_exists($this, 'decayMinutes') ? $this->decayMinutes : 1;
    }
    protected function limiter(){
        return app(RateLimiter::class);
    }
   protected function hasTooManyLoginAttempts(){
       return $this->limiter()->tooManyAttempts(
           $this->throttleKey(), $this->maxAttempts(), $this->decayMinutes()
       );
   }
   protected function clearLoginAttempts(){
       $this->limiter()->clear($this->throttleKey());
   }
   protected function incrementLoginAttempts(){
       $this->limiter()->hit($this->throttleKey());
   }
}
?>