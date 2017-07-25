<?php

namespace App\Models;

use App\Models\Model;
use Illuminate\Support\Facades\Auth;

class Users extends Model
{
    function __construct(){
        var_dump(Auth::check());
    }
}