
    /*****************************************************************************
    *   The main class that contains the points of entry and termination.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *****************************************************************************/
    class Mfg
    {
        /** The game instance. */
        public      static      game            :MfgGame                = null;

        /*****************************************************************************
        *   Being invoked when the application starts.
        *****************************************************************************/
        public static main():void
        {
            Mfg.game = new MfgGame();
            Mfg.game.init();
        }
    }

    /*****************************************************************************
    *   The application's point of entry.
    *****************************************************************************/
    window.onload = function()
    {
        Mfg.main();
    };

    /*****************************************************************************
    *   The application's point of termination.
    *****************************************************************************/
    window.onunload = function()
    {
    };
