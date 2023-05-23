"use client"

import styles from './page.module.css';
import React, { useState } from "react";
import Image from 'next/image';
import Slider from "./Slider";
import Jukebox from "./Jukebox";
import Events from "./Events";
import { Analytics } from '@vercel/analytics/react';

function Page() {
    const data = [
        "https://i1.sndcdn.com/artworks-000528858486-h4r3ui-t500x500.jpg",
        "https://i1.sndcdn.com/artworks-000189016510-64nqy2-t500x500.jpg",
    ];

    const [showJukebox, setShowJukebox] = useState(false);

    const handleJukeboxClick = () => {
        setShowJukebox(true);
    };

    const [showEvent, setShowEvent] = useState(false);

    const handleEventClick = () => {
        setShowEvent(true);
    };

    return (
        <div className={styles.main}>
            <head>
                <title className={styles.title}>THIS IS ICONIC</title>
            </head>
            <body className={styles.body}>
            <header className={styles.header}>
                <h1 className={styles.header}>THIS IS ICONIC</h1>
                <p className={styles.description}>A collective of artists and developers passionate about urban street art and culture.</p>

                <Slider/>
                <p className={styles.albumTitle}><a href="https://ogrtorino.it/updates/ogr-you-young-adults-2018-highlights">OGR Live Event</a></p>
            </header>


            {showEvent ? <Events /> : <button className={styles.button} onClick={handleEventClick}>Events</button>}

            <main className={styles.body}>
                <section className={styles.header}>
                    <h2 className={styles.header}>YOWELI</h2>
                    <p className={styles.description}>A rapper known for his deep punchlines.</p>
                    <div className={styles.albums}>
                        <div className={styles.album}>
                            <a href="https://soundcloud.com/jtheamphibian/sets/ghetto-jukebox">
                                <Image src="https://i1.sndcdn.com/artworks-000528858486-h4r3ui-t500x500.jpg" alt="Ghetto Jukebox" width={500} height={500} />
                            </a>
                            <p className={styles.albumTitle}><a href="https://soundcloud.com/jtheamphibian/sets/ghetto-jukebox">Ghetto Jukebox</a></p>
                        </div>
                        <div className={styles.album}>
                            <a href="https://soundcloud.com/jtheamphibian/sets/per-quando-sono-giu">
                                <Image src="https://i1.sndcdn.com/artworks-000189016510-64nqy2-t500x500.jpg" alt="Per Quando sono giù" width={500} height={500} />
                            </a>
                            <p className={styles.albumTitle}><a href="https://soundcloud.com/jtheamphibian/sets/per-quando-sono-giu">Per Quando sono giù</a></p>
                        </div>
                    </div>
                </section>


                <section className={styles.header}>
                    <h2 className={styles.header}>DUE LIBRI</h2>
                    <p className={styles.description}>Francesco and Massimiliano writings and reviews about cinema, music, love and much more</p>
                    <div className={styles.albums}>
                        <div className={styles.album}>
                            <a href="https://duelibri.home.blog/">
                                <Image src="https://i.imgur.com/xZsRfMj.png" alt="Due Libri" width={500} height={500} />
                            </a>
                            <p className={styles.albumTitle}><a href="https://duelibri.home.blog/">Due Libri</a></p>
                        </div>
                    </div>
                </section>
                {showJukebox ? <Jukebox /> : <button className={styles.button} onClick={handleJukeboxClick}>Jukebox</button>}
            </main>
            </body>
            <Analytics />
        </div>
    );
}

export default Page;
