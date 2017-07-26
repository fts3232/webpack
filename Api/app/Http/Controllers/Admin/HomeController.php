<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Users;
use Illuminate\Support\Facades\DB;
class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
         $this->middleware('auth.admin:admin');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try{
            $result = DB::insert("insert users_copy(name,email,password) value('1','333','sad')");
            $pdo = DB::getPdo();
            var_dump($pdo->lastInsertId());
        }catch(\Exception $e){
           echo 1;
        }
        
        //$validator =  $this->isNum('0');
        //var_dump($validator);
        //return $this->redirect('/');
        return view('admin.home');
    }
}
