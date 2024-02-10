import  { useState } from 'react'
export default function Home() {
  const [currActive , setCurrActive] = useState() ; 

  return (
    <div className='home-box' >
        <div className='upper-box' >
            <div className='content-box' >
              <h1>Unliimited Movies, TV Shows, and more</h1>
              <h3>Find the latest and greatest Movies and Tv shows available on Movie Net </h3>
              <div>
                <button>Get Started</button>
                <button>Show Plans</button>
              </div>
            </div>
        </div>

        <div>
          <h1>Movies</h1>
          <div>
            <ul>
              <li>Action</li>
              <li>Adventure</li>
              <li>Animation</li>
              <li>Comedy</li>
              <li>Horror</li>
              <li>Thriller</li>
            </ul>
          </div>

        </div>
    </div>
  )
}
