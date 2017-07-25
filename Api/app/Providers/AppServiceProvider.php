<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\SuperMan;
use App\Services\Power;
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
        $this->app->bind('App\Services\Power', Power::class);
        $this->app->bind('App\Services\SuperMan', function($app,$arg){
            return new SuperMan($app->make('App\Services\Power',$arg));
        });
        //
    }
}
