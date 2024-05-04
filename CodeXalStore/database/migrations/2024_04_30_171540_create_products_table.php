<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('ProductName')->nullable();
            $table->text('Description')->nullable();
            $table->decimal('Price', 8, 2)->nullable();
            $table->string('colors')->nullable();
            $table->unsignedBigInteger('ClassificationID')->nullable();
            $table->unsignedBigInteger('CategoryGroupsID')->nullable();
            $table->unsignedBigInteger('CategoryID')->nullable();
            $table->foreign('ClassificationID')->references('id')->on('classifications');
            $table->foreign('CategoryGroupsID')->references('id')->on('categories_groups');
            $table->foreign('CategoryID')->references('id')->on('categories');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
