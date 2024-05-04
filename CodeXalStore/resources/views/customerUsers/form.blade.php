@csrf
<style>
    .ck-editor__editable_inline {
        min-height: 250px;
    }

</style>



<div class="form-group">
    <label class="form-control-label" for="name">{{ __('Name') }}</label>
    <input type="text" name="name" id="link" class="form-control form-control-alternative" required
        value="@if (isset($customer)) {{ $customer->name }} @endif">
</div>
<div class="form-group">
    <label class="form-control-label" for="email">{{ __('Email') }}</label>
    <input type="text" name="email" id="email" class="form-control form-control-alternative" required
        value="@if (isset($customer)) {{ $customer->email }} @endif">
</div>

<div class="form-group" >
    <label class="form-control-label" for="type">{{ __('Type') }}</label>
    <input type="text" disabled name="type" id="type"  class="form-control form-control-alternative" required
        value="customer">
</div>

@if (Route::is('customer.create'))
<div class="form-group" >
    <label class="form-control-label" for="password">{{ __('Password') }}</label>
    <input type="text"  name="password" id="password"  class="form-control form-control-alternative" required>
</div>

@else
<div class="form-group" >
    <label class="form-control-label" for="password">{{ __('Password') }}</label>
    <input type="text"  name="password" id="password" value="@if (isset($customer)) {{ $customer->password }} @endif"  class="form-control form-control-alternative" required>
</div>
@endif

<div class="form-group">
    <label class="form-control-label" for="phone">{{ __('Phone') }}</label>
    <input type="mobile" name="phone" id="phone"  class="form-control form-control-alternative" required
        value="@if (isset($customer)) {{ $customer->phone }} @endif">
</div>



