
    /*****************************************************************************
    *   Handles the game logic.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *****************************************************************************/
    class MfgGame
    {
        /** The canvas for all drawing operations. */
        public                          canvas              :MfgCanvas                      = null;
        /** The key system. */
        public                          keySystem           :MfgKeySystem                   = null;
        /** The image loading system. */
        public                          imageSystem         :MfgImageSystem                 = null;
        /** The sound loading system. */
        public                          soundSystem         :MfgSoundSystem                 = null;
        /** The level instance. */
        public                          level               :MfgLevel                       = null;
        /** The player viewport. */
        public                          camera              :MfgCamera                      = null;
        /** The HUD. */
        private                         hud                 :MfgHUD                         = null;

        /*****************************************************************************
        *   Creates a new game logic.
        *****************************************************************************/
        public constructor()
        {
        }

        /*****************************************************************************
        *   Inits this app from scratch.
        *****************************************************************************/
        public init()
        {
            //set document title and acclaim debug console
            document.title = MfgSetting.TITLE;
            MfgDebug.log( MfgSetting.TITLE );

            //init canvas and append it's tag to the HTML page body
            this.canvas = new MfgCanvas
            (
                MfgSetting.CANVAS_WIDTH,
                MfgSetting.CANVAS_HEIGHT
            );
            document.body.appendChild( this.canvas.getCanvasTag() );



            //attach listeners for keys and pointer
            this.keySystem = new MfgKeySystem();

            //load all images
            this.imageSystem = new MfgImageSystem
            (
                MfgImage.FILE_NAMES,
                this.initAfterImagesLoaded
            );
        }

        /*****************************************************************************
        *   Being invoked when all images are loaded,
        *   this method initializes the remaining stuff.
        *****************************************************************************/
        private initAfterImagesLoaded=()=>
        {
            //load all sounds
            this.soundSystem = new MfgSoundSystem(
                MfgSound.FILE_NAMES
            );
            if ( !MfgDebug.DEBUG_DISABLE_SOUNDS )
            {
                this.soundSystem.playSound( MfgSound.SOUND_BG_TD2 );
            }



            //init a new level
            this.level = new MfgLevel();
            this.camera = new MfgCamera();
            this.hud = new MfgHUD();




            //start the main thread
            window.setInterval( this.tick, MfgSetting.THREAD_DELAY );
        };

        /*****************************************************************************
        *   Handles one game tick.
        *****************************************************************************/
        public tick=()=>
        {



            this.hud.fpsMeter.tickStart();



            this.render();
            this.draw();



            this.hud.fpsMeter.tick();

        };

        /*****************************************************************************
        *   Renders the current game scene.
        *****************************************************************************/
        private render()
        {

            this.level.render();

            this.camera.update
            (
                this.level.width,
                this.level.height,
                this.canvas.getWidth(),
                this.canvas.getHeight(),
                this.level.player.rect
            );

        }

        /*****************************************************************************
        *   Draws the current game frame.
        *****************************************************************************/
        private draw()
        {
            //clear canvas
            MfgDrawing.fillRect
            (
                this.canvas.getContext(),
                0,
                0,
                this.canvas.getWidth(),
                this.canvas.getHeight(),
                MfgDrawing.COLOR_WHITE_OPAQUE
            );

            //draw level
            this.level.draw
            (
                this.canvas.getContext(),
                this.camera
            );
        }
    }
