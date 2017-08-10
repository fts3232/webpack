<?php 
namespace App\Business;
use Validator;
use Crypt;
use Lang;
class Business {   
    protected static $instance = [];
    protected static $log;
    public static function __callstatic($funcName, $arguments){
        self::$log = \App::make('\App\Lib\Log');
        try{
            $className = static::class;
            if(! array_key_exists($className,self::$instance))
                self::$instance[$className] = new $className();
            return call_user_func_array(array(self::$instance[$className],$funcName), $arguments);
        }catch(\Exception $e){
            self::$log->write($e,'error');
            return false;
        }
    }
    protected function validator($data,$rules,$msg=[]){
        $result = true;
        $validator = Validator::make($data, $rules, $msg);
        if($validator->fails())
           $result = $validator->errors();
        return $result;
    }
    //encrypt
     protected function encrypt($value){
        return Crypt::encrypt($value);
    }
    //decrypt
     protected function decrypt($value){
        try {
            $decrypted = Crypt::decrypt($value);
        } catch (\Exception $e) {
            $decrypted = false;
        }
        return  $decrypted;
    }
    //lang
    protected function lang($key,$param=[]){
        return Lang::get($key,$param);
    }
}
?>