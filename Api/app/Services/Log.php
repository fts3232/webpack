<?php 
namespace App\Services;
use Illuminate\Support\Facades\Log as LaravelLog;
use Monolog\Handler\RotatingFileHandler;
class Log {   
    protected $filename = '..\storage\logs\log.log';
    protected $level = 'error';
    public function __construct(){
         
    }
    public function setHandler($monolog){
        if(config('database.connections.mongodb')!=null){
    
        }else{
            $monolog->pushHandler( new RotatingFileHandler($this->filename));
        }
    }
   //write log
   public function writeLog($record,$level='info'){
       forward_static_call(array(LaravelLog::class,$level),$record);
   }
}
?>