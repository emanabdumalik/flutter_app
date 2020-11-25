import 'dart:convert';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import '../preference.dart' as preference;
import '../main.dart' as main;
import 'api.dart';
import '../globals.dart';

class MyDetailsHttp extends StatefulWidget {
  // MyDetailsHttp(this.user);
  @override
  MyDetailsRoute createState() => MyDetailsRoute();
}

class MyDetailsRoute extends State<MyDetailsHttp> {
  User formData = User();
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
        formData.date_of_birth = selectedDateDisplay;
      });
  }

  User user;

  @override
  void initState() {
    preference.MySharedPreferences.instance.getUserProfile().then((value) {
      user = value;
    });
    super.initState();
    setState(() {
      username.text = user.first_name;
      email.text = user.email;
      formData.first_name = user.first_name;
      formData.email = user.email;
    });
  }

  DataItem selectedCountry;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("My Details"),
        actions: <Widget>[
          FlatButton(
            textColor: Colors.black,
            onPressed: () {
              print(jsonEncode(formData));
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
            padding: EdgeInsets.only(left: 20.0, right: 20.0),
            child: Column(children: <Widget>[
              SizedBox(
                height: 20.0,
              ),
              SizedBox(
                  height: 20.0,
                  width: MediaQuery.of(context).size.width - 40.0,
                  child: Row(children: <Widget>[
                    GestureDetector(
                        onTap: () {},
                        child: new Image.asset(
                          'assets/images/introl-trailer-image.jpg',
                          width: 100.0,
                          height: 100.0,
                          fit: BoxFit.contain,
                        )),
                  ])),
              Text('Username'),
              SizedBox(
                  height: 60.0,
                  child: TextFormField(
                    readOnly: true,
                    controller: username,
                    style: TextStyle(fontSize: 20.0),
                    decoration: TextInputDeco('Username'),
                    onChanged: (value) {
                      setState(() {
                        formData.user_name = value;
                      });
                    },
                  )),
              Text('Email'),
              SizedBox(
                  height: 60.0,
                  child: TextFormField(
                    controller: email,
                    readOnly: true,
                    style: TextStyle(fontSize: 20.0),
                    decoration: TextInputDeco('Email'),
                    onChanged: (value) {
                      setState(() {
                        formData.email = value;
                      });
                    },
                  )),
              Text('Phone'),
              SizedBox(
                  height: 60.0,
                  child: TextFormField(
                      validator: (value) {
                        if (!value.isEmpty) {
                          setState(() {
                            formData.phone = value;
                          });
                        }

                        return null;
                      },
                      style: TextStyle(fontSize: 20.0),
                      decoration: TextInputDeco('Phone'),
                      keyboardType: TextInputType.number)),
              Text('Password'),
              SizedBox(
                  height: 60.0,
                  child: TextFormField(
                    style: TextStyle(fontSize: 20.0),
                    decoration: TextInputDeco('Password'),
                    keyboardType: TextInputType.number,
                    obscureText: true,
                  )),
              Text('First Name'),
              SizedBox(
                  height: 60.0,
                  child: Row(children: [
                    SizedBox(
                        height: 60.0,
                        width: MediaQuery.of(context).size.width - 40.0,
                        child: TextFormField(
                          validator: (value) {
                            if (!value.isEmpty) {
                              setState(() {
                                formData.first_name = value;
                              });
                            }

                            return null;
                          },
                          style: TextStyle(fontSize: 20.0),
                          decoration: TextInputDeco('First Name'),
                        ))
                  ])),
              Text('Last Name'),
              SizedBox(
                  height: 60.0,
                  child: TextFormField(
                    validator: (value) {
                      if (!value.isEmpty) {
                        setState(() {
                          formData.last_name = value;
                        });
                      }

                      return null;
                    },
                    style: TextStyle(fontSize: 20.0),
                    decoration: TextInputDeco('Last name'),
                  )),
              Text('Date of Birth'),
              SizedBox(
                height: 50.0,
                child: Container(
                    decoration: new BoxDecoration(
                        color: Colors.white,
                        border: Border.all(color: Colors.grey, width: 1.0),
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
              Text('Gender'),
              SizedBox(
                height: 15.0,
              ),
              SizedBox(
                  height: 50.0,
                  child: Container(
                      decoration: new BoxDecoration(
                          color: Colors.white,
                          border: Border.all(color: Colors.grey, width: 1.0),
                          borderRadius: BorderRadius.all(Radius.circular(4.0))
                          //)
                          ),
                      child: new Row(
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: <Widget>[
                          new Radio(
                            value: 'male',
                            groupValue: _genderValue,
                            onChanged: (String value) {
                              setState(() {
                                formData.gender = value;
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
                                formData.gender = value;
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
              Text('Nationality'),
              SizedBox(
                height: 15.0,
              ),
              SizedBox(
                  height: 50.0,
                  width: MediaQuery.of(context).size.width,
                  child: Container(
                      decoration: new BoxDecoration(
                          color: Colors.white,
                          border: Border.all(color: Colors.grey, width: 1.0),
                          borderRadius: BorderRadius.all(Radius.circular(4.0))
                          //)
                          ),
                      child: Padding(
                        padding: EdgeInsets.only(left: 5.0),
                        child: DropdownButton<DataItem>(
                          isExpanded: true,
                          hint: Text("Nationality",
                              style: TextStyle(
                                  color: Colors.grey, fontSize: 20.0)),
                          value: selectedCountry,
                          onChanged: (DataItem Value) {
                            setState(() {
                              //formData.agree = newValue;
                              selectedCountry = Value;
                              formData.nationality = Value.name;
                            });
                          },
                          items: NationalitySelection.map((DataItem country) {
                            return DropdownMenuItem<DataItem>(
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
            ]),
          ),
        ),
      ),
    );
  }
}
