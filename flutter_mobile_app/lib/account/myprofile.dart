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
  Future getUserInfo() async {
    User x;
    await preference.MySharedPreferences.instance
        .getUserProfile()
        .then((value) {
      user = value;
      print(user.logged_in);

      setState(() {});
      //user = value;
    });
    // await new Future<void>.delayed(const Duration(seconds: 1));

    return user;
  }

  @override
  void initState() {
    super.initState();
    getUserInfo();
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
                    Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: <Widget>[
                          new Image.asset(
                            'assets/images/logomain.png',
                            width: 100,
                            height: 100,
                            fit: BoxFit.contain,
                          )
                        ]),
                    (user != null && user.logged_in)
                        ? ListTile(
                            title: Text(user.user_name,
                                textAlign: TextAlign.center,
                                style: TextStyle(fontSize: 25.0)),
                          )
                        : Text(''),
                    Divider(),
                    (user != null && user.logged_in == false)
                        ? ListTile(
                            leading: Icon(Icons.login),
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
                        onTap: () {}),
                    ListTile(
                      leading: Icon(Icons.search),
                      title: Text('My Saved Searches'),
                    ),
                    ListTile(
                      leading: Icon(Icons.favorite),
                      title: Text('My Favorites'),
                    ),
                    Divider(),
                    ListTile(
                      title: Text('Settings'),
                    ),
                    Divider(),
                    (user != null && user.logged_in)
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
                      leading: Icon(Icons.location_city),
                      title: Text('City'),
                    ),
                    ListTile(
                        leading: Icon(Icons.forum),
                        title: Text('Support'),
                        onTap: () {
                          print('hello');
                          Navigator.push(
                              context,
                              MaterialPageRoute<void>(
                                builder: (context) => route.ContactRoute,
                              ));
                        }),
                    ListTile(
                        leading: Icon(Icons.info),
                        title: Text('Terms and Conditions'),
                        onTap: () {
                          print('hello');
                          Navigator.push(
                            context,
                            MaterialPageRoute<void>(
                                builder: (context) => route.TermsRoute),
                          );
                        }),
                    ListTile(
                        leading: Icon(Icons.apps),
                        title: Text('About'),
                        onTap: () {
                          print('hello');
                          Navigator.push(
                              context,
                              MaterialPageRoute<void>(
                                builder: (context) => route.AboutRoute,
                              ));
                        }),
                    (user != null && user.logged_in)
                        ? ListTile(
                            leading: Icon(Icons.logout),
                            title: Text('Log Out'),
                            onTap: () {})
                        : Text(''),
                  ],
                ),
              ))),
    );
  }
}
