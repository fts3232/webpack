<?php 
namespace App\Business;
class Business {   
    protected $log;
    public __construct(){
        $this->log = \App::make('App\Core\Log');
    }
    //lang
    protected function lang($key){
        return trans($key);
    }
    //encrypt
    public function encrypt($value){
        return Crypt::encrypt($value);
    }
    //decrypt
    public function decrypt($value){
        try {
            $decrypted = Crypt::decrypt($value);
        } catch (\Exception $e) {
            $decrypted = false;
        }
        return  $decrypted;
    }
    //debug
    public function debug($record,$context=[]){
        return $this->log->write($record,'debug',$context,);
    }
}
?>