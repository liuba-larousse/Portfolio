import React from 'react'

import s from '../css/PDFViewerStyles.module.scss'

export default function PDFViewer() {
    return (
        <div className={s.container}>
            <iframe
                src="https://www.keepandshare.com/doc29/113399/liubovkapitulskayadevcv-pdf-44k?ifr=y&da=y"
                width="900"
                height="700"
                scrolling="yes"
                frameborder="1"
            ></iframe>
        </div>
    )
}
