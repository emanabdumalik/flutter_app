import 'dart:convert';
import 'dart:async';

import 'package:http/http.dart' as http;
import 'package:flutter/material.dart';
import 'package:json_annotation/json_annotation.dart';
import '../globals.dart';
String url =  'http://192.168.0.108/ff/restopress/wp-json/';
Map<String,String> headers = {'Content-Type': 'application/json; charset=UTF-8'};
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
      'first_name': username,
      'password': password,
      'email':email
    }),
  );


  return ResponseParser.fromJson(jsonDecode(response.body));


}