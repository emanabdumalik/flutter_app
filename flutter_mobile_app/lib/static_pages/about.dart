import 'package:flutter/material.dart';

class About extends StatelessWidget {
  String terms = "About App";
  @override
  Widget build(BuildContext context) {
    Scaffold(
        appBar: AppBar(
        title: Text('About'),
    ),
    body: Center(
        child: Container(
            padding:
            EdgeInsets.only(left: 20.0, right: 20.0),
            width: MediaQuery.of(context).size.width -40.0,
            height: MediaQuery.of(context).size.height * 1,
            child:Column(
                mainAxisAlignment: MainAxisAlignment.start,
                crossAxisAlignment: CrossAxisAlignment.center,
                children:<Widget>[
                  Text(terms)
                ]
            )
        )
    )
    );
  }
}