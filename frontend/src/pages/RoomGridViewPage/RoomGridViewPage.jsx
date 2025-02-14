import './RoomGridViewPage.css'
import RoomGridViewHeader from './RoomGridViewHeader';
import RoomGridViewCard from './RoomGridViewCard';
import { useState } from 'react';
import data from '../../../spec/data.json'

const RoomGridViewPage = () => {

    const [search, setSearch] = useState('')

    const filteredData = data.filter(building => {
        const name = building.name.trim()
        return name.toLowerCase().includes(search.toLowerCase())
    })

    return ( 
        <main className='room-grid-view-page' >
            <RoomGridViewHeader search={search} setSearch={setSearch}/>
                <section className="room-grid-view-page-grid">
                    {filteredData?.length ? (
                        filteredData.map((building, index) => (
                        <RoomGridViewCard
                            key={index}
                            roomData={building}
                        />
                    ))) : (
                        <p className='no-rooms-found-text'>No rooms found!</p>
                    )}
                </section>
        </main>
     );
}
 
export default RoomGridViewPage;