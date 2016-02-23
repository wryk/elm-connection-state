module ConnectionState where

{-| Bindings to Browser State API

@docs offline, online

-}

import Basics exposing (not)
import Native.ConnectionState
import Signal exposing (Signal)

{-|-}
offline : Signal Bool
offline =
    Signal.map not Native.ConnectionState.online

{-|-}
online : Signal Bool
online =
    Native.ConnectionState.online
