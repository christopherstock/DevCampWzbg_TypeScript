
    /*****************************************************************************
    *   A rectangular in 2D space.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *****************************************************************************/
    class MfgRect2D
    {
        /** The left coordinate. */
        public              x               :number                     = 0;

        /** The top coordinate. */
        public              y               :number                     = 0;

        /** The horizontal dimension. */
        public              width           :number                     = 0;

        /** The vertical dimension. */
        public              height          :number                     = 0;

        /*****************************************************************************
        *   Constructs a new rectangular in 2D space.
        *
        *   @param x      Left coordinate.
        *   @param y      Top coordinate.
        *   @param width  Horizontal dimension.
        *   @param height Vertical dimension.
        *****************************************************************************/
        public constructor( x:number, y:number, width:number, height:number )
        {
            this.x      = x;
            this.y      = y;
            this.width  = width;
            this.height = height;
        }

        /*****************************************************************************
        *   Checks if the given rect intersects this rect.
        *
        *   @param  rect The rect to check for intersection.
        *   @return      <code>true</code> if the rects collide.
        *                Otherwise <code>false</code>.
        *****************************************************************************/
        public collidesWithRect( rect:MfgRect2D ):boolean
        {
            return (
                    this.x                < rect.x + rect.width
                &&  this.x  + this.width  > rect.x
                &&  this.y                < rect.y + rect.height
                &&  this.y  + this.height > rect.y
            );
        }
    }
