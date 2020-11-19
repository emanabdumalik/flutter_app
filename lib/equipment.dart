import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:flutter/material.dart';
import 'package:json_annotation/json_annotation.dart';

FormDataHorseEquipment _$FormDataHorseEquipmentFromJson(
    Map<String, dynamic> json) {
  return FormDataHorseEquipment(
    condition: json['condition'] as String,
    type: json['type'] as String,
    price: json['price'] as String,
    picture: json['picture'] as String,
  );
}

Map<String, dynamic> _$FormDataHorseEquipmentToJson(
        FormDataHorseEquipment instance) =>
    <String, dynamic>{
      'type': instance.type,
      'condition': instance.condition,
      'price': instance.price,
      'picture': instance.picture
    };

@JsonSerializable()
class FormDataHorseEquipment {
  String condition;
  String type;
  String price;
  String picture;

  FormDataHorseEquipment({this.condition, this.type, this.price, this.picture});

  factory FormDataHorseEquipment.fromJson(Map<String, dynamic> json) =>
      _$FormDataHorseEquipmentFromJson(json);

  Map<String, dynamic> toJson() => _$FormDataHorseEquipmentToJson(this);
}

class HorseEquipmentHttp extends StatefulWidget {
  final http.Client httpClient;

  HorseEquipmentHttp({
    this.httpClient,
  });

  @override
  AddHorseEquipmentRoute createState() => AddHorseEquipmentRoute();
}

class Item {
  const Item(this.name, this.icon);
  final String name;
  final Icon icon;
}

Item selectedCategory;
List<Item> categories = <Item>[
  const Item(
      'Horse Trailer,',
      Icon(
        Icons.check_box,
        color: const Color(0xFF167F67),
      )),
  const Item(
      'Saddle',
      Icon(
        Icons.check_box,
        color: const Color(0xFF167F67),
      )),
  const Item(
      'Helmet',
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
      'Saddle',
      Icon(
        Icons.check_box,
        color: const Color(0xFF167F67),
      )),
  const Item(
      'Horse Trailer',
      Icon(
        Icons.check_box,
        color: const Color(0xFF167F67),
      )),
  const Item(
      'Helmet',
      Icon(
        Icons.check_box,
        color: const Color(0xFF167F67),
      )),
];

class AddHorseEquipmentRoute extends State<HorseEquipmentHttp> {
  FormDataHorseEquipment formDataHorseEquipment = FormDataHorseEquipment();
  int _value = 1;
  bool _throwShotAway = true;
  String _conditionValue = 'used';
  Item selectedUser;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Add Your Equipment"),
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
            color: Colors.lightBlue[50],
          ),
          child: Center(
              child: Form(
                  child: new Container(
            margin: EdgeInsets.only(top: 0),
            padding:
                EdgeInsets.only(left: 40.0, right: 40.0, top: 0, bottom: 15),
            width: MediaQuery.of(context).size.width * 1,
            decoration: new BoxDecoration(
                color: Colors.lightBlue[50],
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
                            value: 'new',
                            groupValue: _conditionValue,
                            onChanged: (String value) {
                              setState(() {
                                //formDataSignup.agree = newValue;
                                _conditionValue = value;
                              });
                            },
                          ),
                          new Text(
                            'New',
                            style: new TextStyle(fontSize: 16.0),
                          ),
                          new Radio(
                            value: 'Used',
                            groupValue: _conditionValue,
                            onChanged: (String value) {
                              setState(() {
                                //formDataSignup.agree = newValue;
                                _conditionValue = value;
                              });
                            },
                          ),
                          new Text(
                            'Used',
                            style: new TextStyle(fontSize: 16.0),
                          ),
                        ],
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
                                  hint: Text("Type"),
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
                              formDataHorseEquipment.price = value;
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
                              formDataHorseEquipment.picture = value;
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
                                    title: Text(json.encode(
                                        formDataHorseEquipment.toJson())),
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

class HorseEquipment {
  final String type;
  final String condition;
  final String price;
  final String image_id;

  HorseEquipment(this.image_id, this.price, this.type, this.condition);
}

class HorseEquipmentListing extends StatefulWidget {
  @override
  HorseEqipmentListingRoute createState() => HorseEqipmentListingRoute();
}

final horse_equipments = [
  HorseEquipment('1', '9,000', 'saddle', 'used'),
  HorseEquipment('1', '9,000', 'saddle', 'used'),
  HorseEquipment('1', '9,000', 'saddle', 'used'),
];

class HorseEqipmentListingRoute extends State<HorseEquipmentListing> {
  Choice _selectedChoice = choices[0]; // The app's "state".

  void _select(Choice choice) {
    // Causes the app to rebuild with the new _selectedChoice.
    setState(() {
      _selectedChoice = choice;
    });
  }

  var _conditionValue = 'new';
  double _pricevalue = 5.0;
  String priceLabel = 'Price \(\$\)';
  RangeValues _currentRangeValues = const RangeValues(20, 60);
  final List<String> list =
      List.generate(10, (index) => "Horse Equipment $index");
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
                        child: Text('Filter Equipments',
                            style:
                                TextStyle(color: Colors.black, fontSize: 16.0)),
                        decoration: BoxDecoration(
                          color: Colors.white,
                        ),
                      )),
                  SizedBox(
                      child: new Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                      new Radio(
                        value: 'new',
                        groupValue: _conditionValue,
                        onChanged: (String value) {
                          setState(() {
                            //formDataSignup.agree = newValue;
                            _conditionValue = value;
                          });
                        },
                      ),
                      new Text(
                        'New',
                        style: new TextStyle(fontSize: 16.0),
                      ),
                      new Radio(
                        value: 'Used',
                        groupValue: _conditionValue,
                        onChanged: (String value) {
                          setState(() {
                            //formDataSignup.agree = newValue;
                            _conditionValue = value;
                          });
                        },
                      ),
                      new Text(
                        'Used',
                        style: new TextStyle(fontSize: 16.0),
                      ),
                    ],
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
                              hint: Text("Type"),
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
                            _currentRangeValues = values;
                            priceLabel = 'Price \(\$\) ' +
                                _currentRangeValues.start.round().toString() +
                                '-' +
                                _currentRangeValues.end.round().toString();
                          });
                        },
                      )),
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
                            print('hello');
                          }))
                ])
              ],
            ))),
        key: _scaffoldKey,
        appBar: AppBar(
          title: Text('Equipments'),
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
                showSearch<void>(
                    context: context, delegate: Search(horse_equipments));
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
              MaterialPageRoute<void>(
                  builder: (context) => HorseEquipmentHttp()),
            );
            print('Clicked');
          },
        ),
        body: new Container(
            child: ListView.builder(
          itemCount: horse_equipments.length,
          itemBuilder: (context, index) {
            return new GestureDetector(
              child: new Card(
                  elevation: 5.0,
                  child: new Container(
                      //alignment: Alignment.center,
                      child: Wrap(children: [
                    Column(
                      children: <Widget>[
                        HorseEquipmentItemSlide(),
                        Padding(
                            padding: EdgeInsets.only(
                                left: 10.0, right: 10.0, top: 0.0),
                            child: Row(
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceBetween,
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(
                                    'AED ' + horse_equipments[index].price,
                                    style: TextStyle(
                                        color: Colors.green[700],
                                        fontWeight: FontWeight.bold,
                                        fontSize: 16.0),
                                  ),
                                  TextRich(
                                      'Type: ', horse_equipments[index].type),
                                ])),
                        Padding(
                            padding: EdgeInsets.only(left: 10.0, right: 10.0),
                            child: Row(
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceBetween,
                                crossAxisAlignment: CrossAxisAlignment.center,
                                children: [
                                  TextRich('Cond: ',
                                      horse_equipments[index].condition),
                                  //TextRich('Gender: ', horse_equipments[index].title),
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
                    builder: (context) =>
                        DetailEquipmentScreen(horse: horse_equipments[index]),
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
  const Choice(title: 'Condition', icon: Icons.money),
  const Choice(title: 'Type', icon: Icons.sort_by_alpha),
  const Choice(title: 'Price', icon: Icons.crop_square),
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

  HorseEquipment selectedResult;

  @override
  Widget buildResults(BuildContext context) {
    return Container(
      child: Center(
        child: Text(selectedResult.type),
      ),
    );
  }

  final List<HorseEquipment> listExample;
  Search(this.listExample);

  List<HorseEquipment> recentList = [];

  @override
  Widget buildSuggestions(BuildContext context) {
    List<HorseEquipment> suggestionList = [];
    query.isEmpty
        ? suggestionList = recentList //In the true case
        : suggestionList.addAll(listExample.where(
            // In the false case
            (element) => element.type.contains(query),
          ));

    return ListView.builder(
      itemCount: suggestionList.length,
      itemBuilder: (context, index) {
        return ListTile(
          title: Text(
            suggestionList[index].type,
          ),
          leading: query.isEmpty ? Icon(Icons.access_time) : SizedBox(),
          onTap: () {
            selectedResult = suggestionList[index];
            Navigator.push(
              context,
              MaterialPageRoute<void>(
                builder: (context) =>
                    DetailEquipmentScreen(horse: suggestionList[index]),
              ),
            );
            //showResults(context);
          },
        );
      },
    );
  }
}

class DetailEquipmentScreen extends StatelessWidget {
  // Declare a field that holds the Todo.
  final HorseEquipment horse;

  // In the constructor, require a Todo.
  DetailEquipmentScreen({Key key, @required this.horse}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // Use the Todo to create the UI.
    return Scaffold(
      appBar: AppBar(
        title: Text(horse.type),
      ),
      body: Scrollbar(
        child: SingleChildScrollView(
            scrollDirection: Axis.vertical,
            child: Container(
                padding: EdgeInsets.all(0.0),
                child: Column(crossAxisAlignment: CrossAxisAlignment.start,
                    //mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                      HorseEquipmentItemSlide(),
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
                                    Text(horse.condition,
                                        style: TextStyle(
                                            color: Colors.black,
                                            fontSize: 20.0)),
                                  ]),
                              Divider(),
                              Row(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  children: [
                                    Icon(Icons.check, color: Colors.green),
                                    Text(horse.type,
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

class HorseEquipmentItemSlide extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.symmetric(vertical: 0.0, horizontal: 0.0),
      height: 175.0,
      constraints: BoxConstraints(minHeight: 175.0, maxHeight: 400.0),
      child: ListView(
        scrollDirection: Axis.horizontal,
        children: <Widget>[
          SingleHorseEquipmentImage('1'),
          SingleHorseEquipmentImage('2'),
          SingleHorseEquipmentImage('3'),
          SingleHorseEquipmentImage('4'),
          SingleHorseEquipmentImage('5'),
        ],
      ),
    );
  }
}

class HorseEquipmentItem extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.symmetric(vertical: 10.0, horizontal: 5.0),
      height: 200.0,
      constraints: BoxConstraints(minHeight: 200.0, maxHeight: 400.0),
      child: ListView(
        scrollDirection: Axis.horizontal,
        children: <Widget>[
          SingleHorseEquipment('1', '9,000', 'saddle', 'used'),
          SingleHorseEquipment('2', '9,000', 'saddle', 'used'),
          SingleHorseEquipment('3', '9,000', 'saddle', 'used'),
          SingleHorseEquipment('4', '9,000', 'saddle', 'used'),
          SingleHorseEquipment('5', '9,000', 'saddle', 'used'),
          SingleHorseEquipment('1', '9,000', 'saddle', 'used'),
          SingleHorseEquipment('1', '9,000', 'saddle', 'used'),
          SingleHorseEquipment('1', '9,000', 'saddle', 'used'),
          SingleHorseEquipment('1', '9,000', 'saddle', 'used'),
          SingleHorseEquipment('1', '9,000', 'saddle', 'used'),
          Container(
            width: MediaQuery.of(context).size.width * 0.6,
            child: FlatButton(
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute<void>(
                        builder: (context) => HorseEquipmentListing()),
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

class SingleHorseEquipment extends StatelessWidget {
  SingleHorseEquipment(this.image_id, this.price, this.type, this.condition);
  final String image_id, price, type, condition;

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
                          'assets/images/equipment' + image_id + '.jpg',
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
                                child: TextRich('Condition: ', condition)),
                          ])),
                  Container(
                      padding: EdgeInsets.only(left: 10.0, right: 10.0),
                      child: Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: [
                            TextRich('Type: ', type),
                          ]))
                ])),
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute<void>(
                  builder: (context) => DetailEquipmentScreen(
                      horse: horse_equipments[int.parse(image_id)]),
                ),
              );
            }));
  }
}

class SingleHorseEquipmentImage extends StatelessWidget {
  SingleHorseEquipmentImage(this.image_id);
  final String image_id;
  @override
  Widget build(BuildContext context) {
    return Container(
        constraints: BoxConstraints(minWidth: 150, maxWidth: 250),
        margin: EdgeInsets.symmetric(vertical: 0.0, horizontal: 0.0),
        width: MediaQuery.of(context).size.width * 0.8,
        child: Column(children: [
          new Image.asset(
            'assets/images/equipment' + image_id + '.jpg',
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
