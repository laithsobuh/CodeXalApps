<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login & Registration</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container">
        <div class="row justify-content-center mt-5">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <ul class="nav nav-tabs card-header-tabs">
                            <li class="nav-item">
                                <a class="nav-link active" id="login-tab" data-toggle="tab" href="#login-form" role="tab">Login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="register-tab" data-toggle="tab" href="#register-form" role="tab">Register</a>
                            </li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <div class="tab-content">
                            <div class="tab-pane fade show active" id="login-form" role="tabpanel">
                                <form method="POST" action="{{ route('loginCust') }}">
                                    @csrf

                                    <div class="form-group">
                                        <label for="login-email">Email</label>
                                        <input type="email" class="form-control" id="login-email" name="email" required>
                                    </div>

                                    <div class="form-group">
                                        <label for="login-password">Password</label>
                                        <input type="password" class="form-control" id="login-password" name="password" required>
                                    </div>

                                    <button type="submit" class="btn btn-primary">Login</button>
                                </form>
                            </div>
                            <div class="tab-pane fade" id="register-form" role="tabpanel">
                                <form method="POST" action="{{ route('regCust') }}">
                                    @csrf

                                    <div class="form-group">
                                        <label for="register-name">Name</label>
                                        <input type="text" class="form-control" id="register-name" name="name" required>
                                    </div>

                                    <div class="form-group">
                                        <label for="register-email">Email</label>
                                        <input type="email" class="form-control" id="register-email" name="email" required>
                                    </div>

                                    <div class="form-group">
                                        <label for="register-password">Password</label>
                                        <input type="password" class="form-control" id="register-password" name="password" required>
                                    </div>

                                    <div class="form-group">
                                        <label for="register-password-confirm">phone</label>
                                        <input type="number" class="form-control" id="phone" name="phone" required>
                                    </div>

                                    <button type="submit" class="btn btn-primary">Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
