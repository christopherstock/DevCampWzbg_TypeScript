
    /*****************************************************************************
    *   Represents the 2D drawing surface.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *****************************************************************************/
    class MfgCanvas
    {
        /** The HTML canvas tag that can be added to the website's body. */
        private                         iCanvasTag      :HTMLCanvasElement              = null;

        /** The canvas rendering context. */
        private                         iContext        :CanvasRenderingContext2D       = null;

        /*****************************************************************************
        *   Inits the canvas.
        *
        *   @param aTargetWidth  The target width for this canvas to assign.
        *   @param aTargetHeight The target height for this canvas to assign.
        *****************************************************************************/
        public constructor( aTargetWidth:number, aTargetHeight:number )
        {
            //create an HTML canvas element and assign it's dimensions
            this.iCanvasTag         = <HTMLCanvasElement>document.createElement( 'canvas' );
            this.iCanvasTag.width   = aTargetWidth;
            this.iCanvasTag.height  = aTargetHeight;

            //assign paramounts
            this.iContext  = <CanvasRenderingContext2D>this.iCanvasTag.getContext( '2d' );

            //output log message
            MfgDebug.log( "Canvas setup with [" + this.iCanvasTag.width + "]x[" + this.iCanvasTag.height + "]" );
        }

        /*****************************************************************************
        *   Returns the HTML Canvas Tag element.
        *
        *   @return The HTML-canvas-tag.
        *****************************************************************************/
        public getCanvasTag():HTMLCanvasElement
        {
            return this.iCanvasTag;
        }

        /*****************************************************************************
        *   Returns the canvas' 2D drawing context.
        *
        *   @return The drawing context for this canvas.
        *****************************************************************************/
        public getContext():CanvasRenderingContext2D
        {
            return this.iContext;
        }

        /*****************************************************************************
        *   Returns the canvas' width.
        *
        *   @return The width of this canvas in px.
        *****************************************************************************/
        public getWidth():number
        {
            return this.iCanvasTag.width;
        }

        /*****************************************************************************
        *   Returns the canvas' height.
        *
        *   @return The height of this canvas in px.
        *****************************************************************************/
        public getHeight():number
        {
            return this.iCanvasTag.height;
        }
    }
