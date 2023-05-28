import { useState, useEffect } from 'react';
import styles from '@/app/page.module.css';
import Image from 'next/image';

function Events() {
    const [selectedEvent, setSelectedEvent] = useState(null);

    const events = [
        {
            title: 'CINEFORUM 31/05',
            cover: 'https://i.imgur.com/xkdFGAd.jpg'
        },
        {
            title: 'CONCERTO PERGOLESI 09/06',
            cover: 'https://i.imgur.com/tSN9aKv.jpg'
        },
    ];

    const handleEventSelect = (event) => {
        setSelectedEvent(event);
    };

    return (
        <div className={styles.jukebox}>
            <h3>Events</h3>
            <button onClick={() => setSelectedEvent(null)}>Close</button>
            <div className={styles.songList}>
                {events.map((event, index) => (
                    <div
                        key={index}
                        className={`${styles.song} ${
                            selectedEvent === event ? styles.selected : ''
                        }`}
                        onClick={() => handleEventSelect(event)}
                    >
                        <Image src={event.cover} alt={event.title} width={100} height={100} />
                        <p>{event.title}</p>
                    </div>
                ))}
            </div>
            {selectedEvent && (
                <div className={styles.songDetails}>
                    <h4>{selectedEvent.title}</h4>
                    <Image src={selectedEvent.cover} alt={selectedEvent.title} width={300} height={600} />
                </div>
            )}
        </div>
    );
}

export default Events;
