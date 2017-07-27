<?php

namespace App\Policies;
use Illuminate\Auth\Access\HandlesAuthorization;

class AuthPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }
    
    public function update($user)
    {
        var_dump($user->hasRole('admin'));
        return true;
    }
}
