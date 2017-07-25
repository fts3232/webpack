<?php

namespace App\Http\Controllers;

use App\User;
use Validator;
use App\Http\Controllers\AuthController;

class AdminController extends AuthController
{

    /**
     * Where to redirect users after login / registration.
     *
     * @var string
     */
    protected $redirectTo = '/admin';
    protected $vaildateRule = [
            'name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|min:6|confirmed',
        ];
    /**
     * Create a new authentication controller instance.
     *
     * @return void
     */
    //protected $username = 'name';
    //protected $guard = 'admin';
    public function __construct()
    {
        $this->middleware($this->guestMiddleware(), ['except' => 'logout']);
    }
    public function showLoginForm(){
        return view('auth.login2');
    }
    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return User
     */
    protected function create(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);
    }
}
