import 'dart:async';

import 'package:flutter/material.dart';
import 'signup.dart' as signup;
import '../preference.dart' as preference;
import '../main.dart' as main;
import 'api.dart';
import '../globals.dart';
import '../routes.dart' as route;

class SignInHttp extends StatefulWidget {
  @override
  LogInRoute createState() => LogInRoute();
}

class LogInRoute extends State<SignInHttp> {
  AccountData formData = AccountData();

  FocusNode focusNode;
  FocusNode focusNodePass;

  bool _hasInputError;
  bool _haschanged = false;
  bool _hasPassInputError;
  bool _haschangedPassword = false;
  bool _passwordHidden = true;
  String _passwordActionText = 'Show';
  final _formKey = GlobalKey<FormState>();

  Future<ResponseParser> _user_details;
  final username = new TextEditingController();

  final password = new TextEditingController();

  @override
  void dispose() {
    username.dispose();
    password.dispose();
    super.dispose();
  }

  @override
  void initState() {
    focusNode = new FocusNode();
    focusNode.addListener(() {
      if (!focusNode.hasFocus) {
        print(focusNode);
        setState(() {
          _hasInputError = username.text.isEmpty &&
              _haschanged == true; //Check your conditions on text variable
        });
      }
    });
    focusNodePass = new FocusNode();
    focusNodePass.addListener(() {
      if (!focusNodePass.hasFocus) {
        print(focusNodePass);
        setState(() {
          _hasPassInputError = password.text.isEmpty &&
              _haschangedPassword ==
                  true; //Check your conditions on text variable
        });
      }
    });
    // password.dispose();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    double width = MediaQuery.of(context).size.width * 1;
    double widthPassRow = MediaQuery.of(context).size.width - 80.0;
    double height = MediaQuery.of(context).size.height * 1;
    return Scaffold(
      appBar: AppBar(
        title: Text('Sign in'),
        /*
        actions: <Widget>[
          FlatButton(
            textColor: Colors.white,
            onPressed: () {

              Navigator.push(
                context,
                MaterialPageRoute<void>(builder: (context) =>

                    SignUpHttpDemo()


                ),
              );
            },
            child: Text("Sign Up"),
            shape: CircleBorder(side: BorderSide(color: Colors.transparent)),
          ),
        ],*/
      ),
      body: Center(
          child: Container(
              margin: EdgeInsets.only(top: 0),
              padding: EdgeInsets.only(
                  left: 40.0, right: 40.0, top: 0.0, bottom: 0.0),
              width: width,
              height: height,
              decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.all(Radius.circular(20))),
              child: Form(
                key: _formKey,
                autovalidateMode: AutovalidateMode.disabled,

                //padding: EdgeInsets.only(left: 40.0, right: 40.0,top:50),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: <Widget>[
                          new Image.asset(
                            'assets/images/logomain.png',
                            width: 100,
                            height: 100,
                            fit: BoxFit.contain,
                          )
                        ]),
                    /*Center(
                          child: Text(
                        'Log In',
                        textAlign: TextAlign.center,
                        style: TextStyle(color: Colors.grey, fontSize: 20.0),
                      )),*/

                    SizedBox(
                        height: 40.0,
                        child: TextFormField(
                          //focusNode: focusNode,
                          onChanged: (value) {
                            if (value.isNotEmpty) {
                              setState(() {
                                _haschanged = true;
                                formData.email = value;
                              });
                            }
                          },
                          controller: username,
                          validator: (value) {
                            if (!isEmail(value)) {
                              return 'Email is no in correct format';
                            }

                            return null;
                          },
                          style: TextStyle(fontSize: 20.0),
                          decoration: TextInputDeco('Email'),
                        )),
                    SizedBox(
                        height: 40.0,
                        width: widthPassRow,
                        child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              TextFormField(
                                controller: password,
                                //focusNode: focusNodePass,
                                onChanged: (value) {
                                  if (value.isNotEmpty) {
                                    setState(() {
                                      _haschangedPassword = true;
                                      formData.password = value;
                                    });
                                  }
                                },
                                validator: (value) {
                                  if (value.length < 3) {
                                    return 'Password cannot be less that 4';
                                  }

                                  return null;
                                },
                                style: TextStyle(fontSize: 20.0),
                                decoration: TextInputDeco('Password'),
                                obscureText: _passwordHidden,
                              ),
                              GestureDetector(
                                  onTap: () {
                                    setState(() {
                                      _passwordHidden = !_passwordHidden;
                                      if (_passwordHidden) {
                                        _passwordActionText = 'Show';
                                      } else {
                                        _passwordActionText = 'HIde';
                                      }
                                    });
                                  },
                                  child: Text(
                                    _passwordActionText,
                                    textAlign: TextAlign.right,
                                    style: TextStyle(
                                        color: Colors.red, fontSize: 20.0),
                                  ))
                            ])),
                    SizedBox(
                        height: 40,
                        child: GestureDetector(
                            onTap: () {
                              Navigator.push(
                                context,
                                MaterialPageRoute<void>(
                                    builder: (context) => route.ForgotRoute),
                              );
                            },
                            child: Text(
                              'Forgot Password',
                              textAlign: TextAlign.right,
                              style:
                                  TextStyle(color: Colors.red, fontSize: 17.0),
                            ))),
                    SizedBox(
                        width: double.infinity,
                        height: 60,
                        child: RaisedButton(
                            disabledColor: Colors.grey,
                            shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(8.0),
                                side: BorderSide(color: Colors.grey)),
                            color: Colors.green[400],
                            child: Text(
                              'Sign In',
                              style: TextStyle(
                                  color: Colors.black,
                                  fontSize: 20.0,
                                  fontFamily: 'Avenir'),
                            ),
                            onPressed: (formData.email.isNotEmpty &&
                                    formData.password.isNotEmpty)
                                ? () async {
                                    if (_formKey.currentState.validate()) {
                                      setState(() {
                                        _user_details = login(formData.email,
                                            formData.password, context);
                                      });

                                      _user_details.then((result) {
                                        if (result.statusCode == 200) {
                                          preference
                                              .MySharedPreferences.instance
                                              .setUserProfile(result.user);
                                          preference
                                              .MySharedPreferences.instance
                                              .setStringValue(
                                                  "isloggedin", 'yes');

                                          Navigator.pushReplacement(
                                            context,
                                            MaterialPageRoute<void>(
                                                builder: (context) =>
                                                    route.HomePageRoute),
                                          );
                                        }
                                      });
                                    }
                                  }
                                : null)),
                    SizedBox(
                      height: 20,
                    ),
                    SizedBox(
                        width: double.infinity,
                        height: 20,
                        child: Center(
                            child: GestureDetector(
                                onTap: () {
                                  Navigator.push(
                                    context,
                                    MaterialPageRoute<void>(
                                        builder: (context) =>
                                            route.SignUpRoute),
                                  );
                                },
                                child: Text(
                                  'Don\'t have an account? Register',
                                  textAlign: TextAlign.center,
                                  style: TextStyle(
                                      color: Colors.black, fontSize: 17.0),
                                )))),
                  ],
                ),
              ))),
    );
  }
}
