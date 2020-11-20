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
   bool confirmed=false;
   String confirmation_code;
   bool logged_in=false;
   String token;
   bool password_reset_requested=false;

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
      profile_pic: parsedJson['profile_pic'] as String,
      user_name: parsedJson['user_name'] as String,
      email: parsedJson['email'] as String,
      password: parsedJson['password'] as String,
      first_name: parsedJson['first_name'] as String,
      last_name: parsedJson['last_name'] as String,
      gender: parsedJson['gender'] as String,
      date_of_birth: parsedJson['date_of_birth'] as String,
      nationality: parsedJson['nationality'] as String,
      city: parsedJson['city'] as String,
      confirmed: (parsedJson['confirmed'] ?? false) as bool,
      confirmation_code: parsedJson['confirmation_code'] as String,
      logged_in: (parsedJson['logged_in'] ?? false) as bool,
      token: parsedJson['token'] as String,
      password_reset_requested: (parsedJson['password_reset_requested'] ?? false) as bool,




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
void displayBottomSheetSelector(BuildContext context,List DataList) {
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

          ),
        );
      });
}
class DataItem {
  const DataItem(this.name, this.icon);
  final String name;
  final Icon icon;
}
List<DataItem> NationalitySelection = <DataItem>[
  const DataItem(
      'Arab',
      Icon(
        Icons.check_box,
        color: const Color(0xFF167F67),
      )),
  const DataItem(
      'United States',
      Icon(
        Icons.check_box,
        color: const Color(0xFF167F67),
      )),
  const DataItem(
      'England',
      Icon(
        Icons.check_box,
        color: const Color(0xFF167F67),
      )),
];
List<String> CitySelection = <String>[
"Addis Ababa",
  "Bahirdar"
];
List<String> AdType = <String>[

];
List<String> AdCategory = <String>[

];
List<String> Breed = <String>[

];
List<String> EquipmentCondition = <String>[

];
List<String> EquipmentType = <String>[

];
List<String> Gender = <String>[

];

InputDecoration TextInputDeco(String label){
  return InputDecoration(
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
    contentPadding: EdgeInsets.only(left:10.0),
    fillColor: Colors.white,
    //labelText: 'Username or Email',
    hintText: label,
    hintStyle: TextStyle(
        color: Colors.grey, fontSize: 20.0),
    labelStyle: TextStyle(
        color: Colors.grey, fontSize: 20.0),

  );
}