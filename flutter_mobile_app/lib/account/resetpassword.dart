import 'dart:async';

import 'package:flutter/material.dart';
import 'api.dart';
import '../globals.dart';
import '../preference.dart' as preference;
import '../routes.dart' as route;

class ResetHttp extends StatefulWidget {
  @override
  ForgotRoute createState() => ForgotRoute();
}

class ForgotRoute extends State<ResetHttp> {
  AccountData formData = AccountData();

  final _formKey = GlobalKey<FormState>();

  Future<ResponseParser> _user_details;
  final email = new TextEditingController();

  @override
  void dispose() {
    email.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Create New Passowrd'),
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
              width: MediaQuery.of(context).size.width * 1,
              height: MediaQuery.of(context).size.height * 1,
              decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.all(Radius.circular(20))),
              child: Form(
                key: _formKey,

                //padding: EdgeInsets.only(left: 40.0, right: 40.0,top:50),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    /*Center(
                          child: Text(
                        'Log In',
                        textAlign: TextAlign.center,
                        style: TextStyle(color: Colors.grey, fontSize: 20.0),
                      )),*/
                    SizedBox(
                        height: 60.0,
                        child: TextFormField(
                          controller: email,
                          validator: (value) {
                            if (value.isEmpty) {
                              return 'Password is Required';
                            }
                            setState(() {
                              formData.email = value;
                            });
                            return null;
                          },
                          style: TextStyle(fontSize: 20.0),
                          decoration: TextInputDeco('Password'),
                          obscureText: true,
                        )),
                    SizedBox(
                        width: double.infinity,
                        height: 50,
                        child: RaisedButton(
                            shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(8.0),
                                side: BorderSide(color: Colors.grey)),
                            color: Colors.white,
                            child: Text(
                              'Continue',
                              style: TextStyle(
                                  color: Colors.black, fontSize: 20.0),
                            ),
                            onPressed: () async {
                              if (_formKey.currentState.validate()) {
                                print('hello');
                                setState(() {
                                  _user_details = login(formData.email,
                                      formData.password, context);
                                });
                                await Future<void>.delayed(
                                    const Duration(seconds: 2));

                                await _user_details.then((result) {
                                  Navigator.pop(context);

                                  if (result.statusCode == 200) {
                                    preference.MySharedPreferences.instance
                                        .setUserProfile(result.user);
                                    preference.MySharedPreferences.instance
                                        .setStringValue("isloggedin", 'yes');

                                    Navigator.pushReplacement(
                                      context,
                                      MaterialPageRoute<void>(
                                          builder: (context) =>
                                              route.HomePageRoute),
                                    );
                                  }
                                });
                              }
                            })),
                  ],
                ),
              ))),
    );
  }
}
