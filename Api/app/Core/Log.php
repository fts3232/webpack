<?php 
namespace App\Core;
use Illuminate\Support\Facades\Log as LaravelLog;
use Monolog\Handler\RotatingFileHandler;
class Log {   
    protected $filename = '..\storage\logs\log.log';
    protected $level = 'error';
    public function __construct(){
         
    }
    //write log
    public function write($record,$level='info'){
       forward_static_call(array(LaravelLog::class,$level),$record);
    }
}
?>