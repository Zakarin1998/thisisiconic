import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

function Events() {
    const [selectedEvent, setSelectedEvent] = useState(null);

    const events = [
        {
            title: 'CINEFORUM 31/05',
            cover: 'https://i.imgur.com/xkdFGAd.jpg',
        },
        {
            title: 'CONCERTO PERGOLESI 09/06',
            cover: 'https://i.imgur.com/tSN9aKv.jpg',
        },
    ];

    const handleEventSelect = (event) => {
        setSelectedEvent(event);
    };

    const handleClose = () => {
        setSelectedEvent(null);
    };

    return (
        <div className={styles.pageContainer}>
            <h3>Events</h3>
            {selectedEvent && (
                <div className={styles.eventContainer}>
                    <div className={styles.eventContent}>
                        <h4 className={styles.eventTitle}>{selectedEvent.title}</h4>
                        <Image
                            src={selectedEvent.cover}
                            alt={selectedEvent.title}
                            width={640}
                            height={320}
                        />
                        <button className={styles.closeButton} onClick={handleClose}>
                            Close
                        </button>
                    </div>
                </div>
            )}
            <div className={styles.eventList}>
                {events.map((event, index) => (
                    <div
                        key={index}
                        className={`${styles.event} ${
                            selectedEvent === event ? styles.selected : ''
                        }`}
                        onClick={() => handleEventSelect(event)}
                    >
                        <Image src={event.cover} alt={event.title} width={100} height={100} />
                        <p>{event.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Events;
