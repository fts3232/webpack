<?php

namespace App\Models;

use App\Models\Model;

class Users extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];
    protected $table = 'users_copy';
    
    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
    
    protected function getResult($page,$limit,$search=[]){
        $where = '';
        $whereData = [];
        $sql = 'select id,name,email,created_at,updated_at from users_copy';
        if(!empty($search)){
            $key =  $search['key']==1?'name':'email';
            $value = $search['value'];
            $where = " where {$key} like ?";
            $whereData = ["%{$value}%"];
        }
        $total = $this->find("SELECT COUNT(*) AS TOTAL FROM USERS_COPY {$where}",$whereData);
        $offset = ($page - 1) * $limit;
        $result = $this->select("select id,name,email,created_at,updated_at from users_copy {$where} limit {$offset},{$limit}",$whereData);
        return ['result'=>$result,'total'=>$total->TOTAL];
    }
    protected function create($name,$email,$password){
        return $this->insert("insert into users_copy(name,email,password,created_at) values(?,?,?,NOW())",[$name,$email,bcrypt($password)]);
    }
    
    protected function edit($id,$name,$email,$password=''){
      
        $updateField = empty($password)?'name=?,email=?':'name=?,email=?,password=?';
        $updateData =  empty($password)?[$name,$email,$id]:[$name,$email,bcrypt($password),$id];
        
        return $result = $this->update("update users_copy set {$updateField} where id = ?",$updateData);
    }
    
    protected function remove($id){
        $where = 'where id = ?';
        $whereData = [];
        if(is_array($id)){
            $length = count($id);
            $wildcard = array_fill(0, $length, '?');
            $wildcard = implode(',',$wildcard);
            $where = "where id in({$wildcard})";
            $whereData = $id;
        }else{
            $whereData = [$id];
        }
        return $this->delete("delete from users_copy {$where}",$whereData);
    }
    
    
}