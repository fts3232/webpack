<?php 
namespace App\Business\Home\Account;
use App\Business\BaseAuth\Register;
use App\Business\Home\MT4;
use App\Business\Home\Account\Account;
use App\Models\Customer;
use App\Models\Account as AccountModel;

class Demo extends Account{
    use Register;
    protected $cus_id;
    private $mail;
    //验证规则
    protected $validateRule = [
        'account_type'=>'required|in:1,2',
        'name'=>['required','regex:/(^[A-Za-z\x{4e00}-\x{9fa5}]+)$/u'],
        'email'=>'required|email|customer_email',
        'mobile'=>['required','regex:/^([2,3,5,6,8,9]\d{7}|1(3[0-9]|4[579]|5[0-35-9]|7[35-8]|8[0-9])\d{8})$/','customer_mobile'],
        'verficode'=>'required',
    ];
    protected $validateErrorMsg = [];
    protected function __construct(){
        $this->validateErrorMsg = [
            'account_type.required'=>$this->lang('validate.account_type.required'),
            'account_type.in'=>$this->lang('validate.account_type.in'),
            'name.required'=>$this->lang('validate.name.required'),
            'name.regex'=>$this->lang('validate.name.regex'),
            'email.required'=>$this->lang('validate.email.required'),
            'email.email'=>$this->lang('validate.email.email'),
            'email.customer_email'=>$this->lang('validate.email.isExists'),
            'mobile.required'=>$this->lang('validate.mobile.required'),
            'mobile.regex'=>$this->lang('validate.mobile.regex'),
            'mobile.customer_mobile'=>$this->lang('validate.mobile.isExists'),
            'verficode.required'=>$this->lang('validate.verficode.required'),
            'verficode.captcha'=>$this->lang('validate.verficode.captcha'),
        ];
    }
    protected function getCache(){
        return  \App::make('App\Lib\Cache');
    }
    protected function getMail(){
        return  \App::make('App\Lib\Mail');
    }
    protected function create($data){
        $data['ip'] = $this->getRequest()->ip();  
        $this->cus_id = Customer::demoCustomerCreate($data);
        return $this->cus_id;
    }
    protected function registered($data){
        //1.生成激活码，保存在cache黎
        $activationKey = 'cus_id='.$this->cus_id.'&time='.time().'&type='.$data['account_type'].'&email='.$data['email'].'&mobile='.$data['mobile'].'&name='.$data['name'];
        $activationKey = $this->encrypt($activationKey);
        $cache = $this->getCache();
        $cache->set('demo_'.$this->cus_id.'_activationKey',$activationKey,5);
        $link = route('demoAccountActivation').'?key='.$activationKey;
        //2.发送激活邮件
        $mail = $this->getMail();
        $mail->send($data['email'],$this->lang('email.demo.activation.title'),'home.email.demoActivation',['name'=>$data['name'],'link'=>$link]);
    }
    protected function activation(){
        $returnData = array('status'=>true);
        try{
            //1.获取key并解码
            $request = $this->getRequest();
            $activationKey =  $request->getParam('key');
            $decrypt = $this->decrypt($activationKey);
            if(!$activationKey || !$decrypt)
                throw new \Exception($this->lang('account.demo.activation.error'),1006);
            $tempArr = explode('&',$decrypt);
            $data = [];
            foreach( $tempArr as $v){
               $tempArr2 = explode('=',$v);
               if(count($tempArr2)==2){
                   $data[$tempArr2[0]] = $tempArr2[1];
               }
            }
           //2.判断key时间
            $currentTime = time();
            if($currentTime - $data['time']>300)
                throw new \Exception($this->lang('account.demo.activation.noValid'),1005);
		    $cache = $this->getCache();
		    $cacheActivationKey = $cache->get('demo_'.$data['cus_id'].'_activationKey');
		    if($cacheActivationKey===true)
		   		throw new \Exception($this->lang('account.demo.activation.activated'),1008);
            //3.生成密码并向demo服务器发送生成账号请求
 			$data['password']= 'a' . $this->randomPassword();
            $data['phone_password'] = $data['password'];
            $data['group'] = $data['type']==1?6:8;
            $ret = MT4::CreateDemoAccount($data);
            $ret= 'asdsad1212';
            if (!$ret) {
               throw new \Exception($this->lang('account.demo.activation.fail'),1007);
            }
            //4.创建本地数据
            $returnData['login'] = $ret;
            $returnData['password'] = $data['password'];
            $data['login'] = $returnData['login'];
            $data['category'] = $data['type'];
            $ret = AccountModel::demoAccountCreate($data);
            if(!$ret)
               throw new \Exception($this->lang('account.createFail'),1010);
            $ret = Customer::addPassword($data['cus_id'],$data['password']);
            //5.激活码失效
            $cache->set('demo_'.$data['cus_id'].'_activationKey',true,5);
           
            //6.发邮件
            $mail = $this->getMail();
            $mail->send($data['email'],$this->lang('email.demo.open.title'),'home.email.demoAccount',$data);
        }catch(\Exception $e){
            $returnData['status']=false;
            $returnData['msg']=$e->getMessage();
            $returnData['code'] = $e->getCode();
        }
        return $returnData;
    }
    
    private function randomPassword() {
        $pass = "";
        $alphabet = "0123456789";
        for ($i = 0; $i < 6; $i++) {
            $n = rand(0, 9);
            $pass .= $alphabet[$n];
        }
        return $pass;
    }
}
?>