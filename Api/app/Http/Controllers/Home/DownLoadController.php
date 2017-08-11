<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
class DownLoadController extends Controller
{
    private $downloadDir = './download';
    public function MT4ForPC(){
        return $this->download($this->downloadDir.'/dtgroup4setup.exe');
    }
    public function MT4ForAndroid(){
        return $this->download($this->downloadDir.'/metatrader4android_1091.apk');
    }
}
