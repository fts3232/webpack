<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\Log;
use App\Services\Request;
use App\Services\Cookie;
use App\Services\Session;
use App\Services\Cache;
use App\Services\Auth;
class AppServiceProvider extends ServiceProvider
{
    protected $defer = true;
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
        $this->app->bind('App\Services\Cache', Cache::class);
        $this->app->bind('App\Services\Cookie', Cookie::class);
        $this->app->bind('App\Services\Session', Session::class);
        $this->app->bind('App\Services\Log', Log::class);
        $this->app->bind('App\Services\Request', Request::class);
        $this->app->bind('App\Services\Auth', Auth::class);
        //
    }
}
