<?php
namespace App\Models;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Request;
class Model
{
    protected $connection;
    protected $table;
    protected static $instace = [];
    protected $db;
    //
    public function __construct(){
        $this->db = DB::connection($this->connection);
    }
    //
    public static function __callstatic($funcName, $arguments){
        try{
            $className = static::class;
            if(! array_key_exists($className,self::$instace))
                self::$instace[$className] = new $className();
            return call_user_func_array(array(self::$instace[$className],$funcName), $arguments);
        }catch(\Exception $e){
            $array = array(
                'message' => $e->getMessage(),
                'file' => $e->getFile(),
                'line' => $e->getLine(),
                'code' => $e->getCode(),
                'url' => Request::url(),
                'level'=>'error'
            );
            Log::error($array);
            return false;
        }
    }
    //select
    protected function select($sql,$param=[]){
        return $this->db->select($sql,$param);
    }
    //find
    protected function find($sql,$param=[]){
        $result = $this->db->select($sql,$param);
        return ($result && count($result)>0)?$result[0]:false;
    }
    //update
    protected function update($sql,$param=[]){
        return $this->db->update($sql,$param);
    } 
    //insert
    protected function insert($sql,$param=[]){
        $result = $this->db->insert($sql,$param);
        $pdo = $this->db->getPdo();
        return $result?$pdo->lastInsertId():false;
    }
    //delete
    protected function delete($sql,$param=[]){
         return $this->db->delete($sql,$param);
    }
    //beginTransaction
    protected function beginTransaction(){
        $this->db->beginTransaction();
    }
    //rollback
    protected function rollback(){
        return $this->db->rollBack();
    }
    //commit
    protected function commit(){
        return $this->db->commit();
    }
}
