import 'dart:convert';

import 'package:flutter/cupertino.dart';
import 'package:http/http.dart' as http;
import 'package:flutter/material.dart';
import 'package:json_annotation/json_annotation.dart';
import 'preference.dart' as preference;
FormDataMyDetails _$FormDataFromJsonMyDetails(Map<String, dynamic> json) {
  return FormDataMyDetails(
      first_name: json['first_name'] as String,
      last_name: json['last_name'] as String,
      date_of_birth: json['date_of_birth'] as String,
      gender: json['gender'] as String,
      nationality: json['nationality'] as String,
      agree: json['agree'] as bool,
      password: json['password'] as String,
      email: json['email'] as String,
  phone: json['phone'] as String);
}

Map<String, dynamic> _$FormDataToJsonMyDetails(FormDataMyDetails instance) =>
    <String, dynamic>{
      'first_name': instance.first_name,
      'last_name': instance.last_name,
      'date_of_birth': instance.date_of_birth,
      'gender': instance.gender,
      'nationality': instance.nationality,
      'agree': instance.agree,
      'email': instance.email,
      'password': instance.password,
      'phone':instance.phone
    };

@JsonSerializable()
class FormDataMyDetails {
  String first_name;
  String last_name;
  String date_of_birth;
  String gender;
  String nationality;
  bool agree;
  String password;
  String email;
  String phone;

  FormDataMyDetails(
      {this.first_name,
      this.last_name,
      this.date_of_birth,
      this.gender,
      this.nationality,
      this.agree,
      this.email,
      this.password,this.phone});

  factory FormDataMyDetails.fromJson(Map<String, dynamic> json) =>
      _$FormDataFromJsonMyDetails(json);

  Map<String, dynamic> toJson() => _$FormDataToJsonMyDetails(this);
}

class MyDetailsHttp extends StatefulWidget {


  MyDetailsHttp(

    this.user,
  );
  preference.User user;
 // MyDetailsHttp(this.user);
  @override
  MyDetailsRoute createState() => MyDetailsRoute();
}

class Item {
  const Item(this.name, this.icon);
  final String name;
  final Icon icon;
}

class MyDetailsRoute extends State<MyDetailsHttp> {

  FormDataMyDetails formDataMyDetails = FormDataMyDetails();
  int _value = 1;
  bool _throwShotAway = true;
  String _genderValue = 'male';
  DateTime selectedDate = DateTime.now();
  String selectedDateDisplay = '';
  var username = new TextEditingController();
  var email = new TextEditingController();

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
  @override
  void initState() {
    super.initState();
setState(() {
  username.text = widget.user.name;
  email.text = widget.user.email;
  formDataMyDetails.first_name=widget.user.name;
  formDataMyDetails.email=widget.user.email;

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

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("My Details"),
        actions: <Widget>[
          FlatButton(
            textColor: Colors.black,
            onPressed: () {
print(jsonEncode(formDataMyDetails));
            },
            child: Text("SAVE"),

            // do something
          ),
        ],
      ),
      body: Scrollbar(
              child: SingleChildScrollView(
                scrollDirection: Axis.vertical,
                child: Container(
                  height: MediaQuery.of(context).size.height,
                  width: MediaQuery.of(context).size.width,
                  padding: EdgeInsets.only(left: 20.0,right:20.0),
                child: Column(
                  children: <Widget>[

                    SizedBox(
                    height: 20.0,
                    ),
                    SizedBox(
                        height: 60.0,
                        child: TextFormField(
                          readOnly: true,
controller:username,
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
                            contentPadding: EdgeInsets.only(left:10.0),
                            fillColor: Colors.white,
                            //labelText: 'Username or Email',
                            hintText: 'Username',
                            hintStyle: TextStyle(
                                color: Colors.grey, fontSize: 20.0),
                            labelStyle: TextStyle(
                                color: Colors.grey, fontSize: 20.0),

                          ),
                          onChanged: (value) {
  setState(() {
    formDataMyDetails.first_name = value;

  });
                          },
                        )),
                    SizedBox(
                        height: 60.0,
                        child: TextFormField(
controller:email,
                          readOnly: true,
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
                            contentPadding: EdgeInsets.only(left:10.0),
                            fillColor: Colors.white,
                            //labelText: 'Username or Email',
                            hintText: 'Email',
                            hintStyle: TextStyle(
                                color: Colors.grey, fontSize: 20.0),
                            labelStyle: TextStyle(
                                color: Colors.grey, fontSize: 20.0),

                          ),
                          onChanged: (value) {
                            setState(() {
                              formDataMyDetails.email = value;

                            });
                          },
                        )),
                      SizedBox(
                          height: 60.0,
                          child: TextFormField(

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
                              contentPadding: EdgeInsets.only(left:10.0),
                              fillColor: Colors.white,
                              //labelText: 'Username or Email',
                              hintText: 'Phone',
                              hintStyle: TextStyle(
                                  color: Colors.grey, fontSize: 20.0),
                              labelStyle: TextStyle(
                                  color: Colors.grey, fontSize: 20.0),

                            ),
                            onChanged: (value) {
                              formDataMyDetails.phone = value;
                            },
                          )),
                      SizedBox(
                          height: 60.0,
                          child: Row(
                              children:[
                          SizedBox(
                          height:60.0,
                              width: MediaQuery.of(context).size.width - 40.0,

                              child:TextFormField(

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
                              contentPadding: EdgeInsets.only(left:10.0),
                              fillColor: Colors.white,
                              //labelText: 'Username or Email',
                              hintText: 'Password',
                              hintStyle: TextStyle(
                                  color: Colors.grey, fontSize: 20.0),
                              labelStyle: TextStyle(
                                  color: Colors.grey, fontSize: 20.0),

                            ),
                            onChanged: (value) {
                              formDataMyDetails.email = value;
                            },
                          ))])

              ),
                      SizedBox(
                          height: 60.0,
                          child: TextFormField(

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
                              contentPadding: EdgeInsets.only(left:10.0),
                              fillColor: Colors.white,
                              //labelText: 'Username or Email',
                              hintText: 'First Name',
                              hintStyle: TextStyle(
                                  color: Colors.grey, fontSize: 20.0),
                              labelStyle: TextStyle(
                                  color: Colors.grey, fontSize: 20.0),

                            ),
                            onChanged: (value) {
                              formDataMyDetails.first_name = value;
                            },
                              keyboardType: TextInputType.number
                          )),

                      SizedBox(
                          height: 60.0,
                          child: TextFormField(

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
                              contentPadding: EdgeInsets.only(left:10.0),
                              fillColor: Colors.white,
                              //labelText: 'Username or Email',
                              hintText: 'Last Name',
                              hintStyle: TextStyle(
                                  color: Colors.grey, fontSize: 20.0),
                              labelStyle: TextStyle(
                                  color: Colors.grey, fontSize: 20.0),

                            ),
                            onChanged: (value) {
                              formDataMyDetails.last_name = value;
                            },
                          )),




                      SizedBox(
                        height: 50.0,
                        child:Container(
                        decoration: new BoxDecoration(
                            color: Colors.white,
                            border: Border.all(color: Colors.grey,width:1.0),
                            borderRadius: BorderRadius.all(Radius.circular(4.0))
                          //)
                             ),
                        child: RaisedButton(
                          color: Colors.white,

                          onPressed: () => _selectDate(context),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            // Replace with a Row for horizontal icon + text
                            children: <Widget>[
                              Text(
                                  selectedDateDisplay != ''
                                      ? selectedDateDisplay
                                      : 'Date Of Birth',
                                  style: TextStyle(
                                      color: Colors.grey, fontSize: 20.0)),
                              Icon(Icons.calendar_today),
                            ],
                          ),
                        )),
                      ),
                  SizedBox(
                      height: 15.0,
                  ),
                      SizedBox(
                          height: 50.0,
                          child:  Container(
                      decoration: new BoxDecoration(
                      color: Colors.white,
                          border: Border.all(color: Colors.grey,width:1.0),
                          borderRadius: BorderRadius.all(Radius.circular(4.0))
                        //)
                      ),
                          child:new Row(
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: <Widget>[

                          new Radio(
                            value: 'male',
                            groupValue: _genderValue,
                            onChanged: (String value) {
                              setState(() {
                                //formDataMyDetails.agree = newValue;
                                _genderValue = value;
                              });
                            },
                          ),
                          new Text(
                            'Male',
                            style: new TextStyle(fontSize: 20.0),
                          ),
                          new Radio(
                            value: 'female',
                            groupValue: _genderValue,
                            onChanged: (String value) {
                              setState(() {
                                //formDataMyDetails.agree = newValue;
                                _genderValue = value;
                              });
                            },
                          ),
                          new Text(
                            'Female',
                            style: new TextStyle(fontSize: 20.0),
                          ),
                        ],
                      ))),
                    SizedBox(
                      height: 15.0,
                    ),
                      SizedBox(
                          height: 50.0,
                          width: MediaQuery.of(context).size.width,
                          child: Container(
                              decoration: new BoxDecoration(
                                  color: Colors.white,
                                  border: Border.all(color: Colors.grey,width:1.0),
                                  borderRadius: BorderRadius.all(Radius.circular(4.0))
                                //)
                              ),
                              child: Padding(
                                padding: EdgeInsets.only(left: 5.0),
                                child: DropdownButton<Item>(
                                  isExpanded: true,
                                  hint: Text("Nationality",
                                      style: TextStyle(
                                          color: Colors.grey, fontSize: 20.0)),
                                  value: selectedCountry,
                                  onChanged: (Item Value) {
                                    setState(() {
                                      //formDataMyDetails.agree = newValue;
                                      selectedCountry = Value;
                                    });
                                  },
                                  items: countries.map((Item country) {
                                    return DropdownMenuItem<Item>(
                                      value: country,
                                      child: Row(
                                        children: <Widget>[
                                          Container(
                                              color: Colors.white,
                                              child: Row(children: <Widget>[
                                                //user.icon,
                                                SizedBox(
                                                  width: 10,
                                                ),
                                                Text(
                                                  country.name,
                                                  style: TextStyle(
                                                      color: Colors.grey,
                                                      fontSize: 20.0),
                                                ),
                                              ]))
                                        ],
                                      ),
                                    );
                                  }).toList(),
                                ),
                              ))),

                      /* SizedBox(
                          width: double.infinity,
                          height: 35,
                          child: RaisedButton(
                              shape: RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(18.0),
                                  side: BorderSide(color: Colors.green)),
                              color: Colors.green,
                              child: Text(
                                'Save',
                                style: TextStyle(color: Colors.white),
                              ),
                              onPressed: () {
                                print('hello');
                                showDialog(
                                  context: context,
                                  child: AlertDialog(
                                    title: Text(json
                                        .encode(formDataMyDetails.toJson())),
                                    actions: [
                                      FlatButton(
                                        child: Text('OK'),
                                        onPressed: () =>
                                            Navigator.of(context).pop(),
                                      ),
                                    ],
                                  ),
                                );
                              }))*/
                    ]

                ),
              ),
            ),
          ),
    );
  }
}
