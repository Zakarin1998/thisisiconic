"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Slider from './Slider';
import Jukebox from './Jukebox';
import Events from './Events';
import Contact from './Contact';
import { Analytics } from '@vercel/analytics/react';
import { MusicNote, Event } from '@mui/icons-material';
import styles from './page.module.css';

function Page() {
    const data = [
        'https://i1.sndcdn.com/artworks-000528858486-h4r3ui-t500x500.jpg',
        'https://i1.sndcdn.com/artworks-000189016510-64nqy2-t500x500.jpg',
    ];

    
    const data2 = [
        'https://i.imgur.com/Knetryd.jpg',
        'https://i.imgur.com/QlcTJf0.jpeg',
    ];

    const [showJukebox, setShowJukebox] = useState(false);
    const [showEvent, setShowEvent] = useState(false);

    const handleJukeboxClick = () => {
        setShowJukebox(true);
    };

    const handleEventClick = () => {
        setShowEvent(true);
    };

    return (
        <div className={styles.main}>
            <header className={styles.body}>
                <h1 className={styles.title}>THIS IS ICONIC</h1>
                <p className={styles.description}>
                    A collective of artists and developers passionate about urban style, art, and culture.
                </p>
                <Slider />
                <span></span>
                <p className={styles.albumTitle}>
                    <a href="https://ogrtorino.it/updates/ogr-you-young-adults-2018-highlights">OGR Live</a>
                </p>
            </header>

            {showEvent ? (
                <Events />
            ) : (
                <button className={styles.button} onClick={handleEventClick}>
                    <Event className={styles.icon} />
                    Events
                </button>
            )}

            <main className={styles.main}>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>YOWELI</h2>
                    <p className={styles.sectionDescription}>Listen to his deep punchlines on Soundcloud.</p>
                    <div className={styles.albums}>
                        {data.map((imageUrl, index) => (
                            <div className={styles.album} key={index}>
                                <a href="https://soundcloud.com/jtheamphibian/sets/ghetto-jukebox">
                                    <Image src={imageUrl} alt="Album Cover" width={500} height={500} />
                                </a>
                                <p className={styles.albumTitle}>
                                    <a href="https://soundcloud.com/jtheamphibian/sets/ghetto-jukebox">Yoweli</a>
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>MAINE</h2>
                    <p className={styles.sectionDescription}>New EP Solo out now on Spotify!</p>
                    <div className={styles.albums}>
                        {data2.map((imageUrl, index) => (
                            <div className={styles.album} key={index}>
                                <a href="https://open.spotify.com/track/4Pv2yX4XYevPPp57hrQrcD?si=1be98799e62547c0">
                                    <Image src={imageUrl} alt="Album Cover" width={500} height={500} />
                                </a>
                                <p className={styles.albumTitle}>
                                    <a href="https://open.spotify.com/track/4Pv2yX4XYevPPp57hrQrcD?si=1be98799e62547c0">Maine</a>
                                </p>
                            </div>
                        ))}
                    </div>
                </section>        

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>DUE LIBRI</h2>
                    <p className={styles.sectionDescription}>
                        Francesco and Massimiliano's writings and reviews about cinema, music, love, and much more.
                    </p>
                    <div className={styles.albums}>
                        <div className={styles.album}>
                            <a href="https://duelibri.home.blog">
                                <Image src="https://i.imgur.com/xZsRfMj.png" alt="Due Libri" width={500} height={500} />
                            </a>
                            <p className={styles.albumTitle}>
                                <a href="https://duelibri.home.blog">Due Libri</a>
                            </p>
                        </div>
                    </div>
                </section>

                <span></span>

                {showJukebox ? (
                    <Jukebox />
                ) : (
                    <button className={styles.button} onClick={handleJukeboxClick}>
                        <MusicNote className={styles.icon} />
                        Jukebox
                    </button>
                )}
            </main>

            <Contact />
            <Analytics />
        </div>
    );
}

export default Page;
