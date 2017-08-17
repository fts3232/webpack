<?php 
namespace App\Business\Home;
use App\Business\Business;
class MT4 extends Business{   
    //check
     protected function check($login,$password){
        $master = config('app.L_PLUGIN_MASTER');
        $command="CHKACCPASS MASTER=".$master."|IP=$_SERVER[SERVER_ADDR]|LOGIN=$login|PASSWORD=$password";
        $host = config('app.L_MT4_HOST');
        $port = config('app.L_MT4_PORT');
        $ret = $this->exec($host,$port,$command);
        /* $log = \App::make('App\Lib\Log');
        $debug = ['command'=>$command,'re'=>$ret];
        $log->debug($debug); */
        return $ret[0] != "OK";
    }
    //createDemoAccount
    protected function createDemoAccount($user){
        $host =  config('app.T_MT4_HOST');
        $port = config('app.T_MT4_PORT');
        $master = config('app.T_PLUGIN_MASTER');
        //--- prepare query
        $command = "NEWACCOUNT MASTER=" . $master . "|IP=$_SERVER[REMOTE_ADDR]|GROUP=$usre[group]|NAME=$user[name]|" .
        "PASSWORD=$user[password]|INVESTOR=|EMAIL=$user[email]|COUNTRY=China|" .
        "STATE=|CITY=|ADDRESS=dtg|COMMENT=|" .
        "PHONE=$user[mobile]|PHONE_PASSWORD=$user[phone_password]|STATUS=|ZIPCODE=|" .
        "ID=|LEVERAGE=100|AGENT=|SEND_REPORTS=|DEPOSIT=100000";
        $ret = $this->exec($host,$port,$command);
        /* $log = \App::make('App\Lib\Log');
        $debug = ['command'=>$command,'re'=>$ret];
        $log->debug($debug); */
        if (empty($ret) || empty($ret[0]) || $ret[0] == 'error' || $ret[0] == 'ERROR') {
           return false;
        }else{
            $login = explode("=", $ret[1]);
            if (is_array($login))
                $login = $login[1];
            //$log->debug( $login);
            return $login;
        }
    }
    //exec
    private function exec($host,$port,$command) {
        $ret = 'error';
        //---- open socket
        $ptr = @fsockopen($host, $port, $errno, $errstr,5); //T_MT4_HOST T_MT4_PORT
        //---- check connection
    
        if($ptr)
        {
            //---- send request
            if(@fputs($ptr, "Z{$command}\r\n") != FALSE) //W
            {
                //---- clear default answer
                $ret='';
                //---- receive answer
                while(!feof($ptr))
                {
                    $line = fgets($ptr,128);
                    if($line=="end\r\n") break;
                    $ret .= $line;
                }
            }
            @fclose($ptr);
        }
    
        $ret = explode("\r\n", $ret);
        //---- return answer
        return $ret;
    }
}
?>