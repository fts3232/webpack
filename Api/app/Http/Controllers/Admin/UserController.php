<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Users;
use App\Admin;
class UserController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
         $this->middleware('auth.admin:admin');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $size = 5;
        $count = Users::getTotal();
        $page = $this->request->getParam('page',1,'number');
        $totalPage = ceil($count/$size);
        $offset = ($page - 1) * $size;
        $users = Users::select("select id,name,email,password,created_at,updated_at from users_copy limit {$offset},{$size}");
        return view('admin.user',['users'=>$users,'totalPage'=>$totalPage]);
    }
}
