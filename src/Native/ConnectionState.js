Elm.Native = Elm.Native || {};
Elm.Native.ConnectionState = {};

Elm.Native.ConnectionState.make = function(localRuntime) {
    localRuntime.Native = localRuntime.Native || {};
    localRuntime.Native.ConnectionState = localRuntime.Native.ConnectionState || {};

    if (localRuntime.Native.ConnectionState.values) {
        return localRuntime.Native.ConnectionState.values;
    }

    var NativeSignal = Elm.Native.Signal.make(localRuntime);

    // online : Signal Bool
    var online = NativeSignal.input('ConnectionState.online', navigator.onLine);

    localRuntime.addListener([online.id], window.document.body, 'online', notify);
    localRuntime.addListener([online.id], window.document.body, 'offline', notify);

    function notify() {
        localRuntime.notify(online.id, navigator.onLine);
    }

    return {
        online: online
    };
};
