<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoriesGroupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categories_groups', function (Blueprint $table) {
            $table->id();
            $table->string('categoriesGroupsName');
            $table->unsignedBigInteger('CalssificationID')->nullable();
            $table->foreign('CalssificationID')->references('id')->on('classifications');
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
        Schema::dropIfExists('categories_groups');
    }
}
