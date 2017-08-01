<?php 
namespace App\Business\Home;
use App\Models\Users;
use App\Business\Business;
class SimulateAccount extends Business {   
    private $registerFailMsg;
    public function __construct(){
        $this->registerFailMsg = $this->lang('home.error.2000');
    }
    //register
    public function register($data){
        $data = array('status'=>true,'msg'=>'');
        try{
            $result = Users::create($data);
            if(!$result)
                throw new \Exception($this->registerFailMsg,2000);
        }catch(\Exception $e){
            $data = array('status'=>false,'msg'=>$e->getMessage());
        }
        return $data;
    }
}
?>