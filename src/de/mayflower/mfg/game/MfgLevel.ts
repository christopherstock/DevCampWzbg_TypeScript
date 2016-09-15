
    /*****************************************************************************
    *   Represents a level setup.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *****************************************************************************/
    class MfgLevel
    {
        /** The player instance. */
        public                      player          :MfgPlayer                          = null;

        /** All obstacles the level consists of. */
        public                      obstacles       :Array<MfgObstacle>                 = null;

        /** The level width. */
        public                      width           :number                             = 0;

        /** The level height. */
        public                      height          :number                             = 0;

        /*****************************************************************************
        *   Creates a new level instance.
        *****************************************************************************/
        public constructor()
        {
            //set level bounds
            this.width  = MfgSetting.LEVEL_WIDTH;
            this.height = MfgSetting.LEVEL_HEIGHT;

            //create walls
            this.createObstacles();

            //create player instance
            this.createPlayer();
        }

        /*****************************************************************************
        *   Inits all walls for this level.
        *****************************************************************************/
        private createObstacles()
        {
            this.obstacles = [

                new MfgObstacle( 0,    0,     Mfg.game.imageSystem.getImage( MfgImage.BG_1                  ), false, null                      ),
                new MfgObstacle( 0,    904,   Mfg.game.imageSystem.getImage( MfgImage.BG_1                  ), false, null                      ),
                new MfgObstacle( 0,    1808,  Mfg.game.imageSystem.getImage( MfgImage.BG_1                  ), false, null                      ),
                new MfgObstacle( 0,    2712,  Mfg.game.imageSystem.getImage( MfgImage.BG_1                  ), false, null                      ),
                new MfgObstacle( 0,    3616,  Mfg.game.imageSystem.getImage( MfgImage.BG_1                  ), false, null                      ),
                new MfgObstacle( 0,    4520,  Mfg.game.imageSystem.getImage( MfgImage.BG_1                  ), false, null                      ),
                new MfgObstacle( 0,    5424,  Mfg.game.imageSystem.getImage( MfgImage.BG_1                  ), false, null                      ),
                new MfgObstacle( 0,    6328,  Mfg.game.imageSystem.getImage( MfgImage.BG_1                  ), false, null                      ),
                new MfgObstacle( 0,    7232,  Mfg.game.imageSystem.getImage( MfgImage.BG_1                  ), false, null                      ),
                new MfgObstacle( 0,    8136,  Mfg.game.imageSystem.getImage( MfgImage.BG_1                  ), false, null                      ),
                new MfgObstacle( 0,    9040,  Mfg.game.imageSystem.getImage( MfgImage.BG_1                  ), false, null                      ),
                new MfgObstacle( 0,    9944,  Mfg.game.imageSystem.getImage( MfgImage.BG_1                  ), false, null                      ),
                new MfgObstacle( 0,    10848, Mfg.game.imageSystem.getImage( MfgImage.BG_1                  ), false, null                      ),
                new MfgObstacle( 0,    11752, Mfg.game.imageSystem.getImage( MfgImage.BG_1                  ), false, null                      ),

                new MfgObstacle( 815,  903,   Mfg.game.imageSystem.getImage( MfgImage.DECO_COUNTY_ROAD      ), false, null                      ),
                new MfgObstacle( 1349, 903,   Mfg.game.imageSystem.getImage( MfgImage.DECO_COUNTY_ROAD      ), false, null                      ),
                new MfgObstacle( 1883, 903,   Mfg.game.imageSystem.getImage( MfgImage.DECO_COUNTY_ROAD      ), false, null                      ),
                new MfgObstacle( 0,    903,   Mfg.game.imageSystem.getImage( MfgImage.DECO_COUNTY_ROAD      ), false, null                      ),
                new MfgObstacle( 615,  3150,  Mfg.game.imageSystem.getImage( MfgImage.DECO_COUNTY_ROAD      ), false, null                      ),
                new MfgObstacle( 1149, 3150,  Mfg.game.imageSystem.getImage( MfgImage.DECO_COUNTY_ROAD      ), false, null                      ),
                new MfgObstacle( 1683, 3150,  Mfg.game.imageSystem.getImage( MfgImage.DECO_COUNTY_ROAD      ), false, null                      ),

                new MfgObstacle( 815,  1715,  Mfg.game.imageSystem.getImage( MfgImage.DECO_COUNTY_ROAD      ), false, null                      ),
                new MfgObstacle( 1349, 1715,  Mfg.game.imageSystem.getImage( MfgImage.DECO_COUNTY_ROAD      ), false, null                      ),
                new MfgObstacle( 1883, 1715,  Mfg.game.imageSystem.getImage( MfgImage.DECO_COUNTY_ROAD      ), false, null                      ),

                new MfgObstacle( 740,  2950,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_2       ), true,  null                      ),
                new MfgObstacle( 990,  2950,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_2       ), true,  null                      ),
                new MfgObstacle( 1240, 2950,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_2       ), true,  null                      ),
                new MfgObstacle( 1490, 2950,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_2       ), true,  null                      ),
                new MfgObstacle( 1740, 2950,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_2       ), true,  null                      ),

                new MfgObstacle( 515,  0,     Mfg.game.imageSystem.getImage( MfgImage.DECO_ROAD_STRAIGHT    ), false, null                      ),
                new MfgObstacle( 515,  391,   Mfg.game.imageSystem.getImage( MfgImage.DECO_ROAD_STRAIGHT    ), false, null                      ),
                new MfgObstacle( 515,  782,   Mfg.game.imageSystem.getImage( MfgImage.DECO_ROAD_STRAIGHT    ), false, null                      ),
                new MfgObstacle( 515,  1173,  Mfg.game.imageSystem.getImage( MfgImage.DECO_ROAD_STRAIGHT    ), false, null                      ),
                new MfgObstacle( 515,  1564,  Mfg.game.imageSystem.getImage( MfgImage.DECO_ROAD_STRAIGHT    ), false, null                      ),
                new MfgObstacle( 315,  1955,  Mfg.game.imageSystem.getImage( MfgImage.DECO_ROAD_LEFT        ), false, null                      ),

                new MfgObstacle( 860,  -50,   Mfg.game.imageSystem.getImage( MfgImage.DECO_FIELD_1          ), false, null                      ),
                new MfgObstacle( 860,  380,   Mfg.game.imageSystem.getImage( MfgImage.DECO_FIELD_1          ), false, null                      ),
                new MfgObstacle( 1310, -50,   Mfg.game.imageSystem.getImage( MfgImage.DECO_FIELD_1          ), false, null                      ),
                new MfgObstacle( 1310, 380,   Mfg.game.imageSystem.getImage( MfgImage.DECO_FIELD_1          ), false, null                      ),

                new MfgObstacle( 830,  1000,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_2       ), true,  null                      ),
                new MfgObstacle( 1030, 1000,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_2       ), true,  null                      ),
                new MfgObstacle( 1230, 1000,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_2       ), true,  null                      ),
                new MfgObstacle( 1430, 1000,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_2       ), true,  null                      ),
                new MfgObstacle( 1630, 1000,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_2       ), true,  null                      ),
                new MfgObstacle( 1830, 1000,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_2       ), true,  null                      ),

                new MfgObstacle( 315,  2346,  Mfg.game.imageSystem.getImage( MfgImage.DECO_ROAD_STRAIGHT    ), false, null                      ),
                new MfgObstacle( 315,  2737,  Mfg.game.imageSystem.getImage( MfgImage.DECO_ROAD_STRAIGHT    ), false, null                      ),
                new MfgObstacle( 315,  3128,  Mfg.game.imageSystem.getImage( MfgImage.DECO_ROAD_STRAIGHT    ), false, null                      ),
                new MfgObstacle( 315,  3519,  Mfg.game.imageSystem.getImage( MfgImage.DECO_ROAD_STRAIGHT    ), false, null                      ),
                new MfgObstacle( 315,  3910,  Mfg.game.imageSystem.getImage( MfgImage.DECO_ROAD_STRAIGHT    ), false, null                      ),
                new MfgObstacle( 315,  4251,  Mfg.game.imageSystem.getImage( MfgImage.DECO_ROAD_STRAIGHT    ), false, null                      ),

                new MfgObstacle( 315,  4835,  Mfg.game.imageSystem.getImage( MfgImage.DECO_ROAD_STRAIGHT    ), false, null                      ),
                new MfgObstacle( 315,  5226,  Mfg.game.imageSystem.getImage( MfgImage.DECO_ROAD_STRAIGHT    ), false, null                      ),

                new MfgObstacle( 275,  90,    Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_1       ), true,  null                      ),
                new MfgObstacle( 275,  360,   Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_1       ), true,  null                      ),
                new MfgObstacle( 275,  630,   Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_1       ), true,  null                      ),
                new MfgObstacle( 275,  1050,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_1       ), true,  null                      ),
                new MfgObstacle( 275,  1330,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_1       ), true,  null                      ),
                new MfgObstacle( 275,  1610,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_1       ), true,  null                      ),

                new MfgObstacle( 15,   -50,   Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_1       ), true,  null                      ),
                new MfgObstacle( 15,   220,   Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_1       ), true,  null                      ),
                new MfgObstacle( 15,   490,   Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_1       ), true,  null                      ),
                new MfgObstacle( 15,   1190,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_1       ), true,  null                      ),
                new MfgObstacle( 15,   1470,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_1       ), true,  null                      ),
                new MfgObstacle( 15,   1750,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_1       ), true,  null                      ),
                new MfgObstacle( 140,  2040,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_1       ), true,  null                      ),
                new MfgObstacle( 50,   2350,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_1       ), true,  null                      ),
                new MfgObstacle( 50,   2620,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_1       ), true,  null                      ),
                new MfgObstacle( 50,   2890,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_1       ), true,  null                      ),
                new MfgObstacle( 50,   3160,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_1       ), true,  null                      ),
                new MfgObstacle( 50,   3430,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_1       ), true,  null                      ),
                new MfgObstacle( 50,   3700,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_1       ), true,  null                      ),

                new MfgObstacle( 830,  1450,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_WATER_2      ), true,  null                      ),
                new MfgObstacle( 1350, 1490,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_3       ), true,  null                      ),
                new MfgObstacle( 1550, 1490,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_3       ), true,  null                      ),

                new MfgObstacle( 750,  2230,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_HOUSE_1      ), true,  null                      ),
                new MfgObstacle( 615,  2455,  Mfg.game.imageSystem.getImage( MfgImage.DECO_COUNTY_ROAD      ), false, null                      ),
                new MfgObstacle( 1149, 2455,  Mfg.game.imageSystem.getImage( MfgImage.DECO_COUNTY_ROAD      ), false, null                      ),
                new MfgObstacle( 1683, 2455,  Mfg.game.imageSystem.getImage( MfgImage.DECO_COUNTY_ROAD      ), false, null                      ),

                new MfgObstacle( 1180, 2270,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_3       ), true,  null                      ),
                new MfgObstacle( 1380, 2270,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_3       ), true,  null                      ),
                new MfgObstacle( 1580, 2270,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_3       ), true,  null                      ),
                new MfgObstacle( 1780, 2270,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_3       ), true,  null                      ),

                new MfgObstacle( 780,  2570,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_3       ), true,  null                      ),
                new MfgObstacle( 980,  2570,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_3       ), true,  null                      ),
                new MfgObstacle( 1180, 2570,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_3       ), true,  null                      ),
                new MfgObstacle( 1380, 2570,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_3       ), true,  null                      ),
                new MfgObstacle( 1580, 2570,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_3       ), true,  null                      ),
                new MfgObstacle( 1780, 2570,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_3       ), true,  null                      ),

                new MfgObstacle( 850,  1850,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_6       ), true,  null                      ),
                new MfgObstacle( 1080, 1850,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_6       ), true,  null                      ),
                new MfgObstacle( 1310, 1850,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_6       ), true,  null                      ),
                new MfgObstacle( 1540, 1850,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_6       ), true,  null                      ),
                new MfgObstacle( 1770, 1850,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_6       ), true,  null                      ),

                new MfgObstacle( -709, 3958,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_WATER_1      ), true,  null                      ),
                new MfgObstacle( 615,  3958,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_WATER_1      ), true,  null                      ),
                new MfgObstacle( 1639, 3958,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_WATER_1      ), true,  null                      ),
                new MfgObstacle( 315,  3861,  Mfg.game.imageSystem.getImage( MfgImage.DECO_BRIDGE           ), false, null                      ),

                new MfgObstacle( -250, 4250,  Mfg.game.imageSystem.getImage( MfgImage.DECO_FIELD_1          ), false, null                      ),
                new MfgObstacle( -250, 4720,  Mfg.game.imageSystem.getImage( MfgImage.DECO_FIELD_1          ), false, null                      ),

                new MfgObstacle( 700,  800,   Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_CAR_3        ), true,  MfgDirection.NORTH        ),
                new MfgObstacle( 700,  800,   Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_CAR_1        ), true,  MfgDirection.NORTH        ),
                new MfgObstacle( 560,  900,   Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TRUCK_4      ), true,  MfgDirection.SOUTH        ),
                new MfgObstacle( 360,  2751,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TRUCK_2      ), true,  MfgDirection.SOUTH        ),
                new MfgObstacle( 495,  2285,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_CAR_2        ), true,  MfgDirection.NORTH_EAST   ),
                new MfgObstacle( 360,  2751,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TRUCK_2      ), true,  MfgDirection.SOUTH        ),
                new MfgObstacle( 495,  3150,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TRUCK_3      ), true,  MfgDirection.NORTH        ),
                new MfgObstacle( 495,  3410,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TRUCK_5      ), true,  MfgDirection.NORTH        ),
                new MfgObstacle( 495,  4100,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_CAR_4        ), true,  MfgDirection.NORTH        ),

                new MfgObstacle( 750,  3280,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_4       ), true,  null                      ),
                new MfgObstacle( 950,  3280,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_4       ), true,  null                      ),
                new MfgObstacle( 1150, 3280,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_4       ), true,  null                      ),
                new MfgObstacle( 750,  3400,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_4       ), true,  null                      ),
                new MfgObstacle( 950,  3400,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_4       ), true,  null                      ),
                new MfgObstacle( 1150, 3400,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_4       ), true,  null                      ),
                new MfgObstacle( 750,  3520,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_4       ), true,  null                      ),
                new MfgObstacle( 950,  3520,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_4       ), true,  null                      ),
                new MfgObstacle( 1150, 3520,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_4       ), true,  null                      ),
                new MfgObstacle( 750,  3640,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_4       ), true,  null                      ),
                new MfgObstacle( 950,  3640,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_4       ), true,  null                      ),
                new MfgObstacle( 1150, 3640,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_4       ), true,  null                      ),
                new MfgObstacle( 750,  3780,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_4       ), true,  null                      ),
                new MfgObstacle( 950,  3780,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_4       ), true,  null                      ),
                new MfgObstacle( 1150, 3780,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_TREE_4       ), true,  null                      ),

                new MfgObstacle( 315,  4642,  Mfg.game.imageSystem.getImage( MfgImage.DECO_ROAD_FINISH_LINE ), false, null                      ),
                new MfgObstacle( 650,  4500,  Mfg.game.imageSystem.getImage( MfgImage.OBSTACLE_SIGN_1       ), true,  null                      ),
            ];
        }

        /*****************************************************************************
        *   Inits the player for this level.
        *****************************************************************************/
        private createPlayer()
        {
            var playerImage:HTMLImageElement = Mfg.game.imageSystem.getImage( MfgImage.PLAYER_DEFAULT );
            this.player = new MfgPlayer(
                MfgSetting.PLAYER_STARTUP_X,
                MfgSetting.PLAYER_STARTUP_Y,
                playerImage
            );
        }

        /*****************************************************************************
        *   Draws the level.
        *
        *   @param context The 2D drawing context.
        *   @param camera  The camera context to use for this drawing operation.
        *****************************************************************************/
        public draw( context:CanvasRenderingContext2D, camera:MfgCamera )
        {
            //draw bg
            MfgDrawing.drawImage
            (
                context,
                Mfg.game.imageSystem.getImage( MfgImage.BG_1 ),
                0 - camera.x,
                0 - camera.y
            );

            //draw obstacles
            for (var i:number = 0; i < this.obstacles.length; ++i )
            {
                this.obstacles[ i ].draw( context, camera );
            }

            //draw player
            this.player.draw( context, camera );
        }

        /*****************************************************************************
        *   Renders the current level tick.
        *****************************************************************************/
        public render()
        {
            if ( this.player.crashed || this.player.won ) return;

            this.player.handlePlayerKeys();

            if ( !MfgDebug.DEBUG_ENABLE_FREE_MOVEMENT )
            {
                this.player.clipToLevelBounds();
                this.player.moveDown();

                this.moveAllObstacles();
                this.checkCollision();
            }
        }

        /*****************************************************************************
        *   Moves all obstacles.
        *****************************************************************************/
        private moveAllObstacles()
        {
            for (var i:number = 0; i < this.obstacles.length; ++i )
            {
                if ( this.obstacles[ i ].movingDirection != null )
                {
                    //only if the obstacle is in the current view
                    if ( this.obstacles[ i ].rect.y < Mfg.game.camera.y + Mfg.game.canvas.getHeight() )
                    {
                        this.obstacles[ i ].move();
                    }
                }
            }
        }

        /*****************************************************************************
        *   Checks if the player collides with a wall.
        *****************************************************************************/
        public checkCollision():void
        {
            for (var i:number = 0; i < this.obstacles.length; ++i )
            {
                if (
                        this.obstacles[ i ].collidable
                    &&  this.player.rect.collidesWithRect( this.obstacles[ i ].rect )
                )
                {
                    this.player.colliding = true;
                    this.player.crashed   = true;

                    MfgDebug.log( "Player crashed." );

                    return;
                }
            }

            this.player.colliding = false;
        }
    }
