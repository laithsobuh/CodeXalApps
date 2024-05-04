@csrf
<style>
    .ck-editor__editable_inline {
        min-height: 250px;
    }
</style>



<div class="form-group">
    <label class="form-control-label" for="ProductName">{{ __('Product Name') }}</label>
    <input type="text" name="ProductName" id="ProductName" class="form-control form-control-alternative" required
        value="@if (isset($products)) {{ $products->ProductName }} @endif">
</div>

<div class="form-group">
    <label class="form-control-label" for="Price">{{ __('Product Price') }}</label>
    <input type="text" name="Price" id="Price" class="form-control form-control-alternative" required
        value="@if (isset($products)) {{ $products->Price }} @endif">
</div>
<div class="form-group">
    <label class="form-control-label" for="ProductName">{{ __('Product Description') }}</label>
    <input type="text" name="Description" id="Description" class="form-control form-control-alternative" required
        value="@if (isset($products)) {{ $products->Description }} @endif">
</div>


<div class="row">
    <div class="col-md-3"><select class="form-control" name="ClassificationID">
            <option value="">Select Classification</option>

            @foreach ($classification as $cls)
                <option value="{{ $cls->id }}"
                    @if (Route::is('products.create')) @else
                {{ $products->ClassificationID == $cls->id ? 'selected' : '' }} @endif>
                    {{ $cls->ClassificationName }}
                </option>
            @endforeach
        </select>
    </div>


    <div class="col-md-3"><select class="form-control" name="CategoryGroupsID">
            <option value="">Select category Group</option>
            @foreach ($categoryGroups as $categoryGroup)
                <option value="{{ $categoryGroup->id }}"
                    @if (Route::is('products.create')) @else
                    {{ $products->CategoryGroupsID == $categoryGroup->id ? 'selected' : '' }} @endif>
                    {{ $categoryGroup->categoriesGroupsName }}</option>
            @endforeach
        </select>
    </div>


    <div class="col-md-3">
        <select class="form-control" name="CategoryID">
            <option value="">Select category</option>
            @foreach ($category as $category)
                <option value="{{ $category->id }}"
                    @if (Route::is('products.create')) @else
                    {{ $products->CategoryID == $category->id ? 'selected' : '' }} @endif>
                    {{ $category->CategoryName }}</option>
            @endforeach
        </select>
    </div>


    <div class="col-md-3">
        <select required class="form-control" name="AttributeID[]" multiple>

            @foreach ($attribute as $attribute)
            <option value="{{ $attribute->AttributeName }}" style="color:black; background:{{$attribute->AttributeName}}">
            </option>
            @endforeach
        </select>
    </div>



</div>
