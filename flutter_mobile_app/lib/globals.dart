import 'package:flutter/material.dart';
import 'package:json_annotation/json_annotation.dart';
import 'dart:convert';
import 'dart:async';
import 'package:carousel_slider/carousel_slider.dart';

@JsonSerializable()
class AccountData {
  String email;
  String user_name;

  String password;

  AccountData({
    this.email,
    this.password,
    this.user_name,
  });

  Map<String, dynamic> toJson() => _$AccountDataToJson(this);
}

Map<String, dynamic> _$AccountDataToJson(AccountData instance) =>
    <String, dynamic>{
      'email': instance.email,
      'password': instance.password,
      'user_name': instance.user_name,
    };

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
  bool confirmed = false;
  String confirmation_code;
  bool logged_in = false;
  String token;
  String password_reset_state = 'none';

  User(
      {this.profile_pic,
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
      this.password_reset_state});

  factory User.fromJson(dynamic parsedJson) => _$UserFromJson(parsedJson);

  Map<String, dynamic> toJson() => _$UserToJson(this);
}

User _$UserFromJson(dynamic parsedJson) {
  return User(
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
    password_reset_state:
        (parsedJson['password_reset_requested'] ?? 'none') as String,
  );
}

Map<String, dynamic> _$UserToJson(User instance) => <String, dynamic>{
      'profile_pic': instance.profile_pic,
      'user_name': instance.user_name,
      'email': instance.email,
      'password': instance.password,
      'first_name': instance.first_name,
      'last_name': instance.last_name,
      'gender': instance.gender,
      'date_of_birth': instance.date_of_birth,
      'nationality': instance.nationality,
      'city': instance.city,
      'confirmed': instance.confirmed,
      'confirmation_code': instance.confirmation_code,
      'logged_in': instance.logged_in,
      'token': instance.token,
      'password_reset_state': instance.password_reset_state
    };
// Ad Class

@JsonSerializable()
class Ad {
  String type;
  Ad({this.type});
  factory Ad.fromJson(Map<String, dynamic> parsedJson) =>
      _$AdFromJson(parsedJson);

  Map<String, dynamic> toJson() => _$AdToJson(this);
}

Ad _$AdFromJson(Map<String, dynamic> parsedJson) {
  return Ad(
    type: parsedJson['type'] as String,
  );
}

Map<String, dynamic> _$AdToJson(Ad instance) => <String, dynamic>{
      'type': instance.type,
    };

// Response Parser
class ResponseParser {
  final int statusCode;
  final bool success;
  final String message;
  final Map user;

  ResponseParser({this.statusCode, this.success, this.message, this.user});

  factory ResponseParser.fromJson(dynamic json) {
    return ResponseParser(
      statusCode: (json['statusCode'] ?? 100) as int,
      success: (json['success'] ?? false) as bool,
      message: (json['message'] ?? '') as String,
      user: (json['user'] ?? User()) as Map,
    );
  }
}

// Display Loader
void displayBottomSheetLoader(BuildContext context) {
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
            child: new Image.asset('assets/images/loader.gif',
                width: 100.0, height: 100.0),
          ),
        );
      });
}

// Display bottom sheet selecion
void displayBottomSheetSelector(BuildContext context, String title,
    List<DataItem> items, DataItem selected, State widget) {
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
              child: ListView(
            children: items.map((i) {
              return ListTile(
                onTap: () {
                  widget.setState(() {
                    selected = i;
                  });
                },
                leading: i.icon,
                title: Text(i.name,
                    textAlign: TextAlign.center,
                    style: TextStyle(fontSize: 25.0)),
              );
            }).toList(),
          )),
        );
      });
}

// Data sets
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
List<String> CitySelection = <String>["Addis Ababa", "Bahirdar"];
List<String> AdType = <String>[];
List<String> AdCategory = <String>[];
List<String> Breed = <String>[];
List<String> EquipmentCondition = <String>[];
List<String> EquipmentType = <String>[];
List<String> Gender = <String>[];
// Input Default Style
InputDecoration TextInputDeco(String label) {
  return InputDecoration(
    helperText: ' ',
    // errorText:"Your error message",
    focusedBorder: OutlineInputBorder(
      borderSide: BorderSide(color: Colors.black, width: 1.0),
    ),
    enabledBorder: OutlineInputBorder(
      borderSide: BorderSide(color: Colors.grey, width: 1.0),
    ),
    border: OutlineInputBorder(
      borderSide: BorderSide(color: Colors.grey, width: 1.0),
    ),
    filled: true,
    contentPadding: EdgeInsets.only(left: 10.0),
    fillColor: Colors.white,
    // labelText: 'Username or Email',
    hintText: label,
    hintStyle: TextStyle(color: Colors.grey, fontSize: 20.0),
    labelStyle: TextStyle(color: Colors.grey, fontSize: 20.0),
  );
}

// Transition Animation
Route _createRoute() {
  return PageRouteBuilder<dynamic>(
    // pageBuilder: (context, animation, secondaryAnimation) => Page2(),
    transitionsBuilder: (context, animation, secondaryAnimation, child) {
      var begin = Offset(1.0, 0.0);
      var end = Offset.zero;
      var curve = Curves.ease;

      var tween = Tween(begin: begin, end: end).chain(CurveTween(curve: curve));

      return SlideTransition(
        position: animation.drive(tween),
        child: child,
      );
    },
  );
}

class SlideRightRoute extends PageRouteBuilder<dynamic> {
  final Widget page;
  SlideRightRoute({this.page})
      : super(
          pageBuilder: (
            BuildContext context,
            Animation<double> animation,
            Animation<double> secondaryAnimation,
          ) =>
              page,
          transitionsBuilder: (
            BuildContext context,
            Animation<double> animation,
            Animation<double> secondaryAnimation,
            Widget child,
          ) =>
              SlideTransition(
            position: Tween<Offset>(
              begin: const Offset(-1, 0),
              end: Offset.zero,
            ).animate(animation),
            child: child,
          ),
        );
}
//Navigator.push(context, CupertinoPageRoute(builder: (context) => Screen2()))
// Navigator.push(context, SlideRightRoute(page: Screen2()))

DropdownButton dropdown(
    String title, List<DataItem> items, DataItem selected, State widget) {
  return DropdownButton<DataItem>(
    isExpanded: true,
    hint: Text(title),
    value: selected,
    onChanged: (DataItem Value) {
//formDataSignup.agree = newValue;
      print(Value);
      widget.setState(() {
//formDataSignup.agree = newValue;
        selected = Value;
      });
    },
    items: items.map((DataItem item) {
      return DropdownMenuItem<DataItem>(
        value: item,
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
                    item.name,
                    style: TextStyle(color: Colors.black),
                  ),
                ]))
          ],
        ),
      );
    }).toList(),
  );
}

class RadioItem {
  const RadioItem(this.title, this.value);
  final String title;
  final String value;
}

Row radio(
    String title, List<RadioItem> items, RadioItem selected, State widget) {
  return Row(
      mainAxisAlignment: MainAxisAlignment.start,
      children: items.map((RadioItem item) {
        return Scaffold(
            body: Column(children: <Widget>[
          Radio(
            value: item,
            groupValue: selected,
            onChanged: (RadioItem value) {
              widget.setState(() {
                selected = value;
              });
            },
          ),
          Text(
            item.title,
            style: const TextStyle(fontSize: 20.0),
          )
        ]));
      }).toList());
}

Widget Slider(BuildContext context, List<int> items, double width,
    double height, List<String> images) {
  return Padding(
      padding: EdgeInsets.only(top: 30),
      child: Column(
        children: <Widget>[
          CarouselSlider(
            autoPlay: false,
            enableInfiniteScroll: false,
            initialPage: 0,
            reverse: false,
            viewportFraction: 1.0,
            aspectRatio: MediaQuery.of(context).size.aspectRatio,
            height: height,
            items: items.map((int i) {
              return Builder(builder: (BuildContext context) {
                return Container(
                    width: width,
                    height: height,
                    child: Stack(
                      children: <Widget>[
                        Positioned(
                            left: MediaQuery.of(context).size.width * 0.15,
                            top: 5,
                            child: Image.asset(images[i],
                                width: MediaQuery.of(context).size.width * 0.9,
                                fit: BoxFit.contain,
                                height:
                                    MediaQuery.of(context).size.height * 0.6)),
                        Positioned(
                            left: MediaQuery.of(context).size.width * 0.15,
                            top: 5,
                            child: Dots(i, items.length))
                      ],
                    ));
              });
            }).toList(),
          ),
        ],
      ));
}

class Dots extends StatefulWidget {
  int index;
  int length;

  Dots(this.index, this.length);

  @override
  _DotsState createState() => _DotsState();
}

class _DotsState extends State<Dots> {
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    // print("deneme" + currentPage.toString());
  }

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      scrollDirection: Axis.horizontal,
      itemCount: widget.length,
      itemBuilder: (context, int index) {
        return Container(
            // margin: EdgeInsets.only(right: index != 2 ? 4 : 0),
            width: 10,
            // height: 10,
            decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: index == widget.index ? Colors.black : Colors.white,
                border: Border.all(color: Colors.black)));
      },
    );
  }
}

class FloatAppBar extends StatelessWidget with PreferredSizeWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        SizedBox(
          height: 80.0,
          child: Container(
            margin: EdgeInsets.only(top: 30.0, left: 5.0, right: 5.0),
            decoration: BoxDecoration(
              border: Border.all(color: Colors.grey[350]),
              borderRadius: BorderRadius.all(Radius.circular(15.0)),
              color: Colors.white24,
            ),
            child: Row(
              children: <Widget>[
                Material(
                  type: MaterialType.transparency,
                  child: IconButton(
                    splashColor: Colors.grey[350],
                    icon: Icon(Icons.search),
                    onPressed: () {
                      // Scaffold.of(context).openDrawer();
                    },
                  ),
                ),
                Expanded(
                  child: TextField(
                    cursorColor: Colors.black,
                    keyboardType: TextInputType.text,
                    textInputAction: TextInputAction.go,
                    onTap: () {
                      Scaffold.of(context)
                          .showBottomSheet<void>((BuildContext context) {
                        return Container(
                          height: MediaQuery.of(context).size.height - 85.0,
                          color: Colors.white,
                          child: Center(
                            child: Column(
                              mainAxisAlignment: MainAxisAlignment.center,
                              mainAxisSize: MainAxisSize.min,
                              children: <Widget>[
                                const Text('This will have search in'),
                                ElevatedButton(
                                  child: const Text('Close Search In'),
                                  onPressed: () => Navigator.pop(context),
                                )
                              ],
                            ),
                          ),
                        );
                      });
                      print('Editing stated ');
                    },
                    decoration: InputDecoration(
                        border: InputBorder.none,
                        contentPadding:
                            EdgeInsets.symmetric(horizontal: 5, vertical: 0),
                        hintText: "What are you looking for?"),
                  ),
                ),
              ],
            ),
          ),
        ),
      ],
    );
  }

  @override
  Size get preferredSize => Size.fromHeight(kToolbarHeight);
}

FloatingActionButton floatingActionButton(
    BuildContext context, String page, Icon icon) {
  return FloatingActionButton(
    child: icon,
    onPressed: () {
      Navigator.of(context).pushReplacementNamed(page);
      print('Clicked');
    },
  );
}

class Choice {
  const Choice({this.title, this.icon});

  final String title;
  final IconData icon;
}

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

PopupMenuButton popupMenuButton(BuildContext context, State widget,
    Choice _selectedChoice, List<Choice> choices, Icon icon) {
  void _select(Choice choice) {
    // Causes the app to rebuild with the new _selectedChoice.
    widget.setState(() {
      _selectedChoice = choice;
    });
  }

  return PopupMenuButton<Choice>(
      icon: icon,
      onSelected: _select,
      itemBuilder: (BuildContext context) {
        return choices.map((Choice choice) {
          return PopupMenuItem<Choice>(
              value: choice, child: ChoiceCard(choice: choice));
          //child: Text(choice.title));
        }).toList();
      });
}

/*
showSearch<void>(context: context, delegate: Search(horses));
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
 */

bool isEmail(String em) {
  String p =
      r"^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\.[a-zA-Z]+";

  RegExp regExp = new RegExp(p);

  return regExp.hasMatch(em);
}
