<?php
use Monolog\Handler\MongoDBHandler;
use Monolog\Handler\RotatingFileHandler;
/*
|--------------------------------------------------------------------------
| Create The Application
|--------------------------------------------------------------------------
|
| The first thing we will do is create a new Laravel application instance
| which serves as the "glue" for all the components of Laravel, and is
| the IoC container for the system binding all of the various parts.
|
*/

$app = new Illuminate\Foundation\Application(
    realpath(__DIR__.'/../')
);

/*
|--------------------------------------------------------------------------
| Bind Important Interfaces
|--------------------------------------------------------------------------
|
| Next, we need to bind some important interfaces into the container so
| we will be able to resolve them when needed. The kernels serve the
| incoming requests to this application from both the web and CLI.
|
*/

$app->singleton(
    Illuminate\Contracts\Http\Kernel::class,
    App\Http\Kernel::class
);

$app->singleton(
    Illuminate\Contracts\Console\Kernel::class,
    App\Console\Kernel::class
);

$app->singleton(
    Illuminate\Contracts\Debug\ExceptionHandler::class,
    App\Exceptions\Handler::class
);

$app->configureMonologUsing(function ($monolog) {
    $writeMongoDB = true;

    if(config('database.connections.mongodb')){
        
        try{
            $host = config('database.connections.mongodb.host');
            $port = config('database.connections.mongodb.port');
            $mongodb = new MongoDBHandler(new \MongoClient("mongodb://{$host}:{$port}"),'log','me');
            $monolog->pushHandler($mongodb);
        }catch(\Exception $e){
            $writeMongoDB = false;
        }
    }else{
        $writeMongoDB = false;
    }
    if(!$writeMongoDB){
        $filename = '../storage/logs/log.log';
        $monolog->pushHandler(new RotatingFileHandler($filename));
    }
});


/*
|--------------------------------------------------------------------------
| Return The Application
|--------------------------------------------------------------------------
|
| This script returns the application instance. The instance is given to
| the calling script so we can separate the building of the instances
| from the actual running of the application and sending responses.
|
*/

return $app;
