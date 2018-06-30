/*
 * Handlebars / Moment
 *
 * Copyright (C) 2016 Boris Raicheff
 * All rights reserved
 */

(function(global, factory) {

  if (typeof exports === "object") {
    module.exports = factory(require("handlebars"), require("moment"));
  } else if (typeof define === "function" && define.amd) {
    define(["handlebars", "moment"], factory);
  } else {
    factory(global.Handlebars, global.moment);
  }

})(this, function(Handlebars, moment) {

  "use strict";

  var helpers = {

    /*
     * {{from-now unix-timestamp}}
     * {{from-now value format="unix"}}
     */
    "from-now": function(context, options) {
      // return moment.unix(context).fromNow();
      return context ? moment(context).fromNow() : context;
    },

    /*
     * {{format-date value format="short"}}
     */
    "format-date": function(datetime, format, options) {
      var LUT = {
        short: "DD MMMM YYYY",
        long:  "dddd DD.MM.YYYY HH:mm"
      };
      return moment(datetime).format(LUT[format]);
    }

  };

  // Register helpers
  Object.keys(helpers).forEach(function(name) { Handlebars.registerHelper(name, this[name]); }, helpers);

});

/* EOF */
