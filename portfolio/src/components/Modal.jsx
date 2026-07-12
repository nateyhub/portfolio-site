import Tag from "./Tag"


export function ModalBackdrop({ handleClose }) {
    return (
        <>
            <div className="modal-backdrop" onClick={() => handleClose()}>
                {/* <Modal handleClose={() => handleClose} /> */}
            </div>
        </>
    )
}

export function Modal({ handleClose }) {
    return (
        <div className="modal">
            <div className="modal-content">
                <button onClick={() => handleClose()}>X</button>
                <div className="modal-gallery">
                    <iframe src="https://www.youtube.com/embed/aOiqcToGf5k?si=AiJSn2D98cYzBoxo"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        frameBorder="none"
                        allowFullScreen>
                    </iframe>
                    <div className="gallery-items">
                        <img src={'https://www.nzherald.co.nz/resizer/v2/LP3WYLE76VDNBGRR5X325HVJOM.jpg?auth=b6698cc184563214cf1a39ae5ffe32c3125f4cb879f6c166e6226bb36a269d11&width=576&height=613&quality=70&focal=539%2C242&smart=false'} alt="" />
                        <img src={'https://www.nzherald.co.nz/resizer/v2/LP3WYLE76VDNBGRR5X325HVJOM.jpg?auth=b6698cc184563214cf1a39ae5ffe32c3125f4cb879f6c166e6226bb36a269d11&width=576&height=613&quality=70&focal=539%2C242&smart=false'} alt="" />
                        <img src={'https://www.nzherald.co.nz/resizer/v2/LP3WYLE76VDNBGRR5X325HVJOM.jpg?auth=b6698cc184563214cf1a39ae5ffe32c3125f4cb879f6c166e6226bb36a269d11&width=576&height=613&quality=70&focal=539%2C242&smart=false'} alt="" />
                        <img src={'https://www.nzherald.co.nz/resizer/v2/LP3WYLE76VDNBGRR5X325HVJOM.jpg?auth=b6698cc184563214cf1a39ae5ffe32c3125f4cb879f6c166e6226bb36a269d11&width=576&height=613&quality=70&focal=539%2C242&smart=false'} alt="" />
                        <img src={'https://www.nzherald.co.nz/resizer/v2/LP3WYLE76VDNBGRR5X325HVJOM.jpg?auth=b6698cc184563214cf1a39ae5ffe32c3125f4cb879f6c166e6226bb36a269d11&width=576&height=613&quality=70&focal=539%2C242&smart=false'} alt="" />
                        <img src={'https://www.nzherald.co.nz/resizer/v2/LP3WYLE76VDNBGRR5X325HVJOM.jpg?auth=b6698cc184563214cf1a39ae5ffe32c3125f4cb879f6c166e6226bb36a269d11&width=576&height=613&quality=70&focal=539%2C242&smart=false'} alt="" />
                        <img src={'https://www.nzherald.co.nz/resizer/v2/LP3WYLE76VDNBGRR5X325HVJOM.jpg?auth=b6698cc184563214cf1a39ae5ffe32c3125f4cb879f6c166e6226bb36a269d11&width=576&height=613&quality=70&focal=539%2C242&smart=false'} alt="" />
                    </div>
                </div>
                <div className="project-info">
                    <h1>Modal heading</h1>
                    <div className="skills-wrapper">
                        <Tag text={"Android Studio"} />
                    </div>
                    <p>Hello this is some information</p>
                </div>
            </div>
        </div>
    )
}