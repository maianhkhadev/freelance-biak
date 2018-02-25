<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    public function collection()
    {
        return $this->hasOne('App\Collection');
    }
    public function comments()
    {
        return $this->hasMany('App\Comment');
    }
    public function tags()
    {
        return $this->belongsToMany('App\Tag');
    }
}
