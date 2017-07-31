<?php 
namespace App\Core;
use Illuminate\Support\Facades\Mail as LaravelMail;
class Mail {   
    public function __call($methodName,$args){
        $log = \App::make('\App\Core\Log');
        try{
            return call_user_func_array(array(Mail::class,$methodName),$args);
        }catch(\Exception $e){
            $log->write($e,'error');
            return false;
        }
    }
    //send
    protected function send($to,$title,$view,$viewData=[]){
        $result =  LaravelMail::send($view,$viewData,function($m) use ($to,$title){
            $m->to($to)->subject($title);
        });
        return $result;
    }
}
?>