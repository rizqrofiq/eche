<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pesanans extends Model
{
    use HasFactory;
    protected $table="tb_pesanan";
    protected $with= ["user","menu"];

    public function user()
    {
        return $this->belongsTO(Users::class);
    }

    public function menu()
    {
        return $this->belongsTO(Menus::class);
    }
}
