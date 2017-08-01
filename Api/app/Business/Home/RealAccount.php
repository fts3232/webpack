<?php 
namespace App\Business\Home;
use App\Models\Users;
use App\Business\Business;
class RealAccount extends Business {   
    private $validateRegisterRule = [
        'name'=>'required',//名称
        'platform'=>'required',//平台
        'currency'=>'required',//币种
        'sex'=>'required',//性别
        'idType'=>'required',//id类型
        'idNo'=>'required',//id no
        'brithday'=>'required|date_format',//生日
        'mobile'=>'required',//电话
        'email'=>'required|email',//邮件
        'verficode'=>'required|captcha',//验证码
        'bank'=>'required',
        'bankAccount'=>'required',
        'bankAddress'=>'required',
        'bankAccountCurrency'=>'required',
        'bankAccountType'=>'required',
        'accountHolderName'=>'required',
        'accountBranchBank'=>'required',
    ];
    private $validateRegisterMsg = [];
    private $registerFailMsg;
    public function __construct(){
        $this->validateRegisterMsg = [
            'name.required'=>$this->lang(),
            'platform.required'=>$this->lang(),
            'currnecy.required'=>$this->lang(),
            'sex.required'=>$this->lang(),
            'idType.required'=>$this->lang(),
            'idNo.required'=>$this->lang(),
            'brithday.required'=>$this->lang(),
            'mobile.required'=>$this->lang(),
            'email.required'=>$this->lang(),
            'email.email'=>$this->lang(),
            'verficode.required'=>$this->lang(),
            'verficode.captcha'=>$this->lang(),
            'bank.required'=>$this->lang(),
            'bankAddress.required'=>$this->lang(),
            'bankAccount.required'=>$this->lang(),
            'bankAccountType.required'=>$this->lang(),
            'bankAccountCurrency.required'=>$this->lang(),
            'accountHolderName.required'=>$this->lang(),
            'accountBranchBank.required'=>$this->lang(),
        ];
        $this->registerFailMsg = $this->lang('home.error.3000');
    }
    //register
    public function register($data){
        $data = array('status'=>true,'msg'=>'');
        try{
            $result = Users::create($data);
            if(!$result)
                throw new \Exception($this->registerFailMsg,3000);
        }catch(\Exception $e){
            $data = array('status'=>false,'msg'=>$e->getMessage());
        }
        return $data;
    }
}
?>