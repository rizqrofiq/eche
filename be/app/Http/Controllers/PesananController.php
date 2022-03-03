<?php

namespace App\Http\Controllers;


use App\Models\Pesanans;
use App\Models\Details;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

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
        $pesanan = DB::table("tb_pesanan")->get();
        return response()->json(["data" => $pesanan]); 
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

            $Id = Str::uuid();

            $user = new Pesanans();
            $user->id = $Id;
            $user->user_id = $req->input('user_id');
            $user->nomeja = $req->input('nomeja');
            $user->total = $req->input('total');
            
            $user->save();
            
            foreach ($req->input("menu") as $menu) {
                $detail = new Details();    

                $detail->pesanan_id = $Id;
                $detail->jumlah = $menu["quantity"];
                $detail->menu_id = $menu["id"];

                $detail->save();
            }

            return response()->json(['type_menu'=>$req,  'message'=>"Data Berhasil Dimasukkan"]);
        
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
        $detail = Details::where("pesanan_id", $id);

        if($user){
            $user->delete();
            $detail->delete();
            return response()->json(['message'=>"Data Berhasil Dihapus"]);
        }else{
            return response()->json(['message'=>"Data Tidak Ada"]);
        }
    }
}
