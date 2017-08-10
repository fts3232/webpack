<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Validation\ValidationException;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Illuminate\Database\QueryException;
use App\Exceptions\CustomException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Symfony\Component\Debug\Exception\FatalErrorException;
use Illuminate\Session\TokenMismatchException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that should not be reported.
     *
     * @var array
     */
    protected $dontReport = [
        AuthorizationException::class,
        HttpException::class,
        ModelNotFoundException::class,
        ValidationException::class,
        NotFoundHttpException::class,
    ];

    /**
     * Report or log an exception.
     *
     * This is a great spot to send exceptions to Sentry, Bugsnag, etc.
     *
     * @param  \Exception  $e
     * @return void
     */
    public function report(Exception $e)
    {
        $log = \App::make('\App\Lib\Log');
        
         if ($this->shouldReport($e)) {
             if($e instanceof \PDOException || $e instanceof FatalErrorException){
                $level = 'ALERT';
            }else{
                $level = 'ERROR';
            } 
            $log->write($e,$level);
        } 
        
        //parent::report($e);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $e
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $e)
    {
        if($e instanceof NotFoundHttpException ){
            return response()->view('errors.404',['cdnPath'=>config('app.CDN_PATH')]);
        }else{
            if($request->ajax() && $e instanceof TokenMismatchException){
                return response()->json(['status' => 'false', 'msg'=>'csrf token is invalid','code'=>1000]);
            }
            elseif($request->isMethod('post') && $e instanceof TokenMismatchException){
                return redirect()->back()->withErrors(['exception'=>'csrf token is invalid','code'=>1000]);
            }
            elseif(config('app.debug')){
                    return parent::render($request, $e);
            }else{
                return response()->view('errors.common');
            }
        }
    }
}
