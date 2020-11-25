import 'dart:convert';
import 'dart:async';

import 'package:http/http.dart' as http;
import '../globals.dart';
import 'package:flutter/material.dart';

String url = 'http://192.168.0.108/ff/restopress/wp-json/';
Map<String, String> headers = {
  'Content-Type': 'application/json; charset=UTF-8'
};

Future<ResponseParser> login(
    String email, String password, BuildContext context) async {
  displayBottomSheetLoader(context);
  final http.Response response = await http.post(
    url + 'remote-login/login',
    headers: headers,
    body: jsonEncode(<String, String>{'username': email, 'password': password}),
  );
  Navigator.pop(context);
  return ResponseParser.fromJson(jsonDecode(response.body));
}

Future<ResponseParser> signup(
    String username, String email, String password) async {
  final http.Response response = await http.post(
    url + 'remote-signup/signup',
    headers: headers,
    body: jsonEncode(<String, String>{
      'user_name': username,
      'password': password,
      'email': email
    }),
  );

  return ResponseParser.fromJson(jsonDecode(response.body));
}

Future<ResponseParser> update_profile() async {}
Future<ResponseParser> forgot_password(
    String email, BuildContext context) async {
  displayBottomSheetLoader(context);
  final http.Response response = await http.post(
    url + 'remote-forgot-passowrd/forgotpassword',
    headers: headers,
    body: jsonEncode(<String, String>{'email': email}),
  );
  Navigator.pop(context);
  return ResponseParser.fromJson(jsonDecode(response.body));
}

Future<ResponseParser> reset_password() async {}
Future<ResponseParser> verify() async {}
Future<ResponseParser> verify_lostpassword() async {}
Future<ResponseParser> DeleteAccont() async {}
