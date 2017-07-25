<?php

namespace App\Providers;
use App\Services\UserAuth;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class UserAuthServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        //
        $this->app->bind('App\Services\UserAuth', UserAuth::class);
    }
}