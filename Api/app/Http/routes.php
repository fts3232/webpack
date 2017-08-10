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
Route::group(['prefix'=>'/','middleware' => ['web']],function(){
    \App::setLocale('en');
    $this->get('/',  'Home\IndexController@index');
    $this->get('/productDetails',  'Home\IndexController@productDetails');
    $this->get('/aboutUs',  'Home\IndexController@aboutUs');
    $this->get('/login',  'Home\AuthController@showLoginForm')->middleware('guest');
    $this->post('/login',  'Home\AuthController@login')->middleware('guest');
    $this->group(['prefix'=>'/account'],function(){
        $this->get('/trading',  'Home\AccountController@trading');
        $this->post('/tradingStep1',  'Home\AccountController@tradingStep1');
        $this->post('/tradingStep2',  'Home\AccountController@tradingStep2');
        $this->post('/tradingStep3',  'Home\AccountController@tradingStep3');
        $this->post('/tradingStep4',  'Home\AccountController@tradingStep4');
        $this->get('/demo',  'Home\AccountController@demo');
        $this->post('/registerDemo',  'Home\AccountController@registerDemo');
        $this->get('/cidtMT4',  'Home\AccountController@cidtMT4');
    });
   $this->group(['prefix'=>'/user'],function(){
       $this->get('/logout',  'Home\AuthController@logout');
       $this->post('/uploadPic',  'Home\UserController@uploadPic')->middleware('auth');
       $this->get('/personalInfo',  'Home\UserController@personalInfo')->middleware('auth');
       $this->match(['get', 'post'],'/onlineDeposit',  'Home\UserController@onlineDeposit')->middleware('auth');
       $this->match(['get', 'post'],'/injection',  'Home\UserController@injection')->middleware('auth');
       $this->match(['get', 'post'],'/withdrawal',  'Home\UserController@withdrawal')->middleware('auth');
    });
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

Route::group(['prefix'=>'/admin','middleware' => ['web']], function () {
    //\App::setLocale('cn');
    // Authentication Routes...
    $this->get('login', 'Admin\AuthController@showLoginForm');
    $this->post('login', 'Admin\AuthController@login');
    $this->get('logout', 'Admin\AuthController@logout');
    
    $this->get('register', 'Admin\AuthController@showRegisterForm');
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
