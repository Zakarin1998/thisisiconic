"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Slider from './Slider';
import Jukebox from './Jukebox';
import Events from './Events';
import Contact from './Contact';
import RotatingCube from './RotatingCube'; // Import the RotatingCube component
import { Analytics } from '@vercel/analytics/react';
import { MusicNote, Event } from '@mui/icons-material';
import styles from './page.module.css';

function Page() {
    // Add more objects for additional albums if needed
    const data = [
        {
            imageUrl: 'https://i1.sndcdn.com/artworks-000528858486-h4r3ui-t500x500.jpg',
            albumLink: 'https://soundcloud.com/jtheamphibian/sets/ghetto-jukebox',
        },
        {
            imageUrl: 'https://i1.sndcdn.com/artworks-000189016510-64nqy2-t500x500.jpg',
            albumLink: 'https://soundcloud.com/jtheamphibian/sets/per-quando-sono-giu',
        },
        // Add more objects for additional albums if needed
    ];

    
    const data2 = [
        {
            imageUrl: 'https://i.imgur.com/Knetryd.jpg',
            albumLink: 'https://open.spotify.com/intl-it/track/34oGKxhWDLsk23ENTZHWrN',
        },
        {
            imageUrl: 'https://i.imgur.com/QlcTJf0.jpeg',
            albumLink: 'https://open.spotify.com/intl-it/album/56ctEJiaRo4rUKTtR22Gw3',
        },
        {
            imageUrl: 'https://i.imgur.com/Pl1SBb5.jpeg',
            albumLink: 'https://open.spotify.com/intl-it/track/4pBMFtuMQhQhOsZrIz0y8a?si=196e6ac4631f46cb'
        },
    ];

    const data3 = [
        {
            imageUrl: 'https://i.imgur.com/Knetryd.jpg',
            albumLink: 'https://open.spotify.com/intl-it/track/0mmXpWp0ESNFDPaM9RofoR',
        },
        {
            imageUrl: 'https://i.imgur.com/QlcTJf0.jpeg',
            albumLink: 'https://open.spotify.com/intl-it/album/5Cs9IfJBpxfQfexOQHNpAG',
        },

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
                <h1>THIS IS ICONIC</h1>
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
            <!--YOWELI-->
            <main className={styles.main}>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>YOWELI</h2>
                    <p className={styles.sectionDescription}>Listen to his deep punchlines on Soundcloud.</p>
                    <div className={styles.albums}>
                        {data.map((album, index) => (
                            <div className={styles.album} key={index}>
                                <a href={album.albumLink}>
                                    <Image src={album.imageUrl} alt="Album Cover" width={500} height={500} />
                                </a>
                                <p className={styles.albumTitle}>
                                    <a href={album.albumLink}>View Album</a>
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
                <!--MAINE-->
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>MAINE</h2>
                    <p className={styles.sectionDescription}>New EP Solo out now on Spotify!</p>
                    <div className={styles.albums}>
                        {data2.map((album, index) => (
                            <div className={styles.album} key={index}>
                                <a href={album.albumLink}>
                                    <Image src={album.imageUrl} alt="Album Cover" width={500} height={500} />
                                </a>
                                <p className={styles.albumTitle}>
                                    <a href={album.albumLink}>View Album</a>
                                </p>
                            </div>
                        ))}
                    </div>
                </section>        
                <!--DUE LIBRI-->
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>DUE LIBRI</h2>
                    <p className={styles.sectionDescription}>
                        Francesco and Massimiliano's writings and reviews about cinema, music, love, and much more.
                    </p>
                    <div className={styles.albums}>
                        <div className={styles.album}>
                            <a href="https://duelibri.home.blog">
                                <Image src="https://i.imgur.com/xZsRfMj.png" alt="Due Libri" width={450} height={450} />
                            </a>
                            <p className={styles.albumTitle}>
                                <a href="https://duelibri.home.blog">Due Libri</a>
                            </p>
                        </div>
                    </div>
                </section>
                <!--EL MALDITO-->
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>EL MALDITO</h2>
                    <p className={styles.sectionDescription}>Gringo ti offre un Brindisi</p>
                    <div className={styles.albums}>
                        {data2.map((album, index) => (
                            <div className={styles.album} key={index}>
                                <a href={album.albumLink}>
                                    <Image src={album.imageUrl} alt="Album Cover" width={500} height={500} />
                                </a>
                                <p className={styles.albumTitle}>
                                    <a href={album.albumLink}>View Album</a>
                                </p>
                            </div>
                        ))}
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
