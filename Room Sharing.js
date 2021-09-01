const xapi = require('xapi');

function StartPresentation(sources){
    xapi.command('Presentation Start', {PresentationSource: sources });
}

function StopPresentation(){
  xapi.command('Presentation Stop');
}

// Greys out the buttons on the User Speed Dials
function unsetvalue_grey () {
  xapi.command ('userinterface extensions widget unsetvalue', {
    widgetId: "share_1"
    });
}

xapi.event.on('UserInterface Extensions Widget Action', (event) => {
  if (event.WidgetId === 'share_1' && event.Type === 'released') {
    unsetvalue_grey();
    switch (event.Value) {
      case 'pros_pc':
        StartPresentation(4);
        break;
      case 'bailiff_pc':
        StartPresentation(5);
        break;
      case 'stop_share':
        StopPresentation();
        break;
      default:
      }
  return;
 }        
});
