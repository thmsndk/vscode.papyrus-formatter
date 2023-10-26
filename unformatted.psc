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



; This line shoul move up below the other comment
