<?php

namespace App\Exceptions;

use Exception;
use Request;
use Illuminate\Validation\ValidationException;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Illuminate\Database\QueryException;
use App\Exceptions\CustomException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Symfony\Component\Debug\Exception\FatalErrorException;

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
       
        $array = array(
            'message' => $e->getMessage(),
            'file' => $e->getFile(),
            'line' => $e->getLine(),
            'code' => $e->getCode(),
            'url' => Request::url(),
        );
        if ($this->shouldReport($e)) {
            if($e instanceof \PDOException || $e instanceof FatalErrorException){
                $level = 'ALETR';
                $array['level'] = $level ;
                $this->log->error($array);
                //call_user_func(array($this->log,$level),$array);
            }else{
                $level = 'ERROR';
                $array['level'] = $level ;
                $this->log->error($array);
            }
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
        if(config('app.debug')){
            return parent::render($request, $e);
        }else{
            if($e instanceof CustomException){
                if($request->ajax()){
                    return response()->json(['status' => 'false', 'msg'=>$e->getMessage()]);
                }elseif($request->isMethod('post')){
                    return redirect()->back()->withErrors(['exception'=>$e->getMessage()]);
                }else{
                    return $e->getMessage();
                }
            }elseif($e instanceof NotFoundHttpException ){
                return response()->view('errors.404');
            }elseif($e instanceof  HttpException){
                return response()->view('errors.'.$e->getStatusCode());
            }elseif($e instanceof ValidationException){
                return parent::render($request, $e);
            }else{
                return response()->view('errors.common');
            }
        }
    }
}
