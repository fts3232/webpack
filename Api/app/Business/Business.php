<?php 
namespace App\Business;
use Validator;
class Business {   
    protected static $instance = [];
    protected static $log;
    public static function __callstatic($funcName, $arguments){
        self::$log = \App::make('\App\Core\Log');
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
    protected function validator($data,$rule,$msg){
        $result = true;
        $validator = Validator::make($data, $rules, $messages);
        if($validator->fails())
           $result = $validator->errors();
        return $result;
    }
    //lang
    protected function lang($key){
        return trans($key);
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
}
?>