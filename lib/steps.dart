import 'package:flutter/material.dart';

class MyApps extends StatefulWidget {
  MyApps();
  @override
  MyAppState createState() => new MyAppState();
}

class MyAppState extends State<MyApps> {
  int _currentStep = 0;

  @override
  Widget build(BuildContext context) {
    return  new Scaffold(
        appBar: new AppBar(title: new Text('Create an Ad')
        ),

        body:  Container(
            color: Colors.transparent,
            height: MediaQuery.of(context).size.height * 1,    margin: EdgeInsets.only(top: 10),
    child:Theme(
      data: ThemeData(primaryColor: Colors.green),

    child:Stepper(

          type: StepperType.vertical,
          currentStep: _currentStep,
          onStepTapped: (int step) => setState(() => _currentStep = step),
          onStepContinue: _currentStep < 5 ? () => setState(() => _currentStep += 1) : null,
          onStepCancel: _currentStep > 0 ? () => setState(() => _currentStep -= 1) : null,
        steps: [
         Step(
        title: new Text('Location',style:TextStyle(fontSize:20.0)),
        content: new Text('This is the first step.'),
        isActive: _currentStep >= 0,
        state: _currentStep >= 0 ? StepState.complete : StepState.disabled,
      ),
       Step(
        title: new Text('Ad Type',style:TextStyle(fontSize:20.0)),
        content: new Text('This is the second step.'),
        isActive: _currentStep >= 0,
        state: _currentStep >= 1 ? StepState.complete : StepState.disabled,
      ),
          Step(
            title: new Text('Ad Details',style:TextStyle(fontSize:20.0)),
            content: new Text('This is the sexcfond step.df'),
            isActive: _currentStep >= 0,
            state: _currentStep >= 2 ? StepState.complete : StepState.disabled,
          ),
          Step(
            title: new Text('Pictures',style:TextStyle(fontSize:20.0)),
            content: new Text('This is the sexfcond serttep.'),
            isActive: _currentStep >= 0,
            state: _currentStep >= 3 ? StepState.complete : StepState.disabled,
          ),
          Step(
            title: new Text('Title and Description',style:TextStyle(fontSize:20.0)),
            content: new Text('This is the sexfcond step.'),
            isActive: _currentStep >= 0,
            state: _currentStep >= 4 ? StepState.complete : StepState.disabled,
          ),

      ],
        ))),

    );
  }
}