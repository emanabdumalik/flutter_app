import 'dart:convert';
import 'dart:async';

import 'package:http/http.dart' as http;
import '../globals.dart';
import 'package:flutter/material.dart';
String url =  'http://192.168.0.108/ff/restopress/wp-json/';
Map<String,String> headers = {'Content-Type': 'application/json; charset=UTF-8'};

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
Future<ResponseParser> login(String username, String password) async {
  final http.Response response = await http.post(
    url + 'remote-login/login',
    headers: headers,
    body: jsonEncode(
        <String, String>{'username': username, 'password': password}),
  );

  return ResponseParser.fromJson(jsonDecode(response.body));
}
Future<ResponseParser> signup(String username,String email,String password) async {
  final http.Response response = await http.post(
    url + 'remote-signup/signup',
    headers: headers,
    body: jsonEncode(<String, String>{
      'user_name': username,
      'password': password,
      'email':email
    }),
  );


  return ResponseParser.fromJson(jsonDecode(response.body));


}
Future<ResponseParser> update_profile() async {


}
Future<ResponseParser> forgot_password() async {


}
Future<ResponseParser> reset_password() async {


}
Future<ResponseParser> verify() async {


}
Future<ResponseParser> verify_lostpassword() async {


}
Future<ResponseParser> DeleteAccont() async {


}