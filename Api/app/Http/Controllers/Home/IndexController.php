<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
class IndexController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){
        return $this->display('home.index');
    }
   
    public function productDetails(){
        return $this->display('home.productDetails');
    }
    public function aboutUs(){
        return $this->display('home.aboutUs');
    }
}
