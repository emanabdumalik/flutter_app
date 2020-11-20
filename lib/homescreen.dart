import 'dart:async';
import 'package:flutter/material.dart';
import 'horse.dart' as horse;
import 'equipment.dart' as equipment;
import 'preference.dart' as preference;
import 'package:shared_preferences/shared_preferences.dart';



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
                        horse.TitleItem('Horses'),
                        horse.HorseItem(),
                        horse.TitleItem('Horse Equipments'),
                        equipment.HorseEquipmentItem(),
                        horse.TitleItem('Endurance Horses'),
                        horse.HorseItem(),
                        horse.TitleItem('Show Horses'),
                        horse.HorseItem()
                      ],
                    )))));
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