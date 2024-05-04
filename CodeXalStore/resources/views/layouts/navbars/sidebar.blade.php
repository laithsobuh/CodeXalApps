<style>
    .active {
        background: #525F7F;
        color: white !important;
    }

    .active>a {
        color: white !important;
    }
</style>

<nav class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
    <div class="container-fluid">
        <!-- Toggler -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidenav-collapse-main"
            aria-controls="sidenav-main" aria-expanded="fald" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Brand -->
        <a class="navbar-brand pt-0" href="#">
            <img src="{{ asset('argon') }}/img/brand/blue.png" class="navbar-brand-img" alt="...">
        </a>
        <!-- User -->
        <ul class="nav align-items-center d-md-none">
            <li class="nav-item dropdown">
                <a class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                    <div class="media align-items-center">
                        <span class="avatar avatar-sm rounded-circle">
                            <img alt="Image placeholder" src="{{ asset('argon') }}/img/theme/team-1-800x800.jpg">
                        </span>
                    </div>
                </a>
                <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                    <div class=" dropdown-header noti-title">
                        <h6 class="text-overflow m-0">{{ __('Welcome!') }}</h6>
                    </div>
                    <a href="{{ route('profile.edit') }}" class="dropdown-item">
                        <i class="ni ni-single-02"></i>
                        <span>{{ __('My profile') }}</span>
                    </a>

                    <div class="dropdown-divider"></div>
                    <a href="{{ route('logout') }}" class="dropdown-item"
                        onclick="event.preventDefault();
                    document.getElementById('logout-form').submit();">
                        <i class="ni ni-user-run"></i>
                        <span>{{ __('Logout') }}</span>
                    </a>
                </div>
            </li>
        </ul>
        <!-- Collapse -->
        <div class="collapse navbar-collapse" id="sidenav-collapse-main">
            <!-- Collapse header -->
            <div class="navbar-collapse-header d-md-none">
                <div class="row">
                    <div class="col-6 collapse-brand">
                        <a href="{{ route('home') }}">
                            <img src="{{ asset('argon') }}/img/brand/blue.png">
                        </a>
                    </div>
                    <div class="col-6 collapse-close">
                        <button type="button" class="navbar-toggler" data-toggle="collapse"
                            data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false"
                            aria-label="Toggle sidenav">
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
            <!-- Form -->

            <!-- Navigation -->
            <ul class="navbar-nav">
                <li class="nav-item" data-target="dropdown">
                    <a class="nav-link {{ Route::is('profile.edit') ? 'active  ' : '' }}"
                        href="{{ route('profile.edit') }}">
                        <i class="fab fa-laravel" style="color: #f4645f;"></i>
                        <span class="nav-link-text"> {{ __('Admin profile') }}</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link {{ Route::is('customer.index')?'active':(Route::is('customer.edit')?'active':(Route::is('customer.create')?'active':'')) }}" href="#navbar-examples1" data-toggle="collapse" role="button"
                        aria-expanded="" aria-controls="navbar-examples1">
                        <i class="fab fa-laravel" style="color: #f4645f;"></i>
                        <span class="nav-link-text"> {{ __('Customers Accounts') }}</span>
                    </a>

                    <div class="collapse" id="navbar-examples1">
                        <ul class="nav nav-sm flex-column">
                           @if (Route::is('customer.index'))
                           <li class="nav-item {{ Route::is('customer.index')?'active':'' }}">
                            <a class="nav-link " href="{{ route('customer.index') }}">
                                {{ __('List customer') }}
                            </a>
                        </li>
                           @else
                           <li class="nav-item {{ Route::is('customer.edit')?'active':'' }}">
                            <a class="nav-link " href="{{ route('customer.index') }}">
                                {{ __('List customer') }}
                            </a>
                        </li>
                           @endif
                            <li class="nav-item {{ Route::is('customer.create')?'active':'' }}">
                                <a class="nav-link" href="{{ route('customer.create') }}">
                                    {{ __('Add  customer') }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="nav-item">
                    <a class="nav-link {{ Route::is('classification.index')?'active':(Route::is('classification.edit')?'active':(Route::is('classification.create')?'active':'')) }}" href="#navbar-examples2" data-toggle="collapse" role="button"
                        aria-expanded="" aria-controls="navbar-examples2">
                        <i class="fab fa-laravel" style="color: #f4645f;"></i>
                        <span class="nav-link-text"> {{ __('Classification') }}</span>
                    </a>

                    <div class="collapse" id="navbar-examples2">
                        <ul class="nav nav-sm flex-column">
                           @if (Route::is('classification.index'))
                           <li class="nav-item {{ Route::is('classification.index')?'active':'' }}">
                            <a class="nav-link " href="{{ route('classification.index') }}">
                                {{ __('List Classification') }}
                            </a>
                        </li>
                           @else
                           <li class="nav-item {{ Route::is('classification.edit')?'active':'' }}">
                            <a class="nav-link " href="{{ route('classification.index') }}">
                                {{ __('List Classification') }}
                            </a>
                        </li>
                           @endif
                            <li class="nav-item {{ Route::is('classification.create')?'active':'' }}">
                                <a class="nav-link" href="{{ route('classification.create') }}">
                                    {{ __('Add  Classification') }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="nav-item">
                    <a class="nav-link {{ Route::is('catgoresGroup.index')?'active':(Route::is('catgoresGroup.edit')?'active':(Route::is('catgoresGroup.create')?'active':'')) }}" href="#navbar-examples3" data-toggle="collapse" role="button"
                        aria-expanded="" aria-controls="navbar-examples3">
                        <i class="fab fa-laravel" style="color: #f4645f;"></i>
                        <span class="nav-link-text"> {{ __('catgoresGroup') }}</span>
                    </a>

                    <div class="collapse" id="navbar-examples3">
                        <ul class="nav nav-sm flex-column">
                           @if (Route::is('catgoresGroup.index'))
                           <li class="nav-item {{ Route::is('catgoresGroup.index')?'active':'' }}">
                            <a class="nav-link " href="{{ route('catgoresGroup.index') }}">
                                {{ __('List catgoresGroup') }}
                            </a>
                        </li>
                           @else
                           <li class="nav-item {{ Route::is('catgoresGroup.edit')?'active':'' }}">
                            <a class="nav-link " href="{{ route('catgoresGroup.index') }}">
                                {{ __('List catgoresGroup') }}
                            </a>
                        </li>
                           @endif
                            <li class="nav-item {{ Route::is('catgoresGroup.create')?'active':'' }}">
                                <a class="nav-link" href="{{ route('catgoresGroup.create') }}">
                                    {{ __('Add  catgoresGroup') }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="nav-item">
                    <a class="nav-link {{ Route::is('categories.index')?'active':(Route::is('categories.edit')?'active':(Route::is('categories.create')?'active':'')) }}" href="#navbar-examples4" data-toggle="collapse" role="button"
                        aria-expanded="" aria-controls="navbar-examples4">
                        <i class="fab fa-laravel" style="color: #f4645f;"></i>
                        <span class="nav-link-text"> {{ __('categories') }}</span>
                    </a>

                    <div class="collapse" id="navbar-examples4">
                        <ul class="nav nav-sm flex-column">
                           @if (Route::is('categories.index'))
                           <li class="nav-item {{ Route::is('categories.index')?'active':'' }}">
                            <a class="nav-link " href="{{ route('categories.index') }}">
                                {{ __('List categories') }}
                            </a>
                        </li>
                           @else
                           <li class="nav-item {{ Route::is('categories.edit')?'active':'' }}">
                            <a class="nav-link " href="{{ route('categories.index') }}">
                                {{ __('List categories') }}
                            </a>
                        </li>
                           @endif
                            <li class="nav-item {{ Route::is('categories.create')?'active':'' }}">
                                <a class="nav-link" href="{{ route('categories.create') }}">
                                    {{ __('Add  categories') }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="nav-item">
                    <a class="nav-link {{ Route::is('attribute.index')?'active':(Route::is('attribute.edit')?'active':(Route::is('attribute.create')?'active':'')) }}" href="#navbar-examples5" data-toggle="collapse" role="button"
                        aria-expanded="" aria-controls="navbar-examples5">
                        <i class="fab fa-laravel" style="color: #f4645f;"></i>
                        <span class="nav-link-text"> {{ __('Attribute') }}</span>
                    </a>

                    <div class="collapse" id="navbar-examples5">
                        <ul class="nav nav-sm flex-column">
                           @if (Route::is('attribute.index'))
                           <li class="nav-item {{ Route::is('attribute.index')?'active':'' }}">
                            <a class="nav-link " href="{{ route('attribute.index') }}">
                                {{ __('List Attribute') }}
                            </a>
                        </li>
                           @else
                           <li class="nav-item {{ Route::is('attribute.edit')?'active':'' }}">
                            <a class="nav-link " href="{{ route('attribute.index') }}">
                                {{ __('List Attribute') }}
                            </a>
                        </li>
                           @endif
                            <li class="nav-item {{ Route::is('attribute.create')?'active':'' }}">
                                <a class="nav-link" href="{{ route('attribute.create') }}">
                                    {{ __('Add  Attribute') }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="nav-item">
                    <a class="nav-link {{ Route::is('products.index')?'active':(Route::is('products.edit')?'active':(Route::is('products.create')?'active':'')) }}" href="#navbar-examples6" data-toggle="collapse" role="button"
                        aria-expanded="" aria-controls="navbar-examples6">
                        <i class="fab fa-laravel" style="color: #f4645f;"></i>
                        <span class="nav-link-text"> {{ __('Products') }}</span>
                    </a>

                    <div class="collapse" id="navbar-examples6">
                        <ul class="nav nav-sm flex-column">
                           @if (Route::is('products.index'))
                           <li class="nav-item {{ Route::is('products.index')?'active':'' }}">
                            <a class="nav-link " href="{{ route('products.index') }}">
                                {{ __('List Products') }}
                            </a>
                        </li>
                           @else
                           <li class="nav-item {{ Route::is('products.edit')?'active':'' }}">
                            <a class="nav-link " href="{{ route('products.index') }}">
                                {{ __('List Products') }}
                            </a>
                        </li>
                           @endif
                            <li class="nav-item {{ Route::is('products.create')?'active':'' }}">
                                <a class="nav-link" href="{{ route('products.create') }}">
                                    {{ __('Add  Products') }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</nav>
