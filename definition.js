Blockly.Blocks['sevensecdisplay_create'] = {     init: function () {         this.jsonInit({             "type": "sevensecdisplay_create",             "message0": "Tạo LED 7 đoạn %1 với chân CLK %2  và chân DIO %3",             "args0": [                 {                     "type": "field_variable",                     "name": "sevenSegment_Display",                     "variable": "LED",                 },                 {                     "type": "field_dropdown",                     "name": "CLK",                     "options": [                         [                             "P0",                             "pin0"                         ],                         [                             "P1",                             "pin1"                         ],                         [                             "P2",                             "pin2"                         ],                         [                             "P3",                             "pin3"                         ],                         [                             "P4",                             "pin4"                         ],                         [                             "P5",                             "pin5"                         ],                         [                             "P6",                             "pin6"                         ],                         [                             "P7",                             "pin7"                         ],                         [                             "P8",                             "pin8"                         ],                         [                             "P9",                             "pin9"                         ],                         [                             "P10",                             "pin10"                         ],                         [                             "P11",                             "pin11"                         ],                         [                             "P12",                             "pin12"                         ],                         [                             "P13",                             "pin13"                         ],                         [                             "P14",                             "pin14"                         ],                         [                             "P15",                             "pin15"                         ],                         [                             "P16",                             "pin16"                         ],                         [                             "P19",                             "pin19"                         ],                         [                             "P20",                             "pin20"                         ]                     ]                 },                 {                     "type": "field_dropdown",                     "name": "DIO",                     "options": [                         [                             "P0",                             "pin0"                         ],                         [                             "P1",                             "pin1"                         ],                         [                             "P2",                             "pin2"                         ],                         [                             "P3",                             "pin3"                         ],                         [                             "P4",                             "pin4"                         ],                         [                             "P5",                             "pin5"                         ],                         [                             "P6",                             "pin6"                         ],                         [                             "P7",                             "pin7"                         ],                         [                             "P8",                             "pin8"                         ],                         [                             "P9",                             "pin9"                         ],                         [                             "P10",                             "pin10"                         ],                         [                             "P11",                             "pin11"                         ],                         [                             "P12",                             "pin12"                         ],                         [                             "P13",                             "pin13"                         ],                         [                             "P14",                             "pin14"                         ],                         [                             "P15",                             "pin15"                         ],                         [                             "P16",                             "pin16"                         ],                         [                             "P19",                             "pin19"                         ],                         [                             "P20",                             "pin20"                         ]                     ]                 }             ],             "inputsInline": true,             "previousStatement": null,             "nextStatement": null,             "colour": 180,             "tooltip": "",             "helpUrl": ""         });     } };  Blockly.Python['sevensecdisplay_create'] = function (block) {     var variable_sevenSec = Blockly.Python.variableDB_.getName(block.getFieldValue('sevenSegment_Display'), Blockly.Variables.NAME_TYPE);     var dropdown_CLK = block.getFieldValue('CLK');     var dropdown_DIO = block.getFieldValue('DIO');     // TODO: Assemble Python into code variable.     Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';     Blockly.Python.definitions_['import_tm1637'] = 'import tm1637 ';     var code = variable_sevenSec + ' = tm1637.TM1637Decimal(clk = ' + dropdown_CLK + '.pin , dio =' + dropdown_DIO + '.pin )\n';     return code; };      Blockly.Blocks['hienthi_so'] = {     init: function () {         this.jsonInit(              {                 "type": "hienthi_so",                 "message0": "Hiển thị ra số %1  trên  %2",                 "args0": [                     {                         "type": "input_value",                         "name": "so",                         "check": "Number"                     },                     {                         "type": "field_variable",                         "name": "sevenSegment_Display",                         "variable": "LED"                     }                 ],                 "inputsInline": true,                 "previousStatement": null,                 "nextStatement": null,                 "colour": 180,                 "tooltip": "LED",                 "helpUrl": ""             }         );     } }; Blockly.Python['hienthi_so'] = function (block) {     var value_so = Blockly.Python.valueToCode(block, 'so', Blockly.Python.ORDER_ATOMIC);     var variable_sevensegment_display = Blockly.Python.variableDB_.getName(block.getFieldValue('sevenSegment_Display'), Blockly.Variables.NAME_TYPE);     // TODO: Assemble Python into code variable.     var code = variable_sevensegment_display + '.number(' + value_so + ')\n';     return code; }; Blockly.Blocks['hienthi_chu'] = {     init: function () {         this.jsonInit(             {                 "type": "hienthi_chu",                 "message0": "Hiển thị chữ %1 trên %2 với tốc độ %3 (mili giây)",                 "args0": [                     {                         "type": "input_value",                         "name": "input_char",                         "check": "String"                     },                     {                         "type": "field_variable",                         "name": "sevenSegment_Display",                         "variable": "LED"                     }, {                         "type": "input_value",                         "name": "scroll_speed",                         "check": "Number"                     }                 ],                 "previousStatement": null,                 "nextStatement": null,                 "colour": 180,                 "tooltip": "Hiện chữ",                 "helpUrl": ""             }          );     } };  Blockly.Python['hienthi_chu'] = function (block) {     var variable_sevenSec = Blockly.Python.variableDB_.getName(block.getFieldValue('sevenSegment_Display'), Blockly.Variables.NAME_TYPE);     var value_text = Blockly.Python.valueToCode(block, 'input_char', Blockly.Python.ORDER_ATOMIC);     var scroll_speed = Blockly.Python.valueToCode(block, 'scroll_speed', Blockly.Python.ORDER_ATOMIC);     if ( !(parseInt(scroll_speed) > 0 )) {         scroll_speed = 250;      }         // TODO: Assemble Python into code variable.     //tm.number(-123)     var code = variable_sevenSec + '.scroll( ' + value_text + ',' + scroll_speed + ')\n';     code = code.replace('"', '');     return code; }; Blockly.Blocks['hienthi_nhietdo'] = {     init: function () {         this.jsonInit(             {                 "type": "hienthi_nhietdo",                 "message0": "Hiển thị nhiệt độ %1 theo °C trên  %2",                 "args0": [                     {                         "type": "input_value",                         "name": "temp",                         "check": "Number"                     },                     {                         "type": "field_variable",                         "name": "sevenSegment_Display",                         "variable": "LED"                     }                 ],                 "previousStatement": null,                 "nextStatement": null,                 "colour": 180,                 "tooltip": "Hiển thị nhiệt độ (WIP)",                 "helpUrl": ""             }         );     } };  Blockly.Python['hienthi_nhietdo'] = function (block) {     var value_temp = Blockly.Python.valueToCode(block, 'temp', Blockly.Python.ORDER_ATOMIC);     var variable_sevenSec = Blockly.Python.variableDB_.getName(block.getFieldValue('sevenSegment_Display'), Blockly.Variables.NAME_TYPE);     // TODO: Assemble Python into code variable.     var code = variable_sevenSec + '.temperature(int(' + value_temp + '))\n';     return code; }; Blockly.Blocks['change_contrast'] = {     init: function () {         this.jsonInit(             {                 "type": "change_contrast",                 "message0": "Chỉnh độ sáng thành %1 của LED 7 đoạn %2",                 "args0": [                     {                         "type": "input_value",                         "name": "contrast_value",                         "check": "Number"                     }                     ,                     {                         "type": "field_variable",                         "name": "sevenSegment_Display",                         "variable": "LED"                     }                 ],                 "previousStatement": null,                 "nextStatement": null,                 "colour": 180,                 "tooltip": "giá trị trong khoảng 0 - 7",                 "helpUrl": ""             }         );     } };   Blockly.Python['change_contrast'] = function (block) {     var value_1 = Blockly.Python.valueToCode(block, 'contrast_value', Blockly.Python.ORDER_ATOMIC);     var variable_sevensegment_display = Blockly.Python.variableDB_.getName(block.getFieldValue('sevenSegment_Display'), Blockly.Variables.NAME_TYPE);     // TODO: Assemble Python into code variable.     var code = variable_sevensegment_display + '.brightness( int(' + value_1 +')) \n';     return code; };