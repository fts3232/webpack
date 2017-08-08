<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Users;
use App\Business\Home\Account;
class ArticleController extends Controller
{
    protected $request;
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->request = \App::make('\App\Core\Request');
        $this->middleware('auth.admin:admin');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $size = $this->request->getParam('pageSize',10,'number');
        $page = $this->request->getParam('page',1,'number');
        $searchKey = $this->request->getParam('searchKey','');
        $searchValue = $this->request->getParam('searchValue','');
        $users = Users::getResult($page,$size,['key'=> $searchKey,'value'=>$searchValue]);
        $users = $users?$users:array('result'=>[],'total'=>0);
        return view('admin.article.list',['users'=>$users['result'],'total'=>$users['total'],'pageSize'=>$size,'page'=>$page]);
    }
    public function add(){
        if($this->request->isPost()){
            try{
                $name = $this->request->getParam('name',false);
                if(!$name)
                    throw new \Exception('用户名不能为空');
                $email =  $this->request->getParam('email',false);
                if(!$email)
                    throw new \Exception('邮箱不能为空');
                $password =  $this->request->getParam('password',false);
                if(!$password)
                    throw new \Exception('密码不能为空');
                $result = Users::create($name,$email,$password);
                if(!$result)
                    throw new \Exception('添加失败');
                return $this->success('添加成功');
            }catch(\Exception $e){
                return $this->error($e->getMessage());
            }
        }else{
            return view('admin.article.edit',['action'=>'add']);
        }
    }
    public function edit($id=''){
        if($this->request->isPut()){
            try{
                $id = $this->request->getParam('id',false);
                if(!$id)
                    throw new Exception('用户id不能为空');
                $name = $this->request->getParam('name',false);
                if(!$name)
                    throw new \Exception('用户名不能为空');
                $email =  $this->request->getParam('email',false);
                if(!$email)
                    throw new \Exception('邮箱不能为空');
                $password =  $this->request->getParam('password',false); 
                $result = Users::edit($id,$name,$email,$password);
                if(!$result)
                    throw new \Exception('修改失败');
                return $this->success('修改成功');
            }catch(\Exception $e){
                return $this->error($e->getMessage());
            }
        }else{
            $user = Users::find("select id,name,email from users_copy where id = ?",[$id]);
            return view('admin.article.edit',['user'=>$user,'action'=>'edit']);
        }
    }
    public function delete(){
        try{
            $id = $this->request->getParam('id',false);
            if(!$id)
                throw new Exception('用户id不能为空');
            $result = Users::remove($id);
            if(!$result)
                throw new \Exception('删除失败');
            return $this->success('删除成功');
        }catch(\Exception $e){
            return $this->error($e->getMessage());
        }
        
    }
    public function uploadPic(){
        try{
            $result = $this->request->upload('file','upload\user');
            return $this->success($result);
        }catch(Exception $e){
            return $this->error('上传成功');
        }
    }
}
