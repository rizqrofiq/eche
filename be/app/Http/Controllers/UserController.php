<?php

namespace App\Http\Controllers;

use App\Models\Users;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $user = Users::all();
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
        $user = Users::where('email',$req->email)->first();
        if($user){
            return response()->json(['message'=>"Data Sudah Ada"]);
        }else{
            $user = new Users();
            $user->nama = $req->input('nama');
            $user->email = $req->input('email');
            $user->password = Hash::make($req->input('password'));
            $user->role = $req->input('role');

            $user->save();
            return response()->json(['message'=>"Data Berhasil Dimasukkan"]);
        }
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
        $user = Users::find($id);
        return response()->json(['data'=>$user]);
    }

    public function login(Request $req)
    {
        $user = Users::where('email', $req->email)->first();
        if(!$user || !Hash::check($req->password,$user->password)){
            return response()->json(['message'=>"Email / Password Salah"]);
        }else{
            return response()->json(['message'=>"Berhasl Login", 'data'=>$user]);
        }
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
        $user = Users::find($id);
        if(!$user){
            return response()->json(['message'=>"Data Tidak Ada"]);
        }else{
             $user->nama = $req->input('nama');
            $user->email = $req->input('email');
            $user->password = Hash::make($req->input('password'));
            $user->role = $req->input('role');

            $user->save();
            return response()->json(['message'=>"Data Berhasil Diupdate"]);
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
        $user = Users::find($id);
        if($user){
            $user->delete();
            return response()->json(['message'=>"Data Berhasil Dihapus"]);
        }else{
            return response()->json(['message'=>"Data Tidak Ada"]);
        }
    }
}
