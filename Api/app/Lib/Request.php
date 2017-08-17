<?php 
namespace App\Lib;
use Illuminate\Support\Facades\Request as LaravelRequest;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Lang;
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
    public function ip(){
        return LaravelRequest::ip();
    }
    //get Request Param
    public function getParam($key='',$default=false){
        if($key==''){
            $value = LaravelRequest::input();
        }else{
            $value = LaravelRequest::input($key,$default);
        }
        return $value;
    }
    public function has($key){
        return LaravelRequest::has($key);
    }
    public function only($keys){
        return LaravelRequest::only($keys);
    }
    //validator
    public function validator($value,$rule,$msg){
        $validator =  Validator::make($value,$rule,$msg);
        return !$validator->fails()?true:$validator->errors();
    }
    //upload
    public function upload($key,$uploadDir='upload',$filename=''){
        $data = array('status'=>true,'msg'=>Lang::get('upload.success'));
        $allowTypes=array('image/png','image/jpeg','image/pjpeg','image/jpeg','image/gif');
        try{
            $file = LaravelRequest::file($key);
            if(!$file->isValid() || !LaravelRequest::hasFile($key))
                throw new \Exception(Lang::get('upload.error.IllegaFile'),2000);
             if(!in_array($file->getmimeType(),$allowTypes)){
                throw new \Exception(Lang::get('upload.error.IllegaFile'),2000);
            }
            if($file->getSize()>=1024*1024*2){
                throw new \Exception(Lang::get('upload.error.excessSize',['size'=>2]),2001);
            }
            $destPath = public_path($uploadDir);
            $extension = $file->extension();
            if(!file_exists($destPath)){
                $result = mkdir($destPath,0755,true);
                if(!$result)
                    throw new \Exception( Lang::get('upload.error.mkdirFail'),2002);
            }
            if(!is_writable($destPath))
                throw new \Exception( Lang::get('upload.error.notWritable'),2003);
            if(!$filename)
                $filename = date("YmdHis").floor(microtime()*1000).'.'.$extension;
            $file->move($destPath,$filename);
            if($file->getError()!==0){
                throw new \Exception(Lang::get('upload.fail'),2004);
            }
            $data['file'] = url($uploadDir.'\\'.$filename);
        }catch(\Exception $e){
            $data = array('status'=>false,'msg'=>$e->getMessage(),'code'=>$e->getCode());
        }
        return $data;
    }
}
?>