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

Route::get('/', function () {
    return view('welcome');
});


Route::get('/aa',function(){
    $csrf_field = csrf_field();
    $html = <<<GET
        <form method="POST" action="/laravel-master/public/bb">
            {$csrf_field}
            <input type="submit" value="Test"/>
        </form>
GET;
                return $html;
});
Route::get('/bb', function(){
    return 'Success!';
});
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
    // Authentication Routes...
    $this->get('/admin/login', 'AdminController@showLoginForm');
    $this->post('/admin/login', 'AdminController@login');
    $this->get('/admin/logout', 'AdminController@logout');
    Route::get('/admin','AppController@index');
    
    $this->get('/admin/register', 'AdminController@showRegistrationForm');
    $this->post('/admin/register', 'AdminController@register');
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
