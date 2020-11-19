import 'dart:convert';

import 'package:flutter/cupertino.dart';
import 'package:http/http.dart' as http;
import 'package:flutter/material.dart';
import 'package:json_annotation/json_annotation.dart';
import 'signin.dart' as signin;
import 'preference.dart' as preference;
import 'main.dart' as main;
Future<Parser> signup(String username,String password,String email) async {
  final http.Response response = await http.post(
    'http://192.168.0.108/ff/restopress/wp-json/remote-signup/signup',
    headers: <String, String>{
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: jsonEncode(<String, String>{
      'first_name': username,
      'password': password,
      'email':email
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
FormDataSignup _$FormDataFromJsonSignup(Map<String, dynamic> json) {
  return FormDataSignup(
      first_name: json['first_name'] as String,
      last_name: json['last_name'] as String,
      date_of_birth: json['date_of_birth'] as String,
      gender: json['gender'] as String,
      nationality: json['nationality'] as String,
      agree: json['agree'] as bool,
      password: json['password'] as String,
      email: json['email'] as String);
}

Map<String, dynamic> _$FormDataToJsonSignup(FormDataSignup instance) =>
    <String, dynamic>{
      'first_name': instance.first_name,
      'last_name': instance.last_name,
      'date_of_birth': instance.date_of_birth,
      'gender': instance.gender,
      'nationality': instance.nationality,
      'agree': instance.agree,
      'email': instance.email,
      'password': instance.password
    };

@JsonSerializable()
class FormDataSignup {
  String first_name;
  String last_name;
  String date_of_birth;
  String gender;
  String nationality;
  bool agree;
  String password;
  String email;

  FormDataSignup(
      {this.first_name,
      this.last_name,
      this.date_of_birth,
      this.gender,
      this.nationality,
      this.agree,
      this.email,
      this.password});

  factory FormDataSignup.fromJson(Map<String, dynamic> json) =>
      _$FormDataFromJsonSignup(json);

  Map<String, dynamic> toJson() => _$FormDataToJsonSignup(this);
}

class SignUpHttp extends StatefulWidget {
  final http.Client httpClient;

  SignUpHttp({
    this.httpClient,
  });

  @override
  SignUpRoute createState() => SignUpRoute();
}

class Item {
  const Item(this.name, this.icon);
  final String name;
  final Icon icon;
}

class SignUpRoute extends State<SignUpHttp> {
  FormDataSignup formDataSignup = FormDataSignup();
  final _formKey = GlobalKey<FormState>();

  int _value = 1;
  bool _throwShotAway = true;
  String _genderValue = 'male';
  DateTime selectedDate = DateTime.now();
  String selectedDateDisplay = '';
  Future<void> _selectDate(BuildContext context) async {
    final DateTime picked = await showDatePicker(
        context: context,
        initialDate: selectedDate,
        firstDate: DateTime(2015, 8),
        lastDate: DateTime(2101));
    if (picked != null && picked != selectedDate)
      setState(() {
        selectedDate = picked;
        selectedDateDisplay = "${selectedDate.toLocal()}".split(' ')[0];
      });
  }

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

  Item selectedCountry;
  List<Item> countries = <Item>[
    const Item(
        'Arab',
        Icon(
          Icons.check_box,
          color: const Color(0xFF167F67),
        )),
    const Item(
        'United States',
        Icon(
          Icons.check_box,
          color: const Color(0xFF167F67),
        )),
    const Item(
        'England',
        Icon(
          Icons.check_box,
          color: const Color(0xFF167F67),
        )),
  ];
  Future<Parser> _user_details;

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
      body: new Container(
          decoration: new BoxDecoration(
            color: Colors.white,
          ),
          child: Center(
              child: Form(
                  key: _formKey,
                  child: new Container(
                    margin: EdgeInsets.only(top: 10),
                    padding: EdgeInsets.only(
                        left: 40.0, right: 40.0, top: 15, bottom: 15),
                    width: MediaQuery.of(context).size.width * 1,
                    decoration: new BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.all(Radius.circular(20))),
                    child: Scrollbar(
                      child: SingleChildScrollView(
                        //padding: EdgeInsets.only(left: 40.0, right: 40.0,top:50),
                        child: Wrap(
                          runSpacing: 10,
                          children: [
                            ...[
                              /*Center(
                          child: Text(
                        'Register An Account',
                        textAlign: TextAlign.center,
                        style: TextStyle(color: Colors.grey, fontSize: 20.0),
                      )),*/
                              SizedBox(
                                  height: 60.0,
                                  child: TextFormField(
                                    validator: (value) {
                                      if (value.isEmpty) {
                                        return 'User Name is Required';
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
                                    onChanged: (value) {
                                      formDataSignup.first_name = value;
                                    },
                                  )),
                              SizedBox(
                                  height: 60.0,
                                  child: TextFormField(
                                    validator: (value) {
                                      if (value.isEmpty) {
                                        return 'Email is Required';
                                      }
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
                                    onChanged: (value) {
                                      formDataSignup.email = value;
                                    },
                                  )),
                              SizedBox(
                                  height: 60.0,
                                  child: TextFormField(
                                    validator: (value) {
                                      if (value.isEmpty) {
                                        return 'Password is Required';
                                      }
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
                                    onChanged: (value) {
                                      formDataSignup.password = value;
                                    },
                                  )),
                              SizedBox(
                                  width: double.infinity,
                                  height: 60,
                                  child: CheckboxListTile(
                                    value: _throwShotAway,
                                    title: Text(
                                        "I agree to Term of Service & Privacy Policy",
                                        style: TextStyle(
                                            color: Colors.black,
                                            fontSize: 17.0)),
                                    onChanged: (bool newValue) {
                                      print(newValue);
                                      setState(() {
                                        formDataSignup.agree = newValue;
                                        _throwShotAway = newValue;
                                      });
                                    },
                                    controlAffinity: ListTileControlAffinity
                                        .leading, //  <-- leading Checkbox
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
                                            _user_details=  signup(formDataSignup.first_name,formDataSignup.password,formDataSignup.email);

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
                            ].expand(
                              (widget) => [
                                widget,
                                SizedBox(
                                  height: 24,
                                )
                              ],
                            )
                          ],
                        ),
                      ),
                    ),
                  )))),
    );
  }
}


