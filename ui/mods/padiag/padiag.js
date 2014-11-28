(function() {
  var getMountedMods = function(context) {
    var promise = $.Deferred()
    api.mods.getMountedMods(context, function(mods) {promise.resolve(mods)})
    return promise
  }

  var capture = function() {
    var promise = $.Deferred()
    var cp = getMountedMods('client')
    var sp = getMountedMods('server')
    $.when(cp, sp).then(function(client, server) {
      promise.resolve({
        date: (new Date().toJSON()),
        client_mods: client,
        server_mods: server,
        scene_mod_list: scene_mod_list,
        global_mod_list: global_mod_list
      })
    })
    return promise
  }

  var saveReport = function(report) {
    // not that it's used at the moment
    var suggestedFilename = 'padiag-' + report.date + '.json'

    api.file.saveDialog(suggestedFilename, JSON.stringify(report, null, 2));
  }

  action_sets.debugging.padiag = function () {
    console.log('Gathering info for PA-Diag')
    capture().then(function(dump) {
      console.log(dump)
      saveReport(dump)
    })
  }
  api.settings.definitions.keyboard.settings.padiag = {
    title: 'PA-Diag',
    type: 'keybind',
    set: 'mods',
    display_group: 'mods',
    display_sub_group: 'PA-Diag',
    default: 'shift+ctrl+alt+d'
  }
  api.Panel.message('', 'inputmap.reload');
})()
