<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/',  'Home\IndexController@index');
Route::get('/api/user',  ['middleware' => 'api', function() {
    // 只有认证过的用户可以进入...
    
}]);
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

Route::group(['middleware' => ['web']], function () {
    App::setLocale('en');
    // Authentication Routes...
    $this->get('/admin/login', 'Admin\AuthController@showLoginForm');
    $this->post('/admin/login', 'Admin\AuthController@login');
    $this->get('/admin/logout', 'Admin\AuthController@logout');
    
    $this->get('/admin/register', 'Admin\AuthController@showRegistrationForm');
    $this->post('/admin/register', 'Admin\AuthController@register');
    
    $this->get('/admin','Admin\HomeController@index');
    $this->get('/admin/user', 'Admin\UserController@index');
    
    
    //$this->get('/admin/register', 'AdminController@showRegistrationForm');
    //$this->post('/admin/register', 'AdminController@register');
    //Route::get('/admin/login','AppController@login');
    //Route::get('/admin/logout','AppController@logout');
    //
});

Route::group(['middleware' => 'web'], function () {
    Route::auth();
    /* // Registration Routes...
    $this->get('register', 'Auth\AuthController@showRegistrationForm');
    $this->post('register', 'Auth\AuthController@register');
    
    // Password Reset Routes...
    $this->get('password/reset/{token?}', 'Auth\PasswordController@showResetForm');
    $this->post('password/email', 'Auth\PasswordController@sendResetLinkEmail');
    $this->post('password/reset', 'Auth\PasswordController@reset'); */

    Route::get('/home', 'HomeController@index');
});

Route::auth();

Route::get('/home', 'HomeController@index');
