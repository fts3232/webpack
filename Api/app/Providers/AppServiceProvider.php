<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Lib\Cookie;
use App\Lib\Cache;
use App\Lib\Session;
use App\Lib\Request;
use App\Lib\Auth;
use App\Lib\Log;
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
        //
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
