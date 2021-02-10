$(document).ready(function () {
  var friendsNameArray = ["Connor", "Jake", "Reagan", "Dan", "Will"];
  var locationNameArray = [
    "Launchpad",
    "Reactor",
    "Laboratory",
    "Decontamination",
    "Locker Room",
    "Communication Room",
    "Medbay",
    "Greenhouse",
    "Electrical Room",
    "Storage",
  ];
  var objectNameArray = [
    "Sixth House Bell Hammer",
    "Orcish Warhammer",
    "Volendrung",
    "Peacemaker",
    "Staff of Chastening",
    "Wizard Staff",
    "Flamebolt",
    "Demon Katana",
    "Eltonbrand",
    "Spirit-Eater",
    "Ice Blade of the Monarch",
    "Fireblade",
    "Sunder",
    "Keening",
    "Mehrunes Razor",
    "Ebony Spear",
    "Flamestar",
    "Steel Claymore",
    "Stormblade",
    "Goldbrand",
  ];

  for (i = 1; i < 101; i++) {
    var accusations = $(`<h3 class='accusations'>Accusation ${i}</h3>`)
    $(accusations).appendTo(`body`);
    $(accusations).click(accusationsFunc(i));
  }
  
  function accusationsFunc(i) {
    var friend = friendsNameArray[i % friendsNameArray.length];
    var object = objectNameArray[i % objectNameArray.length];
    var location = locationNameArray[i % locationNameArray.length];
    function alertFunction(){
      alert(`I accuse ${friend} with the ${object} in the ${location}`);
      
    };
    return alertFunction;
  }
  
});
