import 'dart:convert';
import 'dart:ffi';

import 'package:http/http.dart' as http;
import 'package:flutter/material.dart';
import 'package:json_annotation/json_annotation.dart';
import 'splashscreen.dart' as splash;
import 'preference.dart' as preference;

FormDataHorse _$FormDataHorseFromJson(Map<String, dynamic> json) {
  return FormDataHorse(
    name: json['name'] as String,
    breed: json['breed'] as String,
    price: json['price'] as String,
    picture: json['picture'] as String,
  );
}

Map<String, dynamic> _$FormDataHorseToJson(FormDataHorse instance) =>
    <String, dynamic>{
      'name': instance.name,
      'breed': instance.breed,
      'price': instance.price,
      'picture': instance.picture
    };

@JsonSerializable()
class FormDataHorse {
  String name;
  String breed;
  String price;
  String picture;

  FormDataHorse({this.name, this.breed, this.price, this.picture});

  factory FormDataHorse.fromJson(Map<String, dynamic> json) =>
      _$FormDataHorseFromJson(json);

  Map<String, dynamic> toJson() => _$FormDataHorseToJson(this);
}

class HorseHttp extends StatefulWidget {
  final http.Client httpClient;

  HorseHttp({
    this.httpClient,
  });

  @override
  AddHorseRoute createState() => AddHorseRoute();
}

class Item {
  const Item(this.name, this.icon);
  final String name;
  final Icon icon;
}

Item selectedCategory;
List<Item> categories = <Item>[
  const Item(
      'Flat Race',
      Icon(
        Icons.check_box,
        color: const Color(0xFF167F67),
      )),
  const Item(
      'Endurance',
      Icon(
        Icons.check_box,
        color: const Color(0xFF167F67),
      )),
  const Item(
      'Show Horses',
      Icon(
        Icons.check_box,
        color: const Color(0xFF167F67),
      )),
];
Item selectedBreed;
List<Item> breeds = <Item>[
  const Item(
      'Arabian',
      Icon(
        Icons.check_box,
        color: const Color(0xFF167F67),
      )),
  const Item(
      'Anglo Arabian',
      Icon(
        Icons.check_box,
        color: const Color(0xFF167F67),
      )),
  const Item(
      'Other',
      Icon(
        Icons.check_box,
        color: const Color(0xFF167F67),
      )),
];
Item selectedCity;
List<Item> cities = <Item>[
  const Item(
      'All The UAE',
      Icon(
        Icons.check_box,
        color: const Color(0xFF167F67),
      )),
  const Item(
      'Abu Dhabi',
      Icon(
        Icons.check_box,
        color: const Color(0xFF167F67),
      )),
  const Item(
      'Dubai',
      Icon(
        Icons.check_box,
        color: const Color(0xFF167F67),
      )),
];

class AddHorseRoute extends State<HorseHttp> {
  FormDataHorse formDataHorse = FormDataHorse();
  int _value = 1;
  bool _throwShotAway = true;
  bool _radioValue1 = true;
  Item selectedUser;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Add Your Horse"),
        /* actions: <Widget>[
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
                  child: new Container(
            margin: EdgeInsets.only(top: 0),
            padding:
                EdgeInsets.only(left: 40.0, right: 40.0, top: 0, bottom: 15),
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
                      /* Center(
                          child: Text(
                        'Add Your Horse',
                        textAlign: TextAlign.center,
                        style: TextStyle(color: Colors.grey, fontSize: 20.0),
                      )),*/
                      SizedBox(
                          child: new Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: <Widget>[
                          new Radio(
                            value: false,
                            groupValue: _radioValue1,
                            onChanged: (bool value) {
                              setState(() {
                                //formDataSignup.agree = newValue;
                                _radioValue1 = value;
                              });
                            },
                          ),
                          new Text(
                            'Male',
                            style: new TextStyle(fontSize: 16.0),
                          ),
                          new Radio(
                            value: true,
                            groupValue: _radioValue1,
                            onChanged: (bool value) {
                              setState(() {
                                //formDataSignup.agree = newValue;
                                _radioValue1 = value;
                              });
                            },
                          ),
                          new Text(
                            'Female',
                            style: new TextStyle(fontSize: 16.0),
                          ),
                        ],
                      )),
                      SizedBox(
                          height: 40.0,
                          child: TextFormField(
                            decoration: InputDecoration(
                              contentPadding: EdgeInsets.only(left: 20.0),
                              fillColor: Colors.white,
                              //prefixIcon: Icon(Icons.attach_money_sharp),
                              filled: true,
                              labelText: 'Age',
                            ),
                            onChanged: (String value) {
                              formDataHorse.price = value;
                            },
                          )),
                      SizedBox(
                          height: 40.0,
                          width: MediaQuery.of(context).size.width,
                          child: Container(
                              color: Colors.white,
                              child: Padding(
                                padding: EdgeInsets.only(left: 20.0),
                                child: DropdownButton<Item>(
                                  isExpanded: true,
                                  hint: Text("Category"),
                                  value: selectedCategory,
                                  onChanged: (Item Value) {
                                    setState(() {
                                      //formDataSignup.agree = newValue;
                                      selectedCategory = Value;
                                    });
                                  },
                                  items: categories.map((Item user) {
                                    return DropdownMenuItem<Item>(
                                      value: user,
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
                                                  user.name,
                                                  style: TextStyle(
                                                      color: Colors.black),
                                                ),
                                              ]))
                                        ],
                                      ),
                                    );
                                  }).toList(),
                                ),
                              ))),
                      SizedBox(
                          height: 40.0,
                          width: MediaQuery.of(context).size.width,
                          child: Container(
                              color: Colors.white,
                              child: Padding(
                                padding: EdgeInsets.only(left: 20.0),
                                child: DropdownButton<Item>(
                                  isExpanded: true,
                                  hint: Text("Breed"),
                                  value: selectedBreed,
                                  onChanged: (Item Value) {
                                    setState(() {
                                      //formDataSignup.agree = newValue;
                                      selectedBreed = Value;
                                    });
                                  },
                                  items: breeds.map((Item user) {
                                    return DropdownMenuItem<Item>(
                                      value: user,
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
                                                  user.name,
                                                  style: TextStyle(
                                                      color: Colors.black),
                                                ),
                                              ]))
                                        ],
                                      ),
                                    );
                                  }).toList(),
                                ),
                              ))),
                      SizedBox(
                          height: 40.0,
                          width: MediaQuery.of(context).size.width,
                          child: Container(
                              color: Colors.white,
                              child: Padding(
                                padding: EdgeInsets.only(left: 20.0),
                                child: DropdownButton<Item>(
                                  isExpanded: true,
                                  hint: Text("City"),
                                  value: selectedCity,
                                  onChanged: (Item Value) {
                                    setState(() {
                                      //formDataSignup.agree = newValue;
                                      selectedCity = Value;
                                    });
                                  },
                                  items: cities.map((Item user) {
                                    return DropdownMenuItem<Item>(
                                      value: user,
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
                                                  user.name,
                                                  style: TextStyle(
                                                      color: Colors.black),
                                                ),
                                              ]))
                                        ],
                                      ),
                                    );
                                  }).toList(),
                                ),
                              ))),
                      SizedBox(
                          height: 40.0,
                          child: TextFormField(
                            decoration: InputDecoration(
                              contentPadding: EdgeInsets.all(0),
                              fillColor: Colors.white,
                              prefixIcon: Icon(Icons.attach_money_sharp),
                              filled: true,
                              hintText: 'Price',
                              labelText: 'Price',
                            ),
                            onChanged: (value) {
                              formDataHorse.price = value;
                            },
                          )),
                      SizedBox(
                          height: 40.0,
                          child: TextFormField(
                            decoration: InputDecoration(
                              contentPadding: EdgeInsets.all(0),
                              fillColor: Colors.white,
                              prefixIcon: Icon(Icons.add_a_photo_sharp),
                              filled: true,
                              labelText: 'Picture',
                            ),
                            obscureText: true,
                            onChanged: (value) {
                              formDataHorse.picture = value;
                            },
                          )),
                      SizedBox(
                          width: double.infinity,
                          height: 35,
                          child: RaisedButton(
                              shape: RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(18.0),
                                  side: BorderSide(color: Colors.green)),
                              color: Colors.green,
                              child: Text(
                                'Add',
                                style: TextStyle(color: Colors.white),
                              ),
                              onPressed: () {
                                print('hello');
                                showDialog<void>(
                                  context: context,
                                  child: AlertDialog(
                                    title: Text(
                                        json.encode(formDataHorse.toJson())),
                                    actions: [
                                      FlatButton(
                                        child: Text('OK'),
                                        onPressed: () =>
                                            Navigator.of(context).pop(),
                                      ),
                                    ],
                                  ),
                                );
                              })),
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

class Horse {
  final String title;
  final String description;
  final String breed;
  final String price;
  final String picture;
  final String year;

  Horse(this.title, this.description, this.breed, this.price, this.picture,
      this.year);
}

class HorseListing extends StatefulWidget {
  @override
  HorseListingRoute createState() => HorseListingRoute();
}

final horses = [
  Horse('F', 'A description of what needs to be done for Todo ',
      'Quarter Horse', '9,000 aed', 'assets/images/horse1.jpg', '2016'),
  Horse('M', 'A description of what needs to be done for Todo ', 'Endurance',
      '35,000 aed', 'assets/images/horse2.jpg', '2012'),
  Horse('M', 'A description of what needs to be done for Todo ', 'Show Horse',
      '20,000 aed', 'assets/images/horse3.jpg', '2019'),
  Horse('F', 'A description of what needs to be done for Todo ',
      'Quarter Horse', '15,000 aed', 'assets/images/horse4.jpg', '2020'),
  Horse('F', 'A description of what needs to be done for Todo ',
      'Arabian Horse', '8,000 aed', 'assets/images/horse5.jpg', '2017'),
  Horse('M', 'A description of what needs to be done for Todo ', 'Endurance',
      '19,000 aed', 'assets/images/horse6.jpg', '2016'),
];

class HorseListingRoute extends State<HorseListing> {
  var priceFrom = new TextEditingController();
  var priceTo = new TextEditingController();
  var ageFrom = new TextEditingController();
  var ageTo = new TextEditingController();

  Choice _selectedChoice = choices[0]; // The app's "state".

  void _select(Choice choice) {
    // Causes the app to rebuild with the new _selectedChoice.
    setState(() {
      _selectedChoice = choice;
    });
  }

  double _pricevalue = 5.0;
  String priceLabel = 'Price \(\$\)';
  RangeValues _currentRangeValues = const RangeValues(20, 60);
  String ageLabel = 'Age';
  RangeValues _currentAgeRangeValues = const RangeValues(20, 60);
  final List<String> list = List.generate(10, (index) => "Horse $index");
  final GlobalKey<ScaffoldState> _scaffoldKey = new GlobalKey<ScaffoldState>();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        endDrawer: Container(
            width: MediaQuery.of(context).size.width * 0.75,
            padding: EdgeInsets.all(0),
            child: Drawer(
                // Add a ListView to the drawer. This ensures the user can scroll
                // through the options in the drawer if there isn't enough vertical
                // space to fit everything.
                child: ListView(
              // Important: Remove any padding from the ListView.
              padding: EdgeInsets.all(10.0),
              children: <Widget>[
                Wrap(runSpacing: 10, children: <Widget>[
                  new SizedBox(
                      height: 50.0,
                      child: DrawerHeader(
                        margin: EdgeInsets.all(0.0),
                        padding: EdgeInsets.only(left: 10),
                        child: Text('Filter Horses',
                            style:
                                TextStyle(color: Colors.black, fontSize: 16.0)),
                        decoration: BoxDecoration(
                          color: Colors.white,
                        ),
                      )),
                  SizedBox(
                      height: 40.0,
                      width: MediaQuery.of(context).size.width,
                      child: Container(
                          color: Colors.white,
                          child: Padding(
                            padding: EdgeInsets.only(left: 20.0),
                            child: DropdownButton<Item>(
                              isExpanded: true,
                              hint: Text("Category"),
                              value: selectedCategory,
                              onChanged: (Item Value) {
                                //formDataSignup.agree = newValue;
                                print(Value);
                                setState(() {
                                  //formDataSignup.agree = newValue;
                                  selectedCategory = Value;
                                });
                              },
                              items: categories.map((Item user) {
                                return DropdownMenuItem<Item>(
                                  value: user,
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
                                              user.name,
                                              style: TextStyle(
                                                  color: Colors.black),
                                            ),
                                          ]))
                                    ],
                                  ),
                                );
                              }).toList(),
                            ),
                          ))),
                  SizedBox(
                      height: 40.0,
                      width: MediaQuery.of(context).size.width,
                      child: Container(
                          color: Colors.white,
                          child: Padding(
                            padding: EdgeInsets.only(left: 20.0),
                            child: DropdownButton<Item>(
                              isExpanded: true,
                              hint: Text("Breed"),
                              value: selectedBreed,
                              onChanged: (Item Value) {
                                print(Value);
                                setState(() {
                                  //formDataSignup.agree = newValue;
                                  selectedBreed = Value;
                                });
                              },
                              items: breeds.map((Item user) {
                                return DropdownMenuItem<Item>(
                                  value: user,
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
                                              user.name,
                                              style: TextStyle(
                                                  color: Colors.black),
                                            ),
                                          ]))
                                    ],
                                  ),
                                );
                              }).toList(),
                            ),
                          ))),
                  SizedBox(
                      height: 40.0,
                      width: MediaQuery.of(context).size.width,
                      child: Container(
                          color: Colors.white,
                          child: Padding(
                            padding: EdgeInsets.only(left: 20.0),
                            child: DropdownButton<Item>(
                              isExpanded: true,
                              hint: Text("City"),
                              value: selectedCity,
                              onChanged: (Item Value) {
                                print(Value);
                                setState(() {
                                  //formDataSignup.agree = newValue;
                                  selectedCity = Value;
                                });
                              },
                              items: cities.map((Item user) {
                                return DropdownMenuItem<Item>(
                                  value: user,
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
                                              user.name,
                                              style: TextStyle(
                                                  color: Colors.black),
                                            ),
                                          ]))
                                    ],
                                  ),
                                );
                              }).toList(),
                            ),
                          ))),
                  SizedBox(
                      height: 20.0,
                      child: Padding(
                        padding: EdgeInsets.only(left: 20.0),
                        child: Text(priceLabel),
                      )),
                  SizedBox(
                      height: 40.0,
                      child: RangeSlider(
                        values: _currentRangeValues,
                        min: 0,
                        max: 100,
                        divisions: 10,
                        labels: RangeLabels(
                          _currentRangeValues.start.round().toString(),
                          _currentRangeValues.end.round().toString(),
                        ),
                        onChanged: (RangeValues values) {
                          setState(() {
                            priceFrom.text =
                                _currentRangeValues.start.round().toString();
                            priceTo.text =
                                _currentRangeValues.end.round().toString();
                            _currentRangeValues = values;
                            priceLabel = 'Price \(\$\) ' +
                                _currentRangeValues.start.round().toString() +
                                '-' +
                                _currentRangeValues.end.round().toString();
                          });
                        },
                      )),
                  /* SizedBox(
                      height: 40.0,
                      child: TextFormField(
                        controller: priceFrom,
                        decoration: InputDecoration(
                          contentPadding: EdgeInsets.all(0),
                          fillColor: Colors.white,
                          prefixIcon: Icon(Icons.attach_money_sharp),
                          filled: true,
                          labelText: 'From',
                        ),
                        onChanged: (value) {
                          //formDataHorse.price = value;
                        },
                      )),
                  SizedBox(
                      height: 40.0,
                      child: TextFormField(
                        controller: priceTo,
                        decoration: InputDecoration(
                          contentPadding: EdgeInsets.all(0),
                          fillColor: Colors.white,
                          prefixIcon: Icon(Icons.attach_money_sharp),
                          filled: true,
                          labelText: 'To',
                        ),
                        onChanged: (value) {
                          //formDataHorse.price = value;
                        },
                      )),*/
                  SizedBox(
                      height: 20.0,
                      child: Padding(
                        padding: EdgeInsets.only(left: 20.0),
                        child: Text(ageLabel),
                      )),
                  SizedBox(
                      height: 40.0,
                      child: RangeSlider(
                        values: _currentAgeRangeValues,
                        min: 0,
                        max: 100,
                        divisions: 10,
                        labels: RangeLabels(
                          _currentAgeRangeValues.start.round().toString(),
                          _currentAgeRangeValues.end.round().toString(),
                        ),
                        onChanged: (RangeValues values) {
                          setState(() {
                            ageFrom.text =
                                _currentAgeRangeValues.start.round().toString();
                            ageTo.text =
                                _currentAgeRangeValues.end.round().toString();
                            _currentAgeRangeValues = values;
                            ageLabel = 'Age ' +
                                _currentAgeRangeValues.start
                                    .round()
                                    .toString() +
                                '-' +
                                _currentAgeRangeValues.end.round().toString();
                          });
                        },
                      )),
                  /* SizedBox(
                      height: 40.0,
                      child: TextFormField(
                        controller: ageFrom,
                        decoration: InputDecoration(
                          contentPadding: EdgeInsets.all(0),
                          fillColor: Colors.white,
                          //prefixIcon: Icon(Icons.attach_money_sharp),
                          filled: true,
                          labelText: 'From',
                        ),
                        onChanged: (value) {
                          //formDataHorse.price = value;
                        },
                      )),
                  SizedBox(
                      height: 40.0,
                      child: TextFormField(
                        controller: ageTo,
                        decoration: InputDecoration(
                          contentPadding: EdgeInsets.all(0),
                          fillColor: Colors.white,
                          // prefixIcon: Icon(Icons.attach_money_sharp),
                          filled: true,
                          labelText: 'To',
                        ),
                        onChanged: (value) {
                          //formDataHorse.price = value;
                        },
                      )),*/
                  SizedBox(
                      width: double.infinity,
                      height: 40,
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
                            _scaffoldKey.currentState.openDrawer();
                            print('hello');
                          }))
                ])
              ],
            ))),
        key: _scaffoldKey,
        appBar: AppBar(
          title: Text('Horses'),
          automaticallyImplyLeading: true,
          leading: IconButton(
            icon: Icon(Icons.arrow_back),
            onPressed: () => Navigator.pop(context, false),
            //onPressed:() => exit(0),
          ),
          actions: <Widget>[
            PopupMenuButton<Choice>(
              icon: Icon(Icons.sort),
              onSelected: _select,
              itemBuilder: (BuildContext context) {
                return choices.map((Choice choice) {
                  return PopupMenuItem<Choice>(
                      value: choice,
                      // child: ChoiceCard(choice: choice),
                      child: Text(choice.title));
                }).toList();
              },
            ),
            IconButton(
              icon: Icon(
                Icons.filter_alt,
                color: Colors.black,
              ),
              onPressed: () {
                _scaffoldKey.currentState.openEndDrawer();
              },
            ),
            IconButton(
              icon: Icon(
                Icons.search,
                color: Colors.black,
              ),
              onPressed: () {
                showSearch<void>(context: context, delegate: Search(horses));
              },
            )
          ],
        ),
        floatingActionButton: FloatingActionButton(
          foregroundColor: Colors.white,
          backgroundColor: Colors.green,
          child: Icon(Icons.add),
          onPressed: () {
            Navigator.push(
              context,
              MaterialPageRoute<void>(builder: (context) => HorseHttp()),
            );
            print('Clicked');
          },
        ),
        body: new Container(
            child: ListView.builder(
          itemCount: horses.length,
          itemBuilder: (context, index) {
            return new GestureDetector(
              child: new Card(
                  elevation: 5.0,
                  child: new Container(
                      //alignment: Alignment.center,
                      child: Wrap(children: [
                    Column(
                      children: <Widget>[
                        HorseItemSlide(),
                        Padding(
                            padding: EdgeInsets.only(
                                left: 10.0, right: 10.0, top: 0.0),
                            child: Row(
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceBetween,
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(
                                    'AED ' + horses[index].price,
                                    style: TextStyle(
                                        color: Colors.green[700],
                                        fontWeight: FontWeight.bold,
                                        fontSize: 16.0),
                                  ),
                                  TextRich('Year: ', horses[index].year),
                                ])),
                        Padding(
                            padding: EdgeInsets.only(left: 10.0, right: 10.0),
                            child: Row(
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceBetween,
                                crossAxisAlignment: CrossAxisAlignment.center,
                                children: [
                                  TextRich('Cat: ', horses[index].breed),
                                  TextRich('Gender: ', horses[index].title),
                                ])),
                        Padding(
                            padding: EdgeInsets.only(
                                top: 10.0,
                                left: 10.0,
                                right: 10.0,
                                bottom: 10.0),
                            child: Row(
                                mainAxisAlignment: MainAxisAlignment.end,
                                crossAxisAlignment: CrossAxisAlignment.center,
                                children: [
                                  RaisedButton(
                                      color: Colors.white,
                                      shape: RoundedRectangleBorder(
                                          borderRadius: BorderRadius.all(
                                              Radius.circular(16.0))),
                                      onPressed: () {},
                                      child: Row(
                                          mainAxisAlignment:
                                              MainAxisAlignment.center,
                                          children: [
                                            Icon(Icons.phone),
                                            Text('Call')
                                          ])),
                                  Text(' '),
                                  RaisedButton(
                                      color: Colors.white,
                                      shape: RoundedRectangleBorder(
                                          borderRadius: BorderRadius.all(
                                              Radius.circular(16.0))),
                                      onPressed: () {},
                                      child: Row(
                                          mainAxisAlignment:
                                              MainAxisAlignment.center,
                                          children: [
                                            Icon(Icons.sms),
                                            Text('SMS')
                                          ])),
                                ]))
                      ],
                    )
                  ]))),
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute<void>(
                    builder: (context) => DetailScreen(horse: horses[index]),
                  ),
                );
              },
            );
          },
        )));
  }
}

class Choice {
  const Choice({this.title, this.icon});

  final String title;
  final IconData icon;
}

const List<Choice> choices = const <Choice>[
  const Choice(title: 'Price', icon: Icons.money),
  const Choice(title: 'Age', icon: Icons.sort_by_alpha),
  const Choice(title: 'Category', icon: Icons.crop_square),
  const Choice(title: 'Breed', icon: Icons.sort),
];

class ChoiceCard extends StatelessWidget {
  const ChoiceCard({Key key, this.choice}) : super(key: key);

  final Choice choice;

  @override
  Widget build(BuildContext context) {
    final TextStyle textStyle = Theme.of(context).textTheme.display1;
    return Card(
      color: Colors.white,
      child: Center(
        child: Row(
          mainAxisAlignment: MainAxisAlignment.start,
          children: <Widget>[
            //Icon(choice.icon, color: textStyle.color),
            Text(choice.title),
          ],
        ),
      ),
    );
  }
}

class Search extends SearchDelegate<void> {
  @override
  List<Widget> buildActions(BuildContext context) {
    return <Widget>[
      IconButton(
        icon: Icon(Icons.close),
        onPressed: () {
          query = "";
        },
      ),
    ];
  }

  @override
  Widget buildLeading(BuildContext context) {
    return IconButton(
      icon: Icon(Icons.arrow_back),
      onPressed: () {
        Navigator.pop(context);
      },
    );
  }

  Horse selectedResult;

  @override
  Widget buildResults(BuildContext context) {
    return Container(
      child: Center(
        child: Text(selectedResult.title),
      ),
    );
  }

  final List<Horse> listExample;
  Search(this.listExample);

  List<Horse> recentList = [];

  @override
  Widget buildSuggestions(BuildContext context) {
    List<Horse> suggestionList = [];
    query.isEmpty
        ? suggestionList = recentList //In the true case
        : suggestionList.addAll(listExample.where(
            // In the false case
            (element) => element.title.contains(query),
          ));

    return ListView.builder(
      itemCount: suggestionList.length,
      itemBuilder: (context, index) {
        return ListTile(
          title: Text(
            suggestionList[index].title,
          ),
          leading: query.isEmpty ? Icon(Icons.access_time) : SizedBox(),
          onTap: () {
            selectedResult = suggestionList[index];
            Navigator.push(
              context,
              MaterialPageRoute<void>(
                builder: (context) =>
                    DetailScreen(horse: suggestionList[index]),
              ),
            );
            //showResults(context);
          },
        );
      },
    );
  }
}

class DetailScreen extends StatelessWidget {
  // Declare a field that holds the Todo.
  final Horse horse;

  // In the constructor, require a Todo.
  DetailScreen({Key key, @required this.horse}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // Use the Todo to create the UI.
    return Scaffold(
      appBar: AppBar(title: Text(horse.title), actions: <Widget>[
        IconButton(
          icon: Icon(
            Icons.phone,
            color: Colors.black,
          ),
        ),
        IconButton(
          icon: Icon(
            Icons.sms,
            color: Colors.black,
          ),
        )
      ]),
      body: Scrollbar(
        child: SingleChildScrollView(
            scrollDirection: Axis.vertical,
            child: Container(
                padding: EdgeInsets.all(0.0),
                child: Column(crossAxisAlignment: CrossAxisAlignment.start,
                    //mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                      HorseItemSlide(),
                      Container(
                          //height: MediaQuery.of(context).size.height - 200.0,
                          child: Padding(
                        padding:
                            EdgeInsets.only(top: 10.0, left: 20.0, right: 20.0),
                        child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: <Widget>[
                              Row(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  children: [
                                    Icon(Icons.check, color: Colors.green),
                                    Text(horse.price,
                                        textAlign: TextAlign.left,
                                        style: TextStyle(
                                            color: Colors.black,
                                            fontSize: 20.0)),
                                  ]),
                              Divider(),
                              Row(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  children: [
                                    Icon(Icons.check, color: Colors.green),
                                    Text(horse.breed,
                                        style: TextStyle(
                                            color: Colors.black,
                                            fontSize: 20.0)),
                                  ]),
                              Divider(),
                              Row(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  children: [
                                    Icon(Icons.check, color: Colors.green),
                                    Text(horse.year,
                                        style: TextStyle(
                                            color: Colors.black,
                                            fontSize: 20.0)),
                                  ]),
                              Divider(),
                              Text('Description provide by the horse seller',
                                  style: TextStyle(
                                      color: Colors.black, fontSize: 16.0)),
                              Divider(),
                              Padding(
                                  padding: EdgeInsets.only(
                                      top: 10.0,
                                      left: 10.0,
                                      right: 10.0,
                                      bottom: 10.0),
                                  child: Row(
                                      mainAxisAlignment: MainAxisAlignment.end,
                                      crossAxisAlignment:
                                          CrossAxisAlignment.center,
                                      children: [
                                        RaisedButton(
                                            color: Colors.white,
                                            shape: RoundedRectangleBorder(
                                                borderRadius: BorderRadius.all(
                                                    Radius.circular(16.0))),
                                            onPressed: () {},
                                            child: Row(
                                                mainAxisAlignment:
                                                    MainAxisAlignment.center,
                                                children: [
                                                  Icon(Icons.phone),
                                                  Text('Call')
                                                ])),
                                        Text(' '),
                                        RaisedButton(
                                            color: Colors.white,
                                            shape: RoundedRectangleBorder(
                                                borderRadius: BorderRadius.all(
                                                    Radius.circular(16.0))),
                                            onPressed: () {},
                                            child: Row(
                                                mainAxisAlignment:
                                                    MainAxisAlignment.center,
                                                children: [
                                                  Icon(Icons.sms),
                                                  Text('SMS')
                                                ])),
                                      ]))
                            ]),
                      ))
                    ]))),
      ),
    );
  }
}

class TitleItem extends StatelessWidget {
  TitleItem(this.title);
  final String title;
  @override
  Widget build(BuildContext context) {
    return Padding(
        padding: EdgeInsets.all(15.0),
        child:
            Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
          Text(title, style: TextStyle(fontSize: 15.0)),
          Icon(Icons.arrow_right),
        ]));
  }
}

class HorseItemSlide extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.symmetric(vertical: 0.0, horizontal: 0.0),
      height: 175.0,
      constraints: BoxConstraints(minHeight: 175.0, maxHeight: 400.0),
      child: ListView(
        scrollDirection: Axis.horizontal,
        children: <Widget>[
          SingleHorseImage('1'),
          SingleHorseImage('2'),
          SingleHorseImage('3'),
          SingleHorseImage('4'),
          SingleHorseImage('5'),
        ],
      ),
    );
  }
}

class HorseItem extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.symmetric(vertical: 10.0, horizontal: 5.0),
      height: 200.0,
      constraints: BoxConstraints(minHeight: 200.0, maxHeight: 400.0),
      child: ListView(
        scrollDirection: Axis.horizontal,
        children: <Widget>[
          SingleHorse('1', '9,000', 'Endurance', 'F', '10'),
          SingleHorse('2', '12,000', 'Show Horse', 'M', '18'),
          SingleHorse('3', '20,000', 'Endurance', 'M', '18'),
          SingleHorse('4', '18,000', 'Show Horse', 'F', '3'),
          SingleHorse('5', '72,000', 'Show Horse', 'M', '18'),
          SingleHorse('1', '9,000', 'Endurance', 'F', '10'),
          SingleHorse('2', '12,000', 'Show Horse', 'M', '18'),
          SingleHorse('3', '20,000', 'Endurance', 'M', '18'),
          SingleHorse('4', '18,000', 'Show Horse', 'F', '3'),
          SingleHorse('5', '72,000', 'Show Horse', 'M', '18'),
          Container(
            width: MediaQuery.of(context).size.width * 0.6,
            child: FlatButton(
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute<void>(
                        builder: (context) => HorseListing()),
                  );
                },
                color: Colors.white,
                padding: EdgeInsets.all(10.0),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  // Replace with a Row for horizontal icon + text
                  children: <Widget>[
                    Text("View All",
                        style: TextStyle(fontSize: 15.0, color: Colors.black)),
                    Icon(Icons.arrow_right_alt),
                  ],
                )),
          ),
        ],
      ),
    );
  }
}

class SingleHorse extends StatelessWidget {
  SingleHorse(this.image_id, this.price, this.breed, this.gender, this.age);
  final String image_id, price, breed, gender, age;

  @override
  Widget build(BuildContext context) {
    return Container(
        constraints: BoxConstraints(minWidth: 150, maxWidth: 200),
        margin: EdgeInsets.symmetric(vertical: 10.0, horizontal: 5.0),
        width: MediaQuery.of(context).size.width * 0.6,
        child: new GestureDetector(
            child: Container(
                padding: EdgeInsets.all(0.0),
                decoration: BoxDecoration(
                  color: Colors.white,
                  boxShadow: <BoxShadow>[
                    BoxShadow(
                      color: Colors.grey[400],
                      offset: Offset(1.0, 1.0),
                      blurRadius: 1.0,
                      spreadRadius: 1.0,
                    )
                  ],
                  borderRadius: BorderRadius.only(
                    topLeft: Radius.circular(5.0),
                    bottomLeft: Radius.circular(5.0),
                    bottomRight: Radius.circular(5.0),
                    topRight: Radius.circular(5.01), // FLUTTER BUG FIX
                  ),
                ),
                child: Column(children: [
                  ClipRRect(
                      borderRadius: BorderRadius.only(
                        topLeft: Radius.circular(5.0),
                        bottomLeft: Radius.circular(0.0),
                        bottomRight: Radius.circular(0.0),
                        topRight: Radius.circular(5.01), // FLUTTER BUG FIX
                      ),
                      child: new Image.asset(
                          'assets/images/horse' + image_id + '.jpg',
                          width: 200.0)),
                  Container(
                      padding: EdgeInsets.only(left: 10.0, right: 10.0),
                      child: Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: [
                            Padding(
                                padding: EdgeInsets.only(top: 10.0),
                                child: Text(
                                  'AED ' + price,
                                  style: TextStyle(
                                      color: Colors.green[700],
                                      fontWeight: FontWeight.bold,
                                      fontSize: 16.0),
                                )),
                            Padding(
                                padding: EdgeInsets.only(top: 10.0),
                                child: TextRich('Age: ', age)),
                          ])),
                  Container(
                      padding: EdgeInsets.only(left: 10.0, right: 10.0),
                      child: Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: [
                            TextRich('Cat: ', breed),
                            TextRich('Gender: ', gender),
                          ]))
                ])),
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute<void>(
                  builder: (context) =>
                      DetailScreen(horse: horses[int.parse(image_id)]),
                ),
              );
            }));
  }
}

class SingleHorseImage extends StatelessWidget {
  SingleHorseImage(this.image_id);
  final String image_id;
  @override
  Widget build(BuildContext context) {
    return Container(
        constraints: BoxConstraints(minWidth: 150, maxWidth: 250),
        margin: EdgeInsets.symmetric(vertical: 0.0, horizontal: 0.0),
        width: MediaQuery.of(context).size.width * 0.8,
        child: Column(children: [
          new Image.asset(
            'assets/images/horse' + image_id + '.jpg',
            fit: BoxFit.fitWidth,
          ),
        ]));
  }
}

class TextRich extends StatelessWidget {
  TextRich(this.label, this.text);
  final String text, label;
  @override
  Widget build(BuildContext context) {
    return RichText(
      text: TextSpan(
        text: label,
        style: TextStyle(color: Colors.black),
        children: <TextSpan>[
          TextSpan(
            text: text,
            style: TextStyle(fontWeight: FontWeight.bold),
          ),
        ],
      ),
    );
  }
}
