<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Lib\Cookie;
use App\Lib\Cache;
use App\Lib\Session;
use App\Lib\Request;
use App\Lib\Auth;
use App\Lib\Log;
use App\Lib\Mail;
use Illuminate\Support\Facades\Validator;
use App\Models\Customer;
class AppServiceProvider extends ServiceProvider
{
    //protected $defer = true;
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //check password
        Validator::extend('password', function($attribute, $value, $parameters, $validator) {
            $reg = "/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,15}$/";
            return preg_match($reg,$value);
        });
        //check mobile  is exists
        Validator::extend('customer_mobile', function($attribute, $value, $parameters, $validator) {
            $ret = Customer::checkMobile($value);
            return !$ret;
        });
        //check email is exists
        Validator::extend('customer_email', function($attribute, $value, $parameters, $validator) {
            $ret = Customer::checkEmail($value);
            return !$ret;
        });
        //check id_number
        Validator::extend('id_number', function($attribute, $value, $parameters, $validator) {
            $request = \App::make('App\Lib\Request');
            $type = $request->getParam('certificate_type');
            $ret = Customer::checkPersonID($type,$value);
            return !$ret;
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('App\Lib\Cache', Cache::class);
        $this->app->singleton('App\Lib\Cookie', Cookie::class);
        $this->app->singleton('App\Lib\Session', Session::class);
        $this->app->singleton('App\Lib\Log', Log::class);
        $this->app->singleton('App\Lib\Request', Request::class);
        $this->app->singleton('App\Lib\Auth', Auth::class);
        $this->app->singleton('App\Lib\Mail', Mail::class);
        //
    }
}
