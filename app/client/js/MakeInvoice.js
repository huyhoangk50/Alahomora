import "./jqueryqrcode.min"

var bootAddress= "0xDca45834e3C319fb6069E136097f237F512A8Ca6";

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
        Session.set("vehicleFee", 10000);
        localStorage.setItem("vehicleFee", 10000);
    },
    "click .truck-rd": function(event){
        Session.set("vehicleFee", 7000);
        localStorage.setItem("vehicleFee", 7000);
    }
})