import 'dart:convert';

import 'package:flutter/cupertino.dart';
import 'package:http/http.dart' as http;
import 'package:flutter/material.dart';
import 'package:json_annotation/json_annotation.dart';
import 'signin.dart' as signin;
import '../preference.dart' as preference;
import '../main.dart' as main;
import 'api.dart';
import '../globals.dart';

class SignUpHttp extends StatefulWidget {

  @override
  SignUpRoute createState() => SignUpRoute();
}

class Item {
  const Item(this.name, this.icon);
  final String name;
  final Icon icon;
}

class SignUpRoute extends State<SignUpHttp> {
  User formData = User();
  final _formKey = GlobalKey<FormState>();


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
                                    decoration: InputDecoration(
                                      focusedBorder: OutlineInputBorder(
                                        borderSide: BorderSide(
                                            color: Colors.black, width: 1.0),
                                      ),
                                      enabledBorder: OutlineInputBorder(
                                        borderSide: BorderSide(
                                            color: Colors.grey, width: 1.0),
                                      ),
                                      prefixIcon: Icon(Icons.perm_identity,
                                          color: Colors.grey),
                                      contentPadding: EdgeInsets.all(0),
                                      hintStyle: TextStyle(
                                          color: Colors.grey, fontSize: 20.0),
                                      labelStyle: TextStyle(
                                          color: Colors.grey, fontSize: 20.0),
                                      filled: true,
                                      fillColor: Colors.white,
                                      border: OutlineInputBorder(
                                        borderSide: BorderSide(
                                            color: Colors.grey, width: 1.0),
                                      ),
                                      hintText: 'User Name',
                                    ),

                                  )),
                              SizedBox(
                                  height: 60.0,
                                  child: TextFormField(
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
                                    decoration: InputDecoration(
                                        filled: true,
                                        focusedBorder: OutlineInputBorder(
                                          borderSide: BorderSide(
                                              color: Colors.black, width: 1.0),
                                        ),
                                        enabledBorder: OutlineInputBorder(
                                          borderSide: BorderSide(
                                              color: Colors.grey, width: 1.0),
                                        ),
                                        contentPadding: EdgeInsets.all(0),
                                        fillColor: Colors.white,
                                        border: OutlineInputBorder(
                                          borderSide: BorderSide(
                                              color: Colors.grey, width: 1.0),
                                        ),
                                        hintStyle: TextStyle(
                                            color: Colors.grey, fontSize: 20.0),
                                        labelStyle: TextStyle(
                                            color: Colors.grey, fontSize: 20.0),
                                        hintText: 'Email',
                                        prefixIcon: Icon(Icons.alternate_email,
                                            color: Colors.grey)),

                                  )),
                              SizedBox(
                                  height: 60.0,
                                  child: TextFormField(
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
                                    decoration: InputDecoration(
                                      filled: true,
                                      focusedBorder: OutlineInputBorder(
                                        borderSide: BorderSide(
                                            color: Colors.black, width: 1.0),
                                      ),
                                      enabledBorder: OutlineInputBorder(
                                        borderSide: BorderSide(
                                            color: Colors.grey, width: 1.0),
                                      ),
                                      contentPadding: EdgeInsets.all(0),
                                      fillColor: Colors.white,
                                      border: OutlineInputBorder(
                                        borderSide: BorderSide(
                                            color: Colors.grey, width: 1.0),
                                      ),
                                      hintText: 'Password',
                                      hintStyle: TextStyle(
                                          color: Colors.grey, fontSize: 20.0),
                                      labelStyle: TextStyle(
                                          color: Colors.grey, fontSize: 20.0),
                                      prefixIcon:
                                          Icon(Icons.lock, color: Colors.grey),
                                    ),
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
                                          displayBottomSheet(context);
                                          setState(() {
                                            _user_details=  signup(formData.user_name,formData.email,form.password);

                                          });
                                          await new Future.delayed(const Duration(seconds: 2));

                                          _user_details.then((result){
                                            Navigator.pop(context);

                                            if (result.statusCode == 200) {
                                              preference
                                                  .MySharedPreferences.instance
                                                  .setUserProfile(result.user);
                                              preference
                                                  .MySharedPreferences.instance
                                                  .setStringValue(
                                                  "isloggedin", 'yes');
                                              preference
                                                  .MySharedPreferences.instance
                                                  .getUserProfile()
                                                  .then((value) {
                                                print(value.name);

                                                Navigator.pushReplacement(
                                                  context,
                                                  MaterialPageRoute<void>(
                                                      builder: (context) =>
                                                          main.HomeRoutes(0)),
                                                );
                                              });
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
                                                      signin.SignInHttp()),
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


