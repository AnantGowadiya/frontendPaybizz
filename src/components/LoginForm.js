import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

// import './Footer.css';

function LoginForm() {
    return (
        <div class="mask rgba-black-strong h-100">
            <div class="container py-5" style={{top:"20%" , position:""}}>
                <div class="row">
                    <div class="col-xl-5 col-lg-6 col-md-10 col-sm-12 mx-auto">
                        <div class="card-wrapper">
                            <div id="my-card" class="card card-rotating text-center">
                                <div class="face front">
                                    <div class="card-body">
                                        <div class="form-header primary-color">
                                            <h3 class="font-weight-500 my-2 py-1"><i class="fas fa-sign-in-alt"></i> Log in</h3>
                                        </div>
                                        <div class="md-form">
                                            <i class="fas fa-envelope prefix grey-text d-flex"></i>
                                            <input type="email" id="email" name="email" class="form-control validate"></input>
                                            <label for="email" class="d-flex">Your email</label>
                                        </div>

                                        <div class="md-form">
                                            <i class="fas fa-lock prefix grey-text d-flex"></i>
                                            <input type="password" name="password" class="form-control validate"></input>
                                            <label for="password" class="d-flex">Your password</label>
                                        </div>

                                        <div class="d-flex justify-content-between">
                                            <a class="rotate-btn text-primary" tabIndex="-1" data-card="my-card">create account</a>
                                            <a href="#" class="grey-text" tabIndex="-2">forgot password?</a>
                                        </div>
                                        <div class="text-center">
                                            <button class="btn primary-color white-text btn-lg">Login</button>
                                        </div>

                                    </div>
                                </div>
                                {/* <div class="face back">
                                    <div class="card-body">

                                        <div class="form-header primary-color">
                                            <h3 class="font-weight-500 my-2 py-1"><i class="fas fa-plus"></i> Create Account</h3>
                                        </div>
                                        <form method="POST" action="#whereeverYouWant">
                                            <div class="md-form">
                                                <i class="fas fa-envelope prefix grey-text d-flex"></i>
                                                <input type="email" id="email" name="email" class="form-control validate"></input>
                                                <label for="email" class="d-flex">Your email</label>
                                            </div>

                                            <div class="md-form">
                                                <i class="fas fa-lock prefix grey-text d-flex"></i>
                                                <input type="password" id="password" name="password" class="form-control validate"></input>
                                                <label for="password" class="d-flex">Your password</label>
                                            </div>
                                            <div class="md-form">
                                                <i class="fas fa-lock prefix grey-text d-flex"></i>
                                                <input type="password" id="password2" name="password2" class="form-control"></input>
                                                <label for="password2" class="d-flex">Confirm password</label>
                                            </div>

                                            <div class="d-flex justify-content-end">
                                                <a class="rotate-btn text-primary" data-card="my-card" tabIndex="-3">back to login</a>
                                            </div>

                                            <div class="text-center">
                                                <button type="sumbit" class="btn primary-color white-text btn-lg">Create account</button>
                                            </div>
                                        </form>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;