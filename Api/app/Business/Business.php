<?php 
namespace App\Business;
class{
    protected $app;
    protected $log;
    protected $cookie;
    protected $session;
    protected $request;
    protected $auth;
    public function __construct(){
        $this->app = \App::make('\App\Services\App');
    }
    public function getCache(){
        return $this->app->cache;
    }
    public function getLog(){
        return $this->app->log;
    }
    public function getCookie(){
        return $this->app->cookie;
    }
    public function getSession(){
        return $this->app->session;
    }
    public function getRequest(){
        return $this->app->request;
    }
    public function getAuth(){
        return $this->app->auth;
    }
}
?>