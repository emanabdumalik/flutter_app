
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
  User formData = User();
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




  Future<ResponseParser> _user_details;

  @override
  Widget build(BuildContext context) {
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
      body:  Container(
          decoration:  BoxDecoration(
            color: Colors.white,
          ),
          child: Center(
            child:  Container(
              margin: EdgeInsets.only(top: 0),
              padding:
              EdgeInsets.only(left: 40.0, right: 40.0, top: 15, bottom: 15),
              width: MediaQuery.of(context).size.width * 1,
              height: MediaQuery.of(context).size.height * 1,
              decoration:  BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.all(Radius.circular(20))),
              child: Form(
                  key: _formKey,

                  //padding: EdgeInsets.only(left: 40.0, right: 40.0,top:50),
                  child:Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                  SizedBox(
                                  height: 60.0,
                                  child: TextFormField(
                                    controller:username,
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
                                   decoration:  TextInputDeco('Username'),

                                  )),
                              SizedBox(
                                  height: 60.0,
                                  child: TextFormField(
                                    controller:email,
                                    validator: (value) {
                                      if (value.isEmpty) {
                                        return 'Email is Required';
                                      }
                                      setState(() {
                                        formData.email = value;
                                      });
                                      return null;
                                    },
                                    style: TextStyle(fontSize: 20.0),
                                    decoration:  TextInputDeco('Email'),

                                  )),
                              SizedBox(
                                  height: 60.0,
                                  child: TextFormField(
                                    controller:password,
                                    validator: (value) {
                                      if (value.isEmpty) {
                                        return 'Password is Required';
                                      }
                                      setState(() {
                                        formData.password = value;
                                      });
                                      return null;
                                    },
                                    style: TextStyle(fontSize: 20.0),
                                    decoration:  TextInputDeco('Password'),
                                    obscureText: true,

                                  )),

                              SizedBox(
                                  width: double.infinity,
                                  height: 50,
                                  child: RaisedButton(
                                      shape: RoundedRectangleBorder(
                                          borderRadius:
                                              BorderRadius.circular(8.0),
                                          side: BorderSide(color: Colors.grey)),
                                      color: Colors.white,
                                      child: Text(
                                        'Register',
                                        style: TextStyle(
                                            color: Colors.black,
                                            fontSize: 20.0),
                                      ),
                                      onPressed: () async {
                                        if (_formKey.currentState.validate()) {
                                          print('hello');
                                          setState(() {
                                            _user_details=  signup(formData.user_name,formData.email,formData.password);

                                          });
                                          await  Future<void>.delayed(const Duration(seconds: 2));

                                          await _user_details.then((result){
                                            Navigator.pop(context);

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


                                        }})),
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
                                                color: Colors.black,
                                                fontSize: 17.0),
                                          )))),
                          ]

                        ),
                      ),
                    ),
                  )),
    );
  }
}


