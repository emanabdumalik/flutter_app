import "account/signin.dart";
import "account/signup.dart";
import "account/verify.dart";
import "account/forgotpassword.dart";
import "account/resetpassword.dart";
import "account/myprofile.dart";
import "account/mydetails.dart";
import "ads/add_new_view.dart";
import "static_pages/terms_and_conditions.dart";
import "static_pages/about.dart";
import "static_pages/contact_us.dart";
import "main.dart";
import 'splashscreen.dart';
import 'homescreen.dart';
import 'package:flutter/material.dart';


import "globals.dart";

//Account
var SingInRoute = SignInHttp();
var SignUpRoute = SignUpHttp();

var VerifyRoute =VerifyHttp();
var ForgotRoute =ForgotHttp();
var ResetRoute =ResetHttp();
StatefulWidget ProfileRoute() => MyProfileHttp();
var MyDetailsPageRoute = MyDetailsHttp();

//Static Pages
var ContactRoute =Contact();
var TermsRoute =TermsConditions();
var AboutRoute =About();
// Splash Screen
var SplashRoute = new SplashScreen();
//HomeScreen
var HomeScreenRoute = HomeScreen();

var HomePageRoute = HomeRoutes(0);
//Ads
var AddNewRoute = AddNewHttp();