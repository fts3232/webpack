<?php

namespace App\Models;

use App\Models\Model;

class Post extends Model
{
    function getOne(){
        $result = $this->find('select * from post');
        var_dump($result);
    }
}