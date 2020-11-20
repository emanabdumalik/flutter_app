import 'dart:async';

import 'package:flutter/material.dart';
import 'api.dart';
import '../globals.dart';
import '../preference.dart' as preference;
import 'package:pin_entry_text_field/pin_entry_text_field.dart';

class ForgotHttp extends StatefulWidget {
  @override
  ForgotRoute createState() => ForgotRoute();
}

class ForgotRoute extends State<ForgotHttp> {
  User formData = User();
  void displayBottomSheet(BuildContext context) {
    showModalBottomSheet<void>(
        context: context,
        isScrollControlled: true,
        useRootNavigator: false,
        isDismissible: false,
        builder: (ctx) {
          return Container(
            color: Colors.white,
            height: MediaQuery.of(context).size.height,
            child: Center(
              child: new Image.asset('assets/images/loader.gif',
                  width: 100.0, height: 100.0),
            ),
          );
        });
  }

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
        title: Text('Enter Verification Code'),
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
          child:  Container(
              margin: EdgeInsets.only(top: 0),
              padding:
              EdgeInsets.only(left: 40.0, right: 40.0, top: 0.0, bottom: 0.0),
              width: MediaQuery.of(context).size.width * 1,
              height: MediaQuery.of(context).size.height * 1,
              decoration:  BoxDecoration(
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
                        child: PinEntryTextField(
                            fields:6,
                            showFieldAsBox:true,
                          onSubmit: (String pin){
                                print(pin);
                          }, // end onSubmit
                        ),

                    ),
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
                                displayBottomSheet(context);
                                setState(() {
                                  _user_details =
                                      login(formData.email, formData.password);
                                });
                                await Future.delayed(
                                    const Duration(seconds: 2));

                                await  _user_details.then((result) {
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
                                              main.HomeRoutes(0)),
                                    );

                                  }
                                });
                              }
                            })),
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
                                            signup.SignUpHttp()),
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
