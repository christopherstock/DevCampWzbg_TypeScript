
    /*****************************************************************************
    *   All adjustments and balancings for the application.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *****************************************************************************/
    class MfgSetting
    {
        /** The application's title. */
        public      static      TITLE                                       :string             = "HTML5 TypeScript primer, (c) 2016 Mayflower GmbH, v. 1.0";

        /** The desired canvas width. */
        public      static      CANVAS_WIDTH                                :number             = 900;
        /** The desired canvas height. */
        public      static      CANVAS_HEIGHT                               :number             = 600;

        /** The delay between each thread tick in milliseconds. */
        public      static      THREAD_DELAY                                :number             = 10;

        /** The desired level width. */
        public      static      LEVEL_WIDTH                                 :number             = 2000;
        /** The desired level height. */
        public      static      LEVEL_HEIGHT                                :number             = 5000;

        /** The player's top offset from screen. */
        public      static      PLAYER_OFFSET_TOP                           :number             = 20;
        /** The player's startup position X. */
        public      static      PLAYER_STARTUP_X                            :number             = 565;
        /** The player's startup position Y. */
        public      static      PLAYER_STARTUP_Y                            :number             = MfgSetting.PLAYER_OFFSET_TOP;
        /** The player's horizontal movement speed in pixels per tick. */
        public      static      PLAYER_SPEED_MOVE_X                         :number             = 2;
        /** The player's vertical movement speed in pixels per tick. */
        public      static      PLAYER_SPEED_MOVE_Y                         :number             = 2;

        /** The obstacle's moving speed for horizontal directions. */
        public      static      OBSTACLE_SPEED_MOVE_X                      :number             = 0.25;
        /** The obstacle's moving speed for vertical directions. */
        public      static      OBSTACLE_SPEED_MOVE_Y                      :number             = 0.5;

        /** The relative path where all images the app makes use of reside. */
        public      static      PATH_IMAGE                                  :string             = "res/image/";
        /** The relative path where all images the app makes use of reside. */
        public      static      PATH_SOUND                                  :string             = "res/sound/";

        /** The width of the preloading gauge. */
        public      static      PRELOADER_WIDTH                             :number             = 200;
        /** The height of the preloading gauge. */
        public      static      PRELOADER_HEIGHT                            :number             = 15;
    }
