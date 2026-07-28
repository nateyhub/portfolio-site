import Tag from "./Tag"
import ReactPlayer from 'react-player'
import mindmateVid from '../assets/videos/mindmate.mp4'
import closeSymbol from "../assets/images/symbols/close_button.svg"
import { useEffect, useState } from "react"

export function ModalBackdrop({ handleClose }) {
    return (
        <>
            <div className="modal-backdrop" onClick={() => handleClose()}>
                {/* <Modal handleClose={() => handleClose} /> */}
            </div>
        </>
    )
}

export function Modal({ project, handleClose }) {
    const [fullscreenImage, setFullscreenImage] = useState(false)
    const [selectedMedia, setSelectedMedia] = useState(0)

    if (project.media) {
        project.media.forEach((media) => {
            console.log(media.type)
            console.log(media.src)
        })
    }

    const handleCloseFullscreen = () => {
        setFullscreenImage(false)
    }

    const handleFullscreen = (fs) => {
        setFullscreenImage(fs)
    }


    // handleMediaSelection(2)

    return (
        <>
            {
                fullscreenImage &&
                <div className="fullscreen">
                    <button onClick={handleCloseFullscreen}>
                        <img src={closeSymbol} />
                    </button>
                    <img
                        src={project.media[selectedMedia].src}
                    />
                </div>

            }
            <div className="modal">
                <div className="modal-content">
                    <button onClick={() => handleClose()}>X</button>
                    <div className="modal-gallery">
                        <Gallery media={project.media} selectedMedia={selectedMedia} setSelectedMedia={setSelectedMedia} handleFullScreen={handleFullscreen} />
                    </div>
                    <div className="project-info">
                        <h1>{project.name}</h1>
                        <div className="skills-wrapper">
                            {
                                project.tags.map((t) => {
                                    return (<Tag key={t.text} text={t.text} iconSrc={t.imgSrc} />)
                                })
                            }
                            {/* <Tag text={"Android Studio"} /> */}
                        </div>

                        <div className="paragraphs" dangerouslySetInnerHTML={{ __html: project.desc }}></div>


                    </div>
                </div>
            </div >
        </>
    )
}

function Gallery({ media, handleFullScreen, selectedMedia, setSelectedMedia }) {


    // const [fullscreenImage, setFullscreenImage] = useState(handleFullScreen)

    const handleMediaSelection = (selection) => {
        setSelectedMedia((prev) => prev = selection)
    }

    const handleClickImage = () => {
        handleFullScreen(true)
    }

    useEffect(() => {
        console.log("SELECTION", selectedMedia)
        console.log("MEDIA", media[selectedMedia])
    }, [selectedMedia])

    let i = -1;
    const galleryItems = media.map((m) => {
        i++;
        return <GalleryItem m={m} key={i} index={i} handleClick={handleMediaSelection} isSelected={i === selectedMedia} />
    })

    return (
        <>
            {
                media[selectedMedia] && (
                    media[selectedMedia].type == 'video' ?
                        <ReactPlayer src={media[selectedMedia].src} controls={true} />
                        :
                        <img className="media-img" src={media[selectedMedia].src}
                            onClick={handleClickImage} />
                )
            }
            <div className="gallery-items">
                {galleryItems}
            </div>
        </>
    )
}

function GalleryItem({ m, index, handleClick, isSelected }) {
    console.log(m.src, m.thumb, isSelected)
    return <img src={m.type === 'image' ? m.src : m.thumb} onClick={() => handleClick(index)} className={isSelected ? "selected" : ""} />
}

function fullscreenImage({ img }) {

}