<?php 
namespace App\Business\Home;
use App\Models\Users as UsersModel;
use App\Business\Business;
use MT4;
class Customer extends Business {   
    //withdraw
    protected function withdraw($data){
        $data = array('status'=>true,'msg'=>$this->lang('user.withdraw.success'));
        $request = \App::make('\App\Lib\Request');
        $rule = [
            'cred_curr'=>'required|in:USD,CHF,PYS',
            'withd_amot'=>'required|numeric'
        ];
        $msg = [
            'cred_curr.required'=>$this->lang('validate.cred_curr.required'),
            'cred_curr.in'=>$this->lang('validate.cred_curr.in'),
            'withd_amot.required'=>$this->lang('validate.withd_amot.required'),
            'withd_amot.numeric'=>$this->lang('validate.withd_amot.numeric'),
        ];
        try{
            $validator = $this->validator($request->getParam(),$rule,$msg);
            if($validator!==true)
                throw new \Exception($this->lang('errors.validate'),1001);
             throw new \Exception($this->lang('user.withdraw.fail'),3000);
            /* $result = WithDraw::create($data);
            if(!$result)
                throw new \Exception($this->lang()); */
        }catch(\Exception $e){
            $code = $e->getCode();
            if($code==1001)
                $data['validator'] = $validator;
            $data['status']=false;
            $data['msg'] = $e->getMessage();
            $data['code'] = $code;
        }
        return $data;
    }
    //uploadPic
    protected function uploadPic($request){
        $data = array('status'=>true,'msg'=>$this->lang('upload.success'));
        try{
            $result = $request->upload('file','upload/user');
            if(!$result['status'])
                throw new \Exception($result['msg']);
            $data['file']= $result['file'];
        }catch(\Exception $e){
            $data = $result ;
        }
        return $data;
    }
    //injection
    protected function injection($request){
        $data = array('status'=>true,'msg'=>$this->lang('user.bank_injection.success'));
        $rule = [
            'beneficiary_bank'=>'required|in:Bank Of China,Bank Of USA,Bank Of Frames',
            'receiving_bank_account_number'=>['required','regex:/^([A-Za-z0-9-\s]+)$/'],
            'remittance_currency'=>'required|in:USD,CHF,JPY',
            'remittance_amount'=>'required|numeric',
            'deposit_bank'=>'required|in:Bank Of China,Bank Of USA,Bank Of Frames',
        ];
        $msg = [
            'beneficiary_bank.required'=>$this->lang('validate.beneficiary_bank.required'),
            'beneficiary_bank.in'=>$this->lang('validate.beneficiary_bank.in'),
            'receiving_bank_account_number.required'=>$this->lang('validate.receiving_bank_account_number.required'),
            'receiving_bank_account_number.regex'=>$this->lang('validate.receiving_bank_account_number.regex'),
            'remittance_currency.required'=>$this->lang('validate.remittance_currency.required'),
            'remittance_currency.in'=>$this->lang('validate.remittance_currency.in'),
            'remittance_amount.required'=>$this->lang('validate.remittance_amount.required'),
            'remittance_amount.numeric'=>$this->lang('validate.remittance_amount.numeric'),
            'deposit_bank.required'=>$this->lang('validate.deposit_bank.required'),
            'deposit_bank.in'=>$this->lang('validate.deposit_bank.in'),
        ];
        try{
            $validator = $this->validator($request->getParam(),$rule,$msg);
            if($validator!==true)
                throw new \Exception($this->lang('errors.validate'),1001);
            $result = $request->upload('file','upload/user/injection');
            if(!$result['status'])
                throw new \Exception($result['msg'],$result['code']);
            throw new \Exception($this->lang('user.bank_injection.fail'),3001);
        }catch(\Exception $e){
            $code = $e->getCode();
            if($code==1001)
                $data['validator'] = $validator;
            $data['status']=false;
            $data['msg'] = $e->getMessage();
            $data['code'] = $code;
        }
        return $data;
    }
    //onlineDeposit
    protected function onlineDeposit($request){
        $auth = \App::make('App\Lib\Auth');
        $payDomain = config('app.PAY_DOMAIN');
        $time = date('Y-m-d H:i:s',time());
        $remark = $request->getParam('remark');
        $account = $request->getParam('account');
        $amount = $request->getParam('dep_amount');
        echo <<<EOF
            <html>
                    <head>
                        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                    </head>
                     <body onload="document.paymentForm.submit();">
                        <form name="paymentForm" action="http://{$payDomain}/live/onlinepay.php" method="post" style="display:none">
                            <input type="hidden" name="domain" value="202.hk"/>
                            <input type="hidden" name="action" value="init"/>
                            <input type="hidden" name="orderDate" value="{$time}"/>
                            <input type="hidden" name="remark" value="{$remark}"/>
                            <input type="hidden" name="amount" value="{$amount}"/>
                            <input type="hidden" name="mt_account" value="{$account}"/>
                        </form>
                    <body>
                </html>
EOF;
    }
}
?>