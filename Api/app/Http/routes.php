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

Route::group(['prefix'=>'/admin','middleware' => ['web']], function () {
    App::setLocale('cn');
    // Authentication Routes...
    $this->get('login', 'Admin\AuthController@showLoginForm');
    $this->post('login', 'Admin\AuthController@login');
    $this->get('logout', 'Admin\AuthController@logout');
    
    $this->get('register', 'Admin\AuthController@showRegistrationForm');
    $this->post('register', 'Admin\AuthController@register');
    
    $this->get('/','Admin\HomeController@index');
    $this->get('user', 'Admin\UserController@index');
    $this->get('user/add', 'Admin\UserController@add');
    $this->post('user/add', 'Admin\UserController@add');
    $this->get('user/edit/{id}', 'Admin\UserController@edit')->where('id', '[0-9]+');
    $this->put('user/edit', 'Admin\UserController@edit');
    $this->match(['put', 'post'],'user/uploadPic', 'Admin\UserController@uploadPic');
    $this->delete('user/del', 'Admin\UserController@delete');
    
    $this->get('article', 'Admin\ArticleController@index');
    $this->get('article/add', 'Admin\ArticleController@add');
    $this->post('articler/add', 'Admin\ArticleController@add');
    $this->get('article/edit/{id}', 'Admin\ArticleController@edit')->where('id', '[0-9]+');
    $this->put('article/edit', 'Admin\ArticleController@edit');
    $this->match(['put', 'post'],'article/uploadPic', 'Admin\ArticleController@uploadPic');
    $this->delete('article/del', 'Admin\ArticleController@delete');
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
