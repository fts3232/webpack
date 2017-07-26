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
        $this->instace = DB::connection($this->connection);
    }
    //
    protected function select($sql,$param=[]){
        return $this->instace->select($sql,$param);
    }
    //
    protected function find(){
        
    }
    //
    protected function update(){
        
    }
    //
    protected function insert($sql,$param){
        return $this->instace->insert($sql,$param);
    }
    //
    protected function delete(){
        
    }
    //
    protected function beginTransaction(){
        
    }
    //
    protected function rollback(){
        
    }
    //
    protected function commit(){
        
    }
}
