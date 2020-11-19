import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';
import 'package:json_annotation/json_annotation.dart';

class User {
  final String name;
  final String email;
  final String loggedIn;

  User({this.name, this.email, this.loggedIn});

  factory User.fromJson(Map<String, dynamic> parsedJson) {
    return new User(
        name: parsedJson['data']['user_nicename'] ?? "",
        email: parsedJson['data']['user_email'] ?? "",
        loggedIn: parsedJson['data']['loggedIn'] ?? "");
  }

  Map<String, dynamic> toJson() {
    return {"name": this.name, "email": this.email, "loggedIn": this.loggedIn};
  }
}

class MySharedPreferences {
  MySharedPreferences._privateConstructor();

  static final MySharedPreferences instance =
      MySharedPreferences._privateConstructor();

  void setStringValue(String key, String value) async {
    SharedPreferences myPrefs = await SharedPreferences.getInstance();
    myPrefs.setString(key, value);
  }

  Future<void> setUserProfile(Map<dynamic, dynamic> jsonString) async {
    SharedPreferences shared_User = await SharedPreferences.getInstance();
    //Map decode_options = jsonDecode(jsonString);
    String user = jsonEncode(jsonString);
    shared_User.setString('user', user);
  }

  Future<User> getUserProfile() async {
    SharedPreferences shared_User = await SharedPreferences.getInstance();
    Map userMap = jsonDecode(shared_User.getString('user'));
    var user = User.fromJson(userMap);
    return user;
  }

  Future<String> getStringValue(String key) async {
    SharedPreferences myPrefs = await SharedPreferences.getInstance();
    return myPrefs.getString(key) ?? "";
  }

  Future<bool> containsKey(String key) async {
    SharedPreferences myPrefs = await SharedPreferences.getInstance();
    return myPrefs.containsKey(key);
  }

  Future<void> removeValue(String key) async {
    SharedPreferences myPrefs = await SharedPreferences.getInstance();
    return myPrefs.remove(key);
  }

  Future<void> removeAll() async {
    SharedPreferences myPrefs = await SharedPreferences.getInstance();
    return myPrefs.clear();
  }
}
