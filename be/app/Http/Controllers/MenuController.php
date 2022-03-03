<?php

namespace App\Http\Controllers;

use App\Models\Menus;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $user = Menus::all();
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
            $user = new Menus();
            $user->nama = $req->input('nama');
            $user->harga = $req->input('harga');
            $user->stok = $req->input('stok');

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
        $user = Menus::find($id);
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
        $user = Menus::find($id);
        if(!$user){
            return response()->json(['message'=>"Data Tidak Ada"]);
        }else{
            $user->nama = $req->input('nama');
            $user->harga = $req->input('harga');
            $user->stok = $req->input('stok');

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
        $user = Menus::find($id);
        if($user){
            $user->delete();
            return response()->json(['message'=>"Data Berhasil Dihapus"]);
        }else{
            return response()->json(['message'=>"Data Tidak Ada"]);
        }
    }
}
