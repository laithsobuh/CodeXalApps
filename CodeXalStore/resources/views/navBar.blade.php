

<nav id="scrollspy" class="navbar page-navbar navbar-dark navbar-expand-md fixed-top" data-spy="affix"
data-offset-top="20">
<div class="container">

    <a class="navbar-brand col-2 text-center"href="#">
        <img src="{{ asset('assets/imgs/Logoicon.png') }}" alt="" width="80" class="rounded-circle">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="col" ></div>
        <div class="navbar-nav  me-auto">
            <a class="nav-link active border-bottom" aria-current="page" href="{{ route('homePage') }}">{{ __('Home') }}</a>
            
                <ul class="navbar-nav">
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {{ __('profile.About') }}
                    </a>
                    <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="navbarDarkDropdownMenuLink">
                        <li><a class="dropdown-item" href="{{ route('code-of-conduct') }}">Code Of Conduct</a></li>
                        <li><a class="dropdown-item" href="{{ route('Maneger') }}">Maneger</a></li>
                        <li><a class="dropdown-item" href="{{ route('Organizational-Chart') }}">OrganizationalChart</a></li>
                        <li><a class="dropdown-item" href="{{ route('Partners') }}">Partners</a></li>
                        <li><a class="dropdown-item" href="{{ route('AboutUsView') }}">About Us</a></li>

                    </ul>
                  </li>
                </ul>
            <a class="nav-link" aria-current="page" href="{{ route('Members') }}">{{ __('Members') }}</a>
            <a class="nav-link" aria-current="page" href="{{ route('activites') }}">{{ __('Activites') }}</a>
            <a class="nav-link" aria-current="page" href="{{ route('Gallery') }}">{{ __('Gallery') }}</a>
            <a class="nav-link" aria-current="page" href="{{ route('news') }}">{{ __('profile.News') }}</a>
            <a class="nav-link" aria-current="page" href="{{ route('ContactUs') }}">{{ __('profile.ContactUs') }}</a>
            <a class="nav-link" aria-current="page" href="#"></a>
           

        </div>


    </div>

</div>
</nav>