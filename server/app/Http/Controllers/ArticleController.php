<?php

namespace App\Http\Controllers;

use App\Collection;
use App\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $articles = Article::all();

        return $articles;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $collections = Collection::all();

        return $collections;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $article = new Article();

        $article->title = $request->title;
        $article->description = $request->description;
        $article->content = $request->content;
        $article->collection_id = $request->collection_id;
        $article->status = $request->status;

        if ($request->hasFile('thumbnail')) {
          $thumbnail = $request->file('thumbnail');
          $thumbnail_url = asset('/storage\/'.$thumbnail->store('thumbnails', 'public'));
          $article->thumbnail_url = $thumbnail_url;
        }

        if ($request->hasFile('blods')) {
          $blods = $request->file('blods');
          foreach($blods as $index=>$blod) {
            $image_url = asset('/storage\/'.$blod->store('contents', 'public'));
            $article->content = str_replace('{im-'.$index.'}', $image_url, $article->content);
          }
        }

        $article->save();

        return $article;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $article = Article::find($id);

        return $article;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
      $collections = Collection::all();
      $article = Article::find($id);

      return array('collections' => $collections, 'article' => $article);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $article = Article::find($id);

        $article->title = $request->title;
        $article->description = $request->description;
        $article->content = $request->content;
        $article->collection_id = $request->collection_id;
        $article->status = $request->status;

        if ($request->hasFile('thumbnail')) {
          $thumbnail = $request->file('thumbnail');
          $thumbnail_url = asset('/storage\/'.$thumbnail->store('thumbnails', 'public'));
          $article->thumbnail_url = $thumbnail_url;
        }

        if ($request->hasFile('blods')) {
          $blods = $request->file('blods');
          foreach($blods as $index=>$blod) {
            $image_url = asset('/storage\/'.$blod->store('contents', 'public'));
            $article->content = str_replace('{im-'.$index.'}', $image_url, $article->content);
          }
        }

        $article->save();

        return $article;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
