import React, { Component } from 'react';
import Button from '../Button';

import './style.scss';

class ImageUpload extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.handleFiles = this.handleFiles.bind(this);
        this.onRemove = this.onRemove.bind(this);
    }

    onRemove() {
        this.props.setState({
            file: null,
            url: null
        })
    }

    onChange(e) {
        e.preventDefault()
        const file = e.target.files[0];

        this.handleFiles(file);
    }

    handleFiles(file) {
        var reader = new FileReader();

        reader.onloadend = () => {

            var imageUrl = window.URL.createObjectURL(file);
            this.props.setState({
                file: file,
                url: imageUrl
            })
        }

        reader.readAsDataURL(file);
    }

    render() {
        const { url, file } = this.props;

        return (
            <div>
                {file !== null ? <div class="uploadInput_container">
                    <img src={url} alt="" />
                    {/* <p class="uploadInput_container_title">card title</p> */}
                    <div class="uploadInput_container_overlay"></div>
                    <div class="uploadInput_container_button">
                        <div className='uploadInput_container_button_add'>
                            <Button className="addPicBtn" value="UPDATE" />
                        </div>
                        <div className='uploadInput_container_button_delete'>
                            <Button className="deletePicBtn" value="REMOVE" onClick={this.onRemove}/>
                        </div>
                    </div>
                        
                    
                </div>:
                <div className='uploadInput_container_button_box'>
                            <div className='uploadInput_container_button_box_message'>
                            Tap to add an image
                            <input type="file"
                                className="hide_file"
                                onChange={this.onChange}
                                accept="image/*"
                                single
                            />
                            </div>
                        </div>}
                {/* <div className="uploadInput" >
                    
                    <div className={dropClass}
                        // onDrop={this.handleDrop}
                        // onDragOver={this.handleDragOver}
                        // onDragEnter={this.handleDragEnter}
                        // onDragLeave={this.handleDragLeave} 
                        >
                        <div className="inside">
                            <span><label class="custom-file-upload">
                                <input type="file"
                                    onChange={this.onChange}
                                    accept="image/*"
                                    single
                                />
                        Drag & drop or click
                    </label>
                        </span>
                            <div>
                                <i className="material-icons">file_upload</i>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="invalid_input">{this.props.error}</div>
                {/* <div className="imagePreviewContainer">
                    {
                        urls && (urls.map((url, i) => (
                            <div className="previewItem">
                                <div className="imagePreview">
                                    <img className="imagePreview_image" src={url} />

                                </div>
                                <div className="details">
                                    <h6>{files[i].name}</h6>
                                    <div className="details_info">
                                        <div className="details_info_size"> {files[i].size.toLocaleString()} KBs</div>
                                        <div className="details_info_delete"><i className="material-icons"
                                            onClick={() => this.onRemove(i)}>delete</i>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        )))
                    }
                </div> */}
            </div>
        );
    }
}

export default ImageUpload;