<?php 
namespace App\Services;
use Monolog\Handler\RotatingFileHandler;
use Illuminate\Support\Facades\Log as LaravelLog;
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
   public function write($record,$level='info'){
       forward_static_call(array('LaravelLog',$level),$record);
   }
}
?>