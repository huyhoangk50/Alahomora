import "./jqueryqrcode.min"

var bootAddress= "0x5aCD0fEFDE0942570A3C7868F576EE0d9Bb020a1";

Template['make_invoice'].onCreated(function(){
    Session.set("vehicleFee", 5000);
});


Template.make_invoice.helpers({
	vehicleFee: function(){
        var vehicleFee = Session.get("vehicleFee");
        localStorage.setItem("vehicleFee", vehicleFee);
        return vehicleFee;
    },

    data: function () {
        Tracker.afterFlush(function () {
          $('.testqrcode').each(function (i, e) {
            $(e)
              .empty()
              .qrcode({text: $(e).attr('data-qrcode')});
          });
        });
        return bootAddress + ";" + Session.get("vehicleFee");
      }
});

Template.make_invoice.events({
    "click .car-rd": function(event){
        Session.set("vehicleFee", 5000);
        localStorage.setItem("vehicleFee", 5000);
        // url = 5;
    },
    "click .container-rd": function(event){
        Session.set("vehicleFee", 5000);
        localStorage.setItem("vehicleFee", 5000);
    },
    "click .truck-rd": function(event){
        Session.set("vehicleFee", 5000);
        localStorage.setItem("vehicleFee", 5000);
    }
})