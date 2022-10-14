<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;


class UpdateLangMiddleware
{
   
    public function handle(Request $request, Closure $next)
    {
        
        if(session()->get('lang')){
            App::setLocale(session()->get('lang'));
        }

        return $next($request);
    }
}
