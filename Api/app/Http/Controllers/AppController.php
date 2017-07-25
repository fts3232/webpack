<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use App\Models\Post;
use App\Models\Users;
use App\Services\Logger;
use Mail;
use Auth;
class AppController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    function __construct(){
        $this->middleware('auth.admin:admin');
    }
    function index(){
        echo 'success';
        throw new \Exception('asd');
        //Auth::guard('my')->check();
        //echo 1;
       /*  Mail::send('welcome',['token'=>'asdas'],function($m){
            $m->to('550610606@qq.com')->subject('Your Reminder!');
        }); */
    }
    function login(){
        return view('home');
    }
    function loginout(){
        
    }
    function getAbc(){
        $r=Post::find(1);
        //dd($r);
        $a  = new Post;
        var_dump($a);
        $a->title="test'";
        $a->content = 'content';
        $a->save();
    }
    function getShow(){
        $r = \App::make('App\Services\UserAuth');
        $r->login('550610606@qq.com','323232');
        //$log = new Log;
        //$log->write(array('1','2','3'));
        //$Post = new Post();
        //$post = $Post->getOne();
        //$result = $database->select('select * from post limit 1');
        //dd($result);
       /*  $super = \App::make('App\Services\SuperMan',['100','200']);
        $super2 = \App::make('App\Services\SuperMan',['100','20']);
        var_dump($super2);
        var_dump($super);
        $posts = Abc::take(1)->get();
        dd($posts);
        return view('welcome'); */
    }
}
