module ConnectionMonitor where

import ConnectionState
import Graphics.Element exposing (Element, show)

main : Signal Element
main =
    Signal.map show ConnectionState.online
