@extends('layouts.app', ['title' => __('Welcome Page')])
@section('content')
    @include('users.partials.header', [
        'title' => __('Hello') . ' ' . auth()->user()->name,
        'description' => __(
            'This is your profile page. You can see the progress you\'ve made with your work and manage your projects or assigned tasks'
        ),
        'class' => 'col-lg-7',
    ])

    <style>
        .ck-editor__editable_inline {
            min-height: 250px;
        }

    </style>

    <div class="container-fluid mt--7">
        <div class="row">

            <div class="col-xl-8 order-xl-1">
                <div class="card bg-secondary shadow">
                    <div class="card-header bg-white border-0">
                        <div class="row align-items-center">
                            <h3 class="mb-0">{{ __('Welcome Page') }}</h3>
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
                            <form enctype="multipart/form-data" method="post" action="{{ route('welcome.update') }}">
                                @csrf
                                <h1>العربية</h1>
                                <div class="form-group">
                                    <label class="form-control-label"
                                        for="head_ar">{{ __('Description About-Us Arabic') }}</label>

                                    <input type="text" name="head_ar" value="{{ $welcomes->head_ar }}" id="head_en"
                                        class="form-control form-control-alternative"
                                        value="@if (isset($welcome)) {{ $welcome->head_ar }} @endif">
                                    <hr>
                                    <textarea id="file-picker" name="desc_ar">
                                            @if (isset($welcomes))
{!! html_entity_decode($welcomes->desc_ar) !!}
@endif
                                             </textarea>
                                </div>

                                <h1>English</h1>
                                <div class="form-group">
                                    <label class="form-control-label"
                                        for="head_en">{{ __('Description About-Us English') }}</label>

                                    <script src="/assets/js/word.js" referrerpolicy="origin"></script>
                                    <script>
                                        tinymce.init({
                                            selector: 'textarea#file-picker',
                                            plugins: 'image code',
                                            toolbar: 'undo redo |  image | code',
                                            /* enable title field in the Image dialog*/
                                            image_title: true,
                                            /* enable automatic uploads of images represented by blob or data URIs*/
                                            automatic_uploads: true,
                                            /*
                                              URL of our upload handler (for more details check: https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_url)
                                              images_upload_url: 'postAcceptor.php',
                                              here we add custom filepicker only to Image dialog
                                            */
                                            file_picker_types: 'image',
                                            /* and here's our custom image picker*/
                                            file_picker_callback: function(cb, value, meta) {
                                                var input = document.createElement('input');
                                                input.setAttribute('type', 'file');
                                                input.setAttribute('accept', 'image/*');

                                                /*
                                                  Note: In modern browsers input[type="file"] is functional without
                                                  even adding it to the DOM, but that might not be the case in some older
                                                  or quirky browsers like IE, so you might want to add it to the DOM
                                                  just in case, and visually hide it. And do not forget do remove it
                                                  once you do not need it anymore.
                                                */

                                                input.onchange = function() {
                                                    var file = this.files[0];

                                                    var reader = new FileReader();
                                                    reader.onload = function() {
                                                        /*
                                                          Note: Now we need to register the blob in TinyMCEs image blob
                                                          registry. In the next release this part hopefully won't be
                                                          necessary, as we are looking to handle it internally.
                                                        */
                                                        var id = 'blobid' + (new Date()).getTime();
                                                        var blobCache = tinymce.activeEditor.editorUpload.blobCache;
                                                        var base64 = reader.result.split(',')[1];
                                                        var blobInfo = blobCache.create(id, file, base64);
                                                        blobCache.add(blobInfo);

                                                        /* call the callback and populate the Title field with the file name */
                                                        cb(blobInfo.blobUri(), {
                                                            title: file.name
                                                        });
                                                    };
                                                    reader.readAsDataURL(file);
                                                };

                                                input.click();
                                            },
                                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                        });
                                        tinymce.init({
                                            selector: 'textarea', // change this value according to your HTML
                                            file_picker_types: 'file image media'
                                        });
                                        tinymce.init({
                                            selector: 'textarea', // change this value according to your HTML
                                            plugins: 'image',
                                            menubar: 'insert',
                                            toolbar: 'image',
                                            image_caption: true
                                        });
                                        tinymce.init({
                                            selector: 'textarea', // change this value according to your HTML
                                            plugins: 'image',
                                            menubar: 'insert',
                                            toolbar: 'image',
                                            image_advtab: true
                                        });
                                        tinymce.init({
                                            selector: 'textarea', // change this value according to your HTML
                                            images_upload_url: 'postAcceptor.php'
                                        });
                                    </script>


                                    <input type="text" name="head_en" value="{{ $welcomes->head_en }}" id="head_en"
                                        class="form-control form-control-alternative"
                                        value="@if (isset($welcome)) {{ $welcome->head_en }} @endif">

                                    <textarea id="file-picker" name="desc_en">@if (isset($welcomes))
                                        {{ $welcomes->desc_en }}
                                        @endif</textarea>
                                </div>


                        </div>

                        <hr>
                        <div class="form-group">
                            <label class="form-control-label" for="file">{{ __('Primary Slider') }}</label>
                            <input class="form-control" type="file" name="file[]" id="file" multiple="true">
                        </div>

                    </div>


                    <div class="text-center">
                        <button type="submit" class="btn btn-success mt-4">{{ __('Save') }}</button>
                    </div>
                    </form>
                </div>

            </div>
        </div>
        <script>
            ClassicEditor
                .create(document.querySelector('#editor3'))
                .catch(error => {
                    console.error(error);
                });
            ClassicEditor
                .create(document.querySelector('#editor4'))
                .catch(error => {
                    console.error(error);
                });
            ClassicEditor
                .create(document.querySelector('#editor5'))
                .catch(error => {
                    console.error(error);
                });
            ClassicEditor
                .create(document.querySelector('#editor6'))
                .catch(error => {
                    console.error(error);
                });
        </script>
        @include('layouts.footers.auth')
    </div>
@endsection
