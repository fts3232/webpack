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
    protected function getTotal(){
        $sql = 'SELECT COUNT(*) AS TOTAL FROM USERS_COPYss';
        $result = $this->select($sql);
        return $result?$result[0]->TOTAL:false;
    }
}