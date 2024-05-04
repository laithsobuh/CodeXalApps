@extends('home.layout.layoutHome')
@section('title', 'Product page')
@section('content')

    <div class="container">
        <div class="row w-100 m-0 py-4">
            <div class="col-md-5">
                <img width="100%" height="100%"
                    src="https://images.pexels.com/photos/1146134/pexels-photo-1146134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="" srcset="">
            </div>
            <div class="col-md-7 d-flex align-items-center">
                <div class="card w-100">
                    <div class="card-header">
                       {{$products->ProductName}}
                    </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                            <p>{{$products->Description}}</p>
                            <footer class="blockquote-footer"> {{$products->Price}} $</footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    </div>


@endsection
