
    /*****************************************************************************
    *   Manages the camera that calculates the visible area for the user.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *****************************************************************************/
    class MfgCamera
    {
        /** Current horizontal offset. */
        public              x                       :number                 = 0;

        /** Current vertical offset. */
        public              y                       :number                 = 0;

        /*****************************************************************************
        *   Constructs a new camera.
        *****************************************************************************/
        public constructor()
        {
            this.x = 0;
            this.y = 0;
        }

        /*****************************************************************************
        *   Updates the camera by reassigning the horizontal and vertical offset.
        *
        *   @param levelWidth   The width  of the surrounding level.
        *   @param levelHeight  The height of the surrounding level.
        *   @param canvasWidth  The width  of the 2D rendering context.
        *   @param canvasHeight The height of the 2D rendering context.
        *   @param subject      The rectangle to center the camera onto.
        *****************************************************************************/
        public update
        (
            levelWidth:number,
            levelHeight:number,
            canvasWidth:number,
            canvasHeight:number,
            subject:MfgRect2D
        )
        {
            //calculate scroll-x-offset so camera is centered to player
            this.x = subject.x - canvasWidth / 2 + subject.width / 2;
            //clip camera-x to level bounds
            if ( this.x < 0                        ) this.x = 0;
            if ( this.x > levelWidth - canvasWidth ) this.x = levelWidth - canvasWidth;

            //calculate scroll-y-offset so camera is centered to player
            this.y = subject.y - MfgSetting.PLAYER_OFFSET_TOP; // - canvasHeight + subject.height;
            //clip camera-y to level bounds
            if ( this.y < 0                          ) this.y = 0;
            if ( this.y > levelHeight - canvasHeight ) this.y = levelHeight - canvasHeight;
        }
    }
