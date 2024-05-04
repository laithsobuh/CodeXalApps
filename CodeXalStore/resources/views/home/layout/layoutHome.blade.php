<!-- layout.blade.php -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title')</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous">
    </script>
</head>

<body>
    <nav class="navbar navbar-expand-lg fixed-top bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                            aria-controls="offcanvasExample">Categories</a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img height="650px"
                    src="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=800"
                    class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img height="650px"
                    src="https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=800"
                    class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img height="650px"
                    src="https://images.pexels.com/photos/1146134/pexels-photo-1146134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    class="d-block w-100" alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel"><a href="{{ route('classificationView') }}"> view All
                </a></h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div class="col-md-12">
                @foreach ($classification as $cls)
                    <ul class="list-group">
                        <li class="list-group-item">
                            <a href="{{ route('classification.id', $cls->id) }}">{{ $cls->ClassificationName }}</a>

                            <hr>
                            <ul class="list-group border-0">
                                @foreach ($groupCategories as $gs)
                                    @if ($gs->CalssificationID == $cls->id)
                                        <li class="list-group-item border-0">
                                            {{ $gs->categoriesGroupsName }}
                                            <hr>
                                            <ul class="list-group border-0">
                                                @foreach ($category as $cat)
                                                    @if ($cat->GroupID == $gs->id)
                                                        <li class="list-group-item border-0">
                                                            <a href="http://"> {{ $cat->CategoryName }}</a>
                                                            <hr>
                                                        </li>
                                                    @endif
                                                @endforeach
                                            </ul>
                                        </li>
                                    @endif
                                @endforeach
                            </ul>
                        </li>
                    </ul>
                @endforeach

            </div>
        </div>
    </div>

    <div class="row w-100">
        <div class="col-md-2">

        </div>
        <div class="col-md-8">
            @yield('content')
        </div>
        <div class="col-md-2">
    </div>
</body>

</html>
