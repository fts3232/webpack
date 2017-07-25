<?php
namespace App\Models;
use Illuminate\Support\Facades\DB;
class Model
{
    protected $connection;
    protected $instace;
    //
    protected function __construct(){
        $this->instace = DB::connection($this->connection);
    }
    //
    protected function select(){
        
    }
    //
    protected function find(){
        
    }
    //
    protected function update(){
        
    }
    //
    protected function insert(){
        
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
