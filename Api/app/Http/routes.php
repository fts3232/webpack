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
    $this->group(['prefix'=>'/download'],function(){
        $this->get('/MT4ForPC',  'Home\DownLoadController@MT4ForPC');
        $this->get('/MT4ForAndroid',  'Home\DownLoadController@MT4ForAndroid');
    });
    $this->get('/login',  'Home\AuthController@showLoginForm')->middleware('guest');
    $this->post('/login',  'Home\AuthController@login')->middleware('guest');
    $this->group(['prefix'=>'/account'],function(){
        $this->get('/standard',  'Home\AccountController@standard');
        $this->post('/standard/step1',  'Home\AccountController@standardStep1');
        $this->post('/standard/step2',  'Home\AccountController@standardStep2');
        $this->post('/standard/step3',  'Home\AccountController@standardStep3');
        $this->post('/standard/step4',  'Home\AccountController@standardStep4');
        $this->post('/standard/validator/{key}',  'Home\AccountController@standardValidator')->where('key', '[name|document_number|resid_addr|mobile|email|verficode|account_name|bank_account|bank_address|acct_bran_bank]+');
        $this->get('/demo',  'Home\AccountController@demo');
        $this->post('/demo/validator/{key}',  'Home\AccountController@demoValidator')->where('key', '[name|email|mobile|verficode]+');
        $this->post('/demo/register',  'Home\AccountController@registerDemo');
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

/* Route::group(['prefix'=>'/admin','middleware' => ['web']], function () {
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
}); */
