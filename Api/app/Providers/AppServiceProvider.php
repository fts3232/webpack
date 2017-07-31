<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Core\Cookie;
use App\Core\Cache;
use App\Core\Session;
use App\Core\Request;
use App\Core\Auth;
use App\Core\Log;
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
        $this->app->singleton('App\Core\Cache', Cache::class);
        $this->app->singleton('App\Core\Cookie', Cookie::class);
        $this->app->singleton('App\Core\Session', Session::class);
        $this->app->singleton('App\Core\Log', Log::class);
        $this->app->singleton('App\Core\Request', Request::class);
        $this->app->singleton('App\Core\Auth', Auth::class);
        $this->app->singleton('App\Core\Mail', Mail::class);
        //
    }
}
