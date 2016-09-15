
    /*****************************************************************************
    *   Represents an obstacle.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *****************************************************************************/
    class MfgObstacle
    {
        /** The bounding rectangle. */
        public          rect                        :MfgRect2D                      = null;

        /** The representing image. */
        private         image                       :HTMLImageElement               = null;

        /** Specifies if this obstacle shall cause collision checks to fail. */
        public          collidable                  :boolean                        = false;

        /** Specifies the direction this object should move. */
        public          movingDirection             :MfgDirection                   = null;

        /*****************************************************************************
        *   Creates a new game object.
        *
        *   @param x               Startup position x.
        *   @param y               Startup position y.
        *   @param image           The representing image.
        *   @param collidable      Specifies if this obstacle shall be collidable.
        *   @param movingDirection Specifies the direction to move this obstacle.
        *                          <code>null</code> if this obstacle should not move.
        *****************************************************************************/
        public constructor( x:number, y:number, image:HTMLImageElement, collidable:boolean, movingDirection:MfgDirection )
        {
            this.rect            = new MfgRect2D( x, y, image.width, image.height );
            this.image           = image;
            this.collidable      = collidable;
            this.movingDirection = movingDirection;
        }

        /*****************************************************************************
        *   Draws this sprite for the specified camera context.
        *
        *   @param context The 2D drawing context.
        *   @param camera  The camera context to use for this drawing operation.
        *****************************************************************************/
        public draw( context:CanvasRenderingContext2D, camera:MfgCamera )
        {
            //draw debug rect
            if ( MfgDebug.DEBUG_ENABLE_BLOCKS )
            {
                MfgDrawing.fillRect
                (
                    context,
                    this.rect.x - camera.x,
                    this.rect.y - camera.y,
                    this.rect.width,
                    this.rect.height,
                    MfgDrawing.COLOR_YELLOW_TRANSLUCENT_50
                );
            }

            //draw image
            if ( !MfgDebug.DEBUG_DISABLE_IMAGES )
            {
                MfgDrawing.drawImage
                (
                    context,
                    this.image,
                    this.rect.x - camera.x,
                    this.rect.y - camera.y
                );
            }
        }

        /*****************************************************************************
        *   Moves one tick in the specified direction.
        *****************************************************************************/
        public move()
        {
            switch ( this.movingDirection )
            {
                case MfgDirection.NORTH:
                {
                    this.rect.y -= MfgSetting.OBSTACLE_SPEED_MOVE_Y;
                    break;
                }

                case MfgDirection.NORTH_EAST:
                {
                    this.rect.x += MfgSetting.OBSTACLE_SPEED_MOVE_X;
                    this.rect.y -= MfgSetting.OBSTACLE_SPEED_MOVE_Y;
                    break;
                }

                case MfgDirection.EAST:
                {
                    this.rect.x += MfgSetting.OBSTACLE_SPEED_MOVE_X;
                    break;
                }

                case MfgDirection.SOUTH_EAST:
                {
                    this.rect.x += MfgSetting.OBSTACLE_SPEED_MOVE_X;
                    this.rect.y += MfgSetting.OBSTACLE_SPEED_MOVE_Y;
                    break;
                }

                case MfgDirection.SOUTH:
                {
                    this.rect.y += MfgSetting.OBSTACLE_SPEED_MOVE_Y;
                    break;
                }

                case MfgDirection.SOUTH_WEST:
                {
                    this.rect.x -= MfgSetting.OBSTACLE_SPEED_MOVE_X;
                    this.rect.y += MfgSetting.OBSTACLE_SPEED_MOVE_Y;
                    break;
                }

                case MfgDirection.WEST:
                {
                    this.rect.x -= MfgSetting.OBSTACLE_SPEED_MOVE_X;
                    break;
                }

                case MfgDirection.NORTH_WEST:
                {
                    this.rect.x -= MfgSetting.OBSTACLE_SPEED_MOVE_X;
                    this.rect.y -= MfgSetting.OBSTACLE_SPEED_MOVE_Y;
                    break;
                }
            }
        }
    }
