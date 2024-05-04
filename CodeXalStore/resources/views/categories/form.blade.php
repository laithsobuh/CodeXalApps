@csrf
<style>
    .ck-editor__editable_inline {
        min-height: 250px;
    }

</style>



<div class="form-group">
    <label class="form-control-label" for="CategoryName">{{ __('Name') }}</label>
    <input type="text" name="CategoryName" id="CategoryName" class="form-control form-control-alternative" required
        value="@if (isset($categories)) {{ $categories->CategoryName }} @endif">
</div>

<select class="form-control" name="GroupID">
   @foreach ($groupID as $item)
   <option value="{{$item->id}}">{{$item->categoriesGroupsName}}</option>
   @endforeach
  </select>
