import React from 'react'
import { Route } from 'react-router-dom'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Lgoin />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router