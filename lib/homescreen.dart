import 'dart:async';
import 'package:flutter/material.dart';

import 'globals.dart';


class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => new _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {




  @override
  Widget build(BuildContext context) {
    return new Scaffold(
        appBar: FloatAppBar(),
        body: Scrollbar(
            child: SingleChildScrollView(
                scrollDirection: Axis.vertical,
                child: Container(
                    padding:
                        EdgeInsets.symmetric(vertical: 0.0, horizontal: 0.0),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        /*horse.TitleItem('Horses'),
                        horse.HorseItem(),
                        horse.TitleItem('Horse Equipments'),
                        equipment.HorseEquipmentItem(),
                        horse.TitleItem('Endurance Horses'),
                        horse.HorseItem(),
                        horse.TitleItem('Show Horses'),
                        horse.HorseItem()*/
                      ],
                    )))));
  }
}

