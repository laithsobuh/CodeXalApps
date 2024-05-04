@csrf
<style>
    .ck-editor__editable_inline {
        min-height: 250px;
    }

</style>



<div class="form-group">
    <label class="form-control-label" for="ClassificationName">{{ __('Name') }}</label>
    <input type="text" name="ClassificationName" id="ClassificationName" class="form-control form-control-alternative" required
        value="@if (isset($classification)) {{ $classification->ClassificationName }} @endif">
</div>






