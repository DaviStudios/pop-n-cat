gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDCatObjects1= [];
gdjs.Untitled_32sceneCode.GDCatObjects2= [];
gdjs.Untitled_32sceneCode.GDCatObjects3= [];
gdjs.Untitled_32sceneCode.GDsocretextObjects1= [];
gdjs.Untitled_32sceneCode.GDsocretextObjects2= [];
gdjs.Untitled_32sceneCode.GDsocretextObjects3= [];
gdjs.Untitled_32sceneCode.GDscorevalueObjects1= [];
gdjs.Untitled_32sceneCode.GDscorevalueObjects2= [];
gdjs.Untitled_32sceneCode.GDscorevalueObjects3= [];
gdjs.Untitled_32sceneCode.GDsettingsbutObjects1= [];
gdjs.Untitled_32sceneCode.GDsettingsbutObjects2= [];
gdjs.Untitled_32sceneCode.GDsettingsbutObjects3= [];
gdjs.Untitled_32sceneCode.GDsettabObjects1= [];
gdjs.Untitled_32sceneCode.GDsettabObjects2= [];
gdjs.Untitled_32sceneCode.GDsettabObjects3= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects1= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects2= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects3= [];
gdjs.Untitled_32sceneCode.GDsettabcloseObjects1= [];
gdjs.Untitled_32sceneCode.GDsettabcloseObjects2= [];
gdjs.Untitled_32sceneCode.GDsettabcloseObjects3= [];
gdjs.Untitled_32sceneCode.GDOnScreenControlsButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDOnScreenControlsButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDOnScreenControlsButtonObjects3= [];
gdjs.Untitled_32sceneCode.GDOnScreenControlsButton2Objects1= [];
gdjs.Untitled_32sceneCode.GDOnScreenControlsButton2Objects2= [];
gdjs.Untitled_32sceneCode.GDOnScreenControlsButton2Objects3= [];
gdjs.Untitled_32sceneCode.GDOnScreenControlsButton3Objects1= [];
gdjs.Untitled_32sceneCode.GDOnScreenControlsButton3Objects2= [];
gdjs.Untitled_32sceneCode.GDOnScreenControlsButton3Objects3= [];
gdjs.Untitled_32sceneCode.GDOnScreenControlsButton4Objects1= [];
gdjs.Untitled_32sceneCode.GDOnScreenControlsButton4Objects2= [];
gdjs.Untitled_32sceneCode.GDOnScreenControlsButton4Objects3= [];
gdjs.Untitled_32sceneCode.GDasObjects1= [];
gdjs.Untitled_32sceneCode.GDasObjects2= [];
gdjs.Untitled_32sceneCode.GDasObjects3= [];


gdjs.Untitled_32sceneCode.asyncCallback10421740 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Cat"), gdjs.Untitled_32sceneCode.GDCatObjects2);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCatObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCatObjects2[i].setAnimation(0);
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}}
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Untitled_32sceneCode.GDCatObjects1) asyncObjectsList.addObject("Cat", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback10421740(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDasObjects2Objects = Hashtable.newFrom({"as": gdjs.Untitled_32sceneCode.GDasObjects2});
gdjs.Untitled_32sceneCode.asyncCallback7834260 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("as"), gdjs.Untitled_32sceneCode.GDasObjects3);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDasObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDasObjects3[i].deleteFromScene(runtimeScene);
}
}}
gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.Untitled_32sceneCode.GDasObjects2) asyncObjectsList.addObject("as", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback7834260(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.asyncCallback10302692 = function (runtimeScene, asyncObjectsList) {
gdjs.Untitled_32sceneCode.GDasObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDasObjects2Objects, 56, 147, "");
}{gdjs.fileSystem.saveStringToFile(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))), "locales/ra.pak", gdjs.VariablesContainer.badVariable);
}{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(60), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback10302692(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cat"), gdjs.Untitled_32sceneCode.GDCatObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDCatObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDCatObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDCatObjects1[k] = gdjs.Untitled_32sceneCode.GDCatObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDCatObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 0;
isConditionTrue_0 = isConditionTrue_1;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDCatObjects1 */
gdjs.copyArray(runtimeScene.getObjects("scorevalue"), gdjs.Untitled_32sceneCode.GDscorevalueObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDscorevalueObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDscorevalueObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCatObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCatObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("settabclose"), gdjs.Untitled_32sceneCode.GDsettabcloseObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDsettabcloseObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDsettabcloseObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDsettabcloseObjects1[k] = gdjs.Untitled_32sceneCode.GDsettabcloseObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDsettabcloseObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton"), gdjs.Untitled_32sceneCode.GDOnScreenControlsButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton2"), gdjs.Untitled_32sceneCode.GDOnScreenControlsButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton3"), gdjs.Untitled_32sceneCode.GDOnScreenControlsButton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton4"), gdjs.Untitled_32sceneCode.GDOnScreenControlsButton4Objects1);
gdjs.copyArray(runtimeScene.getObjects("settab"), gdjs.Untitled_32sceneCode.GDsettabObjects1);
/* Reuse gdjs.Untitled_32sceneCode.GDsettabcloseObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDsettabcloseObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDsettabcloseObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDsettabObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDsettabObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDOnScreenControlsButtonObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDOnScreenControlsButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDOnScreenControlsButton2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDOnScreenControlsButton2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDsettabcloseObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDsettabcloseObjects1[i].activateBehavior("ButtonFSM", false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDOnScreenControlsButtonObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDOnScreenControlsButtonObjects1[i].activateBehavior("ButtonFSM", false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDOnScreenControlsButton2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDOnScreenControlsButton2Objects1[i].activateBehavior("ButtonFSM", false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDOnScreenControlsButton3Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDOnScreenControlsButton3Objects1[i].activateBehavior("ButtonFSM", false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDOnScreenControlsButton4Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDOnScreenControlsButton4Objects1[i].activateBehavior("ButtonFSM", false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDOnScreenControlsButton3Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDOnScreenControlsButton3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDOnScreenControlsButton4Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDOnScreenControlsButton4Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("settingsbut"), gdjs.Untitled_32sceneCode.GDsettingsbutObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDsettingsbutObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDsettingsbutObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDsettingsbutObjects1[k] = gdjs.Untitled_32sceneCode.GDsettingsbutObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDsettingsbutObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton"), gdjs.Untitled_32sceneCode.GDOnScreenControlsButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton2"), gdjs.Untitled_32sceneCode.GDOnScreenControlsButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton3"), gdjs.Untitled_32sceneCode.GDOnScreenControlsButton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton4"), gdjs.Untitled_32sceneCode.GDOnScreenControlsButton4Objects1);
gdjs.copyArray(runtimeScene.getObjects("settab"), gdjs.Untitled_32sceneCode.GDsettabObjects1);
gdjs.copyArray(runtimeScene.getObjects("settabclose"), gdjs.Untitled_32sceneCode.GDsettabcloseObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDsettabcloseObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDsettabcloseObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDsettabObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDsettabObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDOnScreenControlsButtonObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDOnScreenControlsButtonObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDOnScreenControlsButton2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDOnScreenControlsButton2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDsettabcloseObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDsettabcloseObjects1[i].activateBehavior("ButtonFSM", true);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDOnScreenControlsButtonObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDOnScreenControlsButtonObjects1[i].activateBehavior("ButtonFSM", true);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDOnScreenControlsButton2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDOnScreenControlsButton2Objects1[i].activateBehavior("ButtonFSM", true);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDOnScreenControlsButton3Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDOnScreenControlsButton3Objects1[i].activateBehavior("ButtonFSM", true);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDOnScreenControlsButton4Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDOnScreenControlsButton4Objects1[i].activateBehavior("ButtonFSM", true);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDOnScreenControlsButton3Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDOnScreenControlsButton3Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDOnScreenControlsButton4Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDOnScreenControlsButton4Objects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton"), gdjs.Untitled_32sceneCode.GDOnScreenControlsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDOnScreenControlsButtonObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDOnScreenControlsButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDOnScreenControlsButtonObjects1[k] = gdjs.Untitled_32sceneCode.GDOnScreenControlsButtonObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDOnScreenControlsButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.fileSystem.saveStringToFile(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))), "locales/ra.pak", gdjs.VariablesContainer.badVariable);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton2"), gdjs.Untitled_32sceneCode.GDOnScreenControlsButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDOnScreenControlsButton2Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDOnScreenControlsButton2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDOnScreenControlsButton2Objects1[k] = gdjs.Untitled_32sceneCode.GDOnScreenControlsButton2Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDOnScreenControlsButton2Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("scorevalue"), gdjs.Untitled_32sceneCode.GDscorevalueObjects1);
{gdjs.fileSystem.loadStringFromFile(runtimeScene.getScene().getVariables().getFromIndex(0), "locales/ra.pak", gdjs.VariablesContainer.badVariable, true);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDscorevalueObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDscorevalueObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton"), gdjs.Untitled_32sceneCode.GDOnScreenControlsButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton2"), gdjs.Untitled_32sceneCode.GDOnScreenControlsButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton3"), gdjs.Untitled_32sceneCode.GDOnScreenControlsButton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton4"), gdjs.Untitled_32sceneCode.GDOnScreenControlsButton4Objects1);
gdjs.copyArray(runtimeScene.getObjects("settab"), gdjs.Untitled_32sceneCode.GDsettabObjects1);
gdjs.copyArray(runtimeScene.getObjects("settabclose"), gdjs.Untitled_32sceneCode.GDsettabcloseObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDsettabcloseObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDsettabcloseObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDsettabObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDsettabObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDOnScreenControlsButtonObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDOnScreenControlsButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDOnScreenControlsButton2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDOnScreenControlsButton2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDsettabcloseObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDsettabcloseObjects1[i].activateBehavior("ButtonFSM", false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDOnScreenControlsButton2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDOnScreenControlsButton2Objects1[i].activateBehavior("ButtonFSM", false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDOnScreenControlsButtonObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDOnScreenControlsButtonObjects1[i].activateBehavior("ButtonFSM", false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDOnScreenControlsButton3Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDOnScreenControlsButton3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDOnScreenControlsButton4Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDOnScreenControlsButton4Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton3"), gdjs.Untitled_32sceneCode.GDOnScreenControlsButton3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDOnScreenControlsButton3Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDOnScreenControlsButton3Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDOnScreenControlsButton3Objects1[k] = gdjs.Untitled_32sceneCode.GDOnScreenControlsButton3Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDOnScreenControlsButton3Objects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) == 1;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton4"), gdjs.Untitled_32sceneCode.GDOnScreenControlsButton4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDOnScreenControlsButton4Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDOnScreenControlsButton4Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDOnScreenControlsButton4Objects1[k] = gdjs.Untitled_32sceneCode.GDOnScreenControlsButton4Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDOnScreenControlsButton4Objects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDCatObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCatObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCatObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDsocretextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDsocretextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDsocretextObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDscorevalueObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDscorevalueObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDscorevalueObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDsettingsbutObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDsettingsbutObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDsettingsbutObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDsettabObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDsettabObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDsettabObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDsettabcloseObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDsettabcloseObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDsettabcloseObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDOnScreenControlsButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDOnScreenControlsButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDOnScreenControlsButtonObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDOnScreenControlsButton2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDOnScreenControlsButton2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDOnScreenControlsButton2Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDOnScreenControlsButton3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDOnScreenControlsButton3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDOnScreenControlsButton3Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDOnScreenControlsButton4Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDOnScreenControlsButton4Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDOnScreenControlsButton4Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDasObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDasObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDasObjects3.length = 0;

gdjs.Untitled_32sceneCode.eventsList3(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
