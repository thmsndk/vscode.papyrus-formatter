Scriptname Test extends Quest

    GlobalVariable Property TestProp Auto

    Event OnConfigInit()
                        ModName = "Test Mod"
                    EndEvent

Function OnRewardSliderOpen(int a_option)
; This is a test
   ; And another
                  ; And a third
EndFunction 

Function OnRewardSliderOpen(int a_option)
EndFunction 
Function OnRewardSliderOpen(int a_option)
    ; There should be an empty line between the two functions
EndFunction 
; After this we have a bunch of empty newlines



; This line should move up below the other comment, but with one newlinebetween
; This line should stay here

; This line should also stay here
SetCursorFillMode(TOP_TO_BOTTOM)
; This line should get a new line above it



; This line should also stay here
SetCursorFillMode(TOP_TO_BOTTOM)

; This line should stay here

Function LogInfo(String message) Global Native
Function LogWarn(String message) Global Native
Function LogError(String message) Global Native
Function LogDebug(String message) Global Native
Int Function CreateSoundEvent(String name) Global Native
Function AddStringVariableToSoundEvent(Int handle, String name, String value) Global Native
Function AddIntVariableToSoundEvent(Int handle, String name, Int _value) Global Native
Function AddFloatVariableToSoundEvent(Int handle, String _name, Float value) Global Native
Function AddBoolVariableToSoundEvent(Int handle, String name, Bool _value) Global Native
Function AddFormVariableToSoundEvent(Int handle, String name, Form _value) Global Native
Function SendSoundEvent(Int handle) Global Native