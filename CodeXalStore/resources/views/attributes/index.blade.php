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

            <div class="col-xl-8 order-xl-1">
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
                                        <th>{{ __('color ') }}</th>
                                        <th>{{ __('Delete') }}</th>
                                        <th>{{ __('Edit') }}</th>
                                    </tr>
                                </thead>
                                <tbody class="list">
                                    @foreach ($attribute as $attribute)
                                        <tr>
                                            <td>
                                                {{ $attribute->AttributeName }}

                                            </td>
                                            <td>
                                                <input type="color" value="{{ $attribute->AttributeName }}" disabled
                                                    id="">
                                            </td>

                                            <td>
                                                <button class="btn btn-danger"
                                                    onclick='if (deletealert()){
                                                      document.getElementById({{ $attribute->id }}).submit();
                                                      }'>{{ __('Delete') }}</button>
                                            </td>
                                            <form id="{{ $attribute->id }}"
                                                action="{{ route('attribute.destroy', $attribute->id) }}" method="post">
                                                @method('delete')
                                                @csrf
                                            </form>
                                            <td>
                                                <button class="btn btn-info"
                                                    onclick="window.location.href='{{ route('attribute.edit', $attribute->id) }}'">{{ __('Edit') }}</button>
                                            </td>
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
