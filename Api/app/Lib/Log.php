<?php 
namespace App\Lib;
use Illuminate\Support\Facades\Log as LaravelLog;
use Illuminate\Support\Facades\Request as LaravelRequest;
use Monolog\Handler\RotatingFileHandler;
class Log {   
    //write log
    public function write($record,$level='info',$context=[]){
        if($record instanceof \Exception){
            $exception = array(
                'file' => $record->getFile(),
                'line' => $record->getLine(),
                'code' => $record->getCode(),
                'url' => LaravelRequest::url(),
                'level'=>$level,
            );
            $context = array_merge($exception,$context);
            $message = $record->getMessage();
        }elseif(is_array($record)){
            $message = var_export($record,true);
        }else{
            $message = $record;
        }
       $message = iconv("GB2312","UTF-8",$message);
       forward_static_call(array(LaravelLog::class,$level),$message,$context);
    }
    public function debug($record,$context=[]){
        $this->write($record,'debug',$context);
    }
}
?>