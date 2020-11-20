import 'dart:convert';

import 'package:flutter/services.dart';
import 'package:http/http.dart' as http;
import 'package:flutter/material.dart';
import 'package:introapp/horse.dart';
import 'package:json_annotation/json_annotation.dart';
import 'horse.dart' as horse;
import 'equipment.dart' as equipment;
import 'mydetails.dart' as mydetails;
import 'signin.dart' as signin;
import 'preference.dart' as preference;
import 'main.dart' as main;
import 'routes.dart' as routes;

class MyProfileListing extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final title = 'My Ads';

    return Scaffold(
      appBar: AppBar(
        title: Text(title),
      ),
      body: Center(
          child: RaisedButton(
              shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(8.0),
                  side: BorderSide(color: Colors.grey)),
              color: Colors.white,
              child: Text(
                'Create An Ad',
                style: TextStyle(color: Colors.black, fontSize: 20.0),
              ),
              onPressed: () {})),
    );
  }
}

class MyProfileListingLoggedIn extends StatelessWidget {
  User user;
  MyProfileListingLoggedIn(this.user);


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
                    user.loggedIn == 'yes'
                        ? ListTile(
                            title: Text(user.user_name,
                                textAlign: TextAlign.center,
                                style: TextStyle(fontSize: 25.0)),
                          )
                        : Text(''),
                    Divider(),
                    user.loggedIn != 'yes'
                        ? ListTile(
                            leading: Icon(Icons.chevron_right),
                            title: Text('Log In or Sign Up'),
                            onTap: () {
                              Navigator.push(
                                context,
                                MaterialPageRoute<void>(
                                    builder: (context) => signin.SignInHttp()),
                              );
                            })
                        : Text(''),
                    ListTile(
                        leading: Icon(Icons.book),
                        title: Text('My Ads'),
                        onTap: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute<void>(
                                builder: (context) => MyProfileListing()),
                          );
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
                    user.loggedIn == 'yes'
                        ? ListTile(
                            leading: Icon(Icons.person),
                            title: Text('My Profile'),
                            onTap: () {
                              print('hello');
                              Navigator.push(
                                context,
                                MaterialPageRoute<void>(
                                    builder: (context) =>
                                        mydetails.MyDetailsHttp(user)),
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
                          routes.ContactRoute,
                          );
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
                                    routes.TermsRoute),
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
                                    routes.AboutRoute,
                          );
                        }
                    ),
                    user.loggedIn == 'yes'
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
                                    builder: (context) => main.HomeRoutes(0)),
                              );
                            })
                        : Text(''),
                  ],
                ),
              ))),
    );
  }
}
