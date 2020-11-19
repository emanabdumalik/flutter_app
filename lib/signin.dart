import 'dart:convert';
import 'dart:async';

import 'package:http/http.dart' as http;
import 'package:flutter/material.dart';
import 'package:json_annotation/json_annotation.dart';
import 'signup.dart' as signup;
import 'preference.dart' as preference;
import 'main.dart' as main;
Future<Parser> login(String username,String password) async {
  final http.Response response = await http.post(
    'http://192.168.0.108/ff/restopress/wp-json/remote-login/login',
    headers: <String, String>{
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: jsonEncode(<String, String>{
      'username': username,
      'password': password
    }),
  );


    return Parser.fromJson(jsonDecode(response.body));


}
class Parser {
  final int statusCode;
  final bool success;
  final String message;
  final Map user;

  Parser({this.statusCode, this.success, this.message, this.user});

  factory Parser.fromJson(Map<String, dynamic> json) {
    return Parser(
        statusCode: json['statusCode'],
        success: json['success'],
        message: json['message'],
        user: json['user']);
  }
}
FormData _$FormDataFromJson(Map<String, dynamic> json) {
  return FormData(
    email: json['email'] as String,
    password: json['password'] as String,
  );
}

Map<String, dynamic> _$FormDataToJson(FormData instance) => <String, dynamic>{
      'email': instance.email,
      'password': instance.password,
    };

@JsonSerializable()
class FormData {
  String email;
  String password;

  FormData({
    this.email,
    this.password,
  });

  factory FormData.fromJson(Map<String, dynamic> json) =>
      _$FormDataFromJson(json);

  Map<String, dynamic> toJson() => _$FormDataToJson(this);
}

class SignInHttp extends StatefulWidget {


  final http.Client httpClient;

  SignInHttp({
    this.httpClient,
  });
  @override
  LogInRoute createState() => LogInRoute();
}

class LogInRoute extends State<SignInHttp> {
  FormData formData = FormData();
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
  final Map user={};
  Future<Parser> _user_details;
  var username = new TextEditingController();

  var password = new TextEditingController();
  @override
  Widget build(BuildContext context) {

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
      body:  Center(
        child: new Container(
          margin: EdgeInsets.only(top: 0),
          padding: EdgeInsets.only(
              left: 40.0, right: 40.0, top: 15, bottom: 15),
          width: MediaQuery.of(context).size.width * 1,
            height: MediaQuery.of(context).size.height * 1,
          decoration: new BoxDecoration(
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
                                    controller:username,
                                    validator: (value) {
                                      if (value.isEmpty) {
                                        return 'Email is Required';
                                      }
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
                                      border: OutlineInputBorder(
                                        borderSide: BorderSide(
                                            color: Colors.grey, width: 1.0),
                                      ),
                                      filled: true,
                                      contentPadding: EdgeInsets.all(0),
                                      fillColor: Colors.white,
                                      //labelText: 'Username or Email',
                                      hintText: 'Email',
                                      hintStyle: TextStyle(
                                          color: Colors.grey, fontSize: 20.0),
                                      labelStyle: TextStyle(
                                          color: Colors.grey, fontSize: 20.0),
                                      prefixIcon: Icon(Icons.alternate_email,
                                          color: Colors.grey),
                                    ),

                                    onChanged: (value) {
                                      print(value);
                                      setState(() {
                                        formData.email = value;
                                      });
                                    },
                                  )),
                              SizedBox(
                                  height: 60.0,
                                  child: TextFormField(
                                    controller:password,
                                    validator: (value) {
                                      if (value.isEmpty) {
                                        return 'Password is Required';
                                      }
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
                                      border: OutlineInputBorder(
                                        borderSide: BorderSide(
                                            color: Colors.grey, width: 1.0),
                                      ),
                                      filled: true,
                                      contentPadding: EdgeInsets.all(0),
                                      fillColor: Colors.white,
                                      hintStyle: TextStyle(
                                          color: Colors.grey, fontSize: 20.0),
                                      labelStyle: TextStyle(
                                          color: Colors.grey, fontSize: 20.0),
                                      hintText: 'Password',

                                      prefixIcon:
                                          Icon(Icons.lock, color: Colors.grey),
                                    ),
                                    obscureText: true,
                                    onChanged: (value) {
                                      print(value);
                                      setState(() {
                                        formData.password = value;
                                      });

                                    },
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
                                        'Sign In',
                                        style: TextStyle(
                                            color: Colors.black,
                                            fontSize: 20.0),
                                      ),
                                      onPressed: () async {
                                        if (_formKey.currentState.validate()) {
                                          print('hello');
                                          displayBottomSheet(context);
setState(() {
  _user_details=  login(formData.email,formData.password);

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
                                                color: Colors.black,
                                                fontSize: 17.0),
                                          )))),


                          ],
                        ),


                  )
          )


      ),
    );
  }
}


