<?php

namespace App\Models;

use App\Models\Model;
use DB;
use Hash;
class Customer extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $platformMap = [
        '1'=>'MT4',
        '2'=>'FX',
        '3'=>'demo',
    ];
    protected $fillable = [
        'LOGIN', 
        'PASSWORD',
        'CUS_ID',
        'CATEGORY',
        'CURRENCY',
        'PLATFORM',
        'STATUS',
        'CREATED_TIME',
    ];
    protected $table = 'CUS_ACCOUNT';
    
    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
   /*  protected $hidden = [
        'password', 'remember_token',
    ]; */
    
    protected function standardCustomerCreate($data){
        $sql = "INSERT INTO `CUS_CUSTOMER` (
                        	`USERNAME`,
                            `PASSWORD`,
                        	`ID_TYPE`,
                        	`ID_NUMBER`,
                        	`EMAIL`,
                        	`MOBILE`,
                            `REG_IP`,
                            `STATUS`,
                            `CREATED_TIME`
                        )
                        VALUES(
                            :NAME,
                            :PASSWORD,
                            :TYPE,
                            :NUMBER,
                            :EMAIL,
                            :MOBILE,
                            :IP,
                            1,
                            NOW()
                        )";
        $sqlData = [
            'NAME'=>$data['name'],
            'PASSWORD'=>md5($data['password']),
            'TYPE'=>$data['certificate_type'],
            'NUMBER'=>$data['document_number'],
            'EMAIL'=>$data['email'],
            'MOBILE'=>$data['mobile'],
            'IP'=>$data['ip']
        ];
        return $this->insert($sql,$sqlData);
    }
    //protected function 
    protected function demoCustomerCreate($data){
        $sql = "INSERT INTO CUS_CUSTOMER (
                        	USERNAME,
                        	EMAIL,
                        	MOBILE,
                            REG_IP,
                            STATUS,
                            CREATED_TIME)
                        VALUES(
                            :NAME,
                            :EMAIL,
                            :MOBILE,
                            :IP,
                            1,
                            NOW()
                        )";
        $sqlData = [
            'NAME'=>$data['name'],
            'EMAIL'=>$data['email'],
            'MOBILE'=>$data['mobile'],
            'IP'=>$data['ip']
        ];
        return $this->insert($sql,$sqlData);
    }
    protected function checkPersonID($type,$number){
        $sql = "SELECT CUS_ID FROM CUS_CUSTOMER WHERE ID_TYPE = :TYPE AND ID_NUMBER = :NUMBER";
        $sqlData = [
           'TYPE'=>$type,
           'NUMBER'=>$number
        ];
        return $this->find($sql,$sqlData);
    }
    protected function findUser($username,$password){
        $sql = 'SELECT CUS_ID,EMAIL,PASSWORD FROM  CUS_CUSTOMER WHERE (EMAIL = :EMAIL OR MOBILE = :MOBILE) AND PASSWORD = :PASSWORD AND STATUS = 1';
        $user = $this->find($sql,[
            'EMAIL'=>$username,
            'MOBILE'=>$username,
            'PASSWORD'=>md5($password)
            ]) ;
        return $user;
    }
    protected function changeLastLogin($cusID){
        $sql = "UPDATE CUS_CUSTOMER SET LASTED_LOGIN = NOW() WHERE CUS_ID = :ID";
        $sqlData = [
            'ID'=>$cusID
        ];
        return $this->update($sql,$sqlData);
    }
    protected function checkMobile($mobile){
        $sql = 'SELECT CUS_ID FROM  CUS_CUSTOMER WHERE MOBILE = :MOBILE ';
        $user = $this->find($sql,['MOBILE'=>$mobile]) ;
        return $user;
    }
    protected function checkEmail($email){
        $sql = 'SELECT CUS_ID FROM  CUS_CUSTOMER WHERE EMAIL = :EMAIL ';
        $user = $this->find($sql,['EMAIL'=>$email]) ;
        return $user;
    }
    protected function addPassword($cusID,$password){
        $sql = "UPDATE CUS_CUSTOMER SET PASSWORD =  :PASSWORD WHERE CUS_ID = :ID";
        $sqlData = [
            'PASSWORD'=>md5($password),
            'ID'=>$cusID
        ];
        return $this->update($sql,$sqlData);
    }
}