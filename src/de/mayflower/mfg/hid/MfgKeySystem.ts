
    /*****************************************************************************
    *   The key system manages all pressed keys.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *****************************************************************************/
    class MfgKeySystem
    {
        /** The keycode that represents the 'ARROW LEFT' key. */
        public      static  KEY_LEFT        :number                             = 37;
        /** The keycode that represents the 'ARROW UP' key. */
        public      static  KEY_UP          :number                             = 38;
        /** The keycode that represents the 'ARROW RIGHT' key. */
        public      static  KEY_RIGHT       :number                             = 39;
        /** The keycode that represents the 'ARROW DOWN' key. */
        public      static  KEY_DOWN        :number                             = 40;

        /** The keycode that represents the 'ENTER' key. */
        public      static  KEY_ENTER       :number                             = 13;
        /** The keycode that represents the 'ESCAPE' key. */
        public      static  KEY_ESCAPE      :number                             = 27;
        /** The keycode that represents the 'SPACE' key. */
        public      static  KEY_SPACE       :number                             = 32;

        /** The keycode that represents the '1' key. */
        public      static  KEY_1           :number                             = 49;

        /** All 'pressed' states for all keys. */
        private             pressed         :Array<boolean>                     = null;
        /** All 'needsRelease' states for all keys. */
        private             needsRelease    :Array<boolean>                     = null;

        /*****************************************************************************
        *   Creates a new key object.
        *****************************************************************************/
        public constructor()
        {
            this.pressed      = [];
            this.needsRelease = [];

            var onKeyDown:any = this.handleKeyDown;
            var onKeyUp:any   = this.handleKeyUp;

            //set event listener for keyboard devices - all but IE
            window.addEventListener( "keydown",     onKeyDown, false );
            window.addEventListener( "keyup",       onKeyUp,   false );

            //set event listener for keyboard devices - IE
            window.addEventListener( "onkeydown",   onKeyDown, false );
            window.addEventListener( "onkeyup",     onKeyUp,   false );
        }

        /*****************************************************************************
        *   This method is always invoked by the system if a key is pressed.
        *
        *   @param evt The system's propagated key event.
        *****************************************************************************/
        public handleKeyDown =( evt:KeyboardEvent )=>
        {
            var keyCode = evt.which;

            if ( !this.needsRelease[ keyCode ] )
            {
                this.pressed[ keyCode ] = true;
            }

            MfgDebug.log( "key pressed ["  + keyCode + "]" );
        };

        /*****************************************************************************
        *   This method is always invoked by the system if a key is released.
        *
        *   @param evt The system's propagated key event.
        *****************************************************************************/
        public handleKeyUp = ( evt:KeyboardEvent )=>
        {
            var keyCode = evt.which;

            this.pressed[      keyCode ] = false;
            this.needsRelease[ keyCode ] = false;

            MfgDebug.log( "key released ["  + keyCode + "]" );
        };

        /*****************************************************************************
        *   Checks if the key with the given keyCode is currently pressed.
        *
        *   @param keyCode The keyCode of the key to return pressed state.
        *   @return        <code>true</code> if this key is currently pressed.
        *                  Otherwise <code>false</code>.
        *****************************************************************************/
        public isPressed( keyCode:number ):boolean
        {
            return this.pressed[ keyCode ];
        }

        /*****************************************************************************
        *   Flags that a key needs release before the next keyDown-events is accepted.
        *   The current 'pressed' state for this key is cleared in addition.
        *
        *   @param keyCode The keyCode of the key that needs release.
        *****************************************************************************/
        public setNeedsRelease( keyCode:number ):void
        {
            this.needsRelease[ keyCode ] = true;
            this.pressed[      keyCode ] = false;
        }
    }
