<?php

namespace App\Http\Controllers;

use App\Models\Pesanans;
use Illuminate\Http\Request;

class PesananController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $user = Pesanans::all();
        return response()->json(['data'=>$user]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $req)
    {
        //
            $user = new Pesanans();
            $user->user_id = $req->input('user_id');
            $user->nomeja = $req->input('nomeja');
            $user->menu_id = $req->input('menu_id');
            $user->jumlah = $req->input('jumlah');
            $user->total = $req->input('total');

            $user->save();
            return response()->json(['message'=>"Data Berhasil Dimasukkan"]);
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Users  $users
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $user = Pesanans::find($id);
        return response()->json(['data'=>$user]);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Users  $users
     * @return \Illuminate\Http\Response
     */
    public function update(Request $req, $id)
    {
        //
        $user = Pesanans::find($id);
        if(!$user){
            return response()->json(['message'=>"Data Tidak Ada"]);
        }else{
            $user->user_id = $req->input('user_id');
            $user->nomeja = $req->input('nomeja');
            $user->menu_id = $req->input('menu_id');
            $user->jumlah = $req->input('jumlah');
            $user->total = $req->input('total');
            $user->save();
            return response()->json(['message'=>"Data Berhasil Dimasukkan"]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Users  $users
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $user = Pesanans::find($id);
        if($user){
            $user->delete();
            return response()->json(['message'=>"Data Berhasil Dihapus"]);
        }else{
            return response()->json(['message'=>"Data Tidak Ada"]);
        }
    }
}
