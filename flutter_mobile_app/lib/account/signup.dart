import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'signin.dart' as signin;
import '../preference.dart' as preference;
import '../main.dart' as main;
import 'api.dart';
import '../globals.dart';
import '../routes.dart' as route;

class SignUpHttp extends StatefulWidget {
  @override
  SignUpRoute createState() => SignUpRoute();
}

class SignUpRoute extends State<SignUpHttp> {
  AccountData formData = AccountData();
  final _formKey = GlobalKey<FormState>();
  final username = new TextEditingController();

  final email = new TextEditingController();
  final password = new TextEditingController();
  @override
  void dispose() {
    username.dispose();
    password.dispose();
    email.dispose();
    super.dispose();
  }

  bool _hasInputError;
  bool _haschanged = false;
  bool _hasPassInputError;
  bool _haschangedPassword = false;
  bool _passwordHidden = true;
  String _passwordActionText = 'Show';
  Future<ResponseParser> _user_details;

  @override
  Widget build(BuildContext context) {
    double width = MediaQuery.of(context).size.width * 1;
    double widthPassRow = MediaQuery.of(context).size.width - 80.0;
    double height = MediaQuery.of(context).size.height * 1;
    return Scaffold(
      appBar: AppBar(
        title: Text("Register An Account"),
        /*
        actions: <Widget>[
          FlatButton(
            textColor: Colors.white,
            onPressed: () {

              Navigator.push(
                context,
                MaterialPageRoute<void>(builder: (context) =>

                SignInHttpDemo()


                ),
              );
            },
            child: Text("Sign In"),
            shape: CircleBorder(side: BorderSide(color: Colors.transparent)),
              // do something

          ),

        ],*/
      ),
      body: Container(
          decoration: BoxDecoration(
            color: Colors.white,
          ),
          child: Center(
            child: Container(
              margin: EdgeInsets.only(top: 0),
              padding:
                  EdgeInsets.only(left: 40.0, right: 40.0, top: 15, bottom: 15),
              width: width,
              height: height,
              decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.all(Radius.circular(20))),
              child: Form(
                key: _formKey,

                //padding: EdgeInsets.only(left: 40.0, right: 40.0,top:50),
                child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                      SizedBox(
                          height: 60.0,
                          child: TextFormField(
                            controller: username,
                            validator: (value) {
                              if (value.isEmpty) {
                                return 'User Name is Required';
                              }
                              setState(() {
                                formData.user_name = value;
                              });
                              return null;
                            },
                            style: TextStyle(fontSize: 20.0),
                            decoration: TextInputDeco('Username'),
                          )),
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
                          width: double.infinity,
                          height: 50,
                          child: RaisedButton(
                              shape: RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(8.0),
                                  side: BorderSide(color: Colors.grey)),
                              color: Colors.white,
                              child: Text(
                                'Register',
                                style: TextStyle(
                                    color: Colors.black, fontSize: 20.0),
                              ),
                              onPressed: (formData.user_name.isNotEmpty &&
                                      formData.email.isNotEmpty &&
                                      formData.password.isNotEmpty)
                                  ? () async {
                                      if (_formKey.currentState.validate()) {
                                        print('hello');
                                        setState(() {
                                          _user_details = signup(
                                              formData.user_name,
                                              formData.email,
                                              formData.password);
                                        });
                                        await Future<void>.delayed(
                                            const Duration(seconds: 2));

                                        await _user_details.then((result) {
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
                                                      route.VerifyRoute),
                                            );
                                          }
                                        });
                                      }
                                    }
                                  : null)),
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
                                              route.SingInRoute),
                                    );
                                  },
                                  child: Text(
                                    'I am already a Member',
                                    textAlign: TextAlign.center,
                                    style: TextStyle(
                                        color: Colors.black, fontSize: 17.0),
                                  )))),
                    ]),
              ),
            ),
          )),
    );
  }
}
