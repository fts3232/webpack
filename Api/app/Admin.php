<?php

namespace App;

use App\Models\AuthModel;

class Admin extends AuthModel
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
}
