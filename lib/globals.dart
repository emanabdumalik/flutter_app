import 'package:flutter/material.dart';
import 'package:json_annotation/json_annotation.dart';
import 'dart:convert';
import 'dart:async';

@JsonSerializable()
class User {
   String profile_pic;
   String user_name;
   String email;
   String phone;
   String password;
   String first_name;
   String last_name;
   String gender;
   String date_of_birth;
   String nationality;
   String city;
   bool confirmed;
   String confirmation_code;
   bool logged_in;
   String token;
   bool password_reset_requested;

  User({
    this.profile_pic,
    this.user_name,
    this.email,
    this.phone,
    this.password,
    this.first_name,
    this.last_name,
    this.gender,
    this.date_of_birth,
    this.nationality,
    this.city,
    this.confirmed,
    this.confirmation_code,
    this.logged_in,
    this.token,
    this.password_reset_requested
  });

  factory User.fromJson(Map<String, dynamic> parsedJson) =>
      _$FormDataFromJson(parsedJson);

  Map<String, dynamic> toJson() => _$FormDataToJson(this);

}
  User _$FormDataFromJson(Map<String, dynamic> parsedJson) {
    return  User(
      profile_pic: parsedJson['data']['profile_pic'] as String,
      user_name: parsedJson['data']['user_name'] as String,
      email: parsedJson['data']['email'] as String,
      password: parsedJson['data']['password'] as String,
      first_name: parsedJson['data']['first_name'] as String,
      last_name: parsedJson['data']['last_name'] as String,
      gender: parsedJson['data']['gender'] as String,
      date_of_birth: parsedJson['data']['date_of_birth'] as String,
      nationality: parsedJson['data']['nationality'] as String,
      city: parsedJson['data']['city'] as String,
      confirmed: (parsedJson['data']['confirmed'] ?? false) as bool,
      confirmation_code: parsedJson['data']['confirmation_code'] as String,
      logged_in: (parsedJson['data']['logged_in'] ?? false) as bool,
      token: parsedJson['data']['token'] as String,
      password_reset_requested: (parsedJson['data']['password_reset_requested'] ?? false) as bool,




    );
  }


Map<String, dynamic> _$FormDataToJson(User instance) => <String, dynamic>{
 'profile_pic':instance.profile_pic,
  'user_name':instance.user_name,
  'email':instance.email,
  'password':instance.password,
  'first_name':instance.first_name,
  'last_name':instance.last_name,
  'gender':instance.gender,
  'date_of_birth':instance.date_of_birth,
  'nationality':instance.nationality,
  'city':instance.city,
  'confirmed':instance.confirmed,
  'confirmation_code':instance.confirmation_code,
  'logged_in':instance.logged_in,
  'token':instance.token,
  'password_reset_requested':instance.password_reset_requested

};
class ResponseParser {
  final int statusCode;
  final bool success;
  final String message;
  final Map user;

  ResponseParser({this.statusCode, this.success, this.message, this.user});

  factory ResponseParser.fromJson(Map<String, dynamic> json) {
    return ResponseParser(
        statusCode: (json['statusCode'] ?? 100)  as int,
        success: (json['success'] ?? false)  as bool,
        message: (json['message'] ?? '')  as String,
        user: (json['user'] ?? User())  as Map,);
  }
}