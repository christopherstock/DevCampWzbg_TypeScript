
    /************************************************************************************
    *   Manages the Heads Up Display.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    ************************************************************************************/
    class MfgHUD
    {
        /** The FPS display. */
        public                      fpsMeter                :FPSMeter                       = null;

        /************************************************************************************
        *   Instanciates the HUD.
        ************************************************************************************/
        public constructor()
        {
            this.fpsMeter = new FPSMeter(
                null,
                {
                    graph:    1,
                    decimals: 1,
                    position: "absolute",
                    zIndex:   10,
                    right:    "5px",
                    top:      "auto",
                    left:     "auto",
                    bottom:   "5px",
                    margin:   "0",
                    heat:     0
                }
            );

            var options:FPSMeterOptions = this.fpsMeter.options;

            options.heat = 1;

        }
    }
