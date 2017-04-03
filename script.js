$(document).ready(function() {
  var random_color;

  function colour_random() {
    var num = Math.floor(Math.random() * Math.pow(2, 24));
    return '#' + ('00000' + num.toString(16)).substr(-6);
  }
  // Block#: 1
  let on_screen_createMainScreen = function() {
    try {
      // Block#: 2
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label9", 'MainScreen CREATED!');
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  }();
  // Block#: 4
  let on_screen_createScreen2 = function() {
    try {
      // Block#: 5
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label10", 'Screen2 CREATED!');
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  }();
  // Block#: 7
  function on_Button_click() {
    try {
      // Block#: 8
      random_color = colour_random();
      // Block#: 10
      com.fc.JavaScriptDistLib.Button.setProperty["Text color"]("Button", random_color); // Block#: 12
      com.fc.JavaScriptDistLib.Screen.setProperty["Background color"]("MainScreen", random_color);
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="Button"]').on('click', on_Button_click);
  // Block#: 14
  let on_screen_createScreen4 = function() {
    try {
      // Block#: 15
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label12", 'Screen4 CREATED!');
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  }();
  // Block#: 17
  function on_Button7_click() {
    try {
      // Block#: 18
      let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
      hideScreen.hide();
      let showScreen = $('[obj-name="Screen2"]');
      showScreen.show();
      history.pushState({
        'view': 'Screen2'
      }, 'Screen2', 'Screen2');
      hideScreen.triggerHandler('hide');
      showScreen.triggerHandler('show');
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="Button7"]').on('click', on_Button7_click);
  // Block#: 19
  let on_screen_createScreen3 = function() {
    try {
      // Block#: 20
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label11", 'Screen3 CREATED!');
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  }();
  // Block#: 22
  function on_Button9_click() {
    try {
      // Block#: 23
      let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
      hideScreen.hide();
      let showScreen = $('[obj-name="Screen3"]');
      showScreen.show();
      history.pushState({
        'view': 'Screen3'
      }, 'Screen3', 'Screen3');
      hideScreen.triggerHandler('hide');
      showScreen.triggerHandler('show');
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="Button9"]').on('click', on_Button9_click);
  // Block#: 24
  function on_Button3_click() {
    try {
      // Block#: 25
      com.fc.JavaScriptDistLib.Screen.setProperty["width"]("MainScreen", (com.fc.JavaScriptDistLib.Screen.getProperty["width"]("MainScreen") + 50)); // Block#: 29
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label5", (String('WIDTH :  ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Screen.getProperty["width"]("MainScreen")))));
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="Button3"]').on('click', on_Button3_click);
  // Block#: 34
  function on_Button2_click() {
    try {
      // Block#: 35
      com.fc.JavaScriptDistLib.Image.createImageFromUrl('http://www.pngmart.com/files/2/Mario-Transparent-Background.png',
        function(image) {
          // Block#: 37
          com.fc.JavaScriptDistLib.Screen.setProperty["Background image"]("MainScreen", image);
        });
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="Button2"]').on('click', on_Button2_click);
  // Block#: 39
  function on_screen_showScreen2() {
    try {
      // Block#: 40
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label10", 'Screen2 shown!'); // Block#: 42
      com.fc.JavaScriptDistLib.Screen.setProperty["Background color"]("Screen2", '#33ff33'); // Block#: 44
      com.fc.JavaScriptDistLib.Screen.setProperty["Background image"]("Screen2", ('https://local.snapp.click/api/v2/raws/projects/resources/caae7312-66c1-44f9-9db7-a7d01d7496a7'));
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  };
  $('[obj-name="Screen2"]').on('show', on_screen_showScreen2);
  // Block#: 46
  function on_Button4_click() {
    try {
      // Block#: 47
      com.fc.JavaScriptDistLib.Screen.setProperty["height"]("MainScreen", (com.fc.JavaScriptDistLib.Screen.getProperty["height"]("MainScreen") + 50)); // Block#: 51
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label6", (String('HEIGHT :  ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Screen.getProperty["height"]("MainScreen")))));
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="Button4"]').on('click', on_Button4_click);
  // Block#: 56
  function on_Button13_click() {
    try {
      // Block#: 57
      let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
      hideScreen.hide();
      let showScreen = $('[obj-name="Screen4"]');
      showScreen.show();
      history.pushState({
        'view': 'Screen4'
      }, 'Screen4', 'Screen4');
      hideScreen.triggerHandler('hide');
      showScreen.triggerHandler('show');
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="Button13"]').on('click', on_Button13_click);
  // Block#: 58
  function on_Button14_click() {
    try {
      // Block#: 59
      let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
      hideScreen.hide();
      let showScreen = $('[obj-name="MainScreen"]');
      showScreen.show();
      history.pushState({
        'view': 'MainScreen'
      }, 'MainScreen', 'MainScreen');
      hideScreen.triggerHandler('hide');
      showScreen.triggerHandler('show');
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="Button14"]').on('click', on_Button14_click);
  // Block#: 60
  function on_screen_hideScreen2() {
    try {
      // Block#: 61
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label10", 'Screen2 has been hidden'); // Block#: 63
      com.fc.JavaScriptDistLib.Screen.setProperty["Background color"]("Screen2", '#ff6666'); // Block#: 65
      com.fc.JavaScriptDistLib.Screen.setProperty["Background image"]("Screen2", ('https://local.snapp.click/api/v2/raws/projects/resources/baba25e6-9c59-4edc-aaec-b0ab5a266608'));
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  };
  $('[obj-name="Screen2"]').on('hide', on_screen_hideScreen2);
  // Block#: 67
  function on_screen_showScreen3() {
    try {
      // Block#: 68
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label11", 'Screen3 shown!'); // Block#: 70
      com.fc.JavaScriptDistLib.Screen.setProperty["Background color"]("Screen3", '#33ffff'); // Block#: 72
      com.fc.JavaScriptDistLib.Screen.setProperty["Background image"]("Screen3", ('https://local.snapp.click/api/v2/raws/projects/resources/d80cbdb9-17f8-4293-a2b0-892a77b4f976'));
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  };
  $('[obj-name="Screen3"]').on('show', on_screen_showScreen3);
  // Block#: 74
  function on_Button10_click() {
    try {
      // Block#: 75
      com.fc.JavaScriptDistLib.Screen.setProperty["width"]("MainScreen", (com.fc.JavaScriptDistLib.Screen.getProperty["width"]("MainScreen") - 50)); // Block#: 79
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label5", (String('WIDTH :  ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Screen.getProperty["width"]("MainScreen")))));
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="Button10"]').on('click', on_Button10_click);
  // Block#: 84
  function on_Button8_click() {
    try {
      // Block#: 85
      com.fc.JavaScriptDistLib.Screen.setProperty["height"]("MainScreen", (com.fc.JavaScriptDistLib.Screen.getProperty["height"]("MainScreen") - 50)); // Block#: 89
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label6", (String('HEIGHT :  ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Screen.getProperty["height"]("MainScreen")))));
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="Button8"]').on('click', on_Button8_click);
  // Block#: 94
  function on_screen_showScreen4() {
    try {
      // Block#: 95
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label12", 'Screen4 shown!'); // Block#: 97
      com.fc.JavaScriptDistLib.Screen.setProperty["Background color"]("Screen4", '#cc66cc'); // Block#: 99
      com.fc.JavaScriptDistLib.Screen.setProperty["Background image"]("Screen4", ('https://local.snapp.click/api/v2/raws/projects/resources/2cbcbd05-7ec8-4f36-babf-a43e04dc83ae'));
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  };
  $('[obj-name="Screen4"]').on('show', on_screen_showScreen4);
  // Block#: 101
  function on_screen_hideMainScreen() {
    try {
      // Block#: 102
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label9", 'Main Screen has been hidden'); // Block#: 104
      com.fc.JavaScriptDistLib.Screen.setProperty["Background color"]("MainScreen", '#ffffff'); // Block#: 106
      com.fc.JavaScriptDistLib.Screen.setProperty["Background image"]("MainScreen", ('https://local.snapp.click/api/v2/raws/projects/resources/2b7f0dc9-b68b-49cf-9c01-cb154abee8fa'));
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  };
  $('[obj-name="MainScreen"]').on('hide', on_screen_hideMainScreen);
  // Block#: 108
  function on_Button5_click() {
    try {
      // Block#: 109
      com.fc.JavaScriptDistLib.Screen.setProperty["x"]("MainScreen", (com.fc.JavaScriptDistLib.Screen.getProperty["x"]("MainScreen") + 50)); // Block#: 113
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label7", (String('X :  ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Screen.getProperty["x"]("MainScreen")))));
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="Button5"]').on('click', on_Button5_click);
  // Block#: 118
  function on_screen_hideScreen4() {
    try {
      // Block#: 119
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label12", 'Screen4 has been hidden'); // Block#: 121
      com.fc.JavaScriptDistLib.Screen.setProperty["Background color"]("Screen4", '#333399'); // Block#: 123
      com.fc.JavaScriptDistLib.Screen.setProperty["Background image"]("Screen4", ('https://local.snapp.click/api/v2/raws/projects/resources/c2d7e709-c653-4a60-886a-2f76c70c9394')); // Block#: 125
      com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("Button14", 0);
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  };
  $('[obj-name="Screen4"]').on('hide', on_screen_hideScreen4);
  // Block#: 130
  let on_screen_back_button_pressScreen4 = function() {
    try {
      // Block#: 131
      com.fc.JavaScriptDistLib.Screen.setProperty["Background color"]("Screen4", '#ffff33'); // Block#: 133
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label12", 'BACK BUTTON PRESSED'); // Block#: 135
      com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("Button14", '#33ccff');
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  };
  com.fc.JavaScriptDistLib.Screen.screenDict['backScreen4'] = on_screen_back_button_pressScreen4;
  // Block#: 137
  function on_Button6_click() {
    try {
      // Block#: 138
      com.fc.JavaScriptDistLib.Screen.setProperty["y"]("MainScreen", (com.fc.JavaScriptDistLib.Screen.getProperty["y"]("MainScreen") + 50)); // Block#: 142
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label8", (String('Y :  ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Screen.getProperty["y"]("MainScreen")))));
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="Button6"]').on('click', on_Button6_click);
  // Block#: 147
  function on_screen_orientation_changeMainScreen(new_orientation) {
    try {
      // Block#: 148
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label9", 'ORIENTATION CHANGED: RESET all properties! '); // Block#: 150
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label5", 'WIDTH'); // Block#: 152
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label6", 'HEIGHT'); // Block#: 154
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label7", 'X'); // Block#: 156
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label8", 'Y'); // Block#: 158
      com.fc.JavaScriptDistLib.Screen.setProperty["x"]("MainScreen", 172); // Block#: 160
      com.fc.JavaScriptDistLib.Screen.setProperty["y"]("MainScreen", 100); // Block#: 162
      com.fc.JavaScriptDistLib.Screen.setProperty["width"]("MainScreen", 480); // Block#: 164
      com.fc.JavaScriptDistLib.Screen.setProperty["height"]("MainScreen", 800); // Block#: 166
      com.fc.JavaScriptDistLib.Screen.setProperty["Background image"]("MainScreen", ('img/blank_image.svg')); // Block#: 168
      com.fc.JavaScriptDistLib.Screen.setProperty["Background color"]("MainScreen", '#ffffff');
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  };
  com.fc.JavaScriptDistLib.Screen.screenDict['orientationMainScreen'] = on_screen_orientation_changeMainScreen;
  // Block#: 170
  function on_Button11_click() {
    try {
      // Block#: 171
      com.fc.JavaScriptDistLib.Screen.setProperty["x"]("MainScreen", (com.fc.JavaScriptDistLib.Screen.getProperty["x"]("MainScreen") - 0)); // Block#: 175
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label7", (String('X :  ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Screen.getProperty["x"]("MainScreen")))));
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="Button11"]').on('click', on_Button11_click);
  // Block#: 180
  function on_screen_orientation_changeScreen2(new_orientation) {
    try {
      // Block#: 181
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label10", 'ORIENTATION CHANGED:  RESET all properties! '); // Block#: 183
      com.fc.JavaScriptDistLib.Screen.setProperty["Background color"]("Screen2", '#ffffff'); // Block#: 185
      com.fc.JavaScriptDistLib.Screen.setProperty["Background image"]("Screen4", ('img/blank_image.svg'));
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  };
  com.fc.JavaScriptDistLib.Screen.screenDict['orientationScreen2'] = on_screen_orientation_changeScreen2;
  // Block#: 187
  function on_Button12_click() {
    try {
      // Block#: 188
      com.fc.JavaScriptDistLib.Screen.setProperty["y"]("MainScreen", (com.fc.JavaScriptDistLib.Screen.getProperty["y"]("MainScreen") - 50)); // Block#: 192
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label8", (String('Y :  ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Screen.getProperty["y"]("MainScreen")))));
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="Button12"]').on('click', on_Button12_click);
  // Block#: 198
  function on_screen_orientation_changeScreen3(new_orientation) {
    try {
      // Block#: 199
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label11", 'ORIENTATION CHANGED:  RESET all properties! '); // Block#: 201
      com.fc.JavaScriptDistLib.Screen.setProperty["Background image"]("Screen4", ('img/blank_image.svg')); // Block#: 203
      com.fc.JavaScriptDistLib.Screen.setProperty["Background color"]("Screen3", '#ffffff');
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  };
  com.fc.JavaScriptDistLib.Screen.screenDict['orientationScreen3'] = on_screen_orientation_changeScreen3;
  // Block#: 205
  function on_screen_orientation_changeScreen4(new_orientation) {
    try {
      // Block#: 206
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label12", 'ORIENTATION CHANGED:  RESET all properties! '); // Block#: 208
      com.fc.JavaScriptDistLib.Screen.setProperty["Background color"]("Screen4", '#ffffff'); // Block#: 210
      com.fc.JavaScriptDistLib.Screen.setProperty["Background image"]("Screen4", ('img/blank_image.svg'));
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  };
  com.fc.JavaScriptDistLib.Screen.screenDict['orientationScreen4'] = on_screen_orientation_changeScreen4;
  com.fc.JavaScriptDistLib.Screen.screenPopInit();
  com.fc.JavaScriptDistLib.Screen.screenOrientationInit();
  $('[obj-name="MainScreen"]').show();
});
// Generated by snapp
// 32961-298686-735342-415891
