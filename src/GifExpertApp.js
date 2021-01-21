import React from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

const GifExpertApp = props => {

    const [categories, setCategories] = React.useState(["one punch"])

    // const handleAdd = () => {
    //     setCategories(cats => [ "hunterXhunter",...cats])
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            
            <AddCategory setCategories={setCategories} />
            <hr />
            {/* <button onClick={handleAdd}>add</button> */}
            <ul>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ul>
        </>
    )
}



export default GifExpertApp

