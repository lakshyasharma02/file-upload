import React from 'react'
import classes from './form.module.css'

const form = () => {
    return (
        <div className={classes.Form}>
            {/* <form action="/upload" method="POST">
                <div className="file-field input-field">
                    <div className="btn">
                        <span>File</span>
                        <input type="file" name="file" />
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" />
                    </div>
                </div>
                <input type="submit" value="upload" className="btn" />
            </form> */}
            <form  
                id='uploadForm' 
                action='/upload' 
                method='post' 
                encType="multipart/form-data">
                <div className={classes.inputs}>
                    <input type="file" name="file" />
                    <input type='submit' value='Upload!' className="btn" />
                </div>
            </form> 
        </div>    
    )
}

export default form

