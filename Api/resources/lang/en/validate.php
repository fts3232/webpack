<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Authentication Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines are used during authentication for various
    | messages that we need to display to the user. You are free to modify
    | these language lines according to your application's requirements.
    |
    */
    'username'=>[
        'required'=>'User name cannot be empty!'
    ],
    'password'=>[
        'required'=>'Password cannot be empty!',
        'confirmed'=>'Password inconsistency',
        'password'=>'Must be 6-15 bit English in combination with numbers',
    ],
    'password__confirmation'=>[
        'requrired'=>'Verify that the password is not empty'
    ],
    'email'=>[
        'required'=>'Mailbox cannot be empty',
        'isExists'=>'The E-mail has been registered. If you need to open a new transaction account, please login to the member center before applying.',
        'email'=>'The mailbox format is incorrect'
    ],
    'verficode'=>[
        'required'=>'The verification code cannot be null',
        'captcha'=>'Verify code error'
    ],
    'platform'=>[
        'required'=>'Platform type cannot be empty',
        'in'=>'The type of platform you entered is incorrect. Please confirm and re-enter.',
    ],
    'account_type'=>[
        'required'=>'Account type cannot be empty',
        'in'=>'The type of account you entered is incorrect. Please confirm it and re-enter it.',
    ],
    'acct_currency'=>[
        'required'=>'The account currency you entered is incorrect. Please confirm and re-enter it.',
    ],
    'name'=>[
        'required'=>'The name cannot be empty',
        'regex'=>'The name you entered is incorrect. Please confirm it and re-enter it.'
    ],
   'document_number'=>[
       'required'=>'The Document Number cannot be empty',
       'regex'=>'The Document Number you entered is incorrect. Please confirm it and re-enter it.',
       'isExists'=>'Your ID already exists. Please fill in again.',
   ],
   'resid_addr'=>[
       'required'=>'The Resident Address cannot be empty',
       'regex'=>'The Resident Address you entered is incorrect. Please confirm it and re-enter it.'
   ],
   'country'=>[
        'required'=>'Nationality cannot be null',
        'regex'=>'The nationality you entered is incorrect. Please confirm it and re-enter it.'
    ],
    
    'mobile'=>[
        'required'=>'Mobile phone number cannot be empty',
        'isExists'=>'The Cellphone has been registered. If you need to open a new transaction account, please login to the member center before applying.',
        'regex'=>'The phone number you entered is incorrect. Please confirm it and re-enter it.',
    ],
    'account_name'=>[
        'required'=>'The account holder name can not be empty',
        'regex'=>'The account holder name you entered is incorrect. Please confirm it and re-enter it.',
    ],
    'bank_name'=>[
        'required'=>'The bank can not be empty',
        'in'=>'The bank you entered is incorrect. Please confirm it and re-enter it.'
    ],
    'bank_account'=>[
        'required'=>'The bank account cannot be empty',
        'regex'=>'The bank account you entered is incorrect. Please re-enter it after confirmation.'
    ],
    'bank_area'=>[
        'required'=>'The bank address cannot be empty',
        'in'=>'The bank address you entered is incorrect. Please confirm it and re-enter it.'
    ],
    'bank_address'=>[
        'required'=>'The bank address cannot be empty',
        'regex'=>'The bank address you entered is incorrect. Please confirm it and re-enter it.'
    ],
    'acct_bran_bank'=>[
        'required'=>'Open an account branch can not be empty',
        'regex'=>'The account you entered is incorrect. Please confirm it and re-enter it.'
    ],
    'cart_type'=>[
        'required'=>'The type of bank card cannot be empty',
        'in'=>'The type of bank card you entered is incorrect. Please confirm it and re-enter it.'
    ],
    'cart_currency'=>[
        'required'=>'Currency in bank account cannot be empty',
        'in'=>'The bank account you entered is incorrect. Please re-enter it after confirmation.'
    ],
    'cred_curr'=>[
        'required'=>'Currency cannot be empty',
        'in'=>'The Currency  you entered is incorrect. Please re-enter it after confirmation.'
    ],
    'mt_account'=>[
        'required'=>'Account cannot be empty',
    ],
    'withd_amot'=>[
        'required'=>'Withdrawal Amount cannot be empty',
        'numeric'=>'The withdrawal amount you entered is incorrect. Please re-enter it after confirmation.'
    ],
    'beneficiary_bank'=>[
        'required'=>'Beneficiary Bank cannot be empty',
        'in'=>'The Beneficiary Bank you entered is incorrect. Please re-enter it after confirmation.'
    ],
    'receiving_bank_account_number'=>[
        'required'=>'Receiving Bank Account Number cannot be empty',
        'regex'=>'The Receiving Bank Account Number you entered is incorrect. Please re-enter it after confirmation.'
    ],
    'remittance_currency'=>[
        'required'=>'Remittance Currency cannot be empty',
        'in'=>'The Remittance Currency you entered is incorrect. Please re-enter it after confirmation.',
    ],
    'remittance_amount'=>[
        'required'=>'Remittance Amount cannot be empty',
        'numeric'=>'The Remittance Amount  you entered is incorrect. Please re-enter it after confirmation.'
    ],
    'deposit_bank'=>[
        'required'=>'Deposit bank cannot be empty',
        'in'=>'The Deposit bank you entered is incorrect. Please re-enter it after confirmation.',
    ]
];
