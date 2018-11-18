import React, { Component } from 'react'
import ReactPlayer from 'react-player'

import Link from 'next/link'
export default () => (
  <div>
    <h1>
      <Link href='/about'><a>About</a></Link>
    </h1>
    <ReactPlayer url='http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' controls />
  </div>
)
