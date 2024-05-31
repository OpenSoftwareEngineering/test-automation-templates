# FlutterFlow testing (manually through code download)

The "View Code" feature present in free accounts is not sufficient to get a
complete testable version of the code, as it seems to be missing a lot of
FlutterFlow's internal source files that the available code is dependent upon.

Paid tiers provide the "download source code" feature. Which does include the
complete source code, and running `flutter packages upgrade && flutter run`
does succeed there.

_NOTE: This document describes step-by-step exploration of FlutterFlow's 
testing features, and as such will probably not cover 100% of the features.
For that:_
https://docs.flutterflow.io/deploying-your-app/testing-your-app/automated-tests

## FlutterFlow's Built-In testing

The paid tier also provides built in testing features.

_NOTE: these FlutterFlow tests use Flutter's integration tests under the hood,
not unittests_

Each test consists of two parts:

### Preconditions

These appear to represent application state. The dropdown for selecting a
precondition is populated with:

* Pages of the application. To set condition that this page should be open
* Application state. Something like "User is logged in"

### Test Steps

Each test has any number of test steps. Each test step can be of the types:

* Interact with a Widget
* Wait for UI to load.
* Expect Result

#### Interact with Widget

This can be of several types:

* Tap / DoubleTap
* Long Press
* Enter Text
* Scroll until Widget visible

It also involves some method to pick the target widget:

* Selecting from UI Builder
* Find by ValueKey (? unsure how this is used)
* Find by Type (?)
* Find by Semantics Label (?)
* Find by Text
* Find by Descendant

## Running the Tests

FlutterFlow does not provide their own test execution platform, instead relying
on Firebase. In my case, I verified the tests by downloading the project source
code, and locally running the tests. By running:

```bash
flutter packages upgrade && flutter test
```

## Issues

1. Flutter unit tests do not support making HTTP requests. Instead, all
	requests are automatically given the response code 400. ~Unsure if this issue
	originates from FlutterFlow or Flutter itself.~
	**Resolved**: Use integration testing, HTTP requests are allowed there.
