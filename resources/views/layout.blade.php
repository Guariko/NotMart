<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield("model")</title>
    <link rel="stylesheet" href="{{url('css/normalize.css')}}">
    <link rel="stylesheet" href="{{ url('css/styles.css') }}">
    <script src="https://kit.fontawesome.com/67f918e73f.js" crossorigin="anonymous"></script>
</head>

<body>

    <!--   TODO: Header starts -->
    <header class="header">

        <!-- Header  Logo -->
        <div class="logo__container row center__center">
            <i class="fa-solid fa-fire"></i>
            <span class="logo__name">notmart</span>
        </div>
        <!-- Header Logo ends  -->

        <!--  Header bars -->
        <div class="bars__container">
            <i class="fas fa-bars pointer"></i>
        </div>
        <!-- Header bars end -->

        <!--  Nav bar and log-in container -->
        <div class="row header__nav__bar__container ">
            <div class="less__brightness"></div>
            <div class="column header__nav__bar__content">

                <div class="close__and__nav__bar__container column">

                    <div class="close__nav__bar__container row">
                        <span>menu</span>
                        <i class="fas fa-times pointer"></i>
                    </div>

                    <nav>
                        <ul class="header__nav__bar column">
                            <li class="mobile__item">
                                <a href="" class="header__nav__bar__item">homepage</a>
                            </li>
                            <li>
                                <a href="" class="header__nav__bar__item ">features</a>
                            </li>
                            <li>
                                <a href="" class="header__nav__bar__item">pricing</a>
                            </li>

                            <li class="deskop__item">
                                <a href="" class="header__nav__bar__item">academy</a>
                            </li>
                            <li class="mobile__item">
                                <a href="" class="header__nav__bar__item">resources</a>
                            </li>
                            <li class="mobile__item">
                                <a href="" class="header__nav__bar__item ">notmart marketplace</a>
                            </li>
                            <li class="deskop__item">
                                <a href="" class="header__nav__bar__item">about</a>
                            </li>
                            <li>
                                <a href="" class="header__nav__bar__item">help center</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div class="header__buttons__container column ">
                    <div class="button__container">
                        <span class="button regular__button mobile__button ">Access my puschases</span>
                    </div>
                    <div class="button__container">
                        <span class="button regular__button mobile__button ">Manage my business</span>
                    </div>

                    <div class="button__container">
                        <span class="button login__button">Log in</span>
                    </div>

                    <div class="button__container">
                        <span class="button main__button ">Sign up</span>
                    </div>
                </div>
            </div>

        </div>
        <!-- -->

    </header>

    <main class="main">
        @yield("content")
    </main>

    <script src="{{ url('js/index.js') }}"></script>

</body>

</html>