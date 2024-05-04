@csrf
<style>
    .ck-editor__editable_inline {
        min-height: 250px;
    }

</style>



<div class="form-group">
    <label class="form-control-label" for="categoriesGroupsName">{{ __('Name') }}</label>
    <input type="text" name="categoriesGroupsName" id="categoriesGroupsName" class="form-control form-control-alternative" required
        value="@if (isset($catgoresGroup)) {{ $catgoresGroup->categoriesGroupsName }} @endif">
</div>

<select class="form-control" name="CalssificationID">
   @foreach ($classification as $item)
   <option value="{{$item->id}}">{{$item->ClassificationName}}</option>
   @endforeach
  </select>





