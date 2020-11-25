import 'dart:async';
import 'package:flutter/material.dart';


class SplashScreen extends StatefulWidget {
  @override
  _SplashScreenState createState() => new _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  Future<Timer> startTime() async {
    var _duration = new Duration(seconds: 5);
    return new Timer(_duration, navigationPage);
  }

  void navigationPage() {
    Navigator.of(context).pushReplacementNamed('/HomeScreen');
  }

  @override
  void initState() {
    super.initState();
    startTime();
  }

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      body: new Container(
          child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Padding(
              padding: EdgeInsets.all(10.0),
              child: Text(
                  'The perfect platform for buying and selling horse and its equipments.',
                  style: TextStyle(fontSize: 25.0),
                  textAlign: TextAlign.center)),
          Divider(),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              new Image.asset(
                'assets/images/intro-horse-image.jpg',
                width: MediaQuery.of(context).size.width * 0.32,
                fit: BoxFit.contain,
              ),
              new Image.asset(
                'assets/images/intro-saddle-image.jpg',
                width: MediaQuery.of(context).size.width * 0.32,
                fit: BoxFit.contain,
              ),
              new Image.asset(
                'assets/images/introl-trailer-image.jpg',
                width: MediaQuery.of(context).size.width * 0.32,
                fit: BoxFit.contain,
              ),
            ],
          )
        ],
      )),
    );
  }
}

