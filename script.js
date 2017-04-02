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
  let on_screen_createScreen3 = function() {
    try {
      // Block#: 18
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label11", 'Screen3 CREATED!');
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  }();
  // Block#: 20
  function on_Button3_click() {
    try {
      // Block#: 21
      com.fc.JavaScriptDistLib.Screen.setProperty["width"]("MainScreen", (com.fc.JavaScriptDistLib.Screen.getProperty["width"]("MainScreen") + 50)); // Block#: 25
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label5", (String('WIDTH :  ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Screen.getProperty["width"]("MainScreen")))));
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="Button3"]').on('click', on_Button3_click);
  // Block#: 30
  function on_Button2_click() {
    try {
      // Block#: 31
      com.fc.JavaScriptDistLib.Screen.setProperty["Background image"]("MainScreen", ('https://local.snapp.click/api/v2/raws/projects/resources/64bc0895-3d2e-43c1-b751-1329ff0bdcca'));
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="Button2"]').on('click', on_Button2_click);
  // Block#: 43
  function on_Button7_click() {
    try {
      // Block#: 44
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
  // Block#: 33
  function on_Button4_click() {
    try {
      // Block#: 34
      com.fc.JavaScriptDistLib.Screen.setProperty["height"]("MainScreen", (com.fc.JavaScriptDistLib.Screen.getProperty["height"]("MainScreen") + 50)); // Block#: 38
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label6", (String('HEIGHT :  ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Screen.getProperty["height"]("MainScreen")))));
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="Button4"]').on('click', on_Button4_click);
  // Block#: 47
  function on_Button13_click() {
    try {
      // Block#: 48
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
  // Block#: 61
  function on_screen_showScreen2() {
    try {
      // Block#: 62
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label10", 'Screen2 shown!'); // Block#: 64
      com.fc.JavaScriptDistLib.Screen.setProperty["Background color"]("Screen2", '#33ff33'); // Block#: 185
      com.fc.JavaScriptDistLib.Screen.setProperty["Background image"]("Screen2", ('https://local.snapp.click/api/v2/raws/projects/resources/126ec9fc-9f80-44e6-b9c3-bee3c0f45e9e'));
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  };
  $('[obj-name="Screen2"]').on('show', on_screen_showScreen2);
  // Block#: 45
  function on_Button9_click() {
    try {
      // Block#: 46
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
  // Block#: 49
  function on_Button14_click() {
    try {
      // Block#: 50
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
  // Block#: 51
  function on_Button10_click() {
    try {
      // Block#: 52
      com.fc.JavaScriptDistLib.Screen.setProperty["width"]("MainScreen", (com.fc.JavaScriptDistLib.Screen.getProperty["width"]("MainScreen") - 50)); // Block#: 56
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label5", (String('WIDTH :  ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Screen.getProperty["width"]("MainScreen")))));
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="Button10"]').on('click', on_Button10_click);
  // Block#: 66
  function on_screen_showScreen3() {
    try {
      // Block#: 67
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label11", 'Screen3 shown!'); // Block#: 69
      com.fc.JavaScriptDistLib.Screen.setProperty["Background color"]("Screen3", '#33ffff');
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  };
  $('[obj-name="Screen3"]').on('show', on_screen_showScreen3);
  // Block#: 71
  function on_screen_hideScreen2() {
    try {
      // Block#: 72
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label10", 'Screen2 has been hidden'); // Block#: 74
      com.fc.JavaScriptDistLib.Screen.setProperty["Background color"]("Screen2", '#ff6666');
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  };
  $('[obj-name="Screen2"]').on('hide', on_screen_hideScreen2);
  // Block#: 76
  function on_Button8_click() {
    try {
      // Block#: 77
      com.fc.JavaScriptDistLib.Screen.setProperty["height"]("MainScreen", (com.fc.JavaScriptDistLib.Screen.getProperty["height"]("MainScreen") - 50)); // Block#: 81
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label6", (String('HEIGHT :  ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Screen.getProperty["height"]("MainScreen")))));
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="Button8"]').on('click', on_Button8_click);
  // Block#: 86
  let on_screen_back_button_pressScreen4 = function() {
    try {
      // Block#: 87
      com.fc.JavaScriptDistLib.Screen.setProperty["Background color"]("Screen4", '#ffffff'); // Block#: 89
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label13", 'BACK BUTTON PRESSED');
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  };
  com.fc.JavaScriptDistLib.Screen.screenDict['backScreen4'] = on_screen_back_button_pressScreen4;
  // Block#: 91
  function on_screen_showScreen4() {
    try {
      // Block#: 92
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label12", 'Screen4 shown!'); // Block#: 94
      com.fc.JavaScriptDistLib.Screen.setProperty["Background color"]("Screen4", '#cc66cc');
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  };
  $('[obj-name="Screen4"]').on('show', on_screen_showScreen4);
  // Block#: 96
  function on_Button5_click() {
    try {
      // Block#: 97
      com.fc.JavaScriptDistLib.Screen.setProperty["x"]("MainScreen", (com.fc.JavaScriptDistLib.Screen.getProperty["x"]("MainScreen") + 50)); // Block#: 101
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label7", (String('X :  ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Screen.getProperty["x"]("MainScreen")))));
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="Button5"]').on('click', on_Button5_click);
  // Block#: 106
  function on_screen_hideScreen4() {
    try {
      // Block#: 107
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label12", 'Screen4 has been hidden'); // Block#: 109
      com.fc.JavaScriptDistLib.Screen.setProperty["Background color"]("Screen4", '#333399');
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  };
  $('[obj-name="Screen4"]').on('hide', on_screen_hideScreen4);
  // Block#: 111
  function on_screen_orientation_changeMainScreen(new_orientation) {
    try {
      // Block#: 112
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label9", 'ORIENTATION CHANGED: RESET all properties! '); // Block#: 114
      com.fc.JavaScriptDistLib.Screen.setProperty["x"]("MainScreen", 172); // Block#: 116
      com.fc.JavaScriptDistLib.Screen.setProperty["y"]("MainScreen", 100); // Block#: 118
      com.fc.JavaScriptDistLib.Screen.setProperty["width"]("MainScreen", 480); // Block#: 120
      com.fc.JavaScriptDistLib.Screen.setProperty["height"]("MainScreen", 800); // Block#: 122
      com.fc.JavaScriptDistLib.Screen.setProperty["Background image"]("MainScreen", ('img/blank_image.svg')); // Block#: 124
      com.fc.JavaScriptDistLib.Screen.setProperty["Background color"]("MainScreen", '#ffffff');
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  };
  com.fc.JavaScriptDistLib.Screen.screenDict['orientationMainScreen'] = on_screen_orientation_changeMainScreen;
  // Block#: 126
  function on_Button6_click() {
    try {
      // Block#: 127
      com.fc.JavaScriptDistLib.Screen.setProperty["y"]("MainScreen", (com.fc.JavaScriptDistLib.Screen.getProperty["y"]("MainScreen") + 50)); // Block#: 131
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label8", (String('Y :  ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Screen.getProperty["y"]("MainScreen")))));
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="Button6"]').on('click', on_Button6_click);
  // Block#: 136
  function on_screen_orientation_changeScreen2(new_orientation) {
    try {
      // Block#: 137
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label10", 'ORIENTATION CHANGED:  RESET all properties! '); // Block#: 139
      com.fc.JavaScriptDistLib.Screen.setProperty["Background color"]("Screen2", '#ffffff');
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  };
  com.fc.JavaScriptDistLib.Screen.screenDict['orientationScreen2'] = on_screen_orientation_changeScreen2;
  // Block#: 141
  function on_screen_orientation_changeScreen3(new_orientation) {
    try {
      // Block#: 142
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label11", 'ORIENTATION CHANGED:  RESET all properties! '); // Block#: 144
      com.fc.JavaScriptDistLib.Screen.setProperty["Background color"]("Screen3", '#ffffff');
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  };
  com.fc.JavaScriptDistLib.Screen.screenDict['orientationScreen3'] = on_screen_orientation_changeScreen3;
  // Block#: 146
  function on_Button11_click() {
    try {
      // Block#: 147
      com.fc.JavaScriptDistLib.Screen.setProperty["x"]("MainScreen", (com.fc.JavaScriptDistLib.Screen.getProperty["x"]("MainScreen") - 0)); // Block#: 151
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label7", (String('X :  ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Screen.getProperty["x"]("MainScreen")))));
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="Button11"]').on('click', on_Button11_click);
  // Block#: 156
  function on_screen_orientation_changeScreen4(new_orientation) {
    try {
      // Block#: 157
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label12", 'ORIENTATION CHANGED:  RESET all properties! '); // Block#: 159
      com.fc.JavaScriptDistLib.Screen.setProperty["Background color"]("Screen3", '#ffffff');
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  };
  com.fc.JavaScriptDistLib.Screen.screenDict['orientationScreen4'] = on_screen_orientation_changeScreen4;
  // Block#: 161
  function on_Button12_click() {
    try {
      // Block#: 162
      com.fc.JavaScriptDistLib.Screen.setProperty["y"]("MainScreen", (com.fc.JavaScriptDistLib.Screen.getProperty["y"]("MainScreen") - 50)); // Block#: 166
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label8", (String('Y :  ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Screen.getProperty["y"]("MainScreen")))));
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="Button12"]').on('click', on_Button12_click);
  com.fc.JavaScriptDistLib.Screen.screenPopInit();
  com.fc.JavaScriptDistLib.Screen.screenOrientationInit();
  $('[obj-name="MainScreen"]').show();
});
// Generated by snapp
// 749444-700043-308246-917392
