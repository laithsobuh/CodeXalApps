@extends('home.layout.layoutHome')

@section('title', 'Classifications')

@section('content')
    <div class="container py-5">
        <div class="row w-100 shadow">

            @foreach ($classification as $cls)
                <div class="col-md-4 d-flex align-items-center py-3">
                    <div class="card text-bg-dark " style="min-width: 100%;">
                        <div class="card-body">
                            <h5 class="card-title">{{ $cls->ClassificationName }}</h5>
                            <a href="{{ route('classification.id', $cls->id) }}" class="btn btn-danger w-100"
                                type="submit">view</a>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
    <div class="container py-4 ">
       <div class="col-md-12 py-5">
        <h2>Products</h2>
        <hr>
       </div>
        <div class="row w-100 m-0 shadow">

            @foreach ($products as $product)
                <div class="col-md-4 my-3"> 
                    <div class="card">
                        <img src="https://via.placeholder.com/150" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{ $product->ProductName }}</h5>
                            <p class="card-text">{{ $product->Price }}</p>
                            <p class="card-text">{{ $product->Description }}</p>
                            <a href="{{route('product.id',$product->id)}}" class="btn btn-primary">View</a>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    </div>

@endsection
