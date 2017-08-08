<?php 
namespace App\Business\Home;
use App\Models\Users;
use App\Business\Business;
use MT4;
class Users extends Business {   
    //edit person info
    public function editPersonInfo($data){
        $data = array('status'=>true,'msg'=>'');
        try{
            $user = Users::findUser($data);
            if(!$user)
                throw new \Exception($this->lang());
            $result = Users::edit($data);
            if(!$result)
                throw new \Exception();
        }catch(\Exception $e){
            $data = array('status'=>false,'msg'=>$e->getMessage(),'code'=>$e->getCode());
        }
        return $data;
    }
    //withdraw
    public function withdraw($data){
        $data = array('status'=>true,'msg'=>'');
        try{
            $result = WithDraw::create($data);
            if(!$result)
                throw new \Exception($this->lang());
        }catch(\Exception $e){
            $data = array('status'=>false,'msg'=>$e->getMessage(),'code'=>$e->getCode());
        }
        return $data;
    }
}
?>