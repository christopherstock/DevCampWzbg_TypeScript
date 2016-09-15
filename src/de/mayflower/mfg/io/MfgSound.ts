
    /*****************************************************************************
    *   Specifies all different sound effects being used in the game.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *****************************************************************************/
    class MfgSound
    {
        /** The sound for the 'background - stickerbrush symphony'. */
        public      static      SOUND_BG_TD2                    :string                 = MfgSetting.PATH_SOUND + "bg1.mp3";

        /** This array contains all filenames of all sounds that shall be loaded. */
        public      static      FILE_NAMES                      :Array<string>          =
        [
            MfgSound.SOUND_BG_TD2,
        ];
    }
