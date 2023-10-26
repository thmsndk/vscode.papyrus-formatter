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