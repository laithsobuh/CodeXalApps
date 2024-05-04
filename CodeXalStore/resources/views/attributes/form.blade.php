@csrf
<style>
    .ck-editor__editable_inline {
        min-height: 250px;
    }

</style>






@if (Route::is('attribute.edit'))
<div class="form-group">
    <label class="form-control-label" for="attribute">{{ __('Name') }}</label>
    <input type="color" name="AttributeName" id="AttributeName" class="form-control form-control-alternative" required
        value="{{ $attribute->AttributeName }}">
</div>

@else
<div class="form-group">
    <label class="form-control-label" for="attribute">{{ __('Name') }}</label>
    <input type="color" name="AttributeName" id="AttributeName" class="form-control form-control-alternative" required
        value="@if (isset($attribute)) {{ $attribute->AttributeName }} @endif">
</div>
@endif