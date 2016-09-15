
    /*****************************************************************************
    *   Specifies all different images being used in the game.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *****************************************************************************/
    class MfgImage
    {
        /** The image for the 'player default'. */
        public      static      PLAYER_DEFAULT          :string                 = MfgSetting.PATH_IMAGE + "player/default.png";
        /** The image for the 'player crashed'. */
        public      static      PLAYER_CRASHED          :string                 = MfgSetting.PATH_IMAGE + "player/crashed.png";

        /** The image for the background. */
        public      static      BG_1                    :string                 = MfgSetting.PATH_IMAGE + "bg/bg1.jpg";

        /** The image for the deco 'road straight'. */
        public      static      DECO_ROAD_STRAIGHT      :string                 = MfgSetting.PATH_IMAGE + "deco/roadStraight.png";
        /** The image for the deco 'road left'. */
        public      static      DECO_ROAD_LEFT          :string                 = MfgSetting.PATH_IMAGE + "deco/roadLeft.png";
        /** The image for the deco 'road right'. */
        public      static      DECO_ROAD_RIGHT         :string                 = MfgSetting.PATH_IMAGE + "deco/roadRight.png";
        /** The image for the deco 'finish line'. */
        public      static      DECO_ROAD_FINISH_LINE   :string                 = MfgSetting.PATH_IMAGE + "deco/finishLine.png";
        /** The image for the deco 'bridge'. */
        public      static      DECO_BRIDGE             :string                 = MfgSetting.PATH_IMAGE + "deco/bridge.png";
        /** The image for the deco 'field 1'. */
        public      static      DECO_FIELD_1            :string                 = MfgSetting.PATH_IMAGE + "deco/field1.png";
        /** The image for the deco 'country road'. */
        public      static      DECO_COUNTY_ROAD        :string                 = MfgSetting.PATH_IMAGE + "deco/countryRoad.png";

        /** The image for the obstacle 'water 1'. */
        public      static      OBSTACLE_WATER_1        :string                 = MfgSetting.PATH_IMAGE + "obstacle/water1.png";
        /** The image for the obstacle 'water 2'. */
        public      static      OBSTACLE_WATER_2        :string                 = MfgSetting.PATH_IMAGE + "obstacle/water2.png";

        /** The image for the obstacle 'tree 1'. */
        public      static      OBSTACLE_TREE_1         :string                 = MfgSetting.PATH_IMAGE + "obstacle/tree1.png";
        /** The image for the obstacle 'tree 2'. */
        public      static      OBSTACLE_TREE_2         :string                 = MfgSetting.PATH_IMAGE + "obstacle/tree2.png";
        /** The image for the obstacle 'tree 3'. */
        public      static      OBSTACLE_TREE_3         :string                 = MfgSetting.PATH_IMAGE + "obstacle/tree3.png";
        /** The image for the obstacle 'tree 4'. */
        public      static      OBSTACLE_TREE_4         :string                 = MfgSetting.PATH_IMAGE + "obstacle/tree4.png";
        /** The image for the obstacle 'tree 5'. */
        public      static      OBSTACLE_TREE_5         :string                 = MfgSetting.PATH_IMAGE + "obstacle/tree5.png";
        /** The image for the obstacle 'tree 6'. */
        public      static      OBSTACLE_TREE_6         :string                 = MfgSetting.PATH_IMAGE + "obstacle/tree6.png";
        /** The image for the obstacle 'tree 7'. */
        public      static      OBSTACLE_TREE_7         :string                 = MfgSetting.PATH_IMAGE + "obstacle/tree7.png";
        /** The image for the obstacle 'tree 8'. */
        public      static      OBSTACLE_TREE_8         :string                 = MfgSetting.PATH_IMAGE + "obstacle/tree8.png";
        /** The image for the obstacle 'tree 9'. */
        public      static      OBSTACLE_TREE_9         :string                 = MfgSetting.PATH_IMAGE + "obstacle/tree9.png";

        /** The image for the obstacle 'car 1'. */
        public      static      OBSTACLE_CAR_1          :string                 = MfgSetting.PATH_IMAGE + "obstacle/car1.png";
        /** The image for the obstacle 'car 2'. */
        public      static      OBSTACLE_CAR_2          :string                 = MfgSetting.PATH_IMAGE + "obstacle/car2.png";
        /** The image for the obstacle 'car 3'. */
        public      static      OBSTACLE_CAR_3          :string                 = MfgSetting.PATH_IMAGE + "obstacle/car3.png";
        /** The image for the obstacle 'car 4'. */
        public      static      OBSTACLE_CAR_4          :string                 = MfgSetting.PATH_IMAGE + "obstacle/car4.png";
        /** The image for the obstacle 'truck 1'. */
        public      static      OBSTACLE_TRUCK_1        :string                 = MfgSetting.PATH_IMAGE + "obstacle/truck1.png";
        /** The image for the obstacle 'truck 2'. */
        public      static      OBSTACLE_TRUCK_2        :string                 = MfgSetting.PATH_IMAGE + "obstacle/truck2.png";
        /** The image for the obstacle 'truck 3'. */
        public      static      OBSTACLE_TRUCK_3        :string                 = MfgSetting.PATH_IMAGE + "obstacle/truck3.png";
        /** The image for the obstacle 'truck 4'. */
        public      static      OBSTACLE_TRUCK_4        :string                 = MfgSetting.PATH_IMAGE + "obstacle/truck4.png";
        /** The image for the obstacle 'truck 5'. */
        public      static      OBSTACLE_TRUCK_5        :string                 = MfgSetting.PATH_IMAGE + "obstacle/truck5.png";

        /** The image for the obstacle 'house 1'. */
        public      static      OBSTACLE_HOUSE_1        :string                 = MfgSetting.PATH_IMAGE + "obstacle/house1.png";

        /** The image for the obstacle 'sign 1'. */
        public      static      OBSTACLE_SIGN_1         :string                 = MfgSetting.PATH_IMAGE + "obstacle/sign1.png";

        /** This array contains all filenames of all images that shall be loaded. */
        public      static      FILE_NAMES              :Array<string>          =
        [
            MfgImage.PLAYER_DEFAULT,
            MfgImage.PLAYER_CRASHED,

            MfgImage.BG_1,

            MfgImage.DECO_ROAD_LEFT,
            MfgImage.DECO_ROAD_RIGHT,
            MfgImage.DECO_ROAD_STRAIGHT,
            MfgImage.DECO_ROAD_FINISH_LINE,
            MfgImage.DECO_BRIDGE,
            MfgImage.DECO_FIELD_1,
            MfgImage.DECO_COUNTY_ROAD,

            MfgImage.OBSTACLE_WATER_1,
            MfgImage.OBSTACLE_WATER_2,

            MfgImage.OBSTACLE_TREE_1,
            MfgImage.OBSTACLE_TREE_2,
            MfgImage.OBSTACLE_TREE_3,
            MfgImage.OBSTACLE_TREE_4,
            MfgImage.OBSTACLE_TREE_5,
            MfgImage.OBSTACLE_TREE_6,
            MfgImage.OBSTACLE_TREE_7,
            MfgImage.OBSTACLE_TREE_8,
            MfgImage.OBSTACLE_TREE_9,

            MfgImage.OBSTACLE_CAR_1,
            MfgImage.OBSTACLE_CAR_2,
            MfgImage.OBSTACLE_CAR_3,
            MfgImage.OBSTACLE_CAR_4,
            MfgImage.OBSTACLE_TRUCK_1,
            MfgImage.OBSTACLE_TRUCK_2,
            MfgImage.OBSTACLE_TRUCK_3,
            MfgImage.OBSTACLE_TRUCK_4,
            MfgImage.OBSTACLE_TRUCK_5,

            MfgImage.OBSTACLE_HOUSE_1,

            MfgImage.OBSTACLE_SIGN_1,
        ];
    }
