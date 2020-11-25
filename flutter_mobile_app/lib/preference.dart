import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';
import 'package:json_annotation/json_annotation.dart';
import 'globals.dart';

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
    User user_default = new User();
    print(user_default);
   String userMap =  shared_User.getString('user') ?? '';
   if(userMap == '' || userMap == null){
     return user_default;
   }
   else {
     User user = User.fromJson(jsonDecode(userMap));
     return user;
   }
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
