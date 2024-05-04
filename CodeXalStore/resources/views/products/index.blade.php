@extends('layouts.app', ['title' => __('List Group')])
@section('content')
    @include('users.partials.header', [
        'title' => __('Hello') . ' ' . auth()->user()->name,
        'description' => __(
            'This is your profile page. You can see the progress you\'ve made with your work and manage your projects or assigned tasks'),
        'class' => 'col-lg-7',
    ])



    <div class="container-fluid mt--7">
        <div class="row">

            <div class="col-xl-12 order-xl-1">
                <div class="card bg-secondary shadow">
                    <div class="card-header bg-white border-0">
                        <div class="row align-items-center">
                            <h3 class="mb-0">{{ __('List Group') }}</h3>
                        </div>
                    </div>
                    <div class="card-body">
                        @if (session('msg'))
                            <div class="alert alert-success alert-dismissible fade show" role="alert">
                                {{ session('msg') }}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        @endif
                        <div class="table-responsive">
                            <table class="table align-items-center table-flush">
                                <thead class="thead-light">
                                    <tr>
                                        <th>{{ __('Name ') }}</th>
                                        <th>{{ __('price ') }}</th>
                                        <th>{{ __('discription ') }}</th>
                                        <th>{{ __('Classification ') }}</th>
                                        <th>{{ __('Group Categories ') }}</th>
                                        <th>{{ __('Categories ') }}</th>
                                        <th>{{ __('AttributeI ') }}</th>
                                        <th>{{ __('Delete') }}</th>
                                        <th>{{ __('Edit') }}</th>
                                    </tr>
                                </thead>
                                <tbody class="list">
                                    @foreach ($products as $product)
                                        <tr>
                                            <td>
                                                {{ $product->ProductName }}

                                            </td>
                                            <td>
                                                {{ $product->Price }}

                                            </td>
                                            <td>
                                                {{ $product->Description }}

                                            </td>
                                            @if ($product->classification)
                                                <td>
                                                    {{ $product->classification->ClassificationName }}
                                                </td>
                                            @else
                                                <td>
                                                    ----
                                                </td>
                                            @endif
                                            @if ($product->CategoryGroup)
                                                <td>
                                                    {{ $product->CategoryGroup->categoriesGroupsName }}

                                                </td>
                                            @else
                                                <td>
                                                    ----
                                                </td>
                                            @endif
                                            @if ($product->Category)
                                                <td>
                                                    {{ $product->Category->CategoryName }}

                                                </td>
                                            @else
                                                <td>----</td>
                                            @endif
                                            @if ($product->colors)

                                                <td>

                                                   @php
                                                       $color=explode(',',$product->colors);
                                                       $count=0;
                                                   @endphp

                                                   @foreach ($color as $colorName )
                                                
                                                         <input type="color" disabled name="" value="{{$colorName}}" id="">
                                                   @endforeach
                                                </td>
                                            @else
                                                <td>----</td>
                                            @endif
                                            
                                            <td>
                                                <button class="btn btn-danger"
                                                    onclick='if (deletealert()){
                                                      document.getElementById({{ $product->id }}).submit();
                                                      }'>{{ __('Delete') }}</button>
                                            </td>
                                            <form id="{{ $product->id }}"
                                                action="{{ route('products.destroy', $product->id) }}" method="post">
                                                @method('delete')
                                                @csrf
                                            </form>
                                            <td><button class="btn btn-info"
                                                    onclick="window.location.href='{{ route('products.edit', $product->id) }}'">{{ __('Edit') }}</button>
                                            </td>

                                            <!-- Button trigger modal -->

                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        @include('layouts.footers.auth')
    </div>
@endsection
