import 'dart:convert';
import 'dart:async';

import 'package:http/http.dart' as http;
import 'package:flutter/material.dart';
import 'package:json_annotation/json_annotation.dart';
import 'package:carousel_slider/carousel_slider.dart';
import 'package:flappy_search_bar/flappy_search_bar.dart';

import 'signup.dart' as signup;
import 'signin.dart' as signin;
import 'horse.dart' as horse;
import 'equipment.dart' as equipment;
import 'myprofile.dart' as myprofile;
import 'splashscreen.dart' as splash;
import 'homescreen.dart' as home;
import 'globals.dart';
import 'preference.dart' as preference;
import 'steps.dart' as steps;
void main() => runApp(MaterialApp(
      home: new splash.SplashScreen(),
      routes: <String, WidgetBuilder>{
        '/HomeScreen': (BuildContext context) => new HomeRoutes(0)
      },
      theme: ThemeData(
        primaryColor: Colors.white,
      ),
      debugShowCheckedModeBanner: false,
      title: 'Horse App',
      //home: HomePage(),
    ));

Color bgColor = Color(0xFFF3F3F3);
Color textColor = Color(0xFF83838A);

List<String> imagePath = [
  "assets/images/intro1.png",
  "assets/images/intro2.png",
  "assets/images/intro4.png",
  "assets/images/intro4.png",
  "assets/images/intro3.png",
];
List<String> title = [
  "Horses & Horse Equipments",
  "Sign Up",
  "Log In",
];
List<String> description = [
  "Buy A Horse or Equipments",
  "Sell or Advertise Your Horse",
  "Manage Your Listings",
];

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: bgColor,
      body: ContentPage(),
    );
  }
}

class Item {
  const Item(this.name, this.icon);
  final String name;
  final Icon icon;
}

class ContentPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
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
              height: MediaQuery.of(context).size.height - 30,
              items: [0, 1, 2].map((i) {
                return Builder(
                  builder: (BuildContext context) {
                    return Container(
                        width: MediaQuery.of(context).size.width,
                        child: AppItro(i));
                  },
                );
              }).toList(),
            ),
          ],
        ));
  }
}

class AppItro extends StatefulWidget {
  int index;

  AppItro(this.index);

  @override
  _AppItroState createState() => _AppItroState();
}

class _AppItroState extends State<AppItro> {
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.max,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        Container(
          width: MediaQuery.of(context).size.width,
          height: MediaQuery.of(context).size.height * 0.2,
          color: Colors.transparent,
          child: Stack(
            children: <Widget>[
              Positioned(
                left: MediaQuery.of(context).size.width * 0.15,
                top: 5,
                width: MediaQuery.of(context).size.width * 0.70,
                child: RaisedButton(
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(18.0),
                      side: BorderSide(color: Colors.green)),
                  color: Colors.green,
                  child: Text(
                    title[widget.index],
                    style: TextStyle(color: Colors.white),
                  ),
                  onPressed: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute<void>(
                          builder: (context) => 0 == widget.index
                              ? HomeRoutes(0)
                              : 1 == widget.index
                                  ? signup.SignUpHttp()
                                  : signin.SignInHttp()),
                    );
                  },
                ),
              ),
            ],
          ),
        ),
        Container(
          width: MediaQuery.of(context).size.width,
          height: MediaQuery.of(context).size.height * 0.6,
          child: Column(
            children: <Widget>[
              Image.asset(imagePath[widget.index],
                  width: MediaQuery.of(context).size.width * 0.9,
                  fit: BoxFit.contain,
                  height: MediaQuery.of(context).size.height * 0.6)
            ],
          ),
        ),
        Container(
          width: MediaQuery.of(context).size.width,
          padding: EdgeInsets.symmetric(horizontal: 24),
          height: MediaQuery.of(context).size.width * 0.2,
          child: Stack(
            children: <Widget>[
              Dots(widget.index),
              Positioned(
                right: 0,
                top: 20,
                child: new Text(description[widget.index],
                    style: TextStyle(fontFamily: "Avenir", fontSize: 16)),
              ),
            ],
          ),
        )
      ],
    );
  }
}

class Dots extends StatefulWidget {
  int index;

  Dots(this.index);

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
      itemCount: 3,
      itemBuilder: (context, int index) {
        return Container(
            margin: EdgeInsets.only(right: index != 2 ? 4 : 0),
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

class HomeRoutes extends StatefulWidget {
  int selectedPage = 0;
  HomeRoutes(this.selectedPage);
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<HomeRoutes> {
  String _loggedin='no';
  User user;
  @override
  void initState() {
    super.initState();
    preference.MySharedPreferences.instance.getStringValue('isloggedin').then((value){
      print(value);
      print('hello');
      if(value == 'no' || value == null){

       persist('no');
      }
      setState(() {});
    });

  }
  void persist(String value) {
    setState(() {
      _loggedin = value;
    });
    var x = {
      'data': {'user_nicename': '', 'user_email': '', 'loggedIn': 'no'}
    };
    preference.MySharedPreferences.instance.setUserProfile(x);
  }

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
        length: 3,
        initialIndex: widget.selectedPage,
        child: Scaffold(
          bottomNavigationBar: menu(),
          body: TabBarView(
            children: [
              home.HomeScreen(),
              LetsGo(_loggedin),
              MyProfileListing(),
            ],
          ),
        ));
  }

  Widget menu() {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        border: Border(
          top: BorderSide(width: 1.0, color: Colors.green),
        ),
      ),
      child: TabBar(
        onTap: (index) {
          setState(() {
            widget.selectedPage = index;
          });
        },
        labelColor: Colors.green,
        unselectedLabelColor: Colors.grey,
        indicatorSize: TabBarIndicatorSize.tab,
        indicatorPadding: EdgeInsets.all(5.0),
        indicatorColor: Colors.green,
        tabs: [
          Tab(text: "Home", icon: Icon(Icons.home)),
          Tab(text: "Place Ad", icon: Icon(Icons.add)),
          Tab(text: "My Profile", icon: Icon(Icons.person)),
        ],
      ),
    );
  }
}

class LetsGo extends StatelessWidget {
  String _isloggedin;
  LetsGo(this._isloggedin);
  @override
  Widget build(BuildContext context) {
    return FutureBuilder<dynamic>(
        future: fetchStr(),
        builder: (context, snapshot) {
          print(snapshot);
          print(_isloggedin);
          if (snapshot.hasData) {
            if (snapshot.data == 'yes') {
              print('hey');
              return steps.MyApps();
            } else {
              return signin.SignInHttp();
            }
          } else if (snapshot.hasError) {
            return Text("${snapshot.error}");
          }
          // By default, show a loading spinner
          return SizedBox(
            height: MediaQuery.of(context).size.height / 1.3,
            child: Container(
              color: Colors.white,
              height: MediaQuery.of(context).size.height,
              child: Center(
                child: new Image.asset('assets/images/loader.gif',
                    width: 100.0, height: 100.0),
              ),
            ),
          );
        });
  }
}

Future fetchStr() async {
  var x;
  preference.MySharedPreferences.instance.getStringValue('isloggedin').then((value) {
    x = value;
    print(value);

  });
  await new Future.delayed(const Duration(seconds: 1));

  return x;
}
Future fetchProfile() async {
  var x;
  print('alloha');
  await preference.MySharedPreferences.instance.getStringValue('isloggedin').then((value) {
    x = value;
    print(value);
    if(value == 'no' || value == ''){
     x = new User(name:'semir',email:'semir',loggedIn:'no');
    }
    else {
      preference.MySharedPreferences.instance.getUserProfile().then((value) {
          x = value;
      });
      }
    });


  await new Future.delayed(const Duration(seconds: 1));

  return x;
}

class MyProfileListing extends StatelessWidget {
  String _isloggedin;

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<dynamic>(
        future: fetchProfile(),
        builder: (context, snapshot) {
          print(snapshot);
          if (snapshot.hasData) {

            if (snapshot.data.loggedIn == 'yes') {
              print('hey');
              return myprofile.MyProfileListingLoggedIn(snapshot.data);
            } else {
              return myprofile.MyProfileListingLoggedIn(snapshot.data);
            }
          } else if (snapshot.hasError) {
            return Text("${snapshot.error}");
          }
          // By default, show a loading spinner
          return SizedBox(
            height: MediaQuery.of(context).size.height / 1.3,
            child: Container(
              color: Colors.white,
              height: MediaQuery.of(context).size.height,
              child: Center(
                child: new Image.asset('assets/images/loader.gif',
                    width: 100.0, height: 100.0),
              ),
            ),
          );
        });
  }
}
/*
 
                   
           */
