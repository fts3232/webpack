<?php 
namespace App\Services;
use Illuminate\Support\Facades\Request as LaravelRequest;
use Illuminate\Support\Facades\Validator;
class Request{
    //request method
    public function isGet(){
        return LaravelRequest::isMethod('get');
    }
    public function isPut(){
        return LaravelRequest::isMethod('put');
    }
    public function isPost(){
        return LaravelRequest::isMethod('post');
    }
    public function isDel(){
        return LaravelRequest::isMethod('del');
    }
    public function isAjax(){
        return LaravelRequest::ajax();
    }
    public function getPath(){
        return LaravelRequest::path();
    }
    public function getUrl(){
        return LaravelRequest::url();
    }
    public function getFullUrl(){
        return LaravelRequest::FullUrl();
    }
    //get Request Param
    public function getParam($key='',$default=false,$type=false){
        if($key==''){
            $value = LaravelRequest::input();
        }else{
            $typeMap = array(
                'number'=>'numeric',
                'string'=>'string'
            );
            $value = LaravelRequest::input($key,$default);
            if($type && array_key_exists($type,$typeMap)){
                $validator =  Validator::make(array('value'=>$value),['value'=>'required|'.$typeMap[$type]]);
                return !$validator->fails()?$value:$default;
            }
        }
        return $value;
    }
}
?>