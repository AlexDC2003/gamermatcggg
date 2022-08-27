import React from 'react'

import { Helmet } from 'react-helmet'

import './cash-matches.css'

const CashMatches = (props) => {
  return (
    <div className="cash-matches-container">
      <Helmet>
        <title>Cash-Matches - Gamermatch</title>
        <meta property="og:title" content="Cash-Matches - Gamermatch" />
      </Helmet>
    </div>
  )
}

export default CashMatches
