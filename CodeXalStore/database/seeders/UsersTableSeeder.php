<?php
namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            
            'name' => 'adminlaith',
            'email' => 'admin@codeXal.com',
            'email_verified_at' => now(),
            'phone'=>'123456789',
            'password' => Hash::make('secret'),
            'type'=>'Admin',
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
