
import 'package:flutter/material.dart';


import '../preference.dart' as preference;

import '../routes.dart' as route;
import '../globals.dart';

class MyProfileHttp extends StatefulWidget {
  @override
  MyProfileListing createState() => MyProfileListing();
}

class MyProfileListing extends State<MyProfileHttp> {
  User user;
  @override
  void initState() {
    super.initState();
    preference.MySharedPreferences.instance.getUserProfile().then((value){
      user = value;
    });

  }



  @override
  Widget build(BuildContext context) {
    final title = 'My Profile';

    return Scaffold(
      appBar: AppBar(
        automaticallyImplyLeading: false,
        title: Text(title),
      ),
      body: Scrollbar(
          child: SingleChildScrollView(
              scrollDirection: Axis.vertical,
              child: Container(
                height: MediaQuery.of(context).size.height,
                child: ListView(
                  children: <Widget>[
                    user.logged_in == 'yes'
                        ? ListTile(
                      title: Text(user.user_name,
                          textAlign: TextAlign.center,
                          style: TextStyle(fontSize: 25.0)),
                    )
                        : Text(''),
                    Divider(),
                    user.logged_in != 'yes'
                        ? ListTile(
                        leading: Icon(Icons.chevron_right),
                        title: Text('Log In or Sign Up'),
                        onTap: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute<void>(
                                builder: (context) => route.SingInRoute),
                          );
                        })
                        : Text(''),
                    ListTile(
                        leading: Icon(Icons.book),
                        title: Text('My Ads'),
                        onTap: () {

                        }),
                    ListTile(
                      leading: Icon(Icons.search),
                      title: Text('My Searches'),
                    ),
                    ListTile(
                      leading: Icon(Icons.list),
                      title: Text('My Favorites'),
                    ),
                    Divider(),
                    ListTile(
                      title: Text('Settings'),
                    ),
                    Divider(),
                    user.logged_in == 'yes'
                        ? ListTile(
                        leading: Icon(Icons.person),
                        title: Text('My Profile'),
                        onTap: () {
                          print('hello');
                          Navigator.push(
                            context,
                            MaterialPageRoute<void>(
                                builder: (context) =>
                                route.MyDetailsPageRoute),
                          );
                        })
                        : Text(''),
                    ListTile(
                        leading: Icon(Icons.email),
                        title: Text('Contact'),
                        onTap: () {
                          print('hello');
                          Navigator.push(
                              context,
                              MaterialPageRoute<void>(
                              builder: (context) =>
                          route.ContactRoute,
                          ));
                        }
                    ),
                    ListTile(
                        leading: Icon(Icons.info),
                        title: Text('Terms and Conditions'),
                        onTap: () {
                          print('hello');
                          Navigator.push(
                            context,
                            MaterialPageRoute<void>(
                                builder: (context) =>
                                route.TermsRoute),
                          );
                        }
                    ),
                    ListTile(
                        leading: Icon(Icons.apps),
                        title: Text('About'),
                        onTap: () {
                          print('hello');
                          Navigator.push(
                              context,
                              MaterialPageRoute<void>(
                              builder: (context) =>
                          route.AboutRoute,
                          ));
                        }
                    ),
                    user.logged_in == 'yes'
                        ? ListTile(
                        leading: Icon(Icons.chevron_left),
                        title: Text('Log Out'),
                        onTap: () {
                          var x = {
                            'data': {
                              'user_nicename': '',
                              'user_email': '',
                              'loggedIn': 'no'
                            }
                          };
                          preference.MySharedPreferences.instance
                              .setUserProfile(x);
                          preference
                              .MySharedPreferences.instance
                              .setStringValue(
                              "isloggedin", 'no');
                          print('hello');
                          Navigator.pushReplacement(
                            context,
                            MaterialPageRoute<void>(
                                builder: (context) => route.HomePageRoute),
                          );
                        })
                        : Text(''),
                  ],
                ),
              ))),
    );
  }
}
