<?php

namespace App\Models;

use App\Models\Model;
use DB;
use Hash;
class Account extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $platformMap = [
        '1'=>'',
        '2'=>'',
        '3'=>'',
        '4'=>''
    ];
    protected $currencyMap = [
        '1'=>'USD',
        '2'=>'CHF'
    ];
    protected $bankCurrencyMap = [
        '1'=>'USD',
        '2'=>'IIS',
        '3'=>'CHF'
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
    
    protected function standardAccountCreate($data){
        $sql = "INSERT INTO `CUS_ACCOUNT` (
                        	`CUS_ID`,
                        	`CATEGORY`,
                        	`CURRENCY`,
                        	`PLATFORM`,
                            `BANK_NAME`,
                            `BANK_ACCOUNT`,
                            `BANK_CARD_TYPE`,
                        	`BANK_USERNAME`,
                            `BANK_CURRENCY`,
                            `BANK_BRANCH`,
                            `STATUS`,
                        	`CREATED_TIME`
                        )
                        VALUES(
                            :CID,
                            :CATEGORY,
                            :CURRENCY,
                            :PLATFORM,
                            :BANK_NAME,
                            :BANK_ACCOUNT,
                            :BANK_CARD_TYPE,
                            :BANK_USERNAME,
                            :BANK_CURRENCY,
                            :BANK_BRANCH,
                            1,
                            NOW()
                        )";
        $sqlData = [
            'CID'=>$data['cus_id'],
            'CATEGORY'=>$data['account_type'],
            'CURRENCY'=>$this->currencyMap[$data['account_currency']],
            'PLATFORM'=>$data['platform'],
            'BANK_NAME'=>$data['bank_name'],
            'BANK_ACCOUNT'=>$data['bank_account'],
            'BANK_CARD_TYPE'=>$data['cart_type'],
            'BANK_USERNAME'=>$data['account_name'],
            'BANK_CURRENCY'=>$this->bankCurrencyMap[$data['cart_currency']],
            'BANK_BRANCH'=>$data['acct_bran_bank']
        ];
        return $this->insert($sql,$sqlData);
    }
    protected function demoAccountCreate($data){
        $sql = "INSERT INTO `CUS_ACCOUNT` (
                        	`LOGIN`,
                        	`PASSWORD`,
                        	`CUS_ID`,
                        	`CATEGORY`,
                        	`PLATFORM`,
                        	`STATUS`,
                        	`CREATED_TIME`
                        )
                        VALUES(
                            :LOGIN,
                            :PASSWORD,
                            :CID,
                            :CATEGORY,
                            3,
                            1,
                            NOW()
                        )";
        return $this->insert($sql,[
            'LOGIN'=>$data['login'],
            'PASSWORD'=>md5($data['password']),
            'CID'=>$data['cus_id'],
            'CATEGORY'=>$data['category']
        ]);
    }
}