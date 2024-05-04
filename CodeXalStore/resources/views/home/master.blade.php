@extends('home.layout.layoutHome')
@section('title', 'Home Page')


@section('content')
   
    <div class="container mt-5">
        <div class="row">
            <!-- Categories List -->


            <div class="col-md-9">
                <!-- Products Section -->
                <h2>All Products</h2>
                <div class="row">
                    <!-- Product Cards -->
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <img src="https://via.placeholder.com/150" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Product 1</h5>
                                <p class="card-text">$20.00</p>
                                <a href="#" class="btn btn-primary">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

@endsection
