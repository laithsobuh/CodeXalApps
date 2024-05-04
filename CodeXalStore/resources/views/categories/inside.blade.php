@extends('home.layout.layoutHome')

@section('title', 'Category')

@section('content')
    <div class="container py-5">
        <div class="col-md-12 d-flex justify-content-center">
            <div class="col-md-3  text-center py-3 ">
                <h2>
                    {{ $categories->CategoryName }}
                </h2>
                <hr>
            </div>
        </div>
    </div>

    <div class="row w-100">
        <!-- Categories List -->


        <div class="col-md-9">
            <!-- Products Section -->
            
            <div class="row">
                <!-- Product Cards -->
                @foreach ($products as $product)
                   
                        <div class="col-md-4 mb-4">
                            <div class="card">
                                <img src="https://via.placeholder.com/150" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">{{ $product->ProductName }}</h5>
                                    <p class="card-text">{{ $product->Price }}</p>
                                    <p class="card-text">{{ $product->Description }}</p>
                                    <a href="#" class="btn btn-primary">View</a>
                                </div>
                            </div>
                        </div>
                   
                @endforeach

            </div>
        </div>
    </div>
@endsection
