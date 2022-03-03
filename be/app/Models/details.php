<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Details extends Model
{
    use HasFactory;
    protected $table="tb_detail";
    protected $with=["user","menu", "pesanan"];

    public function user()
    {
        return $this->belongsTo(Users::class);
    }

    public function menu()
    {
        return $this->belongsTo(Menus::class);
    }   

    // public function pesanan() {
    //     return $this->belongsTo(Pesanans::class);
    // }
}
