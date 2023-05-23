import { useState, useEffect } from 'react';
import styles from '@/app/page.module.css';
import Image from 'next/image';


import song1 from './SAN_DIMAS_OASIS.mp3';
import song2 from './I_Knew_a_Guy.mp3';
import song3 from './Youll_Never_Work_In_This_Town_Again.mp3';

function Jukebox() {
    const [selectedSong, setSelectedSong] = useState(null);
    const [audioElement, setAudioElement] = useState(null);

    const songs = [
        {
            title: 'BABES FOREVER',
            cover: 'https://i.imgur.com/uJJzhWY.jpg',
            audio: song1,
        },
        {
            title: 'I Knew A Guy',
            cover: 'https://i.imgur.com/onpFhUm.jpg',
            audio: song2,
        },
        {
            title: "You'll Never Work In This Town Forever",
            cover: 'https://i.imgur.com/cYblfwc.jpg',
            audio: song3,
        },
    ];

    const handleSongSelect = (song) => {
        setSelectedSong(song);
    };

    useEffect(() => {
        if (selectedSong && audioElement) {
            audioElement.load();
            audioElement.play();
        } else if (audioElement) {
            audioElement.pause();
        }
    }, [selectedSong, audioElement]);

    return (
        <div className={styles.jukebox}>
            <h3>Jukebox</h3>
            <button onClick={() => setSelectedSong(null)}>Close</button>
            <div className={styles.songList}>
                {songs.map((song, index) => (
                    <div
                        key={index}
                        className={`${styles.song} ${
                            selectedSong === song ? styles.selected : ''
                        }`}
                        onClick={() => handleSongSelect(song)}
                    >
                        <Image src={song.cover} alt={song.title} width={100} height={100} />
                        <p>{song.title}</p>
                    </div>
                ))}
            </div>
            {selectedSong && (
                <div className={styles.songDetails}>
                    <h4>{selectedSong.title}</h4>
                    <Image src={selectedSong.cover} alt={selectedSong.title} width={300} height={300} />
                    {typeof window !== 'undefined' && (
                        <audio controls ref={(element) => setAudioElement(element)}>
                            <source src={selectedSong.audio} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    )}
                </div>
            )}
        </div>
    );
}

export default Jukebox;
