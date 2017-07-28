<?php 
namespace App\Business;
use Illuminate\Support\Facades\Log as LaravelLog;
class MT4 {   
    public function login($login,$password){
        $master = config('app.L_PLUGIN_MASTER');
        $command="CHKACCPASS MASTER=".L_PLUGIN_MASTER."|IP=$_SERVER[SERVER_ADDR]|LOGIN=$login|PASSWORD=$password";
        $ret = $this->exec($command);
        return $ret[0] != "OK";
    }
    private function exec($command) {
    
        $host = config('app.L_MT4_HOST');
        $prot = config('app.L_MT4_PORT');
        $ret = 'error';
        //---- open socket
        $ptr = @fsockopen($host, $prot, $errno, $errstr,5); //T_MT4_HOST T_MT4_PORT
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