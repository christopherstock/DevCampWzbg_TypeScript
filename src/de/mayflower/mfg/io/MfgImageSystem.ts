
    /*****************************************************************************
    *   Loads and manages all desired images.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *****************************************************************************/
    class MfgImageSystem
    {
        /** All filenames. */
        private                 fileNames           :Array<string>              = [];

        /** Counts the number of successful loaded images. */
        private                 loadedCount         :number                     = 0;

        /** This array contains all loaded {@link HTMLImageElement} objects, indexed by filename. */
        private                 loadedImages        :Array<HTMLImageElement>    = [];

        /** The callback function that is being invoked when all images are loaded. */
        private                 callback            :any                        = null;

        /*****************************************************************************
        *   Creates a new image system.
        *
        *   @param fileNames All filenames to load.
        *   @param callback  The function to invoke when all images are loaded.
        *****************************************************************************/
        constructor( fileNames:Array<string>, callback:any )
        {
            this.fileNames = fileNames;
            this.callback  = callback;

            this.loadImages();
        }

        /*****************************************************************************
        *   Triggers loading all images.
        *****************************************************************************/
        private loadImages()
        {
            //browse all filenames
            for ( var i = 0; i < this.fileNames.length; ++i )
            {
                this.loadedImages[ this.fileNames[ i ] ] = this.loadImage( this.fileNames[ i ] );
            }
        }

        /*****************************************************************************
        *   Loads one single image with the specified filename.
        *
        *   @param  filename The filename of this image to load.
        *   @return          The unloaded image object.
        *****************************************************************************/
        private loadImage( filename:string ):HTMLImageElement
        {
            var img    = new Image();
            img.src    = filename;
            img.onload = this.onImageLoaded;

            return img;
        }

        /*****************************************************************************
        *   This function is invoked each time <b>one</b> image has been fully loaded.
        *****************************************************************************/
        private onImageLoaded=()=>
        {
            ++this.loadedCount;
            MfgDebug.log( "loaded imgage [" + this.loadedCount + "] / [" + this.fileNames.length + "]" );

            if ( this.loadedCount == this.fileNames.length )
            {
                MfgDebug.log( "All images loaded" );

                //invoke callback function when all images are loaded
                this.callback();
            }
        };

        /*****************************************************************************
        *   Delivers the image with the specified filename.
        *
        *   @param  id The filename of the image to return.
        *   @return    The image object with the specified filename.
        *****************************************************************************/
        public getImage( id:string ):HTMLImageElement
        {
            return this.loadedImages[ id ];
        }
    }
