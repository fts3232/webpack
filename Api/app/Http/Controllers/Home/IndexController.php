<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
class IndexController extends Controller
{
    
    private $productDetailsSeo = [];
    private $indexSeo = [];
    private $aboutUsSeo = [];
    public function __construct(){
        $this->productDetailsSeo = [
            'title'=>$this->lang('seo.productDetails.title'),
            'description'=>$this->lang('seo.productDetails.description'),
            'keyword'=>$this->lang('seo.productDetails.keyword'),
        ];
        $this->indexSeo = [
            'title'=>$this->lang('seo.index.title'),
            'description'=>$this->lang('seo.index.description'),
            'keyword'=>$this->lang('seo.index.keyword'),
        ];
        $this->aboutUsSeo = [
            'title'=>$this->lang('seo.aboutUs.title'),
            'description'=>$this->lang('seo.aboutUs.description'),
            'keyword'=>$this->lang('seo.aboutUs.keyword'),
        ];
        
    }
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){
        return $this->display('home.index',$this->indexSeo);
    }
   
    public function productDetails(){
        return $this->display('home.productDetails',$this->productDetailsSeo);
    }
    public function aboutUs(){
        return $this->display('home.aboutUs',$this->aboutUsSeo);
    }
}
