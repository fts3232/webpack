<?php
namespace App\Models;
use Illuminate\Support\Facades\DB;
class Model
{
    protected $connection;
    protected $instace;
    protected $table;
    //
    public function __construct(){
        $this->instace = $this->instace->connection($this->connection);
    }
    //select
    protected function select($sql,$param=[]){
        return $this->instace->select($sql,$param);
    }
    //find
    protected function find(){
        $result = $this->instace->select($sql,$param);
        return ($result && count($result)>0)?$result[0]:false;
    }
    //update
    public function update($sql,$param=[]){
        return $this->instace->update($sql,$param);
    } 
    //insert
    protected function insert($sql,$param=[]){
        var_dump($this->table);
        $result = $this->instace->insert($sql,$param);
        $pdo = $this->instace->getPdo();
        return $result?$pdo->lastInsertId:false;
    }
    //delete
    protected function delete($sql,$param=[]){
         return $this->instace->delete($sql,$param);
    }
    //beginTransaction
    protected function beginTransaction(){
        $this->instace->beginTransaction();
    }
    //rollback
    protected function rollback(){
        return $this->instace->rollBack();
    }
    //commit
    protected function commit(){
        return $this->instace->commit();
    }
}
